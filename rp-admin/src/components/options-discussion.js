export default function OptionsDiscussion() {
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
									<a href="https://wordpress.org/support/article/settings-discussion-screen/">
										Documentation on Discussion Settings
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
										This screen provides many options for
										controlling the management and display
										of comments and links to your
										posts/pages. So many, in fact, they will
										not all fit here! :) Use the
										documentation links to get information
										on what each discussion setting does.
									</p>
									<p>
										You must click the Save Changes button
										at the bottom of the screen for new
										settings to take effect.
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
					<h1>Discussion Settings</h1>
					<form method="post" action="options.php">
						<input
							type="hidden"
							name="option_page"
							defaultValue="discussion"
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
							defaultValue="71f164decf"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/options-discussion.php"
						/>
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">Default post settings</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>
													Default post settings
												</span>
											</legend>
											<label htmlFor="default_pingback_flag">
												<input
													name="default_pingback_flag"
													type="checkbox"
													id="default_pingback_flag"
													defaultValue={1}
													defaultChecked="checked"
												/>
												Attempt to notify any blogs
												linked to from the post
											</label>
											<br />
											<label htmlFor="default_ping_status">
												<input
													name="default_ping_status"
													type="checkbox"
													id="default_ping_status"
													defaultValue="open"
													defaultChecked="checked"
												/>
												Allow link notifications from
												other blogs (pingbacks and
												trackbacks) on new posts
											</label>
											<br />
											<label htmlFor="default_comment_status">
												<input
													name="default_comment_status"
													type="checkbox"
													id="default_comment_status"
													defaultValue="open"
													defaultChecked="checked"
												/>
												Allow people to submit comments
												on new posts
											</label>
											<br />
											<p className="description">
												Individual posts may override
												these settings. Changes here
												will only be applied to new
												posts.
											</p>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">Other comment settings</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>
													Other comment settings
												</span>
											</legend>
											<label htmlFor="require_name_email">
												<input
													type="checkbox"
													name="require_name_email"
													id="require_name_email"
													defaultValue={1}
													defaultChecked="checked"
												/>{" "}
												Comment author must fill out
												name and email
											</label>
											<br />
											<label htmlFor="comment_registration">
												<input
													name="comment_registration"
													type="checkbox"
													id="comment_registration"
													defaultValue={1}
												/>
												Users must be registered and
												logged in to comment
											</label>
											<br />
											<label htmlFor="close_comments_for_old_posts">
												<input
													name="close_comments_for_old_posts"
													type="checkbox"
													id="close_comments_for_old_posts"
													defaultValue={1}
												/>
												Automatically close comments on
												posts older than{" "}
											</label>{" "}
											<label htmlFor="close_comments_days_old">
												<input
													name="close_comments_days_old"
													type="number"
													min={0}
													step={1}
													id="close_comments_days_old"
													defaultValue={14}
													className="small-text"
												/>{" "}
												days
											</label>
											<br />
											<label htmlFor="show_comments_cookies_opt_in">
												<input
													name="show_comments_cookies_opt_in"
													type="checkbox"
													id="show_comments_cookies_opt_in"
													defaultValue={1}
													defaultChecked="checked"
												/>
												Show comments cookies opt-in
												checkbox, allowing comment
												author cookies to be set
											</label>
											<br />
											<label htmlFor="thread_comments">
												<input
													name="thread_comments"
													type="checkbox"
													id="thread_comments"
													defaultValue={1}
													defaultChecked="checked"
												/>
												Enable threaded (nested)
												comments{" "}
											</label>{" "}
											<label htmlFor="thread_comments_depth">
												<select
													name="thread_comments_depth"
													id="thread_comments_depth"
												>
													<option value={2}>2</option>
													<option value={3}>3</option>
													<option value={4}>4</option>
													<option
														value={5}
														selected="selected"
													>
														5
													</option>
													<option value={6}>6</option>
													<option value={7}>7</option>
													<option value={8}>8</option>
													<option value={9}>9</option>
													<option value={10}>
														10
													</option>
												</select>{" "}
												levels deep
											</label>
											<br />
											<label htmlFor="page_comments">
												<input
													name="page_comments"
													type="checkbox"
													id="page_comments"
													defaultValue={1}
												/>
												Break comments into pages with{" "}
											</label>{" "}
											<label htmlFor="comments_per_page">
												<input
													name="comments_per_page"
													type="number"
													step={1}
													min={0}
													id="comments_per_page"
													defaultValue={50}
													className="small-text"
												/>{" "}
												top level comments per page and
												the{" "}
											</label>{" "}
											<label htmlFor="default_comments_page">
												<select
													name="default_comments_page"
													id="default_comments_page"
												>
													<option
														value="newest"
														selected="selected"
													>
														last
													</option>
													<option value="oldest">
														first
													</option>
												</select>{" "}
												page displayed by default
											</label>
											<br />
											<label htmlFor="comment_order">
												Comments should be displayed
												with the{" "}
												<select
													name="comment_order"
													id="comment_order"
												>
													<option
														value="asc"
														selected="selected"
													>
														older
													</option>
													<option value="desc">
														newer
													</option>
												</select>{" "}
												comments at the top of each page
											</label>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">Email me whenever</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Email me whenever</span>
											</legend>
											<label htmlFor="comments_notify">
												<input
													name="comments_notify"
													type="checkbox"
													id="comments_notify"
													defaultValue={1}
													defaultChecked="checked"
												/>
												Anyone posts a comment{" "}
											</label>
											<br />
											<label htmlFor="moderation_notify">
												<input
													name="moderation_notify"
													type="checkbox"
													id="moderation_notify"
													defaultValue={1}
													defaultChecked="checked"
												/>
												A comment is held for moderation{" "}
											</label>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">
										Before a comment appears
									</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>
													Before a comment appears
												</span>
											</legend>
											<label htmlFor="comment_moderation">
												<input
													name="comment_moderation"
													type="checkbox"
													id="comment_moderation"
													defaultValue={1}
												/>
												Comment must be manually
												approved{" "}
											</label>
											<br />
											<label htmlFor="comment_previously_approved">
												<input
													type="checkbox"
													name="comment_previously_approved"
													id="comment_previously_approved"
													defaultValue={1}
													defaultChecked="checked"
												/>{" "}
												Comment author must have a
												previously approved comment
											</label>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">Comment Moderation</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Comment Moderation</span>
											</legend>
											<p>
												<label htmlFor="comment_max_links">
													Hold a comment in the queue
													if it contains{" "}
													<input
														name="comment_max_links"
														type="number"
														step={1}
														min={0}
														id="comment_max_links"
														defaultValue={2}
														className="small-text"
													/>{" "}
													or more links. (A common
													characteristic of comment
													spam is a large number of
													hyperlinks.)
												</label>
											</p>
											<p>
												<label htmlFor="moderation_keys">
													When a comment contains any
													of these words in its
													content, author name, URL,
													email, IP address, or
													browser’s user agent string,
													it will be held in the{" "}
													<a href="edit-comments.php?comment_status=moderated">
														moderation queue
													</a>
													. One word or IP address per
													line. It will match inside
													words, so “press” will match
													“WordPress”.
												</label>
											</p>
											<p>
												<textarea
													name="moderation_keys"
													rows={10}
													cols={50}
													id="moderation_keys"
													className="large-text code"
													defaultValue={""}
												/>
											</p>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">Disallowed Comment Keys</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>
													Disallowed Comment Keys
												</span>
											</legend>
											<p>
												<label htmlFor="disallowed_keys">
													When a comment contains any
													of these words in its
													content, author name, URL,
													email, IP address, or
													browser’s user agent string,
													it will be put in the Trash.
													One word or IP address per
													line. It will match inside
													words, so “press” will match
													“WordPress”.
												</label>
											</p>
											<p>
												<textarea
													name="disallowed_keys"
													rows={10}
													cols={50}
													id="disallowed_keys"
													className="large-text code"
													defaultValue={""}
												/>
											</p>
										</fieldset>
									</td>
								</tr>
							</tbody>
						</table>
						<h2 className="title">Avatars</h2>
						<p>
							An avatar is an image that can be associated with a
							user across multiple websites. In this area, you can
							choose to display avatars of users who interact with
							the site.
						</p>
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">Avatar Display</th>
									<td>
										<label htmlFor="show_avatars">
											<input
												type="checkbox"
												id="show_avatars"
												name="show_avatars"
												defaultValue={1}
												defaultChecked="checked"
											/>
											Show Avatars{" "}
										</label>
									</td>
								</tr>
								<tr className="avatar-settings">
									<th scope="row">Maximum Rating</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Maximum Rating</span>
											</legend>
											<label>
												<input
													type="radio"
													name="avatar_rating"
													defaultValue="G"
													defaultChecked="checked"
												/>{" "}
												G — Suitable for all audiences
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_rating"
													defaultValue="PG"
												/>{" "}
												PG — Possibly offensive, usually
												for audiences 13 and above
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_rating"
													defaultValue="R"
												/>{" "}
												R — Intended for adult audiences
												above 17
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_rating"
													defaultValue="X"
												/>{" "}
												X — Even more mature than above
											</label>
											<br />
										</fieldset>
									</td>
								</tr>
								<tr className="avatar-settings">
									<th scope="row">Default Avatar</th>
									<td className="defaultavatarpicker">
										<fieldset>
											<legend className="screen-reader-text">
												<span>Default Avatar</span>
											</legend>
											<p>
												For users without a custom
												avatar of their own, you can
												either display a generic logo or
												a generated one based on their
												email address.
												<br />
											</p>
											<label>
												<input
													type="radio"
													name="avatar_default"
													id="avatar_mystery"
													defaultValue="mystery"
													defaultChecked="checked"
												/>{" "}
												<img
													alt=""
													src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=32&d=mm&f=y&r=g"
													srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&d=mm&f=y&r=g 2x"
													className="avatar avatar-32 photo avatar-default"
													height={32}
													width={32}
													loading="lazy"
													decoding="async"
												/>{" "}
												Mystery Person
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_default"
													id="avatar_blank"
													defaultValue="blank"
												/>{" "}
												<img
													alt=""
													src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=32&d=blank&f=y&r=g"
													srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&d=blank&f=y&r=g 2x"
													className="avatar avatar-32 photo avatar-default"
													height={32}
													width={32}
													loading="lazy"
													decoding="async"
												/>{" "}
												Blank
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_default"
													id="avatar_gravatar_default"
													defaultValue="gravatar_default"
												/>{" "}
												<img
													alt=""
													src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=32&f=y&r=g"
													srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&f=y&r=g 2x"
													className="avatar avatar-32 photo avatar-default"
													height={32}
													width={32}
													loading="lazy"
													decoding="async"
												/>{" "}
												Gravatar Logo
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_default"
													id="avatar_identicon"
													defaultValue="identicon"
												/>{" "}
												<img
													alt=""
													src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=32&d=identicon&f=y&r=g"
													srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&d=identicon&f=y&r=g 2x"
													className="avatar avatar-32 photo avatar-default"
													height={32}
													width={32}
													loading="lazy"
													decoding="async"
												/>{" "}
												Identicon (Generated)
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_default"
													id="avatar_wavatar"
													defaultValue="wavatar"
												/>{" "}
												<img
													alt=""
													src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=32&d=wavatar&f=y&r=g"
													srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&d=wavatar&f=y&r=g 2x"
													className="avatar avatar-32 photo avatar-default"
													height={32}
													width={32}
													loading="lazy"
													decoding="async"
												/>{" "}
												Wavatar (Generated)
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_default"
													id="avatar_monsterid"
													defaultValue="monsterid"
												/>{" "}
												<img
													alt=""
													src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=32&d=monsterid&f=y&r=g"
													srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&d=monsterid&f=y&r=g 2x"
													className="avatar avatar-32 photo avatar-default"
													height={32}
													width={32}
													loading="lazy"
													decoding="async"
												/>{" "}
												MonsterID (Generated)
											</label>
											<br />
											<label>
												<input
													type="radio"
													name="avatar_default"
													id="avatar_retro"
													defaultValue="retro"
												/>{" "}
												<img
													alt=""
													src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=32&d=retro&f=y&r=g"
													srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&d=retro&f=y&r=g 2x"
													className="avatar avatar-32 photo avatar-default"
													height={32}
													width={32}
													loading="lazy"
													decoding="async"
												/>{" "}
												Retro (Generated)
											</label>
											<br />
										</fieldset>
									</td>
								</tr>
							</tbody>
						</table>
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
