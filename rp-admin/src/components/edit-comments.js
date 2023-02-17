export default function EditComments() {
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
									<li id="tab-link-moderating-comments">
										<a
											href="#tab-panel-moderating-comments"
											aria-controls="tab-panel-moderating-comments"
										>
											Moderating Comments{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/comments-screen/">
										Documentation on Comments
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/comment-spam/">
										Documentation on Comment Spam
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/keyboard-shortcuts/">
										Documentation on Keyboard Shortcuts
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
										You can manage comments made on your
										site similar to the way you manage posts
										and other content. This screen is
										customizable in the same ways as other
										management screens, and you can act on
										comments using the on-hover action links
										or the bulk actions.
									</p>{" "}
								</div>
								<div
									id="tab-panel-moderating-comments"
									className="help-tab-content"
								>
									<p>
										A red bar on the left means the comment
										is waiting for you to moderate it.
									</p>
									<p>
										In the <strong>Author</strong> column,
										in addition to the author’s name, email
										address, and blog URL, the commenter’s
										IP address is shown. Clicking on this
										link will show you all the comments made
										from this IP address.
									</p>
									<p>
										In the <strong>Comment</strong> column,
										hovering over any comment gives you
										options to approve, reply (and approve),
										quick edit, edit, spam mark, or trash
										that comment.
									</p>
									<p>
										In the <strong>In response to</strong>{" "}
										column, there are three elements. The
										text is the name of the post that
										inspired the comment, and links to the
										post editor for that entry. The View
										Post link leads to that post on your
										live site. The small bubble with the
										number in it shows the number of
										approved comments that post has
										received. If there are pending comments,
										a red notification circle with the
										number of pending comments is displayed.
										Clicking the notification circle will
										filter the comments screen to show only
										pending comments on that post.
									</p>
									<p>
										In the <strong>Submitted on</strong>{" "}
										column, the date and time the comment
										was left on your site appears. Clicking
										on the date/time link will take you to
										that comment on your live site.
									</p>
									<p>
										Many people take advantage of keyboard
										shortcuts to moderate their comments
										more quickly. Use the link to the side
										to learn more.
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
								<legend>Columns</legend>
								<label>
									<input
										className="hide-column-tog"
										name="author-hide"
										type="checkbox"
										id="author-hide"
										defaultValue="author"
										defaultChecked="checked"
									/>
									Author
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="response-hide"
										type="checkbox"
										id="response-hide"
										defaultValue="response"
										defaultChecked="checked"
									/>
									In response to
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="date-hide"
										type="checkbox"
										id="date-hide"
										defaultValue="date"
										defaultChecked="checked"
									/>
									Submitted on
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="edit_comments_per_page">
									Number of items per page:
								</label>
								<input
									type="number"
									step={1}
									min={1}
									max={999}
									className="screen-per-page"
									name="wp_screen_options[value]"
									id="edit_comments_per_page"
									maxLength={3}
									defaultValue={20}
								/>
								<input
									type="hidden"
									name="wp_screen_options[option]"
									defaultValue="edit_comments_per_page"
								/>
							</fieldset>
							<fieldset className="metabox-prefs view-mode">
								<legend>View mode</legend>
								<label htmlFor="list-view-mode">
									<input
										id="list-view-mode"
										type="radio"
										name="mode"
										defaultValue="list"
										defaultChecked="checked"
									/>
									Compact view{" "}
								</label>
								<label htmlFor="excerpt-view-mode">
									<input
										id="excerpt-view-mode"
										type="radio"
										name="mode"
										defaultValue="excerpt"
									/>
									Extended view{" "}
								</label>
							</fieldset>
							<p className="submit">
								<input
									type="submit"
									name="screen-options-apply"
									id="screen-options-apply"
									className="button button-primary"
									defaultValue="Apply"
								/>
							</p>
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
					<h1 className="wp-heading-inline">Comments</h1>
					<hr className="wp-header-end" />
					<h2 className="screen-reader-text">Filter comments list</h2>
					<ul className="subsubsub">
						<li className="all">
							<a
								href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?comment_status=all"
								className="current"
								aria-current="page"
							>
								All{" "}
								<span className="count">
									(<span className="all-count">0</span>)
								</span>
							</a>{" "}
							|
						</li>
						<li className="mine">
							<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?comment_status=mine&user_id=1">
								Mine{" "}
								<span className="count">
									(<span className="mine-count">0</span>)
								</span>
							</a>{" "}
							|
						</li>
						<li className="moderated">
							<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?comment_status=moderated">
								Pending{" "}
								<span className="count">
									(<span className="pending-count">0</span>)
								</span>
							</a>{" "}
							|
						</li>
						<li className="approved">
							<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?comment_status=approved">
								Approved{" "}
								<span className="count">
									(<span className="approved-count">0</span>)
								</span>
							</a>{" "}
							|
						</li>
						<li className="spam">
							<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?comment_status=spam">
								Spam{" "}
								<span className="count">
									(<span className="spam-count">0</span>)
								</span>
							</a>{" "}
							|
						</li>
						<li className="trash">
							<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?comment_status=trash">
								Trash{" "}
								<span className="count">
									(<span className="trash-count">0</span>)
								</span>
							</a>
						</li>
					</ul>
					<form id="comments-form" method="get">
						<input
							type="hidden"
							name="comment_status"
							defaultValue="all"
						/>
						<input
							type="hidden"
							name="pagegen_timestamp"
							defaultValue="2023-02-17 10:07:38"
						/>
						<input type="hidden" name="_total" defaultValue={0} />
						<input
							type="hidden"
							name="_per_page"
							defaultValue={20}
						/>
						<input type="hidden" name="_page" defaultValue={1} />
						<input
							type="hidden"
							id="_ajax_fetch_list_nonce"
							name="_ajax_fetch_list_nonce"
							defaultValue="5aa80d7c1b"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/edit-comments.php"
						/>
						<h2 className="screen-reader-text">Comments list</h2>
						<table className="wp-list-table widefat fixed striped table-view-list comments">
							<thead>
								<tr>
									<td
										id="cb"
										className="manage-column column-cb check-column"
									>
										<label
											className="screen-reader-text"
											htmlFor="cb-select-all-1"
										>
											Select All
										</label>
										<input
											id="cb-select-all-1"
											type="checkbox"
										/>
									</td>
									<th
										scope="col"
										id="author"
										className="manage-column column-author sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?orderby=comment_author&order=asc">
											<span>Author</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										id="comment"
										className="manage-column column-comment column-primary"
									>
										Comment
									</th>
									<th
										scope="col"
										id="response"
										className="manage-column column-response sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?orderby=comment_post_ID&order=asc">
											<span>In response to</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										id="date"
										className="manage-column column-date sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?orderby=comment_date&order=asc">
											<span>Submitted on</span>
											<span className="sorting-indicator" />
										</a>
									</th>{" "}
								</tr>
							</thead>
							<tbody
								id="the-comment-list"
								data-wp-lists="list:comment"
							>
								<tr className="no-items">
									<td className="colspanchange" colSpan={5}>
										No comments found.
									</td>
								</tr>{" "}
							</tbody>
							<tbody
								id="the-extra-comment-list"
								data-wp-lists="list:comment"
								style={{ display: "none" }}
							>
								<tr className="no-items">
									<td className="colspanchange" colSpan={5}>
										No comments found.
									</td>
								</tr>{" "}
							</tbody>
							<tfoot>
								<tr>
									<td className="manage-column column-cb check-column">
										<label
											className="screen-reader-text"
											htmlFor="cb-select-all-2"
										>
											Select All
										</label>
										<input
											id="cb-select-all-2"
											type="checkbox"
										/>
									</td>
									<th
										scope="col"
										className="manage-column column-author sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?orderby=comment_author&order=asc">
											<span>Author</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										className="manage-column column-comment column-primary"
									>
										Comment
									</th>
									<th
										scope="col"
										className="manage-column column-response sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?orderby=comment_post_ID&order=asc">
											<span>In response to</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										className="manage-column column-date sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?orderby=comment_date&order=asc">
											<span>Submitted on</span>
											<span className="sorting-indicator" />
										</a>
									</th>{" "}
								</tr>
							</tfoot>
						</table>
						<div className="tablenav bottom">
							<div className="alignleft actions" />
							<div className="tablenav-pages no-pages">
								<span className="displaying-num">0 items</span>
								<span className="pagination-links">
									<span
										className="tablenav-pages-navspan button disabled"
										aria-hidden="true"
									>
										«
									</span>
									<span
										className="tablenav-pages-navspan button disabled"
										aria-hidden="true"
									>
										‹
									</span>
									<span className="screen-reader-text">
										Current Page
									</span>
									<span
										id="table-paging"
										className="paging-input"
									>
										<span className="tablenav-paging-text">
											1 of{" "}
											<span className="total-pages">
												0
											</span>
										</span>
									</span>
									<a
										className="next-page button"
										href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?paged=0"
									>
										<span className="screen-reader-text">
											Next page
										</span>
										<span aria-hidden="true">›</span>
									</a>
									<a
										className="last-page button"
										href="https://byronw34.sg-host.com/wp-admin/edit-comments.php?paged=0"
									>
										<span className="screen-reader-text">
											Last page
										</span>
										<span aria-hidden="true">»</span>
									</a>
								</span>
							</div>
							<br className="clear" />
						</div>
					</form>
				</div>
				<div id="ajax-response" />
				<form method="get">
					<table style={{ display: "none" }}>
						<tbody id="com-reply">
							<tr
								id="replyrow"
								className="inline-edit-row"
								style={{ display: "none" }}
							>
								<td colSpan={5} className="colspanchange">
									<fieldset className="comment-reply">
										<legend>
											<span
												className="hidden"
												id="editlegend"
											>
												Edit Comment
											</span>
											<span
												className="hidden"
												id="replyhead"
											>
												Reply to Comment
											</span>
											<span
												className="hidden"
												id="addhead"
											>
												Add new Comment
											</span>
										</legend>
										<div id="replycontainer">
											<label
												htmlFor="replycontent"
												className="screen-reader-text"
											>
												Comment
											</label>
											<div
												id="wp-replycontent-wrap"
												className="wp-core-ui wp-editor-wrap html-active"
											>
												<link
													rel="stylesheet"
													id="editor-buttons-css"
													href="https://byronw34.sg-host.com/wp-includes/css/editor.min.css?ver=6.1.1"
													media="all"
												/>
												<div
													id="wp-replycontent-editor-container"
													className="wp-editor-container"
												>
													<div
														id="qt_replycontent_toolbar"
														className="quicktags-toolbar hide-if-no-js"
													>
														<input
															type="button"
															id="qt_replycontent_strong"
															className="ed_button button button-small"
															aria-label="Bold"
															defaultValue="b"
														/>
														<input
															type="button"
															id="qt_replycontent_em"
															className="ed_button button button-small"
															aria-label="Italic"
															defaultValue="i"
														/>
														<input
															type="button"
															id="qt_replycontent_link"
															className="ed_button button button-small"
															aria-label="Insert link"
															defaultValue="link"
														/>
														<input
															type="button"
															id="qt_replycontent_block"
															className="ed_button button button-small"
															aria-label="Blockquote"
															defaultValue="b-quote"
														/>
														<input
															type="button"
															id="qt_replycontent_del"
															className="ed_button button button-small"
															aria-label="Deleted text (strikethrough)"
															defaultValue="del"
														/>
														<input
															type="button"
															id="qt_replycontent_ins"
															className="ed_button button button-small"
															aria-label="Inserted text"
															defaultValue="ins"
														/>
														<input
															type="button"
															id="qt_replycontent_img"
															className="ed_button button button-small"
															aria-label="Insert image"
															defaultValue="img"
														/>
														<input
															type="button"
															id="qt_replycontent_ul"
															className="ed_button button button-small"
															aria-label="Bulleted list"
															defaultValue="ul"
														/>
														<input
															type="button"
															id="qt_replycontent_ol"
															className="ed_button button button-small"
															aria-label="Numbered list"
															defaultValue="ol"
														/>
														<input
															type="button"
															id="qt_replycontent_li"
															className="ed_button button button-small"
															aria-label="List item"
															defaultValue="li"
														/>
														<input
															type="button"
															id="qt_replycontent_code"
															className="ed_button button button-small"
															aria-label="Code"
															defaultValue="code"
														/>
														<input
															type="button"
															id="qt_replycontent_close"
															className="ed_button button button-small"
															title="Close all open tags"
															defaultValue="close tags"
														/>
													</div>
													<textarea
														className="wp-editor-area"
														rows={20}
														cols={40}
														name="replycontent"
														id="replycontent"
														defaultValue={""}
													/>
												</div>
											</div>
										</div>
										<div
											id="edithead"
											style={{ display: "none" }}
										>
											<div className="inside">
												<label htmlFor="author-name">
													Name
												</label>
												<input
													type="text"
													name="newcomment_author"
													size={50}
													defaultValue=""
													id="author-name"
												/>
											</div>
											<div className="inside">
												<label htmlFor="author-email">
													Email
												</label>
												<input
													type="text"
													name="newcomment_author_email"
													size={50}
													defaultValue=""
													id="author-email"
												/>
											</div>
											<div className="inside">
												<label htmlFor="author-url">
													URL
												</label>
												<input
													type="text"
													id="author-url"
													name="newcomment_author_url"
													className="code"
													size={103}
													defaultValue=""
												/>
											</div>
										</div>
										<div
											id="replysubmit"
											className="submit"
										>
											<p className="reply-submit-buttons">
												<button
													type="button"
													className="save button button-primary"
												>
													<span
														id="addbtn"
														style={{
															display: "none",
														}}
													>
														Add Comment
													</span>
													<span
														id="savebtn"
														style={{
															display: "none",
														}}
													>
														Update Comment
													</span>
													<span
														id="replybtn"
														style={{
															display: "none",
														}}
													>
														Submit Reply
													</span>
												</button>
												<button
													type="button"
													className="cancel button"
												>
													Cancel
												</button>
												<span className="waiting spinner" />
											</p>
											<div className="notice notice-error notice-alt inline hidden">
												<p className="error" />
											</div>
										</div>
										<input
											type="hidden"
											name="action"
											id="action"
											defaultValue=""
										/>
										<input
											type="hidden"
											name="comment_ID"
											id="comment_ID"
											defaultValue=""
										/>
										<input
											type="hidden"
											name="comment_post_ID"
											id="comment_post_ID"
											defaultValue=""
										/>
										<input
											type="hidden"
											name="status"
											id="status"
											defaultValue=""
										/>
										<input
											type="hidden"
											name="position"
											id="position"
											defaultValue={-1}
										/>
										<input
											type="hidden"
											name="checkbox"
											id="checkbox"
											defaultValue={1}
										/>
										<input
											type="hidden"
											name="mode"
											id="mode"
											defaultValue="detail"
										/>
										<input
											type="hidden"
											id="_ajax_nonce-replyto-comment"
											name="_ajax_nonce-replyto-comment"
											defaultValue="652f26262c"
										/>
										<input
											type="hidden"
											id="_wp_unfiltered_html_comment"
											name="_wp_unfiltered_html_comment"
											defaultValue="3bd370c906"
										/>{" "}
									</fieldset>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
				<div className="hidden" id="trash-undo-holder">
					<div className="trash-undo-inside">
						Comment by <strong /> moved to the Trash.{" "}
						<span className="undo untrash">
							<a href="#">Undo</a>
						</span>
					</div>
				</div>
				<div className="hidden" id="spam-undo-holder">
					<div className="spam-undo-inside">
						Comment by <strong /> marked as spam.{" "}
						<span className="undo unspam">
							<a href="#">Undo</a>
						</span>
					</div>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
