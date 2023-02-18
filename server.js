import { spawn } from "cross-spawn";
import express from "express";
import fs from "fs";
import killPort from "kill-port";
import chokidar from "chokidar";

const app = express();

let activeTheme = null;
const nextPort = 3000;
const reactPort = 3008;
let nextAppProcess = null;

const loadConfig = async () => {
	try {
		// Dynamically load the module using the import statement
		console.log("Loading configuration from ./np-config.js");
		const { default: newConfig } = await import(
			`./np-config.js?t=${Date.now()}`
		);

		console.log(newConfig);
		const oldActiveTheme = activeTheme;
		for (const themeName in newConfig.themes) {
			if (newConfig.themes[themeName].active) {
				activeTheme = newConfig.themes[themeName];
				break;
			}
		}
		if (oldActiveTheme !== activeTheme) {
			await restartNextJsServer();
		}
	} catch (e) {
		console.log("Failed to load configuration", e);
	}
};

const restartNextJsServer = async () => {
	try {
		if (nextAppProcess) {
			// Kill the process running on the nextPort
			await killPort(nextPort, "tcp");
			nextAppProcess.kill();
			nextAppProcess = null;
		}
		startNextJsServer();
	} catch (error) {
		console.error(`Failed to restart Next.js server: ${error.message}`);
	}
};

const startNextJsServer = async () => {
	if (activeTheme) {
		nextAppProcess = spawn("npm", ["run", "dev"], {
			cwd: activeTheme.nextAppDir,
			stdio: ["inherit", "pipe", "pipe"],
		});

		nextAppProcess.stdout.on("data", (data) => {
			console.log(`Next.js server stdout: ${data}`);
			if (data.includes("compiled client and server successfully")) {
				console.log("Next.js server started.");
			}
		});

		nextAppProcess.stderr.on("data", (data) => {
			console.log(`Next.js server stderr: ${data}`);
		});

		nextAppProcess.on("exit", (code) => {
			console.log(`Next.js server exited with code ${code}`);
			nextAppProcess = null;
		});

		app.use(
			activeTheme.nextAppPath,
			express.static(activeTheme.nextAppDir)
		);
		console.log(`Next.js server starting...`);
	}
};

loadConfig();

chokidar.watch("./np-config.js").on("change", (path) => {
	console.log(`Changed: ${path}`);
	loadConfig();
});

const startReactServer = async () => {
	const reactAppProcess = spawn("npm", ["run", "start"], {
		cwd: "./np-admin",
		stdio: "inherit",
	});

	reactAppProcess.on("exit", (code) => {
		console.log(`React app server exited with code ${code}`);
	});

	if (activeTheme) {
		app.use("/np-admin", express.static("./np-admin/build"));
		console.log("React app server started");
	}

	app.listen(reactPort, () => {
		console.log(`Servers started`);
	});
};

startReactServer();
