export default function EditTags() {
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
									<li id="tab-link-adding-terms">
										<a
											href="#tab-panel-adding-terms"
											aria-controls="tab-panel-adding-terms"
										>
											Adding Categories{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/posts-categories-screen/">
										Documentation on Categories
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
										You can use categories to define
										sections of your site and group related
										posts. The default category is
										“Uncategorized” until you change it in
										your{" "}
										<a href="options-writing.php">
											writing settings
										</a>
										.
									</p>
									<p>
										What’s the difference between categories
										and tags? Normally, tags are ad-hoc
										keywords that identify important
										information in your post (names,
										subjects, etc) that may or may not recur
										in other posts, while categories are
										pre-determined sections. If you think of
										your site like a book, the categories
										are like the Table of Contents and the
										tags are like the terms in the index.
									</p>{" "}
								</div>
								<div
									id="tab-panel-adding-terms"
									className="help-tab-content"
								>
									<p>
										When adding a new category on this
										screen, you’ll fill in the following
										fields:
									</p>
									<ul>
										<li>
											<strong>Name</strong> — The name is
											how it appears on your site.
										</li>
										<li>
											<strong>Slug</strong> — The “slug”
											is the URL-friendly version of the
											name. It is usually all lowercase
											and contains only letters, numbers,
											and hyphens.
										</li>
										<li>
											<strong>Parent</strong> —
											Categories, unlike tags, can have a
											hierarchy. You might have a Jazz
											category, and under that have child
											categories for Bebop and Big Band.
											Totally optional. To create a
											subcategory, just choose another
											category from the Parent dropdown.
										</li>
										<li>
											<strong>Description</strong> — The
											description is not prominent by
											default; however, some themes may
											display it.
										</li>
									</ul>
									<p>
										You can change the display of this
										screen using the Screen Options tab to
										set how many items are displayed per
										screen and to display/hide columns in
										the table.
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
										name="description-hide"
										type="checkbox"
										id="description-hide"
										defaultValue="description"
										defaultChecked="checked"
									/>
									Description
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="slug-hide"
										type="checkbox"
										id="slug-hide"
										defaultValue="slug"
										defaultChecked="checked"
									/>
									Slug
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
									Count
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="edit_category_per_page">
									Number of items per page:
								</label>
								<input
									type="number"
									step={1}
									min={1}
									max={999}
									className="screen-per-page"
									name="wp_screen_options[value]"
									id="edit_category_per_page"
									maxLength={3}
									defaultValue={20}
								/>
								<input
									type="hidden"
									name="wp_screen_options[option]"
									defaultValue="edit_category_per_page"
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
				<div className="wrap nosubsub">
					<h1 className="wp-heading-inline">Categories</h1>
					<hr className="wp-header-end" />
					<div id="ajax-response" />
					<form className="search-form wp-clearfix" method="get">
						<input
							type="hidden"
							name="taxonomy"
							defaultValue="category"
						/>
						<input
							type="hidden"
							name="post_type"
							defaultValue="post"
						/>
						<p className="search-box">
							<label
								className="screen-reader-text"
								htmlFor="tag-search-input"
							>
								Search Categories:
							</label>
							<input
								type="search"
								id="tag-search-input"
								name="s"
								defaultValue=""
							/>
							<input
								type="submit"
								id="search-submit"
								className="button"
								defaultValue="Search Categories"
							/>
						</p>
					</form>
					<div id="col-container" className="wp-clearfix">
						<div id="col-left">
							<div className="col-wrap">
								<div className="form-wrap">
									<h2>Add New Category</h2>
									<form
										id="addtag"
										method="post"
										action="edit-tags.php"
										className="validate"
									>
										<input
											type="hidden"
											name="action"
											defaultValue="add-tag"
										/>
										<input
											type="hidden"
											name="screen"
											defaultValue="edit-category"
										/>
										<input
											type="hidden"
											name="taxonomy"
											defaultValue="category"
										/>
										<input
											type="hidden"
											name="post_type"
											defaultValue="post"
										/>
										<input
											type="hidden"
											id="_wpnonce_add-tag"
											name="_wpnonce_add-tag"
											defaultValue="bce515f182"
										/>
										<input
											type="hidden"
											name="_wp_http_referer"
											defaultValue="/wp-admin/edit-tags.php?taxonomy=category"
										/>
										<div className="form-field form-required term-name-wrap">
											<label htmlFor="tag-name">
												Name
											</label>
											<input
												name="tag-name"
												id="tag-name"
												type="text"
												defaultValue=""
												size={40}
												aria-required="true"
												aria-describedby="name-description"
											/>
											<p id="name-description">
												The name is how it appears on
												your site.
											</p>
										</div>
										<div className="form-field term-slug-wrap">
											<label htmlFor="tag-slug">
												Slug
											</label>
											<input
												name="slug"
												id="tag-slug"
												type="text"
												defaultValue=""
												size={40}
												aria-describedby="slug-description"
											/>
											<p id="slug-description">
												The “slug” is the URL-friendly
												version of the name. It is
												usually all lowercase and
												contains only letters, numbers,
												and hyphens.
											</p>
										</div>
										<div className="form-field term-parent-wrap">
											<label htmlFor="parent">
												Parent Category
											</label>
											<select
												name="parent"
												id="parent"
												className="postform"
												aria-describedby="parent-description"
											>
												<option value={-1}>None</option>
												<option
													className="level-0"
													value={1}
												>
													Uncategorized
												</option>
											</select>
											<p id="parent-description">
												Categories, unlike tags, can
												have a hierarchy. You might have
												a Jazz category, and under that
												have children categories for
												Bebop and Big Band. Totally
												optional.
											</p>
										</div>
										<div className="form-field term-description-wrap">
											<label htmlFor="tag-description">
												Description
											</label>
											<textarea
												name="description"
												id="tag-description"
												rows={5}
												cols={40}
												aria-describedby="description-description"
												defaultValue={""}
											/>
											<p id="description-description">
												The description is not prominent
												by default; however, some themes
												may show it.
											</p>
										</div>
										<p className="submit">
											<input
												type="submit"
												name="submit"
												id="submit"
												className="button button-primary"
												defaultValue="Add New Category"
											/>{" "}
											<span className="spinner" />
										</p>
									</form>
								</div>
							</div>
						</div>
						{/* /col-left */}
						<div id="col-right">
							<div className="col-wrap">
								<form id="posts-filter" method="post">
									<input
										type="hidden"
										name="taxonomy"
										defaultValue="category"
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
										defaultValue="b9c8da4c70"
									/>
									<input
										type="hidden"
										name="_wp_http_referer"
										defaultValue="/wp-admin/edit-tags.php?taxonomy=category"
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
												<option value={-1}>
													Bulk actions
												</option>
												<option value="delete">
													Delete
												</option>
											</select>
											<input
												type="submit"
												id="doaction"
												className="button action"
												defaultValue="Apply"
											/>
										</div>
										<div className="tablenav-pages one-page">
											<span className="displaying-num">
												1 item
											</span>
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
									<h2 className="screen-reader-text">
										Categories list
									</h2>
									<table className="wp-list-table widefat fixed striped table-view-list tags">
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
													id="name"
													className="manage-column column-name column-primary sortable desc"
												>
													<a href="https://byronw34.sg-host.com/wp-admin/edit-tags.php?taxonomy=category&orderby=name&order=asc">
														<span>Name</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th
													scope="col"
													id="description"
													className="manage-column column-description sortable desc"
												>
													<a href="https://byronw34.sg-host.com/wp-admin/edit-tags.php?taxonomy=category&orderby=description&order=asc">
														<span>Description</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th
													scope="col"
													id="slug"
													className="manage-column column-slug sortable desc"
												>
													<a href="https://byronw34.sg-host.com/wp-admin/edit-tags.php?taxonomy=category&orderby=slug&order=asc">
														<span>Slug</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th
													scope="col"
													id="posts"
													className="manage-column column-posts num sortable desc"
												>
													<a href="https://byronw34.sg-host.com/wp-admin/edit-tags.php?taxonomy=category&orderby=count&order=asc">
														<span>Count</span>
														<span className="sorting-indicator" />
													</a>
												</th>{" "}
											</tr>
										</thead>
										<tbody
											id="the-list"
											data-wp-lists="list:tag"
										>
											<tr id="tag-1" className="level-0">
												<th
													scope="row"
													className="check-column"
												>
													&nbsp;
												</th>
												<td
													className="name column-name has-row-actions column-primary"
													data-colname="Name"
												>
													<strong>
														<a
															className="row-title"
															href="https://byronw34.sg-host.com/wp-admin/term.php?taxonomy=category&tag_ID=1&post_type=post&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dcategory"
															aria-label="“Uncategorized” (Edit)"
														>
															Uncategorized
														</a>
													</strong>
													<br />
													<div
														className="hidden"
														id="inline_1"
													>
														<div className="name">
															Uncategorized
														</div>
														<div className="slug">
															uncategorized
														</div>
														<div className="parent">
															0
														</div>
													</div>
													<div className="row-actions">
														<span className="edit">
															<a
																href="https://byronw34.sg-host.com/wp-admin/term.php?taxonomy=category&tag_ID=1&post_type=post&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dcategory"
																aria-label="Edit “Uncategorized”"
															>
																Edit
															</a>{" "}
															|{" "}
														</span>
														<span className="inline hide-if-no-js">
															<button
																type="button"
																className="button-link editinline"
																aria-label="Quick edit “Uncategorized” inline"
																aria-expanded="false"
															>
																Quick&nbsp;Edit
															</button>{" "}
															|{" "}
														</span>
														<span className="view">
															<a
																href="https://byronw34.sg-host.com/category/uncategorized/"
																aria-label="View “Uncategorized” archive"
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
													className="description column-description"
													data-colname="Description"
												>
													<span aria-hidden="true">
														—
													</span>
													<span className="screen-reader-text">
														No description
													</span>
												</td>
												<td
													className="slug column-slug"
													data-colname="Slug"
												>
													uncategorized
												</td>
												<td
													className="posts column-posts"
													data-colname="Count"
												>
													<a href="edit.php?category_name=uncategorized">
														4
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
													className="manage-column column-name column-primary sortable desc"
												>
													<a href="https://byronw34.sg-host.com/wp-admin/edit-tags.php?taxonomy=category&orderby=name&order=asc">
														<span>Name</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th
													scope="col"
													className="manage-column column-description sortable desc"
												>
													<a href="https://byronw34.sg-host.com/wp-admin/edit-tags.php?taxonomy=category&orderby=description&order=asc">
														<span>Description</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th
													scope="col"
													className="manage-column column-slug sortable desc"
												>
													<a href="https://byronw34.sg-host.com/wp-admin/edit-tags.php?taxonomy=category&orderby=slug&order=asc">
														<span>Slug</span>
														<span className="sorting-indicator" />
													</a>
												</th>
												<th
													scope="col"
													className="manage-column column-posts num sortable desc"
												>
													<a href="https://byronw34.sg-host.com/wp-admin/edit-tags.php?taxonomy=category&orderby=count&order=asc">
														<span>Count</span>
														<span className="sorting-indicator" />
													</a>
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
												<option value={-1}>
													Bulk actions
												</option>
												<option value="delete">
													Delete
												</option>
											</select>
											<input
												type="submit"
												id="doaction2"
												className="button action"
												defaultValue="Apply"
											/>
										</div>
										<div className="tablenav-pages one-page">
											<span className="displaying-num">
												1 item
											</span>
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
								<div className="form-wrap edit-term-notes">
									<p>
										Deleting a category does not delete the
										posts in that category. Instead, posts
										that were only assigned to the deleted
										category are set to the default category{" "}
										<strong>Uncategorized</strong>. The
										default category cannot be deleted.
									</p>
									<p>
										Categories can be selectively converted
										to tags using the{" "}
										<a href="https://byronw34.sg-host.com/wp-admin/import.php">
											category to tag converter
										</a>
										.{" "}
									</p>
								</div>
							</div>
						</div>
						{/* /col-right */}
					</div>
					{/* /col-container */}
				</div>
				{/* /wrap */}
				<form method="get">
					<table style={{ display: "none" }}>
						<tbody id="inlineedit">
							<tr
								id="inline-edit"
								className="inline-edit-row"
								style={{ display: "none" }}
							>
								<td colSpan={5} className="colspanchange">
									<div className="inline-edit-wrapper">
										<fieldset>
											<legend className="inline-edit-legend">
												Quick Edit
											</legend>
											<div className="inline-edit-col">
												<label>
													<span className="title">
														Name
													</span>
													<span className="input-text-wrap">
														<input
															type="text"
															name="name"
															className="ptitle"
															defaultValue=""
														/>
													</span>
												</label>
												<label>
													<span className="title">
														Slug
													</span>
													<span className="input-text-wrap">
														<input
															type="text"
															name="slug"
															className="ptitle"
															defaultValue=""
														/>
													</span>
												</label>
											</div>
										</fieldset>
										<div className="inline-edit-save submit">
											<button
												type="button"
												className="save button button-primary"
											>
												Update Category
											</button>
											<button
												type="button"
												className="cancel button"
											>
												Cancel
											</button>
											<span className="spinner" />
											<input
												type="hidden"
												id="_inline_edit"
												name="_inline_edit"
												defaultValue="dbfcafcc56"
											/>{" "}
											<input
												type="hidden"
												name="taxonomy"
												defaultValue="category"
											/>
											<input
												type="hidden"
												name="post_type"
												defaultValue="post"
											/>
											<div className="notice notice-error notice-alt inline hidden">
												<p className="error" />
											</div>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
				<div className="clear" />
			</div>
		</>
	);
}
