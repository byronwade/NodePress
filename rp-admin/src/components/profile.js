export default function Profile() {
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
									<a href="https://wordpress.org/support/article/users-your-profile-screen/">
										Documentation on User Profiles
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
										Your profile contains information about
										you (your “account”) as well as some
										personal options related to using
										WordPress.
									</p>
									<p>
										You can change your password, turn on
										keyboard shortcuts, change the color
										scheme of your WordPress administration
										screens, and turn off the WYSIWYG
										(Visual) editor, among other things. You
										can hide the Toolbar (formerly called
										the Admin Bar) from the front end of
										your site, however it cannot be disabled
										on the admin screens.
									</p>
									<p>
										You can select the language you wish to
										use while using the WordPress
										administration screen without affecting
										the language site visitors see.
									</p>
									<p>
										Your username cannot be changed, but you
										can use other fields to enter your real
										name or a nickname, and change which
										name to display on your posts.
									</p>
									<p>
										You can log out of other devices, such
										as your phone or a public computer, by
										clicking the Log Out Everywhere Else
										button.
									</p>
									<p>
										Required fields are indicated; the rest
										are optional. Profile information will
										only be displayed if your theme is set
										up to do so.
									</p>
									<p>
										Remember to click the Update Profile
										button when you are finished.
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
				<div className="wrap" id="profile-page">
					<h1 className="wp-heading-inline">Profile </h1>
					<hr className="wp-header-end" />
					<form
						id="your-profile"
						action="https://byronw34.sg-host.com/wp-admin/profile.php"
						method="post"
						noValidate="novalidate"
					>
						<input
							type="hidden"
							id="_wpnonce"
							name="_wpnonce"
							defaultValue="256744425c"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/profile.php"
						/>{" "}
						<p>
							<input
								type="hidden"
								name="from"
								defaultValue="profile"
							/>
							<input
								type="hidden"
								name="checkuser_id"
								defaultValue={1}
							/>
						</p>
						<h2>Personal Options</h2>
						<table className="form-table" role="presentation">
							<tbody>
								<tr className="user-rich-editing-wrap">
									<th scope="row">Visual Editor</th>
									<td>
										<label htmlFor="rich_editing">
											<input
												name="rich_editing"
												type="checkbox"
												id="rich_editing"
												defaultValue="false"
											/>
											Disable the visual editor when
											writing{" "}
										</label>
									</td>
								</tr>
								<tr className="user-syntax-highlighting-wrap">
									<th scope="row">Syntax Highlighting</th>
									<td>
										<label htmlFor="syntax_highlighting">
											<input
												name="syntax_highlighting"
												type="checkbox"
												id="syntax_highlighting"
												defaultValue="false"
											/>
											Disable syntax highlighting when
											editing code{" "}
										</label>
									</td>
								</tr>
								<tr className="user-admin-color-wrap">
									<th scope="row">Admin Color Scheme</th>
									<td>
										<fieldset
											id="color-picker"
											className="scheme-list"
										>
											<legend className="screen-reader-text">
												<span>Admin Color Scheme</span>
											</legend>
											<input
												type="hidden"
												id="color-nonce"
												name="color-nonce"
												defaultValue="7c4bbf1aa3"
											/>{" "}
											<div className="color-option selected">
												<input
													name="admin_color"
													id="admin_color_fresh"
													type="radio"
													defaultValue="fresh"
													className="tog"
													defaultChecked="checked"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue=""
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#a7aaad","focus":"#72aee6","current":"#fff"}}'
												/>
												<label htmlFor="admin_color_fresh">
													Default
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#1d2327",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#2c3338",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#2271b1",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#72aee6",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="color-option ">
												<input
													name="admin_color"
													id="admin_color_light"
													type="radio"
													defaultValue="light"
													className="tog"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue="https://byronw34.sg-host.com/wp-admin/css/colors/light/colors.min.css"
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#999","focus":"#ccc","current":"#ccc"}}'
												/>
												<label htmlFor="admin_color_light">
													Light
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#e5e5e5",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#999",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#d64e07",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#04a4cc",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="color-option ">
												<input
													name="admin_color"
													id="admin_color_modern"
													type="radio"
													defaultValue="modern"
													className="tog"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue="https://byronw34.sg-host.com/wp-admin/css/colors/modern/colors.min.css"
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#f3f1f1","focus":"#fff","current":"#fff"}}'
												/>
												<label htmlFor="admin_color_modern">
													Modern
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#1e1e1e",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#3858e9",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#33f078",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="color-option ">
												<input
													name="admin_color"
													id="admin_color_blue"
													type="radio"
													defaultValue="blue"
													className="tog"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue="https://byronw34.sg-host.com/wp-admin/css/colors/blue/colors.min.css"
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#e5f8ff","focus":"#fff","current":"#fff"}}'
												/>
												<label htmlFor="admin_color_blue">
													Blue
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#096484",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#4796b3",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#52accc",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#74B6CE",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="color-option ">
												<input
													name="admin_color"
													id="admin_color_coffee"
													type="radio"
													defaultValue="coffee"
													className="tog"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue="https://byronw34.sg-host.com/wp-admin/css/colors/coffee/colors.min.css"
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#f3f2f1","focus":"#fff","current":"#fff"}}'
												/>
												<label htmlFor="admin_color_coffee">
													Coffee
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#46403c",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#59524c",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#c7a589",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#9ea476",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="color-option ">
												<input
													name="admin_color"
													id="admin_color_ectoplasm"
													type="radio"
													defaultValue="ectoplasm"
													className="tog"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue="https://byronw34.sg-host.com/wp-admin/css/colors/ectoplasm/colors.min.css"
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#ece6f6","focus":"#fff","current":"#fff"}}'
												/>
												<label htmlFor="admin_color_ectoplasm">
													Ectoplasm
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#413256",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#523f6d",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#a3b745",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#d46f15",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="color-option ">
												<input
													name="admin_color"
													id="admin_color_midnight"
													type="radio"
													defaultValue="midnight"
													className="tog"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue="https://byronw34.sg-host.com/wp-admin/css/colors/midnight/colors.min.css"
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#f1f2f3","focus":"#fff","current":"#fff"}}'
												/>
												<label htmlFor="admin_color_midnight">
													Midnight
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#25282b",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#363b3f",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#69a8bb",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#e14d43",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="color-option ">
												<input
													name="admin_color"
													id="admin_color_ocean"
													type="radio"
													defaultValue="ocean"
													className="tog"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue="https://byronw34.sg-host.com/wp-admin/css/colors/ocean/colors.min.css"
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#f2fcff","focus":"#fff","current":"#fff"}}'
												/>
												<label htmlFor="admin_color_ocean">
													Ocean
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#627c83",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#738e96",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#9ebaa0",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#aa9d88",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="color-option ">
												<input
													name="admin_color"
													id="admin_color_sunrise"
													type="radio"
													defaultValue="sunrise"
													className="tog"
												/>
												<input
													type="hidden"
													className="css_url"
													defaultValue="https://byronw34.sg-host.com/wp-admin/css/colors/sunrise/colors.min.css"
												/>
												<input
													type="hidden"
													className="icon_colors"
													defaultValue='{"icons":{"base":"#f3f1f1","focus":"#fff","current":"#fff"}}'
												/>
												<label htmlFor="admin_color_sunrise">
													Sunrise
												</label>
												<table className="color-palette">
													<tbody>
														<tr>
															<td
																style={{
																	backgroundColor:
																		"#b43c38",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#cf4944",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#dd823b",
																}}
															>
																&nbsp;
															</td>
															<td
																style={{
																	backgroundColor:
																		"#ccaf0b",
																}}
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</fieldset>
									</td>
								</tr>
								<tr className="user-comment-shortcuts-wrap">
									<th scope="row">Keyboard Shortcuts</th>
									<td>
										<label htmlFor="comment_shortcuts">
											<input
												type="checkbox"
												name="comment_shortcuts"
												id="comment_shortcuts"
												defaultValue="true"
											/>
											Enable keyboard shortcuts for
											comment moderation.{" "}
										</label>
										<a
											href="https://wordpress.org/support/article/keyboard-shortcuts/"
											target="_blank"
										>
											More information
										</a>{" "}
									</td>
								</tr>
								<tr className="show-admin-bar user-admin-bar-front-wrap">
									<th scope="row">Toolbar</th>
									<td>
										<label htmlFor="admin_bar_front">
											<input
												name="admin_bar_front"
												type="checkbox"
												id="admin_bar_front"
												defaultValue={1}
												defaultChecked="checked"
											/>
											Show Toolbar when viewing site{" "}
										</label>
										<br />
									</td>
								</tr>
							</tbody>
						</table>
						<h2>Name</h2>
						<table className="form-table" role="presentation">
							<tbody>
								<tr className="user-user-login-wrap">
									<th>
										<label htmlFor="user_login">
											Username
										</label>
									</th>
									<td>
										<input
											type="text"
											name="user_login"
											id="user_login"
											defaultValue="bcw1995@gmail.com"
											disabled="disabled"
											className="regular-text"
										/>{" "}
										<span className="description">
											Usernames cannot be changed.
										</span>
									</td>
								</tr>
								<tr className="user-first-name-wrap">
									<th>
										<label htmlFor="first_name">
											First Name
										</label>
									</th>
									<td>
										<input
											type="text"
											name="first_name"
											id="first_name"
											defaultValue=""
											className="regular-text"
										/>
									</td>
								</tr>
								<tr className="user-last-name-wrap">
									<th>
										<label htmlFor="last_name">
											Last Name
										</label>
									</th>
									<td>
										<input
											type="text"
											name="last_name"
											id="last_name"
											defaultValue=""
											className="regular-text"
										/>
									</td>
								</tr>
								<tr className="user-nickname-wrap">
									<th>
										<label htmlFor="nickname">
											Nickname{" "}
											<span className="description">
												(required)
											</span>
										</label>
									</th>
									<td>
										<input
											type="text"
											name="nickname"
											id="nickname"
											defaultValue="bcw1995@gmail.com"
											className="regular-text"
										/>
									</td>
								</tr>
								<tr className="user-display-name-wrap">
									<th>
										<label htmlFor="display_name">
											Display name publicly as
										</label>
									</th>
									<td>
										<select
											name="display_name"
											id="display_name"
										>
											<option selected="selected">
												bcw1995@gmail.com
											</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<h2>Contact Info</h2>
						<table className="form-table" role="presentation">
							<tbody>
								<tr className="user-email-wrap">
									<th>
										<label htmlFor="email">
											Email{" "}
											<span className="description">
												(required)
											</span>
										</label>
									</th>
									<td>
										<input
											type="email"
											name="email"
											id="email"
											aria-describedby="email-description"
											defaultValue="bcw1995@gmail.com"
											className="regular-text ltr"
										/>
										<p
											className="description"
											id="email-description"
										>
											If you change this, an email will be
											sent at your new address to confirm
											it.{" "}
											<strong>
												The new address will not become
												active until confirmed.
											</strong>{" "}
										</p>
									</td>
								</tr>
								<tr className="user-url-wrap">
									<th>
										<label htmlFor="url">Website</label>
									</th>
									<td>
										<input
											type="url"
											name="url"
											id="url"
											defaultValue="http://byronw34.sg-host.com"
											className="regular-text code"
										/>
									</td>
								</tr>
							</tbody>
						</table>
						<h2>About Yourself</h2>
						<table className="form-table" role="presentation">
							<tbody>
								<tr className="user-description-wrap">
									<th>
										<label htmlFor="description">
											Biographical Info
										</label>
									</th>
									<td>
										<textarea
											name="description"
											id="description"
											rows={5}
											cols={30}
											defaultValue={""}
										/>
										<p className="description">
											Share a little biographical
											information to fill out your
											profile. This may be shown publicly.
										</p>
									</td>
								</tr>
								<tr className="user-profile-picture">
									<th>Profile Picture</th>
									<td>
										<img
											alt=""
											src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=96&d=mm&r=g"
											srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=192&d=mm&r=g 2x"
											className="avatar avatar-96 photo"
											height={96}
											width={96}
											loading="lazy"
											decoding="async"
										/>{" "}
										<p className="description">
											<a href="https://en.gravatar.com/">
												You can change your profile
												picture on Gravatar
											</a>
											.{" "}
										</p>
									</td>
								</tr>
							</tbody>
						</table>
						<h2>Account Management</h2>
						<table className="form-table" role="presentation">
							<tbody>
								<tr id="password" className="user-pass1-wrap">
									<th>
										<label htmlFor="pass1">
											New Password
										</label>
									</th>
									<td>
										<input
											className="hidden"
											defaultValue=" "
										/>
										{/* #24364 workaround */}
										<button
											type="button"
											className="button wp-generate-pw hide-if-no-js"
											aria-expanded="false"
										>
											Set New Password
										</button>
										<div className="wp-pwd hide-if-js">
											<span className="password-input-wrapper">
												<input
													type="password"
													name="pass1"
													id="pass1"
													className="regular-text"
													defaultValue=""
													autoComplete="new-password"
													data-pw="gG0t6XoHo7ze0UXGVO#&tjp!"
													aria-describedby="pass-strength-result"
													disabled=""
												/>
											</span>
											<button
												type="button"
												className="button wp-hide-pw hide-if-no-js"
												data-toggle={0}
												aria-label="Hide password"
											>
												<span
													className="dashicons dashicons-hidden"
													aria-hidden="true"
												/>
												<span className="text">
													Hide
												</span>
											</button>
											<button
												type="button"
												className="button wp-cancel-pw hide-if-no-js"
												data-toggle={0}
												aria-label="Cancel password change"
											>
												<span
													className="dashicons dashicons-no"
													aria-hidden="true"
												/>
												<span className="text">
													Cancel
												</span>
											</button>
											<div
												style={{}}
												id="pass-strength-result"
												aria-live="polite"
											/>
										</div>
									</td>
								</tr>
								<tr
									className="user-pass2-wrap hide-if-js"
									style={{ display: "none" }}
								>
									<th scope="row">
										<label htmlFor="pass2">
											Repeat New Password
										</label>
									</th>
									<td>
										<input
											name="pass2"
											type="password"
											id="pass2"
											className="regular-text"
											defaultValue=""
											autoComplete="new-password"
											aria-describedby="pass2-desc"
											disabled=""
										/>
										<p
											className="description"
											id="pass2-desc"
										>
											Type your new password again.
										</p>
									</td>
								</tr>
								<tr className="pw-weak">
									<th>Confirm Password</th>
									<td>
										<label>
											<input
												type="checkbox"
												name="pw_weak"
												className="pw-checkbox"
											/>
											<span id="pw-weak-text-label">
												Confirm use of weak password
											</span>
										</label>
									</td>
								</tr>
								<tr className="user-sessions-wrap hide-if-no-js">
									<th>Sessions</th>
									<td aria-live="assertive">
										<div className="destroy-sessions">
											<button
												type="button"
												className="button"
												id="destroy-sessions"
											>
												Log Out Everywhere Else
											</button>
										</div>
										<p className="description">
											Did you lose your phone or leave
											your account logged in at a public
											computer? You can log out everywhere
											else, and stay logged in here.{" "}
										</p>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							className="application-passwords hide-if-no-js"
							id="application-passwords-section"
						>
							<h2>Application Passwords</h2>
							<p>
								Application passwords allow authentication via
								non-interactive systems, such as XML-RPC or the
								REST API, without providing your actual
								password. Application passwords can be easily
								revoked. They cannot be used for traditional
								logins to your website.
							</p>
							<div className="create-application-password form-wrap">
								<div className="form-field">
									<label htmlFor="new_application_password_name">
										New Application Password Name
									</label>
									<input
										type="text"
										size={30}
										id="new_application_password_name"
										name="new_application_password_name"
										className="input"
										aria-required="true"
										aria-describedby="new_application_password_name_desc"
									/>
									<p
										className="description"
										id="new_application_password_name_desc"
									>
										Required to create an Application
										Password, but not to update the user.
									</p>
								</div>
								<button
									type="button"
									name="do_new_application_password"
									id="do_new_application_password"
									className="button button-secondary"
								>
									Add New Application Password
								</button>
							</div>
							<div
								className="application-passwords-list-table-wrapper"
								style={{ display: "none" }}
							>
								<div className="tablenav top">
									<div className="alignleft actions bulkactions"></div>
									<br className="clear" />
								</div>
								<table className="wp-list-table widefat fixed striped table-view-list application-passwords-user">
									<thead>
										<tr>
											<th
												scope="col"
												id="name"
												className="manage-column column-name column-primary"
											>
												Name
											</th>
											<th
												scope="col"
												id="created"
												className="manage-column column-created"
											>
												Created
											</th>
											<th
												scope="col"
												id="last_used"
												className="manage-column column-last_used"
											>
												Last Used
											</th>
											<th
												scope="col"
												id="last_ip"
												className="manage-column column-last_ip"
											>
												Last IP
											</th>
											<th
												scope="col"
												id="revoke"
												className="manage-column column-revoke"
											>
												Revoke
											</th>{" "}
										</tr>
									</thead>
									<tbody id="the-list">
										<tr className="no-items">
											<td
												className="colspanchange"
												colSpan={5}
											>
												No items found.
											</td>
										</tr>{" "}
									</tbody>
									<tfoot>
										<tr>
											<th
												scope="col"
												className="manage-column column-name column-primary"
											>
												Name
											</th>
											<th
												scope="col"
												className="manage-column column-created"
											>
												Created
											</th>
											<th
												scope="col"
												className="manage-column column-last_used"
											>
												Last Used
											</th>
											<th
												scope="col"
												className="manage-column column-last_ip"
											>
												Last IP
											</th>
											<th
												scope="col"
												className="manage-column column-revoke"
											>
												Revoke
											</th>{" "}
										</tr>
									</tfoot>
								</table>
								<div className="tablenav bottom">
									<div className="alignright">
										<button
											type="button"
											name="revoke-all-application-passwords"
											id="revoke-all-application-passwords"
											className="button delete"
										>
											Revoke all application passwords
										</button>
									</div>
									<div className="alignleft actions bulkactions"></div>
									<br className="clear" />
								</div>
							</div>
						</div>
						<input
							type="hidden"
							name="action"
							defaultValue="update"
						/>
						<input
							type="hidden"
							name="user_id"
							id="user_id"
							defaultValue={1}
						/>
						<p className="submit">
							<input
								type="submit"
								name="submit"
								id="submit"
								className="button button-primary"
								defaultValue="Update Profile"
							/>
						</p>
					</form>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
