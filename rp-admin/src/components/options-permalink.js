export default function OptionsPermalink() {
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
									<li id="tab-link-permalink-settings">
										<a
											href="#tab-panel-permalink-settings"
											aria-controls="tab-panel-permalink-settings"
										>
											Permalink Settings{" "}
										</a>
									</li>
									<li id="tab-link-custom-structures">
										<a
											href="#tab-panel-custom-structures"
											aria-controls="tab-panel-custom-structures"
										>
											Custom Structures{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/settings-permalinks-screen/">
										Documentation on Permalinks Settings
									</a>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/using-permalinks/">
										Documentation on Using Permalinks
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
										Permalinks are the permanent URLs to
										your individual pages and blog posts, as
										well as your category and tag archives.
										A permalink is the web address used to
										link to your content. The URL to each
										post should be permanent, and never
										change — hence the name permalink.
									</p>
									<p>
										This screen allows you to choose your
										permalink structure. You can choose from
										common settings or create custom URL
										structures.
									</p>
									<p>
										You must click the Save Changes button
										at the bottom of the screen for new
										settings to take effect.
									</p>{" "}
								</div>
								<div
									id="tab-panel-permalink-settings"
									className="help-tab-content"
								>
									<p>
										Permalinks can contain useful
										information, such as the post date,
										title, or other elements. You can choose
										from any of the suggested permalink
										formats, or you can craft your own if
										you select Custom Structure.
									</p>
									<p>
										If you pick an option other than Plain,
										your general URL path with structure
										tags (terms surrounded by <code>%</code>
										) will also appear in the custom
										structure field and your path can be
										further modified there.
									</p>
									<p>
										When you assign multiple categories or
										tags to a post, only one can show up in
										the permalink: the lowest numbered
										category. This applies if your custom
										structure includes{" "}
										<code>%category%</code> or{" "}
										<code>%tag%</code>.
									</p>
									<p>
										You must click the Save Changes button
										at the bottom of the screen for new
										settings to take effect.
									</p>{" "}
								</div>
								<div
									id="tab-panel-custom-structures"
									className="help-tab-content"
								>
									<p>
										The Optional fields let you customize
										the “category” and “tag” base names that
										will appear in archive URLs. For
										example, the page listing all posts in
										the “Uncategorized” category could be{" "}
										<code>/topics/uncategorized</code>{" "}
										instead of{" "}
										<code>/category/uncategorized</code>.
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
					<h1>Permalink Settings</h1>
					<form
						name="form"
						action="options-permalink.php"
						method="post"
					>
						<input
							type="hidden"
							id="_wpnonce"
							name="_wpnonce"
							defaultValue="8661f66c0e"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/options-permalink.php"
						/>
						<p>
							WordPress offers you the ability to create a custom
							URL structure for your permalinks and archives.
							Custom URL structures can improve the aesthetics,
							usability, and forward-compatibility of your links.
							A{" "}
							<a href="https://wordpress.org/support/article/using-permalinks/">
								number of tags are available
							</a>
							, and here are some examples to get you started.
						</p>
						<h2 className="title">Common Settings</h2>
						<p>
							Select the permalink structure for your website.
							Including the <code>%postname%</code> tag makes
							links easy to understand, and can help your posts
							rank higher in search engines.
						</p>
						<table
							className="form-table permalink-structure"
							role="presentation"
						>
							<tbody>
								<tr>
									<th scope="row">Permalink structure</th>
									<td>
										<fieldset className="structure-selection">
											<legend className="screen-reader-text">
												Permalink structure
											</legend>
											<div className="row">
												<input
													id="permalink-input-plain"
													name="selection"
													aria-describedby="permalink-plain"
													type="radio"
													defaultValue=""
												/>
												<div>
													<label htmlFor="permalink-input-plain">
														Plain
													</label>
													<p>
														<code id="permalink-plain">
															https://byronw34.sg-host.com/?p=123
														</code>
													</p>
												</div>
											</div>
											{/* .row */}
											<div className="row">
												<input
													id="permalink-input-day-name"
													name="selection"
													aria-describedby="permalink-day-name"
													type="radio"
													defaultValue="/%year%/%monthnum%/%day%/%postname%/"
												/>
												<div>
													<label htmlFor="permalink-input-day-name">
														Day and name
													</label>
													<p>
														<code id="permalink-day-name">
															https://byronw34.sg-host.com/2023/02/17/sample-post/
														</code>
													</p>
												</div>
											</div>
											{/* .row */}
											<div className="row">
												<input
													id="permalink-input-month-name"
													name="selection"
													aria-describedby="permalink-month-name"
													type="radio"
													defaultValue="/%year%/%monthnum%/%postname%/"
												/>
												<div>
													<label htmlFor="permalink-input-month-name">
														Month and name
													</label>
													<p>
														<code id="permalink-month-name">
															https://byronw34.sg-host.com/2023/02/sample-post/
														</code>
													</p>
												</div>
											</div>
											{/* .row */}
											<div className="row">
												<input
													id="permalink-input-numeric"
													name="selection"
													aria-describedby="permalink-numeric"
													type="radio"
													defaultValue="/archives/%post_id%"
												/>
												<div>
													<label htmlFor="permalink-input-numeric">
														Numeric
													</label>
													<p>
														<code id="permalink-numeric">
															https://byronw34.sg-host.com/archives/123
														</code>
													</p>
												</div>
											</div>
											{/* .row */}
											<div className="row">
												<input
													id="permalink-input-post-name"
													name="selection"
													aria-describedby="permalink-post-name"
													type="radio"
													defaultValue="/%postname%/"
													defaultChecked="checked"
												/>
												<div>
													<label htmlFor="permalink-input-post-name">
														Post name
													</label>
													<p>
														<code id="permalink-post-name">
															https://byronw34.sg-host.com/sample-post/
														</code>
													</p>
												</div>
											</div>
											{/* .row */}
											<div className="row">
												<input
													id="custom_selection"
													name="selection"
													type="radio"
													defaultValue="custom"
												/>
												<div>
													<label htmlFor="custom_selection">
														Custom Structure
													</label>
													<p>
														<label
															htmlFor="permalink_structure"
															className="screen-reader-text"
														>
															Customize permalink
															structure by
															selecting available
															tags{" "}
														</label>
														<span className="code">
															<code id="permalink-custom">
																https://byronw34.sg-host.com
															</code>
															<input
																name="permalink_structure"
																id="permalink_structure"
																type="text"
																defaultValue="/%postname%/"
																aria-describedby="permalink-custom"
																className="regular-text code"
															/>
														</span>
													</p>
													<div className="available-structure-tags hide-if-no-js">
														<div
															id="custom_selection_updated"
															aria-live="assertive"
															className="screen-reader-text"
														/>
														<fieldset>
															<legend>
																Available tags:
															</legend>
															<ul role="list">
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="year (The year of the post, four digits, for example 2004.)"
																		data-added="year added to permalink structure"
																		data-removed="year removed from permalink structure"
																		data-used="year (already used in permalink structure)"
																	>
																		%year%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="monthnum (Month of the year, for example 05.)"
																		data-added="monthnum added to permalink structure"
																		data-removed="monthnum removed from permalink structure"
																		data-used="monthnum (already used in permalink structure)"
																	>
																		%monthnum%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="day (Day of the month, for example 28.)"
																		data-added="day added to permalink structure"
																		data-removed="day removed from permalink structure"
																		data-used="day (already used in permalink structure)"
																	>
																		%day%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="hour (Hour of the day, for example 15.)"
																		data-added="hour added to permalink structure"
																		data-removed="hour removed from permalink structure"
																		data-used="hour (already used in permalink structure)"
																	>
																		%hour%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="minute (Minute of the hour, for example 43.)"
																		data-added="minute added to permalink structure"
																		data-removed="minute removed from permalink structure"
																		data-used="minute (already used in permalink structure)"
																	>
																		%minute%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="second (Second of the minute, for example 33.)"
																		data-added="second added to permalink structure"
																		data-removed="second removed from permalink structure"
																		data-used="second (already used in permalink structure)"
																	>
																		%second%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="post_id (The unique ID of the post, for example 423.)"
																		data-added="post_id added to permalink structure"
																		data-removed="post_id removed from permalink structure"
																		data-used="post_id (already used in permalink structure)"
																	>
																		%post_id%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary active"
																		aria-label="postname (already used in permalink structure)"
																		data-added="postname added to permalink structure"
																		data-removed="postname removed from permalink structure"
																		data-used="postname (already used in permalink structure)"
																		data-label="postname (The sanitized post title (slug).)"
																		aria-pressed="true"
																	>
																		%postname%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="category (Category slug. Nested sub-categories appear as nested directories in the URL.)"
																		data-added="category added to permalink structure"
																		data-removed="category removed from permalink structure"
																		data-used="category (already used in permalink structure)"
																	>
																		%category%{" "}
																	</button>
																</li>
																<li>
																	<button
																		type="button"
																		className="button button-secondary"
																		aria-label="author (A sanitized version of the author name.)"
																		data-added="author added to permalink structure"
																		data-removed="author removed from permalink structure"
																		data-used="author (already used in permalink structure)"
																	>
																		%author%{" "}
																	</button>
																</li>
															</ul>
														</fieldset>
													</div>
													{/* .available-structure-tags */}
												</div>
											</div>
											{/* .row */}
										</fieldset>
										{/* .structure-selection */}
									</td>
								</tr>
							</tbody>
						</table>
						<h2 className="title">Optional</h2>
						<p>
							If you like, you may enter custom structures for
							your category and tag URLs here. For example, using{" "}
							<code>topics</code> as your category base would make
							your category links like{" "}
							<code>
								https://byronw34.sg-host.com/topics/uncategorized/
							</code>
							. If you leave these blank the defaults will be
							used.
						</p>
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th>
										<label htmlFor="category_base">
											Category base{" "}
										</label>
									</th>
									<td>
										<input
											name="category_base"
											id="category_base"
											type="text"
											defaultValue=""
											className="regular-text code"
										/>
									</td>
								</tr>
								<tr>
									<th>
										<label htmlFor="tag_base">
											Tag base
										</label>
									</th>
									<td>
										<input
											name="tag_base"
											id="tag_base"
											type="text"
											defaultValue=""
											className="regular-text code"
										/>
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
				{/* .wrap */}
				<div className="clear" />
			</div>
		</>
	);
}
