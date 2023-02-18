export default function UserNew() {
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
									<li id="tab-link-user-roles">
										<a
											href="#tab-panel-user-roles"
											aria-controls="tab-panel-user-roles"
										>
											User Roles{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/users-add-new-screen/">
										Documentation on Adding New Users
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
										To add a new user to your site, fill in
										the form on this screen and click the
										Add New User button at the bottom.
									</p>
									<p>
										New users are automatically assigned a
										password, which they can change after
										logging in. You can view or edit the
										assigned password by clicking the Show
										Password button. The username cannot be
										changed once the user has been added.
									</p>
									<p>
										By default, new users will receive an
										email letting them know they’ve been
										added as a user for your site. This
										email will also contain a password reset
										link. Uncheck the box if you do not want
										to send the new user a welcome email.
									</p>
									<p>
										Remember to click the Add New User
										button at the bottom of this screen when
										you are finished.
									</p>{" "}
								</div>
								<div
									id="tab-panel-user-roles"
									className="help-tab-content"
								>
									<p>
										Here is a basic overview of the
										different user roles and the permissions
										associated with each one:
									</p>
									<ul>
										<li>
											Subscribers can read
											comments/comment/receive
											newsletters, etc. but cannot create
											regular site content.
										</li>
										<li>
											Contributors can write and manage
											their posts but not publish posts or
											upload media files.
										</li>
										<li>
											Authors can publish and manage their
											own posts, and are able to upload
											files.
										</li>
										<li>
											Editors can publish posts, manage
											posts as well as manage other
											people’s posts, etc.
										</li>
										<li>
											Administrators have access to all
											the administration features.
										</li>
									</ul>{" "}
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
					<h1 id="add-new-user">Add New User</h1>
					<div id="ajax-response" />
					<p>Create a brand new user and add them to this site.</p>
					<form
						method="post"
						name="createuser"
						id="createuser"
						className="validate"
						noValidate="novalidate"
					>
						<input
							name="action"
							type="hidden"
							defaultValue="createuser"
						/>
						<input
							type="hidden"
							id="_wpnonce_create-user"
							name="_wpnonce_create-user"
							defaultValue="ded357c57d"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/user-new.php"
						/>{" "}
						<table className="form-table" role="presentation">
							<tbody>
								<tr className="form-field form-required">
									<th scope="row">
										<label htmlFor="user_login">
											Username{" "}
											<span className="description">
												(required)
											</span>
										</label>
									</th>
									<td>
										<input
											name="user_login"
											type="text"
											id="user_login"
											defaultValue=""
											aria-required="true"
											autoCapitalize="none"
											autoCorrect="off"
											autoComplete="off"
											maxLength={60}
										/>
									</td>
								</tr>
								<tr className="form-field form-required">
									<th scope="row">
										<label htmlFor="email">
											Email{" "}
											<span className="description">
												(required)
											</span>
										</label>
									</th>
									<td>
										<input
											name="email"
											type="email"
											id="email"
											defaultValue=""
										/>
									</td>
								</tr>
								<tr className="form-field">
									<th scope="row">
										<label htmlFor="first_name">
											First Name{" "}
										</label>
									</th>
									<td>
										<input
											name="first_name"
											type="text"
											id="first_name"
											defaultValue=""
										/>
									</td>
								</tr>
								<tr className="form-field">
									<th scope="row">
										<label htmlFor="last_name">
											Last Name{" "}
										</label>
									</th>
									<td>
										<input
											name="last_name"
											type="text"
											id="last_name"
											defaultValue=""
										/>
									</td>
								</tr>
								<tr className="form-field">
									<th scope="row">
										<label htmlFor="url">Website</label>
									</th>
									<td>
										<input
											name="url"
											type="url"
											id="url"
											className="code"
											defaultValue=""
										/>
									</td>
								</tr>
								<tr className="form-field form-required user-pass1-wrap">
									<th scope="row">
										<label htmlFor="pass1">
											Password{" "}
											<span className="description hide-if-js">
												(required)
											</span>
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
										>
											Generate password
										</button>
										<div className="wp-pwd">
											<span className="password-input-wrapper">
												<input
													type="text"
													name="pass1"
													id="pass1"
													className="regular-text strong"
													autoComplete="new-password"
													data-reveal={1}
													data-pw="l^5w20kKrJLuQF!ijaMuf74D"
													aria-describedby="pass-strength-result"
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
											<div
												style={{}}
												id="pass-strength-result"
												aria-live="polite"
												className="strong"
											>
												Strong
											</div>
										</div>
									</td>
								</tr>
								<tr
									className="form-field form-required user-pass2-wrap hide-if-js"
									style={{ display: "none" }}
								>
									<th scope="row">
										<label htmlFor="pass2">
											Repeat Password{" "}
											<span className="description">
												(required)
											</span>
										</label>
									</th>
									<td>
										<input
											name="pass2"
											type="password"
											id="pass2"
											autoComplete="new-password"
											aria-describedby="pass2-desc"
										/>
										<p
											className="description"
											id="pass2-desc"
										>
											Type the password again.
										</p>
									</td>
								</tr>
								<tr
									className="pw-weak"
									style={{ display: "none" }}
								>
									<th>Confirm Password</th>
									<td>
										<label>
											<input
												type="checkbox"
												name="pw_weak"
												className="pw-checkbox"
											/>
											Confirm use of weak password{" "}
										</label>
									</td>
								</tr>
								<tr>
									<th scope="row">Send User Notification</th>
									<td>
										<input
											type="checkbox"
											name="send_user_notification"
											id="send_user_notification"
											defaultValue={1}
											defaultChecked="checked"
										/>
										<label htmlFor="send_user_notification">
											Send the new user an email about
											their account.
										</label>
									</td>
								</tr>
								<tr className="form-field">
									<th scope="row">
										<label htmlFor="role">Role</label>
									</th>
									<td>
										<select name="role" id="role">
											<option
												selected="selected"
												value="subscriber"
											>
												Subscriber
											</option>
											<option value="contributor">
												Contributor
											</option>
											<option value="author">
												Author
											</option>
											<option value="editor">
												Editor
											</option>
											<option value="administrator">
												Administrator
											</option>{" "}
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<p className="submit">
							<input
								type="submit"
								name="createuser"
								id="createusersub"
								className="button button-primary"
								defaultValue="Add New User"
							/>
						</p>
					</form>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
