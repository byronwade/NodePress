export default function Edit() {
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
											href="#"
											aria-controls="tab-panel-overview"
										>
											Overview{" "}
										</a>
									</li>
									<li id="tab-link-managing-pages">
										<a
											href="#"
											aria-controls="tab-panel-managing-pages"
										>
											Managing Pages{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="#">
										Documentation on Managing Pages
									</a>
								</p>
								<p>
									<a href="#">Support</a>
								</p>{" "}
							</div>
							<div className="contextual-help-tabs-wrap">
								<div
									id="tab-panel-overview"
									className="help-tab-content active"
								>
									<p>
										Pages are similar to posts in that they
										have a title, body text, and associated
										metadata, but they are different in that
										they are not part of the chronological
										blog stream, kind of like permanent
										posts. Pages are not categorized or
										tagged, but can have a hierarchy. You
										can nest pages under other pages by
										making one the “Parent” of the other,
										creating a group of pages.
									</p>{" "}
								</div>
								<div
									id="tab-panel-managing-pages"
									className="help-tab-content"
								>
									<p>
										Managing pages is very similar to
										managing posts, and the screens can be
										customized in the same way.
									</p>
									<p>
										You can also perform the same types of
										actions, including narrowing the list by
										using the filters, acting on a page
										using the action links that appear when
										you hover over a row, or using the Bulk
										actions menu to edit the metadata for
										multiple pages at once.
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
										name="comments-hide"
										type="checkbox"
										id="comments-hide"
										defaultValue="comments"
										defaultChecked="checked"
									/>
									Comments
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
									Date
								</label>
							</fieldset>
							<fieldset className="screen-options">
								<legend>Pagination</legend>
								<label htmlFor="edit_page_per_page">
									Number of items per page:
								</label>
								<input
									type="number"
									step={1}
									min={1}
									max={999}
									className="screen-per-page"
									name="wp_screen_options[value]"
									id="edit_page_per_page"
									maxLength={3}
									defaultValue={20}
								/>
								<input
									type="hidden"
									name="wp_screen_options[option]"
									defaultValue="edit_page_per_page"
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
					<h1 className="wp-heading-inline">Pages</h1>
					<a href="#" className="page-title-action">
						Add New
					</a>
					<hr className="wp-header-end" />
					<h2 className="screen-reader-text">Filter pages list</h2>
					<ul className="subsubsub">
						<li className="all">
							<a href="#" className="current" aria-current="page">
								All <span className="count">(1)</span>
							</a>{" "}
							|
						</li>
						<li className="publish">
							<a href="#">
								Published <span className="count">(1)</span>
							</a>
						</li>
					</ul>
					<form id="posts-filter" method="get">
						<p className="search-box">
							<label
								className="screen-reader-text"
								htmlFor="post-search-input"
							>
								Search Pages:
							</label>
							<input
								type="search"
								id="post-search-input"
								name="s"
								defaultValue=""
							/>
							<input
								type="submit"
								id="search-submit"
								className="button"
								defaultValue="Search Pages"
							/>
						</p>
						<input
							type="hidden"
							name="post_status"
							className="post_status_page"
							defaultValue="all"
						/>
						<input
							type="hidden"
							name="post_type"
							className="post_type_page"
							defaultValue="page"
						/>
						<input
							type="hidden"
							id="_wpnonce"
							name="_wpnonce"
							defaultValue="7de34e26bb"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/edit.php?post_type=page"
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
									<option>Bulk actions</option>
									<option
										value="edit"
										className="hide-if-no-js"
									>
										Edit
									</option>
									<option value="trash">Move to Trash</option>
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
									htmlFor="filter-by-date"
									className="screen-reader-text"
								>
									Filter by date
								</label>
								<select name="m" id="filter-by-date">
									<option selected="selected">
										All dates
									</option>
									<option>February 2023</option>
								</select>
								<input
									type="submit"
									name="filter_action"
									id="post-query-submit"
									className="button"
									defaultValue="Filter"
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
						<h2 className="screen-reader-text">Pages list</h2>
						<table className="wp-list-table widefat fixed striped table-view-list pages">
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
										id="title"
										className="manage-column column-title column-primary sortable desc"
									>
										<a href="#">
											<span>Title</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										id="author"
										className="manage-column column-author"
									>
										Author
									</th>
									<th
										scope="col"
										id="comments"
										className="manage-column column-comments num sortable desc"
									>
										<a href="#">
											<span>
												<span
													className="vers comment-grey-bubble"
													title="Comments"
													aria-hidden="true"
												/>
												<span className="screen-reader-text">
													Comments
												</span>
											</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										id="date"
										className="manage-column column-date sortable asc"
									>
										<a href="#">
											<span>Date</span>
											<span className="sorting-indicator" />
										</a>
									</th>{" "}
								</tr>
							</thead>
							<tbody id="the-list">
								<tr
									id="post-4075"
									className="iedit author-self level-0 post-4075 type-page status-publish hentry"
								>
									<th scope="row" className="check-column">
										{" "}
										<label
											className="screen-reader-text"
											htmlFor="cb-select-4075"
										>
											Select test{" "}
										</label>
										<input
											id="cb-select-4075"
											type="checkbox"
											name="post[]"
											defaultValue={4075}
										/>
										<div className="locked-indicator">
											<span
												className="locked-indicator-icon"
												aria-hidden="true"
											/>
											<span className="screen-reader-text">
												“test” is locked{" "}
											</span>
										</div>
									</th>
									<td
										className="title column-title has-row-actions column-primary page-title"
										data-colname="Title"
									>
										<div className="locked-info">
											<span className="locked-avatar" />{" "}
											<span className="locked-text" />
										</div>
										<strong>
											<a
												className="row-title"
												href="#"
												aria-label="“test” (Edit)"
											>
												test
											</a>
										</strong>
										<div
											className="hidden"
											id="inline_4075"
										>
											<div className="post_title">
												test
											</div>
											<div className="post_name">
												test
											</div>
											<div className="post_author">1</div>
											<div className="comment_status">
												closed
											</div>
											<div className="ping_status">
												closed
											</div>
											<div className="_status">
												publish
											</div>
											<div className="jj">16</div>
											<div className="mm">02</div>
											<div className="aa">2023</div>
											<div className="hh">19</div>
											<div className="mn">33</div>
											<div className="ss">13</div>
											<div className="post_password" />
											<div className="post_parent">0</div>
											<div className="page_template">
												default
											</div>
											<div className="menu_order">0</div>
										</div>
										<div className="row-actions">
											<span className="edit">
												<a
													href="#"
													aria-label="Edit “test”"
												>
													Edit
												</a>{" "}
												|{" "}
											</span>
											<span className="inline hide-if-no-js">
												<button
													type="button"
													className="button-link editinline"
													aria-label="Quick edit “test” inline"
													aria-expanded="false"
												>
													Quick&nbsp;Edit
												</button>{" "}
												|{" "}
											</span>
											<span className="trash">
												<a
													href="#"
													className="submitdelete"
													aria-label="Move “test” to the Trash"
												>
													Trash
												</a>{" "}
												|{" "}
											</span>
											<span className="view">
												<a
													href="#"
													rel="bookmark"
													aria-label="View “test”"
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
										className="author column-author"
										data-colname="Author"
									>
										<a href="#">bcw1995@gmail.com</a>
									</td>
									<td
										className="comments column-comments"
										data-colname="Comments"
									>
										{" "}
										<div className="post-com-count-wrapper">
											<span aria-hidden="true">—</span>
											<span className="screen-reader-text">
												No comments
											</span>
											<span className="post-com-count post-com-count-pending post-com-count-no-pending">
												<span
													className="comment-count comment-count-no-pending"
													aria-hidden="true"
												>
													0
												</span>
												<span className="screen-reader-text">
													No comments
												</span>
											</span>{" "}
										</div>
									</td>
									<td
										className="date column-date"
										data-colname="Date"
									>
										Published
										<br />
										2023/02/16 at 7:33 pm
									</td>{" "}
								</tr>
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
										className="manage-column column-title column-primary sortable desc"
									>
										<a href="#">
											<span>Title</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										className="manage-column column-author"
									>
										Author
									</th>
									<th
										scope="col"
										className="manage-column column-comments num sortable desc"
									>
										<a href="#">
											<span>
												<span
													className="vers comment-grey-bubble"
													title="Comments"
													aria-hidden="true"
												/>
												<span className="screen-reader-text">
													Comments
												</span>
											</span>
											<span className="sorting-indicator" />
										</a>
									</th>
									<th
										scope="col"
										className="manage-column column-date sortable asc"
									>
										<a href="#">
											<span>Date</span>
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
									<option>Bulk actions</option>
									<option
										value="edit"
										className="hide-if-no-js"
									>
										Edit
									</option>
									<option value="trash">Move to Trash</option>
								</select>
								<input
									type="submit"
									id="doaction2"
									className="button action"
									defaultValue="Apply"
								/>
							</div>
							<div className="alignleft actions"></div>
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
					<form method="get">
						<table style={{ display: "none" }}>
							<tbody id="inlineedit">
								<tr
									id="inline-edit"
									className="inline-edit-row inline-edit-row-page quick-edit-row quick-edit-row-page inline-edit-page"
									style={{ display: "none" }}
								>
									<td colSpan={5} className="colspanchange">
										<div
											className="inline-edit-wrapper"
											role="region"
											aria-labelledby="quick-edit-legend"
										>
											<fieldset className="inline-edit-col-left">
												<legend
													className="inline-edit-legend"
													id="quick-edit-legend"
												>
													Quick Edit
												</legend>
												<div className="inline-edit-col">
													<label>
														<span className="title">
															Title
														</span>
														<span className="input-text-wrap">
															<input
																type="text"
																name="post_title"
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
																name="post_name"
																defaultValue=""
																autoComplete="off"
																spellCheck="false"
															/>
														</span>
													</label>
													<fieldset className="inline-edit-date">
														<legend>
															<span className="title">
																Date
															</span>
														</legend>
														<div className="timestamp-wrap">
															<label>
																<span className="screen-reader-text">
																	Month
																</span>
																<select
																	className="form-required"
																	name="mm"
																>
																	<option data-text="Jan">
																		01-Jan
																	</option>
																	<option
																		data-text="Feb"
																		selected="selected"
																	>
																		02-Feb
																	</option>
																	<option data-text="Mar">
																		03-Mar
																	</option>
																	<option data-text="Apr">
																		04-Apr
																	</option>
																	<option data-text="May">
																		05-May
																	</option>
																	<option data-text="Jun">
																		06-Jun
																	</option>
																	<option data-text="Jul">
																		07-Jul
																	</option>
																	<option data-text="Aug">
																		08-Aug
																	</option>
																	<option data-text="Sep">
																		09-Sep
																	</option>
																	<option data-text="Oct">
																		10-Oct
																	</option>
																	<option data-text="Nov">
																		11-Nov
																	</option>
																	<option data-text="Dec">
																		12-Dec
																	</option>
																</select>
															</label>{" "}
															<label>
																<span className="screen-reader-text">
																	Day
																</span>
																<input
																	type="text"
																	name="jj"
																	defaultValue={
																		16
																	}
																	size={2}
																	maxLength={
																		2
																	}
																	autoComplete="off"
																	className="form-required"
																/>
															</label>
															,{" "}
															<label>
																<span className="screen-reader-text">
																	Year
																</span>
																<input
																	type="text"
																	name="aa"
																	defaultValue={
																		2023
																	}
																	size={4}
																	maxLength={
																		4
																	}
																	autoComplete="off"
																	className="form-required"
																/>
															</label>{" "}
															at{" "}
															<label>
																<span className="screen-reader-text">
																	Hour
																</span>
																<input
																	type="text"
																	name="hh"
																	defaultValue={
																		19
																	}
																	size={2}
																	maxLength={
																		2
																	}
																	autoComplete="off"
																	className="form-required"
																/>
															</label>
															:
															<label>
																<span className="screen-reader-text">
																	Minute
																</span>
																<input
																	type="text"
																	name="mn"
																	defaultValue={
																		33
																	}
																	size={2}
																	maxLength={
																		2
																	}
																	autoComplete="off"
																	className="form-required"
																/>
															</label>
														</div>
														<input
															type="hidden"
															id="ss"
															name="ss"
															defaultValue={13}
														/>{" "}
													</fieldset>
													<br className="clear" />
													<label className="inline-edit-author">
														<span className="title">
															Author
														</span>
														<select
															name="post_author"
															className="authors"
														>
															<option value={1}>
																bcw1995@gmail.com
																(bcw1995@gmail.com)
															</option>
														</select>
													</label>
													<div className="inline-edit-group wp-clearfix">
														<label className="alignleft">
															<span className="title">
																Password
															</span>
															<span className="input-text-wrap">
																<input
																	type="text"
																	name="post_password"
																	className="inline-edit-password-input"
																	defaultValue=""
																/>
															</span>
														</label>
														<span className="alignleft inline-edit-or">
															–OR–{" "}
														</span>
														<label className="alignleft inline-edit-private">
															<input
																type="checkbox"
																name="keep_private"
																defaultValue="private"
															/>
															<span className="checkbox-title">
																Private
															</span>
														</label>
													</div>
												</div>
											</fieldset>
											<fieldset className="inline-edit-col-right">
												<div className="inline-edit-col">
													<label>
														<span className="title">
															Parent
														</span>
														<select
															name="post_parent"
															id="post_parent"
														>
															<option value={0}>
																Main Page (no
																parent)
															</option>
															<option
																className="level-0"
																value={4075}
															>
																test
															</option>
														</select>
													</label>
													<label>
														<span className="title">
															Order
														</span>
														<span className="input-text-wrap">
															<input
																type="text"
																name="menu_order"
																className="inline-edit-menu-order-input"
																defaultValue={0}
															/>
														</span>
													</label>
													<div className="inline-edit-group wp-clearfix">
														<label className="alignleft">
															<input
																type="checkbox"
																name="comment_status"
																defaultValue="open"
															/>
															<span className="checkbox-title">
																Allow Comments
															</span>
														</label>
													</div>
													<div className="inline-edit-group wp-clearfix">
														<label className="inline-edit-status alignleft">
															<span className="title">
																Status
															</span>
															<select name="_status">
																<option value="publish">
																	Published
																</option>
																<option value="future">
																	Scheduled
																</option>
																<option value="pending">
																	Pending
																	Review
																</option>
																<option value="draft">
																	Draft
																</option>
															</select>
														</label>
													</div>
												</div>
											</fieldset>
											<div className="submit inline-edit-save">
												<input
													type="hidden"
													id="_inline_edit"
													name="_inline_edit"
													defaultValue="6b94ed3de0"
												/>{" "}
												<button
													type="button"
													className="button button-primary save"
												>
													Update
												</button>
												<button
													type="button"
													className="button cancel"
												>
													Cancel
												</button>
												<span className="spinner" />
												<input
													type="hidden"
													name="post_view"
													defaultValue="list"
												/>
												<input
													type="hidden"
													name="screen"
													defaultValue="edit-page"
												/>
												<div className="notice notice-error notice-alt inline hidden">
													<p className="error" />
												</div>
											</div>
										</div>{" "}
										{/* end of .inline-edit-wrapper */}
									</td>
								</tr>
								<tr
									id="bulk-edit"
									className="inline-edit-row inline-edit-row-page bulk-edit-row bulk-edit-row-page bulk-edit-page"
									style={{ display: "none" }}
								>
									<td colSpan={5} className="colspanchange">
										<div
											className="inline-edit-wrapper"
											role="region"
											aria-labelledby="bulk-edit-legend"
										>
											<fieldset className="inline-edit-col-left">
												<legend
													className="inline-edit-legend"
													id="bulk-edit-legend"
												>
													Bulk Edit
												</legend>
												<div className="inline-edit-col">
													<div id="bulk-title-div">
														<div id="bulk-titles" />
													</div>
												</div>
											</fieldset>
											<fieldset className="inline-edit-col-right">
												<div className="inline-edit-col">
													<label className="inline-edit-author">
														<span className="title">
															Author
														</span>
														<select
															name="post_author"
															className="authors"
														>
															<option value={-1}>
																— No Change —
															</option>
															<option value={1}>
																bcw1995@gmail.com
																(bcw1995@gmail.com)
															</option>
														</select>
													</label>
													<label>
														<span className="title">
															Parent
														</span>
														<select
															name="post_parent"
															id="post_parent"
														>
															<option value={-1}>
																— No Change —
															</option>
															<option value={0}>
																Main Page (no
																parent)
															</option>
															<option
																className="level-0"
																value={4075}
															>
																test
															</option>
														</select>
													</label>
													<div className="inline-edit-group wp-clearfix">
														<label className="alignleft">
															<span className="title">
																Comments
															</span>
															<select name="comment_status">
																<option value="">
																	— No Change
																	—
																</option>
																<option value="open">
																	Allow
																</option>
																<option value="closed">
																	Do not allow
																</option>
															</select>
														</label>
													</div>
													<div className="inline-edit-group wp-clearfix">
														<label className="inline-edit-status alignleft">
															<span className="title">
																Status
															</span>
															<select name="_status">
																<option>
																	— No Change
																	—
																</option>
																<option value="publish">
																	Published
																</option>
																<option value="private">
																	Private
																</option>
																<option value="pending">
																	Pending
																	Review
																</option>
																<option value="draft">
																	Draft
																</option>
															</select>
														</label>
													</div>
												</div>
											</fieldset>
											<div className="submit inline-edit-save">
												<input
													type="submit"
													name="bulk_edit"
													id="bulk_edit"
													className="button button-primary"
													defaultValue="Update"
												/>
												<button
													type="button"
													className="button cancel"
												>
													Cancel
												</button>
												<input
													type="hidden"
													name="post_view"
													defaultValue="list"
												/>
												<input
													type="hidden"
													name="screen"
													defaultValue="edit-page"
												/>
												<div className="notice notice-error notice-alt inline hidden">
													<p className="error" />
												</div>
											</div>
										</div>{" "}
										{/* end of .inline-edit-wrapper */}
									</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</div>
		</>
	);
}
