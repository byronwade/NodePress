export default function Toolbar() {
	return (
		<>
			<div id="wpadminbar" className="nojq">
				<div
					className="quicklinks"
					id="wp-toolbar"
					role="navigation"
					aria-label="Toolbar"
				>
					<ul id="wp-admin-bar-root-default" className="ab-top-menu">
						<li id="wp-admin-bar-menu-toggle">
							<a
								className="ab-item"
								href="#"
								aria-expanded="false"
							>
								<span className="ab-icon" aria-hidden="true" />
								<span className="screen-reader-text">Menu</span>
							</a>
						</li>
						<li id="wp-admin-bar-wp-logo" className="menupop">
							<a
								className="ab-item"
								aria-haspopup="true"
								href="#"
							>
								<span className="ab-icon" aria-hidden="true" />
								<span className="screen-reader-text">
									About WordPress
								</span>
							</a>
							<div className="ab-sub-wrapper">
								<ul
									id="wp-admin-bar-wp-logo-default"
									className="ab-submenu"
								>
									<li id="wp-admin-bar-about">
										<a className="ab-item" href="#">
											About WordPress
										</a>
									</li>
								</ul>
								<ul
									id="wp-admin-bar-wp-logo-external"
									className="ab-sub-secondary ab-submenu"
								>
									<li id="wp-admin-bar-wporg">
										<a className="ab-item" href="#">
											WordPress.org
										</a>
									</li>
									<li id="wp-admin-bar-documentation">
										<a className="ab-item" href="#">
											Documentation
										</a>
									</li>
									<li id="wp-admin-bar-support-forums">
										<a className="ab-item" href="#">
											Support
										</a>
									</li>
									<li id="wp-admin-bar-feedback">
										<a className="ab-item" href="#">
											Feedback
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li id="wp-admin-bar-site-name" className="menupop">
							<a
								className="ab-item"
								aria-haspopup="true"
								href="#"
							>
								My WordPress
							</a>
							<div className="ab-sub-wrapper">
								<ul
									id="wp-admin-bar-site-name-default"
									className="ab-submenu"
								>
									<li id="wp-admin-bar-view-site">
										<a className="ab-item" href="#">
											Visit Site
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li id="wp-admin-bar-comments">
							<a className="ab-item" href="#">
								<span className="ab-icon" aria-hidden="true" />
								<span
									className="ab-label awaiting-mod pending-count count-0"
									aria-hidden="true"
								>
									0
								</span>
								<span className="screen-reader-text comments-in-moderation-text">
									0 Comments in moderation
								</span>
							</a>
						</li>
						<li id="wp-admin-bar-new-content" className="menupop">
							<a
								className="ab-item"
								aria-haspopup="true"
								href="#"
							>
								<span className="ab-icon" aria-hidden="true" />
								<span className="ab-label">New</span>
							</a>
							<div className="ab-sub-wrapper">
								<ul
									id="wp-admin-bar-new-content-default"
									className="ab-submenu"
								>
									<li id="wp-admin-bar-new-post">
										<a className="ab-item" href="#">
											Post
										</a>
									</li>
									<li id="wp-admin-bar-new-media">
										<a className="ab-item" href="#">
											Media
										</a>
									</li>
									<li id="wp-admin-bar-new-page">
										<a className="ab-item" href="#">
											Page
										</a>
									</li>
									<li id="wp-admin-bar-new-projects">
										<a className="ab-item" href="#">
											Project
										</a>
									</li>
									<li id="wp-admin-bar-new-user">
										<a className="ab-item" href="#">
											User
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
					<ul
						id="wp-admin-bar-top-secondary"
						className="ab-top-secondary ab-top-menu"
					>
						<li
							id="wp-admin-bar-my-account"
							className="menupop with-avatar"
						>
							<a
								className="ab-item"
								aria-haspopup="true"
								href="#"
							>
								Howdy,{" "}
								<span className="display-name">
									bcw1995@gmail.com
								</span>
								<img
									alt=""
									src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=26&d=mm&r=g"
									srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=52&d=mm&r=g 2x"
									className="avatar avatar-26 photo"
									height={26}
									width={26}
									loading="lazy"
									decoding="async"
								/>
							</a>
							<div className="ab-sub-wrapper">
								<ul
									id="wp-admin-bar-user-actions"
									className="ab-submenu"
								>
									<li id="wp-admin-bar-user-info">
										<a
											className="ab-item"
											tabIndex={-1}
											href="#"
										>
											<img
												alt=""
												src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&d=mm&r=g"
												srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=128&d=mm&r=g 2x"
												className="avatar avatar-64 photo"
												height={64}
												width={64}
												loading="lazy"
												decoding="async"
											/>
											<span className="display-name">
												bcw1995@gmail.com
											</span>
										</a>
									</li>
									<li id="wp-admin-bar-edit-profile">
										<a className="ab-item" href="#">
											Edit Profile
										</a>
									</li>
									<li id="wp-admin-bar-logout">
										<a className="ab-item" href="#">
											Log Out
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>{" "}
				</div>
				<a className="screen-reader-shortcut" href="#">
					Log Out
				</a>
			</div>
		</>
	);
}
