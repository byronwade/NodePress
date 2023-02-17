export default function Upload() {
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
									<li id="tab-link-attachment-details">
										<a
											href="#tab-panel-attachment-details"
											aria-controls="tab-panel-attachment-details"
										>
											Attachment Details{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/media-library-screen/">
										Documentation on Media Library
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
										All the files you’ve uploaded are listed
										in the Media Library, with the most
										recent uploads listed first.
									</p>
									<p>
										You can view your media in a simple
										visual grid or a list with columns.
										Switch between these views using the
										icons to the left above the media.
									</p>
									<p>
										To delete media items, click the Bulk
										Select button at the top of the screen.
										Select any items you wish to delete,
										then click the Delete Selected button.
										Clicking the Cancel Selection button
										takes you back to viewing your media.
									</p>{" "}
								</div>
								<div
									id="tab-panel-attachment-details"
									className="help-tab-content"
								>
									<p>
										Clicking an item will display an
										Attachment Details dialog, which allows
										you to preview media and make quick
										edits. Any changes you make to the
										attachment details will be automatically
										saved.
									</p>
									<p>
										Use the arrow buttons at the top of the
										dialog, or the left and right arrow keys
										on your keyboard, to navigate between
										media items quickly.
									</p>
									<p>
										You can also delete individual items and
										access the extended edit screen from the
										details dialog.
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
				<div className="wrap" id="wp-media-grid" data-search="">
					<h1 className="wp-heading-inline">Media Library</h1>
					<a
						href="https://byronw34.sg-host.com/wp-admin/media-new.php"
						className="page-title-action aria-button-if-js"
						role="button"
						aria-expanded="false"
					>
						Add New
					</a>
					<hr className="wp-header-end" />
					<div className="error hide-if-js">
						<p>
							The grid view for the Media Library requires
							JavaScript.{" "}
							<a href="upload.php?mode=list">
								Switch to the list view
							</a>
							.{" "}
						</p>
					</div>
					<div className="media-frame wp-core-ui mode-grid mode-edit hide-menu">
						<div
							className="media-frame-title"
							id="media-frame-title"
						>
							<h1 />
						</div>
						<h2 className="media-frame-menu-heading">Actions</h2>
						<button
							type="button"
							className="button button-link media-frame-menu-toggle"
							aria-expanded="false"
						>
							Menu{" "}
							<span
								className="dashicons dashicons-arrow-down"
								aria-hidden="true"
							/>
						</button>
						<div className="media-frame-menu">
							<div
								role="tablist"
								aria-orientation="vertical"
								className="media-menu"
							/>
						</div>
						<div className="media-frame-tab-panel">
							<div className="media-frame-router" />
							<div
								className="media-frame-content"
								data-columns={7}
							>
								<div className="attachments-browser has-load-more hide-sidebar sidebar-for-errors">
									<div className="media-sidebar">
										<div
											className="media-uploader-status"
											style={{ display: "none" }}
										>
											<h2>Uploading</h2>
											<div className="media-progress-bar">
												<div />
											</div>
											<div className="upload-details">
												<span className="upload-count">
													<span className="upload-index" />{" "}
													/{" "}
													<span className="upload-total" />
												</span>
												<span className="upload-detail-separator">
													–
												</span>
												<span className="upload-filename" />
											</div>
											<div className="upload-errors" />
											<button
												type="button"
												className="button upload-dismiss-errors"
											>
												Dismiss errors
											</button>
										</div>
									</div>
									<div className="uploader-inline hidden">
										<button className="close dashicons dashicons-no">
											<span className="screen-reader-text">
												Close uploader
											</span>
										</button>
										<div className="uploader-inline-content no-upload-message">
											<div className="upload-ui">
												<h2 className="upload-instructions drop-instructions">
													Drop files to upload
												</h2>
												<p className="upload-instructions drop-instructions">
													or
												</p>
												<button
													type="button"
													className="browser button button-hero"
													id="__wp-uploader-id-1"
													aria-labelledby="__wp-uploader-id-1 post-upload-info"
													style={{
														position: "relative",
														zIndex: 1,
													}}
												>
													Select Files
												</button>
											</div>
											<div className="upload-inline-status" />
											<div
												className="post-upload-ui"
												id="post-upload-info"
											>
												<p className="max-upload-size">
													Maximum upload file size:
													256 MB.{" "}
												</p>
											</div>
										</div>
									</div>
									<div className="media-toolbar wp-filter">
										<div className="media-toolbar-secondary">
											<h2 className="media-attachments-filter-heading">
												Filter media
											</h2>
											<div className="view-switch media-grid-view-switch">
												<a
													href="https://byronw34.sg-host.com/wp-admin/upload.php?mode=list"
													className="view-list"
												>
													<span className="screen-reader-text">
														List view
													</span>
												</a>
												<a
													href="https://byronw34.sg-host.com/wp-admin/upload.php?mode=grid"
													className="view-grid current"
													aria-current="page"
												>
													<span className="screen-reader-text">
														Grid view
													</span>
												</a>
											</div>
											<label
												htmlFor="media-attachment-filters"
												className="screen-reader-text"
											>
												Filter by type
											</label>
											<select
												id="media-attachment-filters"
												className="attachment-filters"
											>
												<option value="all">
													All media items
												</option>
												<option value="image">
													Images
												</option>
												<option value="audio">
													Audio
												</option>
												<option value="video">
													Video
												</option>
												<option value="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-word.document.macroEnabled.12,application/vnd.ms-word.template.macroEnabled.12,application/vnd.oasis.opendocument.text,application/vnd.apple.pages,application/pdf,application/vnd.ms-xpsdocument,application/oxps,application/rtf,application/wordperfect,application/octet-stream">
													Documents
												</option>
												<option value="application/vnd.apple.numbers,application/vnd.oasis.opendocument.spreadsheet,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.ms-excel.sheet.binary.macroEnabled.12">
													Spreadsheets
												</option>
												<option value="application/x-gzip,application/rar,application/x-tar,application/zip,application/x-7z-compressed">
													Archives
												</option>
												<option value="unattached">
													Unattached
												</option>
												<option value="mine">
													Mine
												</option>
											</select>
											<button
												type="button"
												className="button media-button button-primary button-large delete-selected-button hidden"
												disabled="disabled"
											>
												Delete permanently
											</button>
											<label
												htmlFor="media-attachment-date-filters"
												className="screen-reader-text"
											>
												Filter by date
											</label>
											<select
												id="media-attachment-date-filters"
												className="attachment-filters"
											>
												<option value="all">
													All dates
												</option>
											</select>
											<button
												type="button"
												className="button media-button select-mode-toggle-button"
											>
												Bulk select
											</button>
											<span className="spinner" />
										</div>
										<div className="media-toolbar-primary search-form">
											<label
												htmlFor="media-search-input"
												className="media-search-input-label"
											>
												Search
											</label>
											<input
												type="search"
												id="media-search-input"
												className="search"
											/>
										</div>
									</div>
									<h2 className="media-views-heading screen-reader-text">
										Media list
									</h2>
									<div className="attachments-wrapper">
										<ul
											tabIndex={-1}
											className="attachments ui-sortable ui-sortable-disabled"
											id="__attachments-view-47"
										/>
										<div className="load-more-wrapper">
											<span className="spinner" />
											<p className="load-more-count hidden" />
											<button
												type="button"
												className="button load-more hidden button-primary"
											>
												Load more
											</button>
											<button
												type="button"
												className="button load-more-jump hidden"
												disabled=""
											>
												Jump to first loaded item
											</button>
										</div>
									</div>
									<p className="no-media">
										No media items found.
									</p>
								</div>
							</div>
						</div>
						<h2 className="media-frame-actions-heading screen-reader-text">
							Selected media actions{" "}
						</h2>
						<div className="media-frame-toolbar" />
						<div className="media-frame-uploader" />
					</div>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
