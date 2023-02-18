export default function OptionsWriting() {
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
									<li id="tab-link-options-postemail">
										<a
											href="#tab-panel-options-postemail"
											aria-controls="tab-panel-options-postemail"
										>
											Post Via Email{" "}
										</a>
									</li>
									<li id="tab-link-options-services">
										<a
											href="#tab-panel-options-services"
											aria-controls="tab-panel-options-services"
										>
											Update Services{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/settings-writing-screen/">
										Documentation on Writing Settings
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
										You can submit content in several
										different ways; this screen holds the
										settings for all of them. The top
										section controls the editor within the
										dashboard, while the rest control
										external publishing methods. For more
										information on any of these methods, use
										the documentation links.
									</p>
									<p>
										You must click the Save Changes button
										at the bottom of the screen for new
										settings to take effect.
									</p>{" "}
								</div>
								<div
									id="tab-panel-options-postemail"
									className="help-tab-content"
								>
									<p>
										Post via email settings allow you to
										send your WordPress installation an
										email with the content of your post. You
										must set up a secret email account with
										POP3 access to use this, and any mail
										received at this address will be posted,
										so it’s a good idea to keep this address
										very secret.
									</p>{" "}
								</div>
								<div
									id="tab-panel-options-services"
									className="help-tab-content"
								>
									<p>
										If desired, WordPress will automatically
										alert various services of your new
										posts.
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
					<h1>Writing Settings</h1>
					<form method="post" action="options.php">
						<input
							type="hidden"
							name="option_page"
							defaultValue="writing"
						/>
						<input
							type="hidden"
							name="action"
							defaultValue="update"
						/>
						<input
							type="hidden"
							id="_wpnonce"
							name="_wpnonce"
							defaultValue="2e7b30a1b3"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/options-writing.php"
						/>
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">
										<label htmlFor="default_category">
											Default Post Category
										</label>
									</th>
									<td>
										<select
											name="default_category"
											id="default_category"
											className="postform"
										>
											<option
												className="level-0"
												value={1}
												selected="selected"
											>
												Uncategorized
											</option>
										</select>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="default_post_format">
											Default Post Format
										</label>
									</th>
									<td>
										<select
											name="default_post_format"
											id="default_post_format"
										>
											<option value={0}>Standard</option>
											<option value="aside">Aside</option>
											<option value="chat">Chat</option>
											<option value="gallery">
												Gallery
											</option>
											<option value="link">Link</option>
											<option value="image">Image</option>
											<option value="quote">Quote</option>
											<option value="status">
												Status
											</option>
											<option value="video">Video</option>
											<option value="audio">Audio</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<h2 className="title">Post via email</h2>
						<p>
							To post to WordPress by email, you must set up a
							secret email account with POP3 access. Any mail
							received at this address will be posted, so it’s a
							good idea to keep this address very secret. Here are
							three random strings you could use:{" "}
							<kbd>hrpf0e6F</kbd>, <kbd>El3rI6Na</kbd>,{" "}
							<kbd>8jqvaJ5P</kbd>.
						</p>
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">
										<label htmlFor="mailserver_url">
											Mail Server
										</label>
									</th>
									<td>
										<input
											name="mailserver_url"
											type="text"
											id="mailserver_url"
											defaultValue="mail.example.com"
											className="regular-text code"
										/>
										<label htmlFor="mailserver_port">
											Port
										</label>
										<input
											name="mailserver_port"
											type="text"
											id="mailserver_port"
											defaultValue={110}
											className="small-text"
										/>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="mailserver_login">
											Login Name
										</label>
									</th>
									<td>
										<input
											name="mailserver_login"
											type="text"
											id="mailserver_login"
											defaultValue="login@example.com"
											className="regular-text ltr"
										/>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="mailserver_pass">
											Password
										</label>
									</th>
									<td>
										<input
											name="mailserver_pass"
											type="text"
											id="mailserver_pass"
											defaultValue="password"
											className="regular-text ltr"
										/>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="default_email_category">
											Default Mail Category
										</label>
									</th>
									<td>
										<select
											name="default_email_category"
											id="default_email_category"
											className="postform"
										>
											<option
												className="level-0"
												value={1}
												selected="selected"
											>
												Uncategorized
											</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<h2 className="title">Update Services</h2>
						<p>
							<label htmlFor="ping_sites">
								When you publish a new post, WordPress
								automatically notifies the following site update
								services. For more about this, see{" "}
								<a href="https://wordpress.org/support/article/update-services/">
									Update Services
								</a>{" "}
								on the Codex. Separate multiple service URLs
								with line breaks.{" "}
							</label>
						</p>
						<textarea
							name="ping_sites"
							id="ping_sites"
							className="large-text code"
							rows={3}
							defaultValue={"http://rpc.pingomatic.com/"}
						/>
						<p className="submit">
							<input
								type="submit"
								name="submit"
								id="submit"
								className="button button-primary"
								defaultValue="Save Changes"
							/>
						</p>
					</form>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
