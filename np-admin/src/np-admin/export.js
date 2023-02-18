export default function Export() {
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
									<a href="https://wordpress.org/support/article/tools-export-screen/">
										Documentation on Export
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
										You can export a file of your site’s
										content in order to import it into
										another installation or platform. The
										export file will be an XML file format
										called WXR. Posts, pages, comments,
										custom fields, categories, and tags can
										be included. You can choose for the WXR
										file to include only certain posts or
										pages by setting the dropdown filters to
										limit the export by category, author,
										date range by month, or publishing
										status.
									</p>
									<p>
										Once generated, your WXR file can be
										imported by another WordPress site or by
										another blogging platform able to access
										this format.
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
					<h1>Export</h1>
					<p>
						When you click the button below WordPress will create an
						XML file for you to save to your computer.
					</p>
					<p>
						This format, which is called WordPress eXtended RSS or
						WXR, will contain your posts, pages, comments, custom
						fields, categories, and tags.
					</p>
					<p>
						Once you’ve saved the download file, you can use the
						Import function in another WordPress installation to
						import the content from this site.
					</p>
					<h2>Choose what to export</h2>
					<form method="get" id="export-filters">
						<fieldset>
							<legend className="screen-reader-text">
								Content to export
							</legend>
							<input
								type="hidden"
								name="download"
								defaultValue="true"
							/>
							<p>
								<label>
									<input
										type="radio"
										name="content"
										defaultValue="all"
										defaultChecked="checked"
										aria-describedby="all-content-desc"
									/>{" "}
									All content
								</label>
							</p>
							<p className="description" id="all-content-desc">
								This will contain all of your posts, pages,
								comments, custom fields, terms, navigation
								menus, and custom posts.
							</p>
							<p>
								<label>
									<input
										type="radio"
										name="content"
										defaultValue="posts"
									/>{" "}
									Posts
								</label>
							</p>
							<ul
								id="post-filters"
								className="export-filters"
								style={{ display: "none" }}
							>
								<li>
									<label>
										<span className="label-responsive">
											Categories:
										</span>
										<select
											name="cat"
											id="cat"
											className="postform"
										>
											<option
												value={0}
												selected="selected"
											>
												All
											</option>
											<option
												className="level-0"
												value={1}
											>
												Uncategorized
											</option>
										</select>
									</label>
								</li>
								<li>
									<label>
										<span className="label-responsive">
											Authors:
										</span>
										<select name="post_author" className="">
											<option value={0}>All</option>
											<option value={1}>
												bcw1995@gmail.com
												(bcw1995@gmail.com)
											</option>
										</select>{" "}
									</label>
								</li>
								<li>
									<fieldset>
										<legend className="screen-reader-text">
											Date range:
										</legend>
										<label
											htmlFor="post-start-date"
											className="label-responsive"
										>
											Start date:
										</label>
										<select
											name="post_start_date"
											id="post-start-date"
										>
											<option value={0}>
												— Select —
											</option>
											<option value="2023-02">
												February 2023
											</option>{" "}
										</select>
										<label
											htmlFor="post-end-date"
											className="label-responsive"
										>
											End date:
										</label>
										<select
											name="post_end_date"
											id="post-end-date"
										>
											<option value={0}>
												— Select —
											</option>
											<option value="2023-02">
												February 2023
											</option>{" "}
										</select>
									</fieldset>
								</li>
								<li>
									<label
										htmlFor="post-status"
										className="label-responsive"
									>
										Status:
									</label>
									<select name="post_status" id="post-status">
										<option value={0}>All</option>
										<option value="publish">
											Published
										</option>
										<option value="future">
											Scheduled
										</option>
										<option value="draft">Draft</option>
										<option value="pending">Pending</option>
										<option value="private">Private</option>
									</select>
								</li>
							</ul>
							<p>
								<label>
									<input
										type="radio"
										name="content"
										defaultValue="pages"
									/>{" "}
									Pages
								</label>
							</p>
							<ul
								id="page-filters"
								className="export-filters"
								style={{ display: "none" }}
							>
								<li>
									<label>
										<span className="label-responsive">
											Authors:
										</span>
										<select name="page_author" className="">
											<option value={0}>All</option>
											<option value={1}>
												bcw1995@gmail.com
												(bcw1995@gmail.com)
											</option>
										</select>{" "}
									</label>
								</li>
								<li>
									<fieldset>
										<legend className="screen-reader-text">
											Date range:
										</legend>
										<label
											htmlFor="page-start-date"
											className="label-responsive"
										>
											Start date:
										</label>
										<select
											name="page_start_date"
											id="page-start-date"
										>
											<option value={0}>
												— Select —
											</option>
											<option value="2023-02">
												February 2023
											</option>{" "}
										</select>
										<label
											htmlFor="page-end-date"
											className="label-responsive"
										>
											End date:
										</label>
										<select
											name="page_end_date"
											id="page-end-date"
										>
											<option value={0}>
												— Select —
											</option>
											<option value="2023-02">
												February 2023
											</option>{" "}
										</select>
									</fieldset>
								</li>
								<li>
									<label
										htmlFor="page-status"
										className="label-responsive"
									>
										Status:
									</label>
									<select name="page_status" id="page-status">
										<option value={0}>All</option>
										<option value="publish">
											Published
										</option>
										<option value="future">
											Scheduled
										</option>
										<option value="draft">Draft</option>
										<option value="pending">Pending</option>
										<option value="private">Private</option>
									</select>
								</li>
							</ul>
							<p>
								<label>
									<input
										type="radio"
										name="content"
										defaultValue="graphql_document"
									/>{" "}
									GraphQL Documents
								</label>
							</p>
							<p>
								<label>
									<input
										type="radio"
										name="content"
										defaultValue="attachment"
									/>{" "}
									Media
								</label>
							</p>
							<ul
								id="attachment-filters"
								className="export-filters"
								style={{ display: "none" }}
							>
								<li>
									<fieldset>
										<legend className="screen-reader-text">
											Date range:
										</legend>
										<label
											htmlFor="attachment-start-date"
											className="label-responsive"
										>
											Start date:
										</label>
										<select
											name="attachment_start_date"
											id="attachment-start-date"
										>
											<option value={0}>
												— Select —
											</option>
										</select>
										<label
											htmlFor="attachment-end-date"
											className="label-responsive"
										>
											End date:
										</label>
										<select
											name="attachment_end_date"
											id="attachment-end-date"
										>
											<option value={0}>
												— Select —
											</option>
										</select>
									</fieldset>
								</li>
							</ul>
						</fieldset>
						<p className="submit">
							<input
								type="submit"
								name="submit"
								id="submit"
								className="button button-primary"
								defaultValue="Download Export File"
							/>
						</p>
					</form>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
