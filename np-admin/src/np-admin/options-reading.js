export default function OptionsReading() {
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
									<li id="tab-link-site-visibility">
										<a
											href="#tab-panel-site-visibility"
											aria-controls="tab-panel-site-visibility"
										>
											Search engine visibility{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/settings-reading-screen/">
										Documentation on Reading Settings
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
										This screen contains the settings that
										affect the display of your content.
									</p>
									<p>
										You can choose what’s displayed on the
										homepage of your site. It can be posts
										in reverse chronological order (classic
										blog), or a fixed/static page. To set a
										static homepage, you first need to
										create two{" "}
										<a href="post-new.php?post_type=page">
											Pages
										</a>
										. One will become the homepage, and the
										other will be where your posts are
										displayed.
									</p>
									<p>
										You can also control the display of your
										content in RSS feeds, including the
										maximum number of posts to display and
										whether to show full text or an excerpt.{" "}
										<a href="https://wordpress.org/support/article/wordpress-feeds/">
											Learn more about feeds
										</a>
										.
									</p>
									<p>
										You must click the Save Changes button
										at the bottom of the screen for new
										settings to take effect.
									</p>{" "}
								</div>
								<div
									id="tab-panel-site-visibility"
									className="help-tab-content"
								>
									<p>
										You can choose whether or not your site
										will be crawled by robots, ping
										services, and spiders. If you want those
										services to ignore your site, click the
										checkbox next to “Discourage search
										engines from indexing this site” and
										click the Save Changes button at the
										bottom of the screen.
									</p>
									<p>
										Note that even when set to discourage
										search engines, your site is still
										visible on the web and not all search
										engines adhere to this directive.
									</p>
									<p>
										When this setting is in effect, a
										reminder is shown in the At a Glance box
										of the Dashboard that says, “Search
										engines discouraged”, to remind you that
										you have directed search engines to not
										crawl your site.
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
					<h1>Reading Settings</h1>
					<form method="post" action="options.php">
						<input
							type="hidden"
							name="option_page"
							defaultValue="reading"
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
							defaultValue="66152765bd"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/options-reading.php"
						/>
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">Your homepage displays</th>
									<td id="front-static-pages">
										<fieldset>
											<legend className="screen-reader-text">
												<span>
													Your homepage displays
												</span>
											</legend>
											<p>
												<label>
													<input
														name="show_on_front"
														type="radio"
														defaultValue="posts"
														className="tog"
														defaultChecked="checked"
													/>
													Your latest posts{" "}
												</label>
											</p>
											<p>
												<label>
													<input
														name="show_on_front"
														type="radio"
														defaultValue="page"
														className="tog"
													/>
													A{" "}
													<a href="edit.php?post_type=page">
														static page
													</a>{" "}
													(select below){" "}
												</label>
											</p>
											<ul>
												<li>
													<label htmlFor="page_on_front">
														Homepage:{" "}
														<select
															name="page_on_front"
															id="page_on_front"
															disabled=""
														>
															<option value={0}>
																— Select —
															</option>
															<option
																className="level-0"
																value={4075}
															>
																test
															</option>
														</select>
													</label>
												</li>
												<li>
													<label htmlFor="page_for_posts">
														Posts page:{" "}
														<select
															name="page_for_posts"
															id="page_for_posts"
															disabled=""
														>
															<option value={0}>
																— Select —
															</option>
															<option
																className="level-0"
																value={4075}
															>
																test
															</option>
														</select>
													</label>
												</li>
											</ul>
										</fieldset>
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="posts_per_page">
											Blog pages show at most
										</label>
									</th>
									<td>
										<input
											name="posts_per_page"
											type="number"
											step={1}
											min={1}
											id="posts_per_page"
											defaultValue={10}
											className="small-text"
										/>{" "}
										posts
									</td>
								</tr>
								<tr>
									<th scope="row">
										<label htmlFor="posts_per_rss">
											Syndication feeds show the most
											recent
										</label>
									</th>
									<td>
										<input
											name="posts_per_rss"
											type="number"
											step={1}
											min={1}
											id="posts_per_rss"
											defaultValue={10}
											className="small-text"
										/>{" "}
										items
									</td>
								</tr>
								<tr>
									<th scope="row">
										For each post in a feed, include{" "}
									</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>
													For each post in a feed,
													include{" "}
												</span>
											</legend>
											<p>
												<label>
													<input
														name="rss_use_excerpt"
														type="radio"
														defaultValue={0}
														defaultChecked="checked"
													/>{" "}
													Full text
												</label>
												<br />
												<label>
													<input
														name="rss_use_excerpt"
														type="radio"
														defaultValue={1}
													/>{" "}
													Excerpt
												</label>
											</p>
											<p className="description">
												Your theme determines how
												content is displayed in
												browsers.{" "}
												<a href="https://wordpress.org/support/article/wordpress-feeds/">
													Learn more about feeds
												</a>
												.{" "}
											</p>
										</fieldset>
									</td>
								</tr>
								<tr className="option-site-visibility">
									<th scope="row">
										Search engine visibility{" "}
									</th>
									<td>
										<fieldset>
											<legend className="screen-reader-text">
												<span>
													Search engine visibility{" "}
												</span>
											</legend>
											<label htmlFor="blog_public">
												<input
													name="blog_public"
													type="checkbox"
													id="blog_public"
													defaultValue={0}
												/>
												Discourage search engines from
												indexing this site
											</label>
											<p className="description">
												It is up to search engines to
												honor this request.
											</p>
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
