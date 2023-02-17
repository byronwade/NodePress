export default function OptionsPrivacy() {
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
									<a href="https://wordpress.org/support/article/settings-privacy-screen/">
										Documentation on Privacy Settings
									</a>
								</p>{" "}
							</div>
							<div className="contextual-help-tabs-wrap">
								<div
									id="tab-panel-overview"
									className="help-tab-content active"
								>
									<p>
										The Privacy screen lets you either build
										a new privacy-policy page or choose one
										you already have to show.
									</p>
									<p>
										This screen includes suggestions to help
										you write your own privacy policy.
										However, it is your responsibility to
										use these resources correctly, to
										provide the information required by your
										privacy policy, and to keep this
										information current and accurate.
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
				<div className="privacy-settings-header">
					<div className="privacy-settings-title-section">
						<h1>Privacy </h1>
					</div>
					<nav
						className="privacy-settings-tabs-wrapper hide-if-no-js"
						aria-label="Secondary menu"
					>
						<a
							href="https://byronw34.sg-host.com/wp-admin/options-privacy.php"
							className="privacy-settings-tab active"
							aria-current="true"
						>
							Settings{" "}
						</a>
						<a
							href="https://byronw34.sg-host.com/wp-admin/options-privacy.php?tab=policyguide"
							className="privacy-settings-tab"
						>
							Policy Guide{" "}
						</a>
					</nav>
				</div>
				<hr className="wp-header-end" />
				<div
					id="setting-error-page_for_privacy_policy"
					className="notice notice-error settings-error is-dismissible"
				>
					<p>
						<strong>
							The currently selected Privacy Policy page does not
							exist. Please create or select a new page.
						</strong>
					</p>
					<button type="button" className="notice-dismiss">
						<span className="screen-reader-text">
							Dismiss this notice.
						</span>
					</button>
				</div>
				<div className="notice notice-error hide-if-js">
					<p>The Privacy Settings require JavaScript.</p>
				</div>
				<div className="privacy-settings-body hide-if-no-js">
					<h2>Privacy Settings</h2>
					<p>
						As a website owner, you may need to follow national or
						international privacy laws. For example, you may need to
						create and display a Privacy Policy. If you already have
						a Privacy Policy page, please select it below. If not,
						please create one.{" "}
					</p>
					<p>
						The new page will include help and suggestions for your
						Privacy Policy. However, it is your responsibility to
						use those resources correctly, to provide the
						information that your Privacy Policy requires, and to
						keep that information current and accurate.{" "}
					</p>
					<p>
						After your Privacy Policy page is set, you should edit
						it. You should also review your Privacy Policy from time
						to time, especially after installing or updating any
						themes or plugins. There may be changes or new suggested
						information for you to consider adding to your policy.{" "}
					</p>
					<p>
						Need help putting together your new Privacy Policy page?{" "}
						<a href="https://byronw34.sg-host.com/wp-admin/options-privacy.php?tab=policyguide">
							Check out our Privacy Policy guide
						</a>{" "}
						for recommendations on what content to include, along
						with policies suggested by your plugins and theme.{" "}
					</p>
					<hr />
					<table
						className="form-table tools-privacy-policy-page"
						role="presentation"
					>
						<tbody>
							<tr>
								<th scope="row">
									<label htmlFor="create-page">
										Create a new Privacy Policy Page{" "}
									</label>
								</th>
								<td>
									<form
										className="wp-create-privacy-page"
										method="post"
										action=""
									>
										<input
											type="hidden"
											name="action"
											defaultValue="create-privacy-page"
										/>
										<input
											type="hidden"
											id="_wpnonce"
											name="_wpnonce"
											defaultValue="10e38a3e5e"
										/>
										<input
											type="hidden"
											name="_wp_http_referer"
											defaultValue="/wp-admin/options-privacy.php"
										/>
										<input
											type="submit"
											name="submit"
											id="create-page"
											className="button"
											defaultValue="Create"
										/>{" "}
									</form>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<label htmlFor="page_for_privacy_policy">
										Select a Privacy Policy page{" "}
									</label>
								</th>
								<td>
									<form method="post" action="">
										<input
											type="hidden"
											name="action"
											defaultValue="set-privacy-page"
										/>
										<select
											name="page_for_privacy_policy"
											id="page_for_privacy_policy"
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
										<input
											type="hidden"
											id="_wpnonce"
											name="_wpnonce"
											defaultValue="44896ca4ff"
										/>
										<input
											type="hidden"
											name="_wp_http_referer"
											defaultValue="/wp-admin/options-privacy.php"
										/>
										<input
											type="submit"
											name="submit"
											id="set-page"
											className="button button-primary"
											defaultValue="Use This Page"
										/>{" "}
									</form>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
