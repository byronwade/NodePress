export default function OptionsMedia() {
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
									<a href="https://wordpress.org/support/article/settings-media-screen/">
										Documentation on Media Settings
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
										You can set maximum sizes for images
										inserted into your written content; you
										can also insert an image as Full Size.
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
					<h1>Media Settings</h1>
					<form action="options.php" method="post">
						<input
							type="hidden"
							name="option_page"
							defaultValue="media"
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
							defaultValue="731f3d9d38"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/options-media.php"
						/>
						<h2 className="title">Image sizes</h2>
						<p>
							The sizes listed below determine the maximum
							dimensions in pixels to use when adding an image to
							the Media Library.
						</p>
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">Thumbnail size</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Thumbnail size</span>
											</legend>
											<label htmlFor="thumbnail_size_w">
												Width
											</label>
											<input
												name="thumbnail_size_w"
												type="number"
												step={1}
												min={0}
												id="thumbnail_size_w"
												defaultValue={150}
												className="small-text"
											/>
											<br />
											<label htmlFor="thumbnail_size_h">
												Height
											</label>
											<input
												name="thumbnail_size_h"
												type="number"
												step={1}
												min={0}
												id="thumbnail_size_h"
												defaultValue={150}
												className="small-text"
											/>
										</fieldset>
										<input
											name="thumbnail_crop"
											type="checkbox"
											id="thumbnail_crop"
											defaultValue={1}
											defaultChecked="checked"
										/>
										<label htmlFor="thumbnail_crop">
											Crop thumbnail to exact dimensions
											(normally thumbnails are
											proportional)
										</label>
									</td>
								</tr>
								<tr>
									<th scope="row">Medium size</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Medium size</span>
											</legend>
											<label htmlFor="medium_size_w">
												Max Width
											</label>
											<input
												name="medium_size_w"
												type="number"
												step={1}
												min={0}
												id="medium_size_w"
												defaultValue={300}
												className="small-text"
											/>
											<br />
											<label htmlFor="medium_size_h">
												Max Height
											</label>
											<input
												name="medium_size_h"
												type="number"
												step={1}
												min={0}
												id="medium_size_h"
												defaultValue={300}
												className="small-text"
											/>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">Large size</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>Large size</span>
											</legend>
											<label htmlFor="large_size_w">
												Max Width
											</label>
											<input
												name="large_size_w"
												type="number"
												step={1}
												min={0}
												id="large_size_w"
												defaultValue={1024}
												className="small-text"
											/>
											<br />
											<label htmlFor="large_size_h">
												Max Height
											</label>
											<input
												name="large_size_h"
												type="number"
												step={1}
												min={0}
												id="large_size_h"
												defaultValue={1024}
												className="small-text"
											/>
										</fieldset>
									</td>
								</tr>
							</tbody>
						</table>
						<h2 className="title">Uploading Files</h2>
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<td className="td-full">
										<label htmlFor="uploads_use_yearmonth_folders">
											<input
												name="uploads_use_yearmonth_folders"
												type="checkbox"
												id="uploads_use_yearmonth_folders"
												defaultValue={1}
												defaultChecked="checked"
											/>
											Organize my uploads into month- and
											year-based folders
										</label>
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
