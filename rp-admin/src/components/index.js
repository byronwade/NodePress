export default function Index() {
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
									<li id="tab-link-help-navigation">
										<a
											href="#tab-panel-help-navigation"
											aria-controls="tab-panel-help-navigation"
										>
											Navigation{" "}
										</a>
									</li>
									<li id="tab-link-help-layout">
										<a
											href="#tab-panel-help-layout"
											aria-controls="tab-panel-help-layout"
										>
											Layout{" "}
										</a>
									</li>
									<li id="tab-link-help-content">
										<a
											href="#tab-panel-help-content"
											aria-controls="tab-panel-help-content"
										>
											Content{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/dashboard-screen/">
										Documentation on Dashboard
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/">
										Support
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/wordpress-version/version-6-1-1/">
										Version 6.1.1
									</a>
								</p>{" "}
							</div>
							<div className="contextual-help-tabs-wrap">
								<div
									id="tab-panel-overview"
									className="help-tab-content active"
								>
									<p>Welcome to your WordPress Dashboard!</p>
									<p>
										The Dashboard is the first place you
										will come to every time you log into
										your site. It is where you will find all
										your WordPress tools. If you need help,
										just click the “Help” tab above the
										screen title.
									</p>{" "}
								</div>
								<div
									id="tab-panel-help-navigation"
									className="help-tab-content"
								>
									<p>
										The left-hand navigation menu provides
										links to all of the WordPress
										administration screens, with submenu
										items displayed on hover. You can
										minimize this menu to a narrow icon
										strip by clicking on the Collapse Menu
										arrow at the bottom.
									</p>
									<p>
										Links in the Toolbar at the top of the
										screen connect your dashboard and the
										front end of your site, and provide
										access to your profile and helpful
										WordPress information.
									</p>{" "}
								</div>
								<div
									id="tab-panel-help-layout"
									className="help-tab-content"
								>
									<p>
										You can use the following controls to
										arrange your Dashboard screen to suit
										your workflow. This is true on most
										other administration screens as well.
									</p>
									<p>
										<strong>Screen Options</strong> — Use
										the Screen Options tab to choose which
										Dashboard boxes to show.
									</p>
									<p>
										<strong>Drag and Drop</strong> — To
										rearrange the boxes, drag and drop by
										clicking on the title bar of the
										selected box and releasing when you see
										a gray dotted-line rectangle appear in
										the location you want to place the box.
									</p>
									<p>
										<strong>Box Controls</strong> — Click
										the title bar of the box to expand or
										collapse it. Some boxes added by plugins
										may have configurable content, and will
										show a “Configure” link in the title bar
										if you hover over it.
									</p>{" "}
								</div>
								<div
									id="tab-panel-help-content"
									className="help-tab-content"
								>
									<p>
										The boxes on your Dashboard screen are:
									</p>
									<p>
										<strong>Welcome</strong> — Shows links
										for some of the most common tasks when
										setting up a new site.
									</p>
									<p>
										<strong>Site Health Status</strong> —
										Informs you of any potential issues that
										should be addressed to improve the
										performance or security of your website.
									</p>
									<p>
										<strong>At a Glance</strong> — Displays
										a summary of the content on your site
										and identifies which theme and version
										of WordPress you are using.
									</p>
									<p>
										<strong>Activity</strong> — Shows the
										upcoming scheduled posts, recently
										published posts, and the most recent
										comments on your posts and allows you to
										moderate them.
									</p>
									<p>
										<strong>Quick Draft</strong> — Allows
										you to create a new post and save it as
										a draft. Also displays links to the 3
										most recent draft posts you've started.
									</p>
									<p>
										<strong>
											WordPress Events and News
										</strong>{" "}
										— Upcoming events near you as well as
										the latest news from the official
										WordPress project and the{" "}
										<a href="https://planet.wordpress.org/">
											WordPress Planet
										</a>
										.
									</p>{" "}
								</div>
							</div>
						</div>
					</div>
					<div
						id="screen-options-wrap"
						className="hidden"
						tabIndex={-1}
						aria-label="Screen Options Tab"
					>
						<form id="adv-settings" method="post">
							<fieldset className="metabox-prefs">
								<legend>Screen elements</legend>
								<p>
									Some screen elements can be shown or hidden
									by using the checkboxes. They can be
									expanded and collapsed by clickling on their
									headings, and arranged by dragging their
									headings or by clicking on the up and down
									arrows.{" "}
								</p>
								<label htmlFor="dashboard_site_health-hide">
									<input
										className="hide-postbox-tog"
										name="dashboard_site_health-hide"
										type="checkbox"
										id="dashboard_site_health-hide"
										defaultValue="dashboard_site_health"
										defaultChecked="checked"
									/>
									Site Health Status
								</label>
								<label htmlFor="dashboard_right_now-hide">
									<input
										className="hide-postbox-tog"
										name="dashboard_right_now-hide"
										type="checkbox"
										id="dashboard_right_now-hide"
										defaultValue="dashboard_right_now"
										defaultChecked="checked"
									/>
									At a Glance
								</label>
								<label htmlFor="dashboard_activity-hide">
									<input
										className="hide-postbox-tog"
										name="dashboard_activity-hide"
										type="checkbox"
										id="dashboard_activity-hide"
										defaultValue="dashboard_activity"
										defaultChecked="checked"
									/>
									Activity
								</label>
								<label htmlFor="dashboard_quick_press-hide">
									<input
										className="hide-postbox-tog"
										name="dashboard_quick_press-hide"
										type="checkbox"
										id="dashboard_quick_press-hide"
										defaultValue="dashboard_quick_press"
										defaultChecked="checked"
									/>
									<span className="hide-if-no-js">
										Quick Draft
									</span>{" "}
									<span className="hide-if-js">
										Your Recent Drafts
									</span>
								</label>
								<label htmlFor="dashboard_primary-hide">
									<input
										className="hide-postbox-tog"
										name="dashboard_primary-hide"
										type="checkbox"
										id="dashboard_primary-hide"
										defaultValue="dashboard_primary"
										defaultChecked="checked"
									/>
									WordPress Events and News
								</label>
								<label htmlFor="wp_welcome_panel-hide">
									<input
										type="checkbox"
										id="wp_welcome_panel-hide"
									/>
									Welcome
								</label>
							</fieldset>
							<input
								type="hidden"
								id="screenoptionnonce"
								name="screenoptionnonce"
								defaultValue="566934ee14"
							/>
						</form>
					</div>{" "}
				</div>
				<div id="screen-meta-links">
					<div
						id="screen-options-link-wrap"
						className="hide-if-no-js screen-meta-toggle"
					>
						<button
							type="button"
							id="show-settings-link"
							className="button show-settings"
							aria-controls="screen-options-wrap"
							aria-expanded="false"
						>
							Screen Options
						</button>
					</div>
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
					<h1>Dashboard</h1>
					<div id="welcome-panel" className="welcome-panel hidden">
						<input
							type="hidden"
							id="welcomepanelnonce"
							name="welcomepanelnonce"
							defaultValue="9a24784074"
						/>{" "}
						<a
							className="welcome-panel-close"
							href="https://byronw34.sg-host.com/wp-admin/?welcome=0"
							aria-label="Dismiss the welcome panel"
						>
							Dismiss
						</a>
						<div className="welcome-panel-content">
							<div className="welcome-panel-header">
								<div className="welcome-panel-header-image">
									<svg
										width={780}
										height={550}
										viewBox="0 0 780 550"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										focusable="false"
									>
										<g
											opacity=".5"
											fill="#273FCC"
											stroke="#627EFF"
											strokeWidth={2}
											strokeMiterlimit={10}
										>
											<circle
												cx="434.757"
												cy="71.524"
												r="66.1"
											/>
											<circle
												cx="432.587"
												cy="43.138"
												r="66.1"
											/>
											<circle
												cx="426.277"
												cy="16.14"
												r="66.1"
											/>
											<circle
												cx="416.143"
												cy="-9.165"
												r="66.1"
											/>
											<circle
												cx="402.53"
												cy="-32.447"
												r="66.1"
											/>
											<circle
												cx="385.755"
												cy="-53.376"
												r="66.1"
											/>
											<circle
												cx="116.864"
												cy="-53.072"
												r="66.1"
											/>
											<circle
												cx="99.984"
												cy="-32.183"
												r="66.1"
											/>
											<circle
												cx="86.278"
												cy="-8.953"
												r="66.1"
											/>
											<circle
												cx="76.078"
												cy="16.3"
												r="66.1"
											/>
											<circle
												cx="69.714"
												cy="43.23"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="71.524"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="71.524"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="99.05"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="126.577"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="154.09"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="181.617"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="209.143"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="236.67"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="264.196"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="291.722"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="319.236"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="346.762"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="374.289"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="374.831"
												r="66.1"
											/>
											<circle
												cx="68.471"
												cy="393.565"
												r="66.1"
											/>
											<circle
												cx="71.249"
												cy="411.757"
												r="66.1"
											/>
											<circle
												cx="75.76"
												cy="429.315"
												r="66.1"
											/>
											<circle
												cx="81.925"
												cy="446.146"
												r="66.1"
											/>
											<circle
												cx="89.651"
												cy="462.17"
												r="66.1"
											/>
											<circle
												cx="411.579"
												cy="464.073"
												r="66.1"
											/>
											<circle
												cx="423.208"
												cy="438.98"
												r="66.1"
											/>
											<circle
												cx="430.986"
												cy="412.008"
												r="66.1"
											/>
											<circle
												cx="434.558"
												cy="383.517"
												r="66.1"
											/>
											<circle
												cx="433.831"
												cy="354.43"
												r="66.1"
											/>
											<circle
												cx="428.777"
												cy="326.428"
												r="66.1"
											/>
											<circle
												cx="419.635"
												cy="300.078"
												r="66.1"
											/>
											<circle
												cx="406.763"
												cy="275.725"
												r="66.1"
											/>
											<circle
												cx="390.491"
												cy="253.698"
												r="66.1"
											/>
											<circle
												cx="371.189"
												cy="234.369"
												r="66.1"
											/>
											<circle
												cx="349.188"
												cy="218.054"
												r="66.1"
											/>
											<circle
												cx="324.846"
												cy="205.124"
												r="66.1"
											/>
											<circle
												cx="298.506"
												cy="195.896"
												r="66.1"
											/>
											<circle
												cx="270.512"
												cy="190.739"
												r="66.1"
											/>
											<circle
												cx="241.368"
												cy="189.986"
												r="66.1"
											/>
											<circle
												cx="213.003"
												cy="193.754"
												r="66.1"
											/>
											<circle
												cx="186.147"
												cy="201.739"
												r="66.1"
											/>
											<circle
												cx="161.157"
												cy="213.559"
												r="66.1"
											/>
											<circle
												cx="138.389"
												cy="228.882"
												r="66.1"
											/>
											<circle
												cx="118.174"
												cy="247.352"
												r="66.1"
											/>
											<circle
												cx="100.857"
												cy="268.599"
												r="66.1"
											/>
											<circle
												cx="86.794"
												cy="292.264"
												r="66.1"
											/>
											<circle
												cx="76.316"
												cy="318.019"
												r="66.1"
											/>
											<circle
												cx="69.781"
												cy="345.466"
												r="66.1"
											/>
											<circle
												cx="67.518"
												cy="374.289"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="449.729"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="428.072"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="406.403"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="384.733"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="363.077"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="341.408"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="319.738"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="298.069"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="276.412"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="254.743"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="233.073"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="211.417"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="189.748"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="168.078"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="146.422"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="124.753"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="103.083"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="81.413"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="59.757"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="38.088"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="16.418"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="-5.238"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="-26.907"
												r="66.1"
											/>
											<circle
												cx="712.577"
												cy="-48.577"
												r="66.1"
											/>
											<circle
												cx="662.966"
												cy="-44.161"
												r="66.1"
											/>
											<circle
												cx="646.429"
												cy="-21.024"
												r="66.1"
											/>
											<circle
												cx="629.893"
												cy="2.113"
												r="66.1"
											/>
											<circle
												cx="613.356"
												cy="25.25"
												r="66.1"
											/>
											<circle
												cx="596.819"
												cy="48.387"
												r="66.1"
											/>
											<circle
												cx="580.282"
												cy="71.524"
												r="66.1"
											/>
											<circle
												cx="580.282"
												cy="465.515"
												r="66.1"
											/>
										</g>
									</svg>
								</div>
								<h2>Welcome to WordPress!</h2>
								<p>
									<a href="https://byronw34.sg-host.com/wp-admin/about.php">
										Learn more about the 6.1.1 version.{" "}
									</a>
								</p>
							</div>
							<div className="welcome-panel-column-container">
								<div className="welcome-panel-column">
									<svg
										width={48}
										height={48}
										viewBox="0 0 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										focusable="false"
									>
										<rect
											width={48}
											height={48}
											rx={4}
											fill="#1E1E1E"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M32.0668 17.0854L28.8221 13.9454L18.2008 24.671L16.8983 29.0827L21.4257 27.8309L32.0668 17.0854ZM16 32.75H24V31.25H16V32.75Z"
											fill="white"
										/>
									</svg>
									<div className="welcome-panel-column-content">
										<h3>
											Author rich content with blocks and
											patterns
										</h3>
										<p>
											Block patterns are pre-configured
											block layouts. Use them to get
											inspired or create new pages in a
											flash.
										</p>
										<a href="https://byronw34.sg-host.com/wp-admin/post-new.php?post_type=page">
											Add a new page
										</a>
									</div>
								</div>
								<div className="welcome-panel-column">
									<svg
										width={48}
										height={48}
										viewBox="0 0 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										focusable="false"
									>
										<rect
											width={48}
											height={48}
											rx={4}
											fill="#1E1E1E"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M18 16h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2zm12 1.5H18a.5.5 0 0 0-.5.5v3h13v-3a.5.5 0 0 0-.5-.5zm.5 5H22v8h8a.5.5 0 0 0 .5-.5v-7.5zm-10 0h-3V30a.5.5 0 0 0 .5.5h2.5v-8z"
											fill="#fff"
										/>
									</svg>
									<div className="welcome-panel-column-content">
										<h3>Start Customizing</h3>
										<p>
											Configure your site’s logo, header,
											menus, and more in the Customizer.
										</p>
										<a
											className="load-customize hide-if-no-customize"
											href="https://byronw34.sg-host.com/wp-admin/customize.php"
										>
											Open the Customizer
										</a>
									</div>
								</div>
								<div className="welcome-panel-column">
									<svg
										width={48}
										height={48}
										viewBox="0 0 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										focusable="false"
									>
										<rect
											width={48}
											height={48}
											rx={4}
											fill="#1E1E1E"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M31 24a7 7 0 0 1-7 7V17a7 7 0 0 1 7 7zm-7-8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"
											fill="#fff"
										/>
									</svg>
									<div className="welcome-panel-column-content">
										<h3>
											Discover a new way to build your
											site.
										</h3>
										<p>
											There is a new kind of WordPress
											theme, called a block theme, that
											lets you build the site you’ve
											always wanted — with blocks and
											styles.
										</p>
										<a href="https://wordpress.org/support/article/block-themes/">
											Learn about block themes
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="dashboard-widgets-wrap">
						<div id="dashboard-widgets" className="metabox-holder">
							<div
								id="postbox-container-1"
								className="postbox-container"
							>
								<div
									id="normal-sortables"
									className="meta-box-sortables ui-sortable"
								>
									<div
										id="dashboard_site_health"
										className="postbox closed"
									>
										<div className="postbox-header">
											<h2 className="hndle ui-sortable-handle">
												Site Health Status
											</h2>
											<div className="handle-actions hide-if-no-js">
												<button
													type="button"
													className="handle-order-higher"
													aria-disabled="true"
													aria-describedby="dashboard_site_health-handle-order-higher-description"
												>
													<span className="screen-reader-text">
														Move up
													</span>
													<span
														className="order-higher-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_site_health-handle-order-higher-description"
												>
													Move Site Health Status box
													up
												</span>
												<button
													type="button"
													className="handle-order-lower"
													aria-disabled="false"
													aria-describedby="dashboard_site_health-handle-order-lower-description"
												>
													<span className="screen-reader-text">
														Move down
													</span>
													<span
														className="order-lower-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_site_health-handle-order-lower-description"
												>
													Move Site Health Status box
													down
												</span>
												<button
													type="button"
													className="handlediv"
													aria-expanded="false"
												>
													<span className="screen-reader-text">
														Toggle panel: Site
														Health Status
													</span>
													<span
														className="toggle-indicator"
														aria-hidden="true"
													/>
												</button>
											</div>
										</div>
										<div className="inside">
											<div className="health-check-widget">
												<div className="health-check-widget-title-section site-health-progress-wrapper hide-if-no-js green">
													<div className="site-health-progress">
														<svg
															role="img"
															aria-hidden="true"
															focusable="false"
															width="100%"
															height="100%"
															viewBox="0 0 200 200"
															version="1.1"
															xmlns="http://www.w3.org/2000/svg"
														>
															<circle
																r={90}
																cx={100}
																cy={100}
																fill="transparent"
																strokeDasharray="565.48"
																strokeDashoffset={
																	0
																}
															/>
															<circle
																id="bar"
																r={90}
																cx={100}
																cy={100}
																fill="transparent"
																strokeDasharray="565.48"
																strokeDashoffset={
																	0
																}
																style={{
																	strokeDashoffset:
																		"62.2035px",
																}}
															/>
														</svg>
													</div>
													<div className="site-health-progress-label">
														Good
													</div>
												</div>
												<div className="site-health-details">
													<p>
														Your site’s health is
														looking good, but there
														are still some things
														you can do to improve
														its performance and
														security.{" "}
													</p>
													<p>
														Take a look at the{" "}
														<strong>4 items</strong>{" "}
														on the{" "}
														<a href="https://byronw34.sg-host.com/wp-admin/site-health.php">
															Site Health screen
														</a>
														.{" "}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div
										id="dashboard_right_now"
										className="postbox "
									>
										<div className="postbox-header">
											<h2 className="hndle ui-sortable-handle">
												At a Glance
											</h2>
											<div className="handle-actions hide-if-no-js">
												<button
													type="button"
													className="handle-order-higher"
													aria-disabled="false"
													aria-describedby="dashboard_right_now-handle-order-higher-description"
												>
													<span className="screen-reader-text">
														Move up
													</span>
													<span
														className="order-higher-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_right_now-handle-order-higher-description"
												>
													Move At a Glance box up
												</span>
												<button
													type="button"
													className="handle-order-lower"
													aria-disabled="false"
													aria-describedby="dashboard_right_now-handle-order-lower-description"
												>
													<span className="screen-reader-text">
														Move down
													</span>
													<span
														className="order-lower-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_right_now-handle-order-lower-description"
												>
													Move At a Glance box down
												</span>
												<button
													type="button"
													className="handlediv"
													aria-expanded="true"
												>
													<span className="screen-reader-text">
														Toggle panel: At a
														Glance
													</span>
													<span
														className="toggle-indicator"
														aria-hidden="true"
													/>
												</button>
											</div>
										</div>
										<div className="inside">
											<div className="main">
												<ul>
													<li className="post-count">
														<a href="edit.php?post_type=post">
															4 Posts
														</a>
													</li>
													<li className="page-count">
														<a href="edit.php?post_type=page">
															1 Page
														</a>
													</li>{" "}
												</ul>
												<p id="wp-version-message">
													<span id="wp-version">
														WordPress 6.1.1 running{" "}
														<a href="themes.php">
															Wade's Headless
															WordPress
														</a>{" "}
														theme.
													</span>
												</p>{" "}
											</div>
										</div>
									</div>
									<div
										id="dashboard_activity"
										className="postbox "
									>
										<div className="postbox-header">
											<h2 className="hndle ui-sortable-handle">
												Activity
											</h2>
											<div className="handle-actions hide-if-no-js">
												<button
													type="button"
													className="handle-order-higher"
													aria-disabled="false"
													aria-describedby="dashboard_activity-handle-order-higher-description"
												>
													<span className="screen-reader-text">
														Move up
													</span>
													<span
														className="order-higher-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_activity-handle-order-higher-description"
												>
													Move Activity box up
												</span>
												<button
													type="button"
													className="handle-order-lower"
													aria-disabled="false"
													aria-describedby="dashboard_activity-handle-order-lower-description"
												>
													<span className="screen-reader-text">
														Move down
													</span>
													<span
														className="order-lower-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_activity-handle-order-lower-description"
												>
													Move Activity box down
												</span>
												<button
													type="button"
													className="handlediv"
													aria-expanded="true"
												>
													<span className="screen-reader-text">
														Toggle panel: Activity
													</span>
													<span
														className="toggle-indicator"
														aria-hidden="true"
													/>
												</button>
											</div>
										</div>
										<div className="inside">
											<div id="activity-widget">
												<div
													id="published-posts"
													className="activity-block"
												>
													<h3>Recently Published</h3>
													<ul>
														<li>
															<span>
																Feb 16th, 1:38
																am
															</span>{" "}
															<a
																href="https://byronw34.sg-host.com/wp-admin/post.php?post=29&action=edit"
																aria-label="Edit “The New Website Design Trends: Overstimulation. Parallax zoom scrolling. ’90s navigation. Scrapbook aesthetic.”"
															>
																The New Website
																Design Trends:
																Overstimulation.
																Parallax zoom
																scrolling. ’90s
																navigation.
																Scrapbook
																aesthetic.
															</a>
														</li>
														<li>
															<span>
																Feb 15th, 10:30
																pm
															</span>{" "}
															<a
																href="https://byronw34.sg-host.com/wp-admin/post.php?post=21&action=edit"
																aria-label="Edit “Google’s 200 Ranking Factors: The Complete List (2022)”"
															>
																Google’s 200
																Ranking Factors:
																The Complete
																List (2022)
															</a>
														</li>
														<li>
															<span>
																Feb 15th, 5:46
																am
															</span>{" "}
															<a
																href="https://byronw34.sg-host.com/wp-admin/post.php?post=8&action=edit"
																aria-label="Edit “How Microsoft Bing’s New Chat AI Could Impact Website SEO”"
															>
																How Microsoft
																Bing’s New Chat
																AI Could Impact
																Website SEO
															</a>
														</li>
														<li>
															<span>
																Feb 15th, 5:45
																am
															</span>{" "}
															<a
																href="https://byronw34.sg-host.com/wp-admin/post.php?post=5&action=edit"
																aria-label="Edit “22 Ways ChatGPT Could Be Used in Website Design”"
															>
																22 Ways ChatGPT
																Could Be Used in
																Website Design
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>{" "}
							</div>
							<div
								id="postbox-container-2"
								className="postbox-container"
							>
								<div
									id="side-sortables"
									className="meta-box-sortables ui-sortable"
								>
									<div
										id="dashboard_quick_press"
										className="postbox "
									>
										<div className="postbox-header">
											<h2 className="hndle ui-sortable-handle">
												<span className="hide-if-no-js">
													Quick Draft
												</span>{" "}
												<span className="hide-if-js">
													Your Recent Drafts
												</span>
											</h2>
											<div className="handle-actions hide-if-no-js">
												<button
													type="button"
													className="handle-order-higher"
													aria-disabled="false"
													aria-describedby="dashboard_quick_press-handle-order-higher-description"
												>
													<span className="screen-reader-text">
														Move up
													</span>
													<span
														className="order-higher-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_quick_press-handle-order-higher-description"
												>
													Move{" "}
													<span className="hide-if-no-js">
														Quick Draft
													</span>{" "}
													<span className="hide-if-js">
														Your Recent Drafts
													</span>{" "}
													box up
												</span>
												<button
													type="button"
													className="handle-order-lower"
													aria-disabled="false"
													aria-describedby="dashboard_quick_press-handle-order-lower-description"
												>
													<span className="screen-reader-text">
														Move down
													</span>
													<span
														className="order-lower-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_quick_press-handle-order-lower-description"
												>
													Move{" "}
													<span className="hide-if-no-js">
														Quick Draft
													</span>{" "}
													<span className="hide-if-js">
														Your Recent Drafts
													</span>{" "}
													box down
												</span>
												<button
													type="button"
													className="handlediv"
													aria-expanded="true"
												>
													<span className="screen-reader-text">
														Toggle panel:{" "}
														<span className="hide-if-no-js">
															Quick Draft
														</span>{" "}
														<span className="hide-if-js">
															Your Recent Drafts
														</span>
													</span>
													<span
														className="toggle-indicator"
														aria-hidden="true"
													/>
												</button>
											</div>
										</div>
										<div className="inside">
											<form
												name="post"
												action="https://byronw34.sg-host.com/wp-admin/post.php"
												method="post"
												id="quick-press"
												className="initial-form hide-if-no-js"
											>
												<div
													className="input-text-wrap"
													id="title-wrap"
												>
													<label htmlFor="title">
														Title{" "}
													</label>
													<input
														type="text"
														name="post_title"
														id="title"
														autoComplete="off"
													/>
												</div>
												<div
													className="textarea-wrap"
													id="description-wrap"
												>
													<label htmlFor="content">
														Content
													</label>
													<textarea
														name="content"
														id="content"
														placeholder="What’s on your mind?"
														className="mceEditor"
														rows={3}
														cols={15}
														autoComplete="off"
														defaultValue={""}
													/>
												</div>
												<p className="submit">
													<input
														type="hidden"
														name="action"
														id="quickpost-action"
														defaultValue="post-quickdraft-save"
													/>
													<input
														type="hidden"
														name="post_ID"
														defaultValue={4117}
													/>
													<input
														type="hidden"
														name="post_type"
														defaultValue="post"
													/>
													<input
														type="hidden"
														id="_wpnonce"
														name="_wpnonce"
														defaultValue="3f71832e3e"
													/>
													<input
														type="hidden"
														name="_wp_http_referer"
														defaultValue="/wp-admin/index.php"
													/>{" "}
													<input
														type="submit"
														name="save"
														id="save-post"
														className="button button-primary"
														defaultValue="Save Draft"
													/>{" "}
													<br className="clear" />
												</p>
											</form>
										</div>
									</div>
									<div
										id="dashboard_primary"
										className="postbox "
									>
										<div className="postbox-header">
											<h2 className="hndle ui-sortable-handle">
												WordPress Events and News
											</h2>
											<div className="handle-actions hide-if-no-js">
												<button
													type="button"
													className="handle-order-higher"
													aria-disabled="false"
													aria-describedby="dashboard_primary-handle-order-higher-description"
												>
													<span className="screen-reader-text">
														Move up
													</span>
													<span
														className="order-higher-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_primary-handle-order-higher-description"
												>
													Move WordPress Events and
													News box up
												</span>
												<button
													type="button"
													className="handle-order-lower"
													aria-disabled="false"
													aria-describedby="dashboard_primary-handle-order-lower-description"
												>
													<span className="screen-reader-text">
														Move down
													</span>
													<span
														className="order-lower-indicator"
														aria-hidden="true"
													/>
												</button>
												<span
													className="hidden"
													id="dashboard_primary-handle-order-lower-description"
												>
													Move WordPress Events and
													News box down
												</span>
												<button
													type="button"
													className="handlediv"
													aria-expanded="true"
												>
													<span className="screen-reader-text">
														Toggle panel: WordPress
														Events and News
													</span>
													<span
														className="toggle-indicator"
														aria-hidden="true"
													/>
												</button>
											</div>
										</div>
										<div className="inside">
											<div
												className="community-events-errors notice notice-error inline"
												aria-hidden="true"
											>
												<p className="hide-if-js">
													This widget requires
													JavaScript.{" "}
												</p>
												<p
													className="community-events-error-occurred"
													aria-hidden="true"
												>
													An error occurred. Please
													try again.{" "}
												</p>
												<p
													className="community-events-could-not-locate"
													aria-hidden="true"
												/>
											</div>
											<div
												className="community-events-loading hide-if-no-js"
												aria-hidden="true"
											>
												Loading…{" "}
											</div>
											<div
												id="community-events"
												className="community-events"
												aria-hidden="false"
											>
												<div className="activity-block">
													<p>
														<span
															id="community-events-location-message"
															aria-hidden="false"
														>
															Attend an upcoming
															event near you.
														</span>
														<button
															className="button-link community-events-toggle-location"
															aria-expanded="false"
															aria-hidden="false"
														>
															<span
																className="dashicons dashicons-location"
																aria-hidden="true"
															/>
															<span className="community-events-location-edit">
																Select location
															</span>
														</button>
													</p>
													<form
														className="community-events-form"
														aria-hidden="true"
														action="https://byronw34.sg-host.com/wp-admin/admin-ajax.php"
														method="post"
													>
														<label htmlFor="community-events-location">
															City:{" "}
														</label>
														<input
															id="community-events-location"
															className="regular-text"
															type="text"
															name="community-events-location"
															placeholder="Cincinnati"
														/>
														<input
															type="submit"
															name="community-events-submit"
															id="community-events-submit"
															className="button"
															defaultValue="Submit"
														/>
														<button
															className="community-events-cancel button-link"
															type="button"
															aria-expanded="false"
														>
															Cancel{" "}
														</button>
														<span className="spinner" />
													</form>
												</div>
												<ul
													className="community-events-results activity-block last"
													aria-hidden="false"
												>
													<li className="event event-meetup wp-clearfix">
														<div className="event-info">
															<div
																className="dashicons event-icon"
																aria-hidden="true"
															/>
															<div className="event-info-inner">
																<a
																	className="event-title"
																	href="https://www.meetup.com/oc-wordpress-group/events/291361946"
																>
																	OC WordPress
																	Meetup
																</a>
																<span className="event-city">
																	Online
																</span>
															</div>
														</div>
														<div className="event-date-time">
															<span className="event-date">
																Monday, Mar 6,
																2023
															</span>
															<span className="event-time">
																7:00 pm PST
															</span>
														</div>
													</li>
													<li className="event event-meetup wp-clearfix">
														<div className="event-info">
															<div
																className="dashicons event-icon"
																aria-hidden="true"
															/>
															<div className="event-info-inner">
																<a
																	className="event-title"
																	href="https://www.meetup.com/inlandempirewp/events/291631910"
																>
																	#IEWP
																	Monthly
																	Meetup
																	(General
																	Meetup)
																</a>
																<span className="event-city">
																	Riverside,
																	CA, USA
																</span>
															</div>
														</div>
														<div className="event-date-time">
															<span className="event-date">
																Tuesday, Mar 7,
																2023
															</span>
															<span className="event-time">
																7:00 pm PST
															</span>
														</div>
													</li>
													<li className="event event-meetup wp-clearfix">
														<div className="event-info">
															<div
																className="dashicons event-icon"
																aria-hidden="true"
															/>
															<div className="event-info-inner">
																<a
																	className="event-title"
																	href="https://www.meetup.com/inlandempirewp/events/289234096"
																>
																	IEWP
																	WordPress
																	Helpdesk
																</a>
																<span className="event-city">
																	Online
																</span>
															</div>
														</div>
														<div className="event-date-time">
															<span className="event-date">
																Thursday, Mar 9,
																2023
															</span>
															<span className="event-time">
																7:00 pm PST
															</span>
														</div>
													</li>
												</ul>
											</div>
											<div className="wordpress-news hide-if-no-js">
												<div className="rss-widget">
													<ul>
														<li>
															<a
																className="rsswidget"
																href="https://wordpress.org/news/2023/02/episode-49-everything-you-need-to-know-about-the-community-summit/"
															>
																WP Briefing:
																Episode 49:
																Everything You
																Need to Know
																About the
																Community
																Summit!
															</a>
														</li>
														<li>
															<a
																className="rsswidget"
																href="https://wordpress.org/news/2023/02/wordpress-6-2-beta-1/"
															>
																WordPress 6.2
																Beta 1
															</a>
														</li>
													</ul>
												</div>
												<div className="rss-widget">
													<ul>
														<li>
															<a
																className="rsswidget"
																href="https://wptavern.com/industry-wide-tech-layoffs-impacting-wordpress-professionals"
															>
																WPTavern:
																Industry-Wide
																Tech Layoffs
																Impacting
																WordPress
																Professionals
															</a>
														</li>
														<li>
															<a
																className="rsswidget"
																href="https://central.wordcamp.org/news/2023/02/bluehost-supports-wordpress-community-events-worldwide-3/"
															>
																WordCamp
																Central:
																Bluehost
																supports
																WordPress
																community events
																worldwide
															</a>
														</li>
														<li>
															<a
																className="rsswidget"
																href="https://heropress.com/essays/alice-robert-and-wordpress/#utm_source=rss&utm_medium=rss&utm_campaign=alice-robert-and-wordpress"
															>
																HeroPress:
																Alice, Robert,
																and WordPress
															</a>
														</li>
													</ul>
												</div>{" "}
											</div>
											<p className="community-events-footer">
												<a
													href="https://make.wordpress.org/community/meetups-landing-page"
													target="_blank"
												>
													Meetups{" "}
													<span className="screen-reader-text">
														(opens in a new tab)
													</span>
													<span
														aria-hidden="true"
														className="dashicons dashicons-external"
													/>
												</a>
												|
												<a
													href="https://central.wordcamp.org/schedule/"
													target="_blank"
												>
													WordCamps{" "}
													<span className="screen-reader-text">
														(opens in a new tab)
													</span>
													<span
														aria-hidden="true"
														className="dashicons dashicons-external"
													/>
												</a>
												|
												<a
													href="https://wordpress.org/news/"
													target="_blank"
												>
													News{" "}
													<span className="screen-reader-text">
														(opens in a new tab)
													</span>
													<span
														aria-hidden="true"
														className="dashicons dashicons-external"
													/>
												</a>{" "}
											</p>
										</div>
									</div>
								</div>{" "}
							</div>
							<div
								id="postbox-container-3"
								className="postbox-container"
							>
								<div
									id="column3-sortables"
									className="meta-box-sortables ui-sortable empty-container"
									data-emptystring="Drag boxes here"
								/>{" "}
							</div>
							<div
								id="postbox-container-4"
								className="postbox-container"
							>
								<div
									id="column4-sortables"
									className="meta-box-sortables ui-sortable empty-container"
									data-emptystring="Drag boxes here"
								/>{" "}
							</div>
						</div>
						<input
							type="hidden"
							id="closedpostboxesnonce"
							name="closedpostboxesnonce"
							defaultValue="38248450bb"
						/>
						<input
							type="hidden"
							id="meta-box-order-nonce"
							name="meta-box-order-nonce"
							defaultValue="425516acb4"
						/>{" "}
					</div>
					{/* dashboard-widgets-wrap */}
				</div>
				{/* wrap */}
				<div className="clear" />
			</div>
		</>
	);
}
