export default function Themes() {
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
									<li id="tab-link-adding-themes">
										<a
											href="#tab-panel-adding-themes"
											aria-controls="tab-panel-adding-themes"
										>
											Adding Themes{" "}
										</a>
									</li>
									<li id="tab-link-customize-preview-themes">
										<a
											href="#tab-panel-customize-preview-themes"
											aria-controls="tab-panel-customize-preview-themes"
										>
											Previewing and Customizing{" "}
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
									<a href="https://wordpress.org/support/article/using-themes/">
										Documentation on Using Themes
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/appearance-themes-screen/">
										Documentation on Managing Themes
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
										This screen is used for managing your
										installed themes. Aside from the default
										theme(s) included with your WordPress
										installation, themes are designed and
										developed by third parties.
									</p>
									<p>From this screen you can:</p>
									<ul>
										<li>
											Hover or tap to see Activate and
											Live Preview buttons
										</li>
										<li>
											Click on the theme to see the theme
											name, version, author, description,
											tags, and the Delete link
										</li>
										<li>
											Click Customize for the active theme
											or Live Preview for any other theme
											to see a live preview
										</li>
									</ul>
									<p>
										The active theme is displayed
										highlighted as the first theme.
									</p>
									<p>
										The search for installed themes will
										search for terms in their name,
										description, author, or tag.{" "}
										<span id="live-search-desc">
											The search results will be updated
											as you type.
										</span>
									</p>{" "}
								</div>
								<div
									id="tab-panel-adding-themes"
									className="help-tab-content"
								>
									<p>
										If you would like to see more themes to
										choose from, click on the “Add New”
										button and you will be able to browse or
										search for additional themes from the{" "}
										<a href="https://wordpress.org/themes/">
											WordPress Theme Directory
										</a>
										. Themes in the WordPress Theme
										Directory are designed and developed by
										third parties, and are compatible with
										the license WordPress uses. Oh, and
										they’re free!
									</p>{" "}
								</div>
								<div
									id="tab-panel-customize-preview-themes"
									className="help-tab-content"
								>
									<p>
										Tap or hover on any theme then click the
										Live Preview button to see a live
										preview of that theme and change theme
										options in a separate, full-screen view.
										You can also find a Live Preview button
										at the bottom of the theme details
										screen. Any installed theme can be
										previewed and customized in this way.
									</p>
									<p>
										The theme being previewed is fully
										interactive — navigate to different
										pages to see how the theme handles
										posts, archives, and other page
										templates. The settings may differ
										depending on what theme features the
										theme being previewed supports. To
										accept the new settings and activate the
										theme all in one step, click the
										Activate &amp; Publish button above the
										menu.
									</p>
									<p>
										When previewing on smaller monitors, you
										can use the collapse icon at the bottom
										of the left-hand pane. This will hide
										the pane, giving you more room to
										preview your site in the new theme. To
										bring the pane back, click on the
										collapse icon again.
									</p>{" "}
								</div>
								<div
									id="tab-panel-plugins-themes-auto-updates"
									className="help-tab-content"
								>
									<p>
										Auto-updates can be enabled or disabled
										for each individual theme. Themes with
										auto-updates enabled will display the
										estimated date of the next auto-update.
										Auto-updates depends on the WP-Cron task
										scheduling system.
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
					<h1 className="wp-heading-inline">
						Themes{" "}
						<span className="title-count theme-count">1</span>
					</h1>
					<a
						href="https://byronw34.sg-host.com/wp-admin/theme-install.php"
						className="hide-if-no-js page-title-action"
					>
						Add New
					</a>
					<form className="search-form" />
					<hr className="wp-header-end" />
					<div className="theme-browser rendered">
						<div className="themes wp-clearfix single-theme">
							<div className="theme-overlay active">
								<div className="theme-backdrop" />
								<div
									className="theme-wrap wp-clearfix"
									role="document"
								>
									<div className="theme-header">
										<button
											className="left dashicons dashicons-no disabled"
											disabled=""
										>
											<span className="screen-reader-text">
												Show previous theme
											</span>
										</button>
										<button
											className="right dashicons dashicons-no disabled"
											disabled=""
										>
											<span className="screen-reader-text">
												Show next theme
											</span>
										</button>
										<button className="close dashicons dashicons-no">
											<span className="screen-reader-text">
												Close details dialog
											</span>
										</button>
									</div>
									<div className="theme-about wp-clearfix">
										<div className="theme-screenshots">
											<div className="screenshot blank" />
										</div>
										<div className="theme-info">
											<span className="current-label">
												Active Theme
											</span>
											<h2 className="theme-name">
												Wade's Headless WordPress
												<span className="theme-version">
													Version:{" "}
												</span>
											</h2>
											<p className="theme-author">
												By{" "}
												<a href="https://byronwade.com">
													Wade's Inc
												</a>{" "}
											</p>
											<div className="theme-autoupdate">
												<div className="notice notice-error notice-alt inline hidden">
													<p />
												</div>
											</div>
											<p className="theme-description" />
										</div>
									</div>
									<div className="theme-actions">
										<div className="active-theme">
											<a
												href="https://byronw34.sg-host.com/wp-admin/customize.php?theme=wades-headless&return=%2Fwp-admin%2Fthemes.php"
												className="button button-primary customize load-customize hide-if-no-customize"
											>
												Customize
											</a>
											<a
												className="button"
												href="nav-menus.php"
											>
												Menus
											</a>{" "}
										</div>
										<div className="inactive-theme">
											<a
												href="https://byronw34.sg-host.com/wp-admin/themes.php?action=activate&stylesheet=wades-headless&_wpnonce=da6ec29013"
												className="button activate"
												aria-label="Activate Wade's Headless WordPress"
											>
												Activate
											</a>
											<a
												href="https://byronw34.sg-host.com/wp-admin/customize.php?theme=wades-headless&return=%2Fwp-admin%2Fthemes.php"
												className="button button-primary load-customize hide-if-no-customize"
											>
												Live Preview
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="theme active"
								data-slug="wades-headless"
							>
								<div className="theme-screenshot blank" />
								<button
									type="button"
									aria-label="View Theme Details for Wade's Headless WordPress"
									className="more-details"
									id="wades-headless-action"
								>
									Theme Details
								</button>
								<div className="theme-author">
									By Wade's Inc{" "}
								</div>
								<div className="theme-id-container">
									<h2
										className="theme-name"
										id="wades-headless-name"
									>
										<span>Active:</span> Wade's Headless
										WordPress
									</h2>
									<div className="theme-actions">
										<a
											aria-label="Customize Wade's Headless WordPress"
											className="button button-primary customize load-customize hide-if-no-customize"
											href="https://byronw34.sg-host.com/wp-admin/customize.php?theme=wades-headless&return=%2Fwp-admin%2Fthemes.php"
										>
											Customize
										</a>
									</div>
								</div>
							</div>
							<div className="theme add-new-theme">
								<a href="https://byronw34.sg-host.com/wp-admin/theme-install.php">
									<div className="theme-screenshot">
										<span />
									</div>
									<h2 className="theme-name">
										Add New Theme
									</h2>
								</a>
							</div>
						</div>
					</div>
					<div
						className="theme-overlay"
						tabIndex={0}
						role="dialog"
						aria-label="Theme Details"
					/>
					<p className="no-themes">
						No themes found. Try a different search.
					</p>
				</div>
				{/* .wrap */}
				<div className="clear" />
			</div>
		</>
	);
}
