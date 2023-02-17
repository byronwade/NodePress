export default function Tools() {
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
										id="tab-link-converter"
										className="active"
									>
										<a
											href="#tab-panel-converter"
											aria-controls="tab-panel-converter"
										>
											Categories and Tags Converter{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/tools-screen/">
										Documentation on Tools
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
									id="tab-panel-converter"
									className="help-tab-content active"
								>
									<p>
										Categories have hierarchy, meaning that
										you can nest sub-categories. Tags do not
										have hierarchy and cannot be nested.
										Sometimes people start out using one on
										their posts, then later realize that the
										other would work better for their
										content.
									</p>
									<p>
										The Categories and Tags Converter link
										on this screen will take you to the
										Import screen, where that Converter is
										one of the plugins you can install. Once
										that plugin is installed, the Activate
										Plugin &amp; Run Importer link will take
										you to a screen where you can choose to
										convert tags into categories or vice
										versa.
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
					<h1>Tools</h1>
					<div className="card">
						<h2 className="title">Categories and Tags Converter</h2>
						<p>
							If you want to convert your categories to tags (or
							vice versa), use the{" "}
							<a href="import.php">
								Categories and Tags Converter
							</a>{" "}
							available from the Import screen.{" "}
						</p>
					</div>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
