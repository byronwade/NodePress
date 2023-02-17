export default function Update() {
	return (
		<>
			<div id="wpbody-content">
				<div id="screen-meta" className="metabox-prefs">
					<div
						id="contextual-help-wrap"
						className="hidden"
						tabIndex={-1}
						aria-label="Contextual Help Tab"
					>
						<div id="contextual-help-back" />
						<div id="contextual-help-columns">
							<div className="contextual-help-tabs">
								<ul>
									<li
										id="tab-link-overview"
										className="active"
									>
										<a
											href="#tab-panel-overview"
											aria-controls="tab-panel-overview"
										>
											Overview{" "}
										</a>
									</li>
									<li id="tab-link-how-to-update">
										<a
											href="#tab-panel-how-to-update"
											aria-controls="tab-panel-how-to-update"
										>
											How to Update{" "}
										</a>
									</li>
									<li id="tab-link-plugins-themes-auto-updates">
										<a
											href="#tab-panel-plugins-themes-auto-updates"
											aria-controls="tab-panel-plugins-themes-auto-updates"
										>
											Auto-updates{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/dashboard-updates-screen/">
										Documentation on Updating WordPress
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/plugins-themes-auto-updates/">
										Learn more: Auto-updates documentation
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/">
										Support
									</a>
								</p>{" "}
							</div>
							<div className="contextual-help-tabs-wrap">
								<div
									id="tab-panel-overview"
									className="help-tab-content active"
								>
									<p>
										On this screen, you can update to the
										latest version of WordPress, as well as
										update your themes, plugins, and
										translations from the WordPress.org
										repositories.
									</p>
									<p>
										If an update is available, you᾿ll see a
										notification appear in the Toolbar and
										navigation menu. Keeping your site
										updated is important for security. It
										also makes the internet a safer place
										for you and your readers.
									</p>{" "}
								</div>
								<div
									id="tab-panel-how-to-update"
									className="help-tab-content"
								>
									<p>
										<strong>WordPress</strong> — Updating
										your WordPress installation is a simple
										one-click procedure: just{" "}
										<strong>
											click on the “Update now” button
										</strong>{" "}
										when you are notified that a new version
										is available. In most cases, WordPress
										will automatically apply maintenance and
										security updates in the background for
										you.
									</p>
									<p>
										<strong>Themes and Plugins</strong> — To
										update individual themes or plugins from
										this screen, use the checkboxes to make
										your selection, then{" "}
										<strong>
											click on the appropriate “Update”
											button
										</strong>
										. To update all of your themes or
										plugins at once, you can check the box
										at the top of the section to select all
										before clicking the update button.
									</p>{" "}
								</div>
								<div
									id="tab-panel-plugins-themes-auto-updates"
									className="help-tab-content"
								>
									<p>
										Auto-updates can be enabled or disabled
										for WordPress major versions and for
										each individual theme or plugin. Themes
										or plugins with auto-updates enabled
										will display the estimated date of the
										next auto-update. Auto-updates depends
										on the WP-Cron task scheduling system.
									</p>
									<p>
										Please note: Third-party themes and
										plugins, or custom code, may override
										WordPress scheduling.
									</p>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="screen-meta-links">
					<div
						id="contextual-help-link-wrap"
						className="hide-if-no-js screen-meta-toggle"
					>
						<button
							type="button"
							id="contextual-help-link"
							className="button show-settings"
							aria-controls="contextual-help-wrap"
							aria-expanded="false"
						>
							Help
						</button>
					</div>
				</div>
				<div className="wrap">
					<h1>WordPress Updates</h1>
					<p>
						Here you can find information about updates, set
						auto-updates and see what plugins or themes need
						updating.
					</p>
					<h2 className="wp-current-version">
						Current version: 6.1.1
					</h2>
					<p className="update-last-checked">
						Last checked on February 17, 2023 at 9:43 am GMT+0000.{" "}
						<a href="https://byronw34.sg-host.com/wp-admin/update-core.php?force-check=1">
							Check again.
						</a>
					</p>
					<p className="auto-update-status">
						This site will not receive automatic updates for new
						versions of WordPress.{" "}
					</p>
					<h2 className="response">
						You have the latest version of WordPress.
					</h2>
					<ul className="core-updates">
						<li>
							<p />
							<form
								method="post"
								action="update-core.php?action=do-core-reinstall"
								name="upgrade"
								className="upgrade"
							>
								<input
									type="hidden"
									id="_wpnonce"
									name="_wpnonce"
									defaultValue="01913a925f"
								/>
								<input
									type="hidden"
									name="_wp_http_referer"
									defaultValue="/wp-admin/update-core.php"
								/>
								<p>
									<input
										name="version"
										defaultValue="6.1.1"
										type="hidden"
									/>
									<input
										name="locale"
										defaultValue="en_US"
										type="hidden"
									/>
									<input
										type="submit"
										name="upgrade"
										id="upgrade"
										className="button"
										defaultValue="Re-install version 6.1.1"
									/>
								</p>
							</form>
						</li>
					</ul>
					<h2>Plugins</h2>
					<p>Your plugins are all up to date.</p>
					<h2>Themes</h2>
					<p>Your themes are all up to date.</p>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
