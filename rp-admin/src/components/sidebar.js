import React from "react";

export default function Sidebar() {
	return (
		<>
			<div id="adminmenumain" role="navigation" aria-label="Main menu">
				<a href="#" className="screen-reader-shortcut">
					Skip to main content
				</a>
				<a href="#" className="screen-reader-shortcut">
					Skip to toolbar
				</a>
				<div id="adminmenuback" />
				<div id="adminmenuwrap">
					<ul id="adminmenu">
						<li
							className="wp-first-item wp-has-submenu wp-not-current-submenu menu-top menu-top-first menu-icon-dashboard menu-top-last"
							id="menu-dashboard"
						>
							<a
								href="#"
								className="wp-first-item wp-has-submenu wp-not-current-submenu menu-top menu-top-first menu-icon-dashboard menu-top-last"
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-dashboard"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">Dashboard</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Dashboard
								</li>
								<li className="wp-first-item">
									<a href="#" className="wp-first-item">
										Home
									</a>
								</li>
								<li>
									<a href="#">
										Updates{" "}
										<span className="update-plugins count-0">
											<span className="update-count">
												0
											</span>
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-not-current-submenu wp-menu-separator"
							aria-hidden="true"
						>
							<div className="separator" />
						</li>
						<li
							className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"
							id="menu-posts"
						>
							<a
								href="#"
								className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-post open-if-no-js menu-top-first"
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-post"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">Posts</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Posts
								</li>
								<li className="wp-first-item">
									<a href="#" className="wp-first-item">
										All Posts
									</a>
								</li>
								<li>
									<a href="#">Add New</a>
								</li>
								<li>
									<a href="#">Categories</a>
								</li>
								<li>
									<a href="#">Tags</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-media"
							id="menu-media"
						>
							<a
								href="#"
								className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-media"
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-media"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">Media</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Media
								</li>
								<li className="wp-first-item">
									<a href="#" className="wp-first-item">
										Library
									</a>
								</li>
								<li>
									<a href="#">Add New</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-icon-page"
							id="menu-pages"
						>
							<a
								href="#"
								className="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-icon-page"
								aria-haspopup="false"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-page"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">Pages</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Pages
								</li>
								<li className="wp-first-item current">
									<a
										href="#"
										className="wp-first-item current"
										aria-current="page"
									>
										All Pages
									</a>
								</li>
								<li>
									<a href="#">Add New</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-not-current-submenu menu-top menu-icon-comments"
							id="menu-comments"
						>
							<a
								href="#"
								className="wp-not-current-submenu menu-top menu-icon-comments"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-comments"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">
									Comments{" "}
									<span className="awaiting-mod count-0">
										<span
											className="pending-count"
											aria-hidden="true"
										>
											0
										</span>
										<span className="comments-in-moderation-text screen-reader-text">
											0 Comments in moderation
										</span>
									</span>
								</div>
							</a>
						</li>
						<li
							className="wp-not-current-submenu wp-menu-separator"
							aria-hidden="true"
						>
							<div className="separator" />
						</li>
						<li
							className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first"
							id="menu-appearance"
						>
							<a
								href="#"
								className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-appearance menu-top-first"
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-appearance"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">Appearance</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Appearance
								</li>
								<li className="wp-first-item">
									<a href="#" className="wp-first-item">
										Themes{" "}
										<span className="update-plugins count-0">
											<span className="theme-count">
												0
											</span>
										</span>
									</a>
								</li>
								<li className="hide-if-no-customize">
									<a
										href="#"
										className="hide-if-no-customize"
									>
										Customize
									</a>
								</li>
								<li>
									<a href="#">Menus</a>
								</li>
								<li>
									<a href="#">Theme File Editor</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins"
							id="menu-plugins"
						>
							<a
								href="#"
								className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-plugins"
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-plugins"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">
									Plugins{" "}
									<span className="update-plugins count-0">
										<span className="plugin-count">0</span>
									</span>
								</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Plugins{" "}
									<span className="update-plugins count-0">
										<span className="plugin-count">0</span>
									</span>
								</li>
								<li className="wp-first-item">
									<a href="#" className="wp-first-item">
										Installed Plugins
									</a>
								</li>
								<li>
									<a href="#">Add New</a>
								</li>
								<li>
									<a href="#">Plugin File Editor</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-users"
							id="menu-users"
						>
							<a
								href="#"
								className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-users"
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-users"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">Users</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Users
								</li>
								<li className="wp-first-item">
									<a href="#" className="wp-first-item">
										All Users
									</a>
								</li>
								<li>
									<a href="#">Add New</a>
								</li>
								<li>
									<a href="#">Profile</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-tools"
							id="menu-tools"
						>
							<a
								href="#"
								className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-tools"
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-tools"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">Tools</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Tools
								</li>
								<li className="wp-first-item">
									<a href="#" className="wp-first-item">
										Available Tools
									</a>
								</li>
								<li>
									<a href="#">Import</a>
								</li>
								<li>
									<a href="#">Export</a>
								</li>
								<li>
									<a href="#">
										Site Health{" "}
										<span className="menu-counter site-health-counter count-0">
											<span className="count">0</span>
										</span>
									</a>
								</li>
								<li>
									<a href="#">Export Personal Data</a>
								</li>
								<li>
									<a href="#">Erase Personal Data</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last"
							id="menu-settings"
						>
							<a
								href="#"
								className="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last"
								aria-haspopup="true"
							>
								<div className="wp-menu-arrow">
									<div />
								</div>
								<div
									className="wp-menu-image dashicons-before dashicons-admin-settings"
									aria-hidden="true"
								>
									<br />
								</div>
								<div className="wp-menu-name">Settings</div>
							</a>
							<ul className="wp-submenu wp-submenu-wrap">
								<li
									className="wp-submenu-head"
									aria-hidden="true"
								>
									Settings
								</li>
								<li className="wp-first-item">
									<a href="#" className="wp-first-item">
										General
									</a>
								</li>
								<li>
									<a href="#">Writing</a>
								</li>
								<li>
									<a href="#">Reading</a>
								</li>
								<li>
									<a href="#">Discussion</a>
								</li>
								<li>
									<a href="#">Media</a>
								</li>
								<li>
									<a href="#">Permalinks</a>
								</li>
								<li>
									<a href="#">Privacy</a>
								</li>
								<li>
									<a href="#">Headless Mode</a>
								</li>
							</ul>
						</li>
						<li
							className="wp-not-current-submenu wp-menu-separator"
							aria-hidden="true"
						>
							<div className="separator" />
						</li>
						<li id="collapse-menu" className="hide-if-no-js">
							<button
								type="button"
								id="collapse-button"
								aria-label="Collapse Main menu"
								aria-expanded="true"
							>
								<span
									className="collapse-button-icon"
									aria-hidden="true"
								/>
								<span className="collapse-button-label">
									Collapse menu
								</span>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
