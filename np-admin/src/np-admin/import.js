export default function Import() {
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
									<a href="https://wordpress.org/support/article/tools-import-screen/">
										Documentation on Import
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
										This screen lists links to plugins to
										import data from blogging/content
										management platforms. Choose the
										platform you want to import from, and
										click Install Now when you are prompted
										in the popup window. If your platform is
										not listed, click the link to search the
										plugin directory for other importer
										plugins to see if there is one for your
										platform.
									</p>
									<p>
										In previous versions of WordPress, all
										importers were built-in. They have been
										turned into plugins since most people
										only use them once or infrequently.
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
					<h1>Import</h1>
					<p>
						If you have posts or comments in another system,
						WordPress can import those into this site. To get
						started, choose a system to import from below:
					</p>
					<table className="widefat importers striped">
						<tbody>
							<tr className="importer-item">
								<td className="import-system">
									<span className="importer-title">
										Blogger
									</span>
									<span className="importer-action">
										<a
											href="https://byronw34.sg-host.com/wp-admin/update.php?action=install-plugin&plugin=blogger-importer&from=import&_wpnonce=a95ca526d0"
											className="install-now"
											data-slug="blogger-importer"
											data-name="Blogger"
											aria-label="Install Blogger now"
										>
											Install Now
										</a>{" "}
										|{" "}
										<a
											href="https://byronw34.sg-host.com/wp-admin/plugin-install.php?tab=plugin-information&plugin=blogger-importer&from=import&TB_iframe=true&width=600&height=550"
											className="thickbox open-plugin-details-modal"
											aria-label="More information about Blogger"
										>
											Details
										</a>
									</span>
								</td>
								<td className="desc">
									<span className="importer-desc">
										Import posts, comments, and users from a
										Blogger blog.
									</span>
								</td>
							</tr>
							<tr className="importer-item">
								<td className="import-system">
									<span className="importer-title">
										Categories and Tags Converter
									</span>
									<span className="importer-action">
										<a
											href="https://byronw34.sg-host.com/wp-admin/update.php?action=install-plugin&plugin=wpcat2tag-importer&from=import&_wpnonce=cb7e177ec9"
											className="install-now"
											data-slug="wpcat2tag-importer"
											data-name="Categories and Tags Converter"
											aria-label="Install Categories and Tags Converter now"
										>
											Install Now
										</a>{" "}
										|{" "}
										<a
											href="https://byronw34.sg-host.com/wp-admin/plugin-install.php?tab=plugin-information&plugin=wpcat2tag-importer&from=import&TB_iframe=true&width=600&height=550"
											className="thickbox open-plugin-details-modal"
											aria-label="More information about Categories and Tags Converter"
										>
											Details
										</a>
									</span>
								</td>
								<td className="desc">
									<span className="importer-desc">
										Convert existing categories to tags or
										tags to categories, selectively.
									</span>
								</td>
							</tr>
							<tr className="importer-item">
								<td className="import-system">
									<span className="importer-title">
										LiveJournal
									</span>
									<span className="importer-action">
										<a
											href="https://byronw34.sg-host.com/wp-admin/update.php?action=install-plugin&plugin=livejournal-importer&from=import&_wpnonce=b520d768dc"
											className="install-now"
											data-slug="livejournal-importer"
											data-name="LiveJournal"
											aria-label="Install LiveJournal now"
										>
											Install Now
										</a>{" "}
										|{" "}
										<a
											href="https://byronw34.sg-host.com/wp-admin/plugin-install.php?tab=plugin-information&plugin=livejournal-importer&from=import&TB_iframe=true&width=600&height=550"
											className="thickbox open-plugin-details-modal"
											aria-label="More information about LiveJournal"
										>
											Details
										</a>
									</span>
								</td>
								<td className="desc">
									<span className="importer-desc">
										Import posts from LiveJournal using
										their API.
									</span>
								</td>
							</tr>
							<tr className="importer-item">
								<td className="import-system">
									<span className="importer-title">
										Movable Type and TypePad
									</span>
									<span className="importer-action">
										<a
											href="https://byronw34.sg-host.com/wp-admin/update.php?action=install-plugin&plugin=movabletype-importer&from=import&_wpnonce=16c262efe6"
											className="install-now"
											data-slug="movabletype-importer"
											data-name="Movable Type and TypePad"
											aria-label="Install Movable Type and TypePad now"
										>
											Install Now
										</a>{" "}
										|{" "}
										<a
											href="https://byronw34.sg-host.com/wp-admin/plugin-install.php?tab=plugin-information&plugin=movabletype-importer&from=import&TB_iframe=true&width=600&height=550"
											className="thickbox open-plugin-details-modal"
											aria-label="More information about Movable Type and TypePad"
										>
											Details
										</a>
									</span>
								</td>
								<td className="desc">
									<span className="importer-desc">
										Import posts and comments from a Movable
										Type or TypePad blog.
									</span>
								</td>
							</tr>
							<tr className="importer-item">
								<td className="import-system">
									<span className="importer-title">RSS</span>
									<span className="importer-action">
										<a
											href="https://byronw34.sg-host.com/wp-admin/update.php?action=install-plugin&plugin=rss-importer&from=import&_wpnonce=3724e56d72"
											className="install-now"
											data-slug="rss-importer"
											data-name="RSS"
											aria-label="Install RSS now"
										>
											Install Now
										</a>{" "}
										|{" "}
										<a
											href="https://byronw34.sg-host.com/wp-admin/plugin-install.php?tab=plugin-information&plugin=rss-importer&from=import&TB_iframe=true&width=600&height=550"
											className="thickbox open-plugin-details-modal"
											aria-label="More information about RSS"
										>
											Details
										</a>
									</span>
								</td>
								<td className="desc">
									<span className="importer-desc">
										Import posts from an RSS feed.
									</span>
								</td>
							</tr>
							<tr className="importer-item">
								<td className="import-system">
									<span className="importer-title">
										Tumblr
									</span>
									<span className="importer-action">
										<a
											href="https://byronw34.sg-host.com/wp-admin/update.php?action=install-plugin&plugin=tumblr-importer&from=import&_wpnonce=a6fdc39059"
											className="install-now"
											data-slug="tumblr-importer"
											data-name="Tumblr"
											aria-label="Install Tumblr now"
										>
											Install Now
										</a>{" "}
										|{" "}
										<a
											href="https://byronw34.sg-host.com/wp-admin/plugin-install.php?tab=plugin-information&plugin=tumblr-importer&from=import&TB_iframe=true&width=600&height=550"
											className="thickbox open-plugin-details-modal"
											aria-label="More information about Tumblr"
										>
											Details
										</a>
									</span>
								</td>
								<td className="desc">
									<span className="importer-desc">
										Import posts &amp; media from Tumblr
										using their API.
									</span>
								</td>
							</tr>
							<tr className="importer-item">
								<td className="import-system">
									<span className="importer-title">
										WordPress
									</span>
									<span className="importer-action">
										<a
											href="https://byronw34.sg-host.com/wp-admin/admin.php?import=wordpress"
											aria-label="Run WordPress"
										>
											Run Importer
										</a>
									</span>
								</td>
								<td className="desc">
									<span className="importer-desc">
										Import{" "}
										<strong>
											posts, pages, comments, custom
											fields, categories, and tags
										</strong>{" "}
										from a WordPress export file.
									</span>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						If the importer you need is not listed,{" "}
						<a href="https://byronw34.sg-host.com/wp-admin/plugin-install.php?tab=search&type=tag&s=importer">
							search the plugin directory
						</a>{" "}
						to see if an importer is available.
					</p>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
