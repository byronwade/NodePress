export default function MediaNew() {
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
									<a href="https://wordpress.org/support/article/media-add-new-screen/">
										Documentation on Uploading Media Files
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
										You can upload media files here without
										creating a post first. This allows you
										to upload files to use with posts and
										pages later and/or to get a web link for
										a particular file that you can share.
										There are three options for uploading
										files:
									</p>
									<ul>
										<li>
											<strong>Drag and drop</strong> your
											files into the area below. Multiple
											files are allowed.
										</li>
										<li>
											Clicking{" "}
											<strong>Select Files</strong> opens
											a navigation window showing you
											files in your operating system.
											Selecting <strong>Open</strong>{" "}
											after clicking on the file you want
											activates a progress bar on the
											uploader screen.
										</li>
										<li>
											Revert to the{" "}
											<strong>Browser Uploader</strong> by
											clicking the link below the drag and
											drop box.
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
					<h1>Upload New Media</h1>
					<form
						encType="multipart/form-data"
						method="post"
						action="https://byronw34.sg-host.com/wp-admin/media-new.php"
						className="media-upload-form type-form validate"
						id="file-form"
					>
						<div id="media-upload-notice"></div>
						<div id="media-upload-error"></div>
						<div
							id="plupload-upload-ui"
							className="hide-if-no-js drag-drop"
						>
							<div
								id="drag-drop-area"
								style={{ position: "relative" }}
							>
								<div className="drag-drop-inside">
									<p className="drag-drop-info">
										Drop files to upload
									</p>
									<p>or</p>
									<p className="drag-drop-buttons">
										<input
											id="plupload-browse-button"
											type="button"
											defaultValue="Select Files"
											className="button"
											style={{
												position: "relative",
												zIndex: 1,
											}}
										/>
									</p>
								</div>
							</div>
							<p className="upload-flash-bypass">
								You are using the multi-file uploader. Problems?
								Try the{" "}
								<a
									href="https://byronw34.sg-host.com/wp-admin/media-new.php?browser-uploader"
									target="_blank"
								>
									browser uploader
								</a>{" "}
								instead.{" "}
							</p>
							<div
								id="html5_1gpfda50g1mgr9s1atpfk6ba3_container"
								className="moxie-shim moxie-shim-html5"
								style={{
									position: "absolute",
									top: 121,
									left: 466,
									width: 91,
									height: 30,
									overflow: "hidden",
									zIndex: 0,
								}}
							>
								<input
									id="html5_1gpfda50g1mgr9s1atpfk6ba3"
									type="file"
									style={{
										fontSize: 999,
										opacity: 0,
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
									}}
									multiple=""
									accept=""
								/>
							</div>
						</div>
						<div id="html-upload-ui" className="hide-if-js">
							<p id="async-upload-wrap">
								<label
									className="screen-reader-text"
									htmlFor="async-upload"
								>
									Upload
								</label>
								<input
									type="file"
									name="async-upload"
									id="async-upload"
								/>
								<input
									type="submit"
									name="html-upload"
									id="html-upload"
									className="button button-primary"
									defaultValue="Upload"
								/>{" "}
								<a
									href="#"
									onclick="try{top.tb_remove();}catch(e){}; return false;"
								>
									Cancel
								</a>
							</p>
							<div className="clear" />
							<p className="upload-html-bypass hide-if-no-js">
								You are using the browser’s built-in file
								uploader. The WordPress uploader includes
								multiple file selection and drag and drop
								capability.{" "}
								<a href="#">
									Switch to the multi-file uploader
								</a>
								.{" "}
							</p>
						</div>
						<p className="max-upload-size">
							Maximum upload file size: 256 MB.
						</p>
						<input
							type="hidden"
							name="post_id"
							id="post_id"
							defaultValue={0}
						/>
						<input
							type="hidden"
							id="_wpnonce"
							name="_wpnonce"
							defaultValue="00ad370255"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/media-new.php"
						/>{" "}
						<div id="media-items" className="hide-if-no-js" />
					</form>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
