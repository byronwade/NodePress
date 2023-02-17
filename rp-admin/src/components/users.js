export default function Users() {
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
									<li id="tab-link-screen-content">
										<a
											href="#tab-panel-screen-content"
											aria-controls="tab-panel-screen-content"
										>
											Screen Content{" "}
										</a>
									</li>
									<li id="tab-link-action-links">
										<a
											href="#tab-panel-action-links"
											aria-controls="tab-panel-action-links"
										>
											Available Actions{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/users-screen/">
										Documentation on Managing Users
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/roles-and-capabilities/">
										Descriptions of Roles and Capabilities
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
										This screen lists all the existing users
										for your site. Each user has one of five
										defined roles as set by the site admin:
										Site Administrator, Editor, Author,
										Contributor, or Subscriber. Users with
										roles other than Administrator will see
										fewer options in the dashboard
										navigation when they are logged in,
										based on their role.
									</p>
									<p>
										To add a new user for your site, click
										the Add New button at the top of the
										screen or Add New in the Users menu
										section.
									</p>{" "}
								</div>
								<div
									id="tab-panel-screen-content"
									className="help-tab-content"
								>
									<p>
										You can customize the display of this
										screen in a number of ways:
									</p>
									<ul>
										<li>
											You can hide/display columns based
											on your needs and decide how many
											users to list per screen using the
											Screen Options tab.
										</li>
										<li>
											You can filter the list of users by
											User Role using the text links above
											the users list to show All,
											Administrator, Editor, Author,
											Contributor, or Subscriber. The
											default view is to show all users.
											Unused User Roles are not listed.
										</li>
										<li>
											You can view all posts made by a
											user by clicking on the number under
											the Posts column.
										</li>
									</ul>{" "}
								</div>
								<div
									id="tab-panel-action-links"
									className="help-tab-content"
								>
									<p>
										Hovering over a row in the users list
										will display action links that allow you
										to manage users. You can perform the
										following actions:
									</p>
									<ul>
										<li>
											<strong>Edit</strong> takes you to
											the editable profile screen for that
											user. You can also reach that screen
											by clicking on the username.
										</li>
										<li>
											<strong>Delete</strong> brings you
											to the Delete Users screen for
											confirmation, where you can
											permanently remove a user from your
											site and delete their content. You
											can also delete multiple users at
											once by using bulk actions.
										</li>
										<li>
											<strong>Send password reset</strong>{" "}
											sends the user an email with a link
											to set a new password.
										</li>
									</ul>{" "}
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
										name="email-hide"
										type="checkbox"
										id="email-hide"
										defaultValue="email"
										defaultChecked="checked"
									/>
									Email
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="role-hide"
										type="checkbox"
										id="role-hide"
										defaultValue="role"
										defaultChecked="checked"
									/>
									Role
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="posts-hide"
										type="checkbox"
										id="posts-hide"
										defaultValue="posts"
										defaultChecked="checked"
									/>
									Posts
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="users_per_page">
									Number of items per page:
								</label>
								<input
									type="number"
									step={1}
									min={1}
									max={999}
									className="screen-per-page"
									name="wp_screen_options[value]"
									id="users_per_page"
									maxLength={3}
									defaultValue={20}
								/>
								<input
									type="hidden"
									name="wp_screen_options[option]"
									defaultValue="users_per_page"
								/>
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
					<h1 className="wp-heading-inline">Users</h1>
					<a
						href="https://byronw34.sg-host.com/wp-admin/user-new.php"
						className="page-title-action"
					>
						Add New
					</a>
					<hr className="wp-header-end" />
					<h2 className="screen-reader-text">Filter users list</h2>
					<ul className="subsubsub">
						<li className="all">
							<a
								href="users.php"
								className="current"
								aria-current="page"
							>
								All <span className="count">(1)</span>
							</a>{" "}
							|
						</li>
						<li className="administrator">
							<a href="users.php?role=administrator">
								Administrator <span className="count">(1)</span>
							</a>
						</li>
					</ul>
					<form method="get">
						<p className="search-box">
							<label
								className="screen-reader-text"
								htmlFor="user-search-input"
							>
								Search Users:
							</label>
							<input
								type="search"
								id="user-search-input"
								name="s"
								defaultValue=""
							/>
							<input
								type="submit"
								id="search-submit"
								className="button"
								defaultValue="Search Users"
							/>
						</p>
						<input
							type="hidden"
							id="_wpnonce"
							name="_wpnonce"
							defaultValue="e8850c2680"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/users.php"
						/>{" "}
						<div className="tablenav top">
							<div className="alignleft actions bulkactions">
								<label
									htmlFor="bulk-action-selector-top"
									className="screen-reader-text"
								>
									Select bulk action
								</label>
								<select
									name="action"
									id="bulk-action-selector-top"
								>
									<option value={-1}>Bulk actions</option>
									<option value="delete">Delete</option>
									<option value="resetpassword">
										Send password reset
									</option>
								</select>
								<input
									type="submit"
									id="doaction"
									className="button action"
									defaultValue="Apply"
								/>
							</div>
							<div className="alignleft actions">
								<label
									className="screen-reader-text"
									htmlFor="new_role"
								>
									Change role to…
								</label>
								<select name="new_role" id="new_role">
									<option value="">Change role to…</option>
									<option value="subscriber">
										Subscriber
									</option>
									<option value="contributor">
										Contributor
									</option>
									<option value="author">Author</option>
									<option value="editor">Editor</option>
									<option value="administrator">
										Administrator
									</option>{" "}
									<option value="none">
										— No role for this site —
									</option>
								</select>
								<input
									type="submit"
									name="changeit"
									id="changeit"
									className="button"
									defaultValue="Change"
								/>{" "}
							</div>
							<div className="tablenav-pages one-page">
								<span className="displaying-num">1 item</span>
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
									<span className="paging-input">
										<label
											htmlFor="current-page-selector"
											className="screen-reader-text"
										>
											Current Page
										</label>
										<input
											className="current-page"
											id="current-page-selector"
											type="text"
											name="paged"
											defaultValue={1}
											size={1}
											aria-describedby="table-paging"
										/>
										<span className="tablenav-paging-text">
											{" "}
											of{" "}
											<span className="total-pages">
												1
											</span>
										</span>
									</span>
									<span
										className="tablenav-pages-navspan button disabled"
										aria-hidden="true"
									>
										›
									</span>
									<span
										className="tablenav-pages-navspan button disabled"
										aria-hidden="true"
									>
										»
									</span>
								</span>
							</div>
							<br className="clear" />
						</div>
						<h2 className="screen-reader-text">Users list</h2>
						<table className="wp-list-table widefat fixed striped table-view-list users">
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
										id="username"
										className="manage-column column-username column-primary sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/users.php?orderby=login&order=asc">
											<span>Username</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										id="name"
										className="manage-column column-name"
									>
										Name
									</th>
									<th
										scope="col"
										id="email"
										className="manage-column column-email sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/users.php?orderby=email&order=asc">
											<span>Email</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										id="role"
										className="manage-column column-role"
									>
										Role
									</th>
									<th
										scope="col"
										id="posts"
										className="manage-column column-posts num"
									>
										Posts
									</th>{" "}
								</tr>
							</thead>
							<tbody id="the-list" data-wp-lists="list:user">
								<tr id="user-1">
									<th scope="row" className="check-column">
										<label
											className="screen-reader-text"
											htmlFor="user_1"
										>
											Select bcw1995@gmail.com
										</label>
										<input
											type="checkbox"
											name="users[]"
											id="user_1"
											className="administrator"
											defaultValue={1}
										/>
									</th>
									<td
										className="username column-username has-row-actions column-primary"
										data-colname="Username"
									>
										<img
											alt=""
											src="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=32&d=mm&r=g"
											srcSet="https://secure.gravatar.com/avatar/08c21cf8ce49f5d7d5c1d8e49d4649f8?s=64&d=mm&r=g 2x"
											className="avatar avatar-32 photo"
											height={32}
											width={32}
											loading="lazy"
											decoding="async"
										/>{" "}
										<strong>
											<a href="https://byronw34.sg-host.com/wp-admin/profile.php?wp_http_referer=%2Fwp-admin%2Fusers.php">
												bcw1995@gmail.com
											</a>
										</strong>
										<br />
										<div className="row-actions">
											<span className="edit">
												<a href="https://byronw34.sg-host.com/wp-admin/profile.php?wp_http_referer=%2Fwp-admin%2Fusers.php">
													Edit
												</a>{" "}
												|{" "}
											</span>
											<span className="view">
												<a
													href="https://byronw34.sg-host.com/author/bcw1995gmail-com/"
													aria-label="View posts by bcw1995@gmail.com"
												>
													View
												</a>
											</span>
										</div>
										<button
											type="button"
											className="toggle-row"
										>
											<span className="screen-reader-text">
												Show more details
											</span>
										</button>
									</td>
									<td
										className="name column-name"
										data-colname="Name"
									>
										<span aria-hidden="true">—</span>
										<span className="screen-reader-text">
											Unknown
										</span>
									</td>
									<td
										className="email column-email"
										data-colname="Email"
									>
										<a href="mailto:bcw1995@gmail.com">
											bcw1995@gmail.com
										</a>
									</td>
									<td
										className="role column-role"
										data-colname="Role"
									>
										Administrator
									</td>
									<td
										className="posts column-posts num"
										data-colname="Posts"
									>
										<a
											href="edit.php?author=1"
											className="edit"
										>
											<span aria-hidden="true">4</span>
											<span className="screen-reader-text">
												4 posts by this author
											</span>
										</a>
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
										className="manage-column column-username column-primary sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/users.php?orderby=login&order=asc">
											<span>Username</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										className="manage-column column-name"
									>
										Name
									</th>
									<th
										scope="col"
										className="manage-column column-email sortable desc"
									>
										<a href="https://byronw34.sg-host.com/wp-admin/users.php?orderby=email&order=asc">
											<span>Email</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										className="manage-column column-role"
									>
										Role
									</th>
									<th
										scope="col"
										className="manage-column column-posts num"
									>
										Posts
									</th>{" "}
								</tr>
							</tfoot>
						</table>
						<div className="tablenav bottom">
							<div className="alignleft actions bulkactions">
								<label
									htmlFor="bulk-action-selector-bottom"
									className="screen-reader-text"
								>
									Select bulk action
								</label>
								<select
									name="action2"
									id="bulk-action-selector-bottom"
								>
									<option value={-1}>Bulk actions</option>
									<option value="delete">Delete</option>
									<option value="resetpassword">
										Send password reset
									</option>
								</select>
								<input
									type="submit"
									id="doaction2"
									className="button action"
									defaultValue="Apply"
								/>
							</div>
							<div className="alignleft actions">
								<label
									className="screen-reader-text"
									htmlFor="new_role2"
								>
									Change role to…
								</label>
								<select name="new_role2" id="new_role2">
									<option value="">Change role to…</option>
									<option value="subscriber">
										Subscriber
									</option>
									<option value="contributor">
										Contributor
									</option>
									<option value="author">Author</option>
									<option value="editor">Editor</option>
									<option value="administrator">
										Administrator
									</option>{" "}
									<option value="none">
										— No role for this site —
									</option>
								</select>
								<input
									type="submit"
									name="changeit2"
									id="changeit2"
									className="button"
									defaultValue="Change"
								/>{" "}
							</div>
							<div className="tablenav-pages one-page">
								<span className="displaying-num">1 item</span>
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
												1
											</span>
										</span>
									</span>
									<span
										className="tablenav-pages-navspan button disabled"
										aria-hidden="true"
									>
										›
									</span>
									<span
										className="tablenav-pages-navspan button disabled"
										aria-hidden="true"
									>
										»
									</span>
								</span>
							</div>
							<br className="clear" />
						</div>
					</form>
					<div className="clear" />
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
