export default function SiteHealth() {
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
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/site-health-screen/">
										Documentation on Site Health tool
									</a>
								</p>{" "}
							</div>
							<div className="contextual-help-tabs-wrap">
								<div
									id="tab-panel-overview"
									className="help-tab-content active"
								>
									<p>
										This screen allows you to obtain a
										health diagnosis of your site, and
										displays an overall rating of the status
										of your installation.
									</p>
									<p>
										In the Status tab, you can see critical
										information about your WordPress
										configuration, along with anything else
										that requires your attention.
									</p>
									<p>
										In the Info tab, you will find all the
										details about the configuration of your
										WordPress site, server, and database.
										There is also an export feature that
										allows you to copy all of the
										information about your site to the
										clipboard, to help solve problems on
										your site when obtaining support.
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
				<div className="health-check-header">
					<div className="health-check-title-section">
						<h1>Site Health </h1>
					</div>
					<div className="health-check-title-section site-health-progress-wrapper hide-if-no-js green">
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
									strokeDashoffset={0}
								/>
								<circle
									id="bar"
									r={90}
									cx={100}
									cy={100}
									fill="transparent"
									strokeDasharray="565.48"
									strokeDashoffset={0}
									style={{ strokeDashoffset: "45.2389px" }}
								/>
							</svg>
						</div>
						<div className="site-health-progress-label">Good</div>
					</div>
					<nav
						className="health-check-tabs-wrapper hide-if-no-js tab-count-2"
						aria-label="Secondary menu"
					>
						<a
							href="https://byronw34.sg-host.com/wp-admin/site-health.php?tab"
							className="health-check-tab active"
						>
							Status
						</a>
						<a
							href="https://byronw34.sg-host.com/wp-admin/site-health.php?tab=debug"
							className="health-check-tab "
						>
							Info
						</a>
					</nav>
				</div>
				<hr className="wp-header-end" />
				<div className="notice notice-error hide-if-js">
					<p>The Site Health check requires JavaScript.</p>
				</div>
				<div className="health-check-body health-check-status-tab hide-if-no-js">
					<div className="site-status-all-clear hide">
						<p className="icon">
							<span
								className="dashicons dashicons-smiley"
								aria-hidden="true"
							/>
						</p>
						<p className="encouragement">Great job! </p>
						<p>Everything is running smoothly here. </p>
					</div>
					<div className="site-status-has-issues">
						<h2>Site Health Status </h2>
						<p>
							The site health check shows information about your
							WordPress configuration and items that may need your
							attention.
						</p>
						<div
							className="site-health-issues-wrapper hidden"
							id="health-check-issues-critical"
						>
							<h3 className="site-health-issue-count-title">
								<span className="issue-count">0</span> critical
								issues{" "}
							</h3>
							<p>
								Critical issues are items that may have a high
								impact on your sites performance or security,
								and resolving these issues should be
								prioritized.
							</p>
							<div
								id="health-check-site-status-critical"
								className="health-check-accordion issues"
							/>
						</div>
						<div
							className="site-health-issues-wrapper"
							id="health-check-issues-recommended"
						>
							<h3 className="site-health-issue-count-title">
								<span className="issue-count">3</span>{" "}
								recommended improvements
							</h3>
							<p>
								Recommended items are considered beneficial to
								your site, although not as important to
								prioritize as a critical issue, they may include
								improvements to things such as; Performance,
								user experience, and more.
							</p>
							<div
								id="health-check-site-status-recommended"
								className="health-check-accordion issues"
							>
								<h4 className="health-check-accordion-heading">
									<button
										aria-expanded="false"
										className="health-check-accordion-trigger"
										aria-controls="health-check-accordion-block-theme_version"
										type="button"
									>
										<span className="title">
											Have a default theme available
										</span>
										<span className="badge blue">
											Security
										</span>
										<span className="icon" />
									</button>
								</h4>
								<div
									id="health-check-accordion-block-theme_version"
									className="health-check-accordion-panel"
									hidden="hidden"
								>
									<p>
										Themes add your site’s look and feel.
										It’s important to keep them up to date,
										to stay consistent with your brand and
										keep your site secure.
									</p>
									<p>
										Your site has 1 installed theme, and it
										is up to date.
									</p>
									<p>
										Your site does not have any default
										theme. Default themes are used by
										WordPress automatically if anything is
										wrong with your chosen theme.
									</p>
									<div className="actions">
										<p>
											<a href="https://byronw34.sg-host.com/wp-admin/themes.php">
												Manage your themes
											</a>
										</p>
									</div>
								</div>
								<h4 className="health-check-accordion-heading">
									<button
										aria-expanded="false"
										className="health-check-accordion-trigger"
										aria-controls="health-check-accordion-block-https_status"
										type="button"
									>
										<span className="title">
											Your website does not use HTTPS
										</span>
										<span className="badge blue">
											Security
										</span>
										<span className="icon" />
									</button>
								</h4>
								<div
									id="health-check-accordion-block-https_status"
									className="health-check-accordion-panel"
									hidden="hidden"
								>
									<p>
										You are accessing this website using
										HTTPS, but your{" "}
										<a href="https://byronw34.sg-host.com/wp-admin/options-general.php#siteurl">
											WordPress Address
										</a>{" "}
										and{" "}
										<a href="https://byronw34.sg-host.com/wp-admin/options-general.php#home">
											Site Address
										</a>{" "}
										are not set up to use HTTPS by default.
									</p>
									<p>
										Talk to your web host about supporting
										HTTPS for your website.
									</p>
									<div className="actions">
										<p>
											<a
												href="https://wordpress.org/support/article/why-should-i-use-https/"
												target="_blank"
												rel="noopener"
											>
												Learn more about why you should
												use HTTPS
												<span className="screen-reader-text">
													{" "}
													(opens in a new tab)
												</span>
												<span
													aria-hidden="true"
													className="dashicons dashicons-external"
												/>
											</a>
										</p>
									</div>
								</div>
								<h4 className="health-check-accordion-heading">
									<button
										aria-expanded="false"
										className="health-check-accordion-trigger"
										aria-controls="health-check-accordion-block-page_cache"
										type="button"
									>
										<span className="title">
											Page cache is not detected but the
											server response time is OK
										</span>
										<span className="badge blue">
											Performance
										</span>
										<span className="icon" />
									</button>
								</h4>
								<div
									id="health-check-accordion-block-page_cache"
									className="health-check-accordion-panel"
									hidden="hidden"
								>
									<p>
										Page cache enhances the speed and
										performance of your site by saving and
										serving static pages instead of calling
										for a page every time a user visits.
									</p>
									<p>
										Page cache is detected by looking for an
										active page cache plugin as well as
										making three requests to the homepage
										and looking for one or more of the
										following HTTP client caching response
										headers:
									</p>
									<code>cache-control</code>,{" "}
									<code>expires</code>, <code>age</code>,{" "}
									<code>last-modified</code>,{" "}
									<code>etag</code>,{" "}
									<code>x-cache-enabled</code>,{" "}
									<code>x-cache-disabled</code>,{" "}
									<code>x-srcache-store-status</code>,{" "}
									<code>x-srcache-fetch-status.</code>
									<ul>
										<li>
											<span className="dashicons dashicons-yes-alt" />{" "}
											Median server response time was 90
											milliseconds. This is less than the
											recommended 600 milliseconds
											threshold.
										</li>
										<li>
											<span className="dashicons dashicons-warning" />{" "}
											No client caching response headers
											were detected.
										</li>
										<li>
											<span className="dashicons dashicons-warning" />{" "}
											A page cache plugin was not
											detected.
										</li>
									</ul>
									<div className="actions">
										<p>
											<a
												href="https://wordpress.org/support/article/optimization/#Caching"
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more about page cache{" "}
												<span className="screen-reader-text">
													(opens in a new tab)
												</span>
												<span
													aria-hidden="true"
													className="dashicons dashicons-external"
												/>
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="site-health-view-more">
						<button
							type="button"
							className="button site-health-view-passed"
							aria-expanded="false"
							aria-controls="health-check-issues-good"
						>
							Passed tests <span className="icon" />
						</button>
					</div>
					<div
						className="site-health-issues-wrapper hidden"
						id="health-check-issues-good"
					>
						<h3 className="site-health-issue-count-title">
							<span className="issue-count">18</span> items with
							no issues detected
						</h3>
						<div
							id="health-check-site-status-good"
							className="health-check-accordion issues"
						>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-wordpress_version"
									type="button"
								>
									<span className="title">
										Your version of WordPress (6.1.1) is up
										to date
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-wordpress_version"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									You are currently running the latest version
									of WordPress available, keep it up!
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-plugin_version"
									type="button"
								>
									<span className="title">
										Your plugins are all up to date
									</span>
									<span className="badge blue">Security</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-plugin_version"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									Plugins extend your site’s functionality
									with things like contact forms, ecommerce
									and much more. That means they have deep
									access to your site, so it’s vital to keep
									them up to date.
								</p>
								<p>
									Your site has 7 active plugins, and they are
									all up to date.
								</p>
								<div className="actions">
									<p>
										<a href="https://byronw34.sg-host.com/wp-admin/plugins.php">
											Manage your plugins
										</a>
									</p>
								</div>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-php_extensions"
									type="button"
								>
									<span className="title">
										Required and recommended modules are
										installed
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-php_extensions"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									PHP modules perform most of the tasks on the
									server that make your site run. Any changes
									to these must be made by your server
									administrator.
								</p>
								<p>
									The WordPress Hosting Team maintains a list
									of those modules, both recommended and
									required, in{" "}
									<a
										href="https://make.wordpress.org/hosting/handbook/handbook/server-environment/#php-extensions"
										target="_blank"
										rel="noopener"
									>
										the team handbook{" "}
										<span className="screen-reader-text">
											(opens in a new tab)
										</span>
										<span
											aria-hidden="true"
											className="dashicons dashicons-external"
										/>
									</a>
									.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-php_default_timezone"
									type="button"
								>
									<span className="title">
										PHP default timezone is valid
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-php_default_timezone"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									PHP default timezone was configured by
									WordPress on loading. This is necessary for
									correct calculations of dates and times.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-php_sessions"
									type="button"
								>
									<span className="title">
										No PHP sessions detected
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-php_sessions"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									PHP sessions created by a{" "}
									<code>session_start()</code> function call
									may interfere with REST API and loopback
									requests. An active session should be closed
									by <code>session_write_close()</code> before
									making any HTTP requests.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-sql_server"
									type="button"
								>
									<span className="title">
										SQL server is up to date
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-sql_server"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									The SQL server is a required piece of
									software for the database WordPress uses to
									store all your site’s content and settings.
								</p>
								<div className="actions">
									<p>
										<a
											href="https://wordpress.org/about/requirements/"
											target="_blank"
											rel="noopener"
										>
											Learn more about what WordPress
											requires to run.{" "}
											<span className="screen-reader-text">
												(opens in a new tab)
											</span>
											<span
												aria-hidden="true"
												className="dashicons dashicons-external"
											/>
										</a>
									</p>
								</div>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-utf8mb4_support"
									type="button"
								>
									<span className="title">
										UTF8MB4 is supported
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-utf8mb4_support"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									UTF8MB4 is the character set WordPress
									prefers for database storage because it
									safely supports the widest set of characters
									and encodings, including Emoji, enabling
									better support for non-English languages.
								</p>
								<p>Your MySQL version supports utf8mb4.</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-ssl_support"
									type="button"
								>
									<span className="title">
										Your site can communicate securely with
										other services
									</span>
									<span className="badge blue">Security</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-ssl_support"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									Securely communicating between servers are
									needed for transactions such as fetching
									files, conducting sales on store sites, and
									much more.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-scheduled_events"
									type="button"
								>
									<span className="title">
										Scheduled events are running
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-scheduled_events"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									Scheduled events are what periodically looks
									for updates to plugins, themes and WordPress
									itself. It is also what makes sure scheduled
									posts are published on time. It may also be
									used by various plugins to make sure that
									planned actions are executed.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-http_requests"
									type="button"
								>
									<span className="title">
										HTTP requests seem to be working as
										expected
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-http_requests"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									It is possible for site maintainers to block
									all, or some, communication to other sites
									and services. If set up incorrectly, this
									may prevent plugins and themes from working
									as intended.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-rest_availability"
									type="button"
								>
									<span className="title">
										The REST API is available
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-rest_availability"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									The REST API is one way that WordPress and
									other applications communicate with the
									server. For example, the block editor screen
									relies on the REST API to display and save
									your posts and pages.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-is_in_debug_mode"
									type="button"
								>
									<span className="title">
										Your site is not set to output debug
										information
									</span>
									<span className="badge blue">Security</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-is_in_debug_mode"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									Debug mode is often enabled to gather more
									details about an error or site failure, but
									may contain sensitive information which
									should not be available on a publicly
									available website.
								</p>
								<div className="actions">
									<p>
										<a
											href="https://wordpress.org/support/article/debugging-in-wordpress/"
											target="_blank"
											rel="noopener"
										>
											Learn more about debugging in
											WordPress.{" "}
											<span className="screen-reader-text">
												(opens in a new tab)
											</span>
											<span
												aria-hidden="true"
												className="dashicons dashicons-external"
											/>
										</a>
									</p>
								</div>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-file_uploads"
									type="button"
								>
									<span className="title">
										Files can be uploaded
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-file_uploads"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									The <code>file_uploads</code> directive in{" "}
									<code>php.ini</code> determines if uploading
									files is allowed on your site.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-plugin_theme_auto_updates"
									type="button"
								>
									<span className="title">
										Plugin and theme auto-updates appear to
										be configured correctly
									</span>
									<span className="badge blue">Security</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-plugin_theme_auto_updates"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									Plugin and theme auto-updates ensure that
									the latest versions are always installed.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-persistent_object_cache"
									type="button"
								>
									<span className="title">
										A persistent object cache is not
										required
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-persistent_object_cache"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									A persistent object cache makes your site’s
									database more efficient, resulting in faster
									load times because WordPress can retrieve
									your site’s content and settings much more
									quickly.
								</p>
								<div className="actions">
									<p>
										<a
											href="https://wordpress.org/support/article/optimization/#persistent-object-cache"
											target="_blank"
											rel="noopener"
										>
											Learn more about persistent object
											caching.{" "}
											<span className="screen-reader-text">
												(opens in a new tab)
											</span>
											<span
												aria-hidden="true"
												className="dashicons dashicons-external"
											/>
										</a>
									</p>
								</div>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-dotorg_communication"
									type="button"
								>
									<span className="title">
										Can communicate with WordPress.org
									</span>
									<span className="badge blue">Security</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-dotorg_communication"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									Communicating with the WordPress servers is
									used to check for new versions, and to both
									install and update WordPress core, themes or
									plugins.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-loopback_requests"
									type="button"
								>
									<span className="title">
										Your site can perform loopback requests
									</span>
									<span className="badge blue">
										Performance
									</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-loopback_requests"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									Loopback requests are used to run scheduled
									events, and are also used by the built-in
									editors for themes and plugins to verify
									code stability.
								</p>
							</div>
							<h4 className="health-check-accordion-heading">
								<button
									aria-expanded="false"
									className="health-check-accordion-trigger"
									aria-controls="health-check-accordion-block-authorization_header"
									type="button"
								>
									<span className="title">
										The Authorization header is working as
										expected
									</span>
									<span className="badge blue">Security</span>
									<span className="icon" />
								</button>
							</h4>
							<div
								id="health-check-accordion-block-authorization_header"
								className="health-check-accordion-panel"
								hidden="hidden"
							>
								<p>
									The Authorization header is used by
									third-party applications you have approved
									for this site. Without this header, those
									apps cannot connect to your site.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
