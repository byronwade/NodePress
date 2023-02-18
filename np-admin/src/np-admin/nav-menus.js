export default function NavMenus() {
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
									<li id="tab-link-menu-management">
										<a
											href="#tab-panel-menu-management"
											aria-controls="tab-panel-menu-management"
										>
											Menu Management{" "}
										</a>
									</li>
									<li id="tab-link-editing-menus">
										<a
											href="#tab-panel-editing-menus"
											aria-controls="tab-panel-editing-menus"
										>
											Editing Menus{" "}
										</a>
									</li>
								</ul>
							</div>
							<div className="contextual-help-sidebar">
								<p>
									<strong>For more information:</strong>
								</p>
								<p>
									<a href="https://wordpress.org/support/article/appearance-menus-screen/">
										Documentation on Menus
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
										This screen is used for managing your
										navigation menus.
									</p>
									<p>
										Menus can be displayed in locations
										defined by your theme, even used in
										sidebars by adding a “Navigation Menu”
										widget on the{" "}
										<a href="https://byronw34.sg-host.com/wp-admin/widgets.php">
											Widgets
										</a>{" "}
										screen. If your theme does not support
										the navigation menus feature (the
										default themes, Twenty Twenty and Twenty
										Twenty-One, do), you can learn about
										adding this support by following the
										documentation link to the side.
									</p>
									<p>From this screen you can:</p>
									<ul>
										<li>Create, edit, and delete menus</li>
										<li>
											Add, organize, and modify individual
											menu items
										</li>
									</ul>{" "}
								</div>
								<div
									id="tab-panel-menu-management"
									className="help-tab-content"
								>
									<p>
										The menu management box at the top of
										the screen is used to control which menu
										is opened in the editor below.
									</p>
									<ul>
										<li>
											To edit an existing menu,{" "}
											<strong>
												choose a menu from the dropdown
												and click Select
											</strong>
										</li>
										<li>
											If you have not yet created any
											menus,{" "}
											<strong>
												click the ’create a new menu’
												link
											</strong>{" "}
											to get started
										</li>
									</ul>
									<p>
										You can assign theme locations to
										individual menus by{" "}
										<strong>
											selecting the desired settings
										</strong>{" "}
										at the bottom of the menu editor. To
										assign menus to all theme locations at
										once,{" "}
										<strong>
											visit the Manage Locations tab
										</strong>{" "}
										at the top of the screen.
									</p>{" "}
								</div>
								<div
									id="tab-panel-editing-menus"
									className="help-tab-content"
								>
									<p>
										Each navigation menu may contain a mix
										of links to pages, categories, custom
										URLs or other content types. Menu links
										are added by selecting items from the
										expanding boxes in the left-hand column
										below.
									</p>
									<p>
										<strong>
											Clicking the arrow to the right of
											any menu item
										</strong>{" "}
										in the editor will reveal a standard
										group of settings. Additional settings
										such as link target, CSS classes, link
										relationships, and link descriptions can
										be enabled and disabled via the Screen
										Options tab.
									</p>
									<ul>
										<li>
											Add one or several items at once by{" "}
											<strong>
												selecting the checkbox next to
												each item and clicking Add to
												Menu
											</strong>
										</li>
										<li>
											To add a custom link,{" "}
											<strong>
												expand the Custom Links section,
												enter a URL and link text, and
												click Add to Menu
											</strong>
										</li>
										<li>
											To reorganize menu items,{" "}
											<strong>
												drag and drop items with your
												mouse or use your keyboard
											</strong>
											. Drag or move a menu item a little
											to the right to make it a submenu
										</li>
										<li>
											Delete a menu item by{" "}
											<strong>
												expanding it and clicking the
												Remove link
											</strong>
										</li>
									</ul>{" "}
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
								<legend>Screen elements</legend>
								<p>
									Some screen elements can be shown or hidden
									by using the checkboxes. They can be
									expanded and collapsed by clickling on their
									headings, and arranged by dragging their
									headings or by clicking on the up and down
									arrows.{" "}
								</p>
								<label htmlFor="add-post-type-page-hide">
									<input
										className="hide-postbox-tog"
										name="add-post-type-page-hide"
										type="checkbox"
										id="add-post-type-page-hide"
										defaultValue="add-post-type-page"
										defaultChecked="checked"
									/>
									Pages
								</label>
								<label htmlFor="add-post-type-post-hide">
									<input
										className="hide-postbox-tog"
										name="add-post-type-post-hide"
										type="checkbox"
										id="add-post-type-post-hide"
										defaultValue="add-post-type-post"
										defaultChecked="checked"
									/>
									Posts
								</label>
								<label htmlFor="add-post-type-projects-hide">
									<input
										className="hide-postbox-tog"
										name="add-post-type-projects-hide"
										type="checkbox"
										id="add-post-type-projects-hide"
										defaultValue="add-post-type-projects"
										defaultChecked="checked"
									/>
									Projects
								</label>
								<label htmlFor="add-custom-links-hide">
									<input
										className="hide-postbox-tog"
										name="add-custom-links-hide"
										type="checkbox"
										id="add-custom-links-hide"
										defaultValue="add-custom-links"
										defaultChecked="checked"
									/>
									Custom Links
								</label>
								<label htmlFor="add-category-hide">
									<input
										className="hide-postbox-tog"
										name="add-category-hide"
										type="checkbox"
										id="add-category-hide"
										defaultValue="add-category"
										defaultChecked="checked"
									/>
									Categories
								</label>
								<label htmlFor="add-post_tag-hide">
									<input
										className="hide-postbox-tog"
										name="add-post_tag-hide"
										type="checkbox"
										id="add-post_tag-hide"
										defaultValue="add-post_tag"
									/>
									Tags
								</label>
								<label htmlFor="add-graphql_query_alias-hide">
									<input
										className="hide-postbox-tog"
										name="add-graphql_query_alias-hide"
										type="checkbox"
										id="add-graphql_query_alias-hide"
										defaultValue="add-graphql_query_alias"
										defaultChecked="checked"
									/>
									Alias Names
								</label>
								<label htmlFor="add-graphql_document_grant-hide">
									<input
										className="hide-postbox-tog"
										name="add-graphql_document_grant-hide"
										type="checkbox"
										id="add-graphql_document_grant-hide"
										defaultValue="add-graphql_document_grant"
										defaultChecked="checked"
									/>
									Allow/Deny
								</label>
								<label htmlFor="add-graphql_document_http_maxage-hide">
									<input
										className="hide-postbox-tog"
										name="add-graphql_document_http_maxage-hide"
										type="checkbox"
										id="add-graphql_document_http_maxage-hide"
										defaultValue="add-graphql_document_http_maxage"
										defaultChecked="checked"
									/>
									Max-Age Header
								</label>{" "}
							</fieldset>
							<fieldset className="metabox-prefs">
								<legend>Show advanced menu properties</legend>
								<label>
									<input
										className="hide-column-tog"
										name="link-target-hide"
										type="checkbox"
										id="link-target-hide"
										defaultValue="link-target"
									/>
									Link Target
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="title-attribute-hide"
										type="checkbox"
										id="title-attribute-hide"
										defaultValue="title-attribute"
									/>
									Title Attribute
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="css-classes-hide"
										type="checkbox"
										id="css-classes-hide"
										defaultValue="css-classes"
									/>
									CSS Classes
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="xfn-hide"
										type="checkbox"
										id="xfn-hide"
										defaultValue="xfn"
									/>
									Link Relationship (XFN)
								</label>
								<label>
									<input
										className="hide-column-tog"
										name="description-hide"
										type="checkbox"
										id="description-hide"
										defaultValue="description"
									/>
									Description
								</label>
							</fieldset>
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
					<h1 className="wp-heading-inline">Menus</h1>
					<a
						className="page-title-action hide-if-no-customize"
						href="https://byronw34.sg-host.com/wp-admin/customize.php?autofocus%5Bpanel%5D=nav_menus&return=%2Fwp-admin%2Fnav-menus.php"
					>
						Manage with Live Preview
					</a>
					<hr className="wp-header-end" />
					<nav
						className="nav-tab-wrapper wp-clearfix"
						aria-label="Secondary menu"
					>
						<a
							href="https://byronw34.sg-host.com/wp-admin/nav-menus.php"
							className="nav-tab nav-tab-active"
							aria-current="page"
						>
							Edit Menus
						</a>
						<a
							href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=locations"
							className="nav-tab"
						>
							Manage Locations
						</a>
					</nav>
					<div className="manage-menus">
						<span className="add-edit-menu-action">
							Edit your menu below, or{" "}
							<a href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=edit&menu=0">
								create a new menu
							</a>
							. Do not forget to save your changes!{" "}
							<span className="screen-reader-text">
								Click the Save Menu button to save your changes.
							</span>
						</span>
						{/* /add-edit-menu-action */}
					</div>
					{/* /manage-menus */}
					<div id="nav-menus-frame" className="wp-clearfix">
						<div
							id="menu-settings-column"
							className="metabox-holder"
						>
							<div className="clear" />
							<form
								id="nav-menu-meta"
								className="nav-menu-meta"
								method="post"
								encType="multipart/form-data"
							>
								<input
									type="hidden"
									name="menu"
									id="nav-menu-meta-object-id"
									defaultValue={3}
								/>
								<input
									type="hidden"
									name="action"
									defaultValue="add-menu-item"
								/>
								<input
									type="hidden"
									id="menu-settings-column-nonce"
									name="menu-settings-column-nonce"
									defaultValue="4cb025c4d4"
								/>
								<input
									type="hidden"
									name="_wp_http_referer"
									defaultValue="/wp-admin/nav-menus.php"
								/>{" "}
								<h2>Add menu items</h2>
								<div
									id="side-sortables"
									className="accordion-container"
								>
									<ul className="outer-border">
										<li
											className="control-section accordion-section  open add-post-type-page"
											id="add-post-type-page"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Pages{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<div
														id="posttype-page"
														className="posttypediv"
													>
														<ul
															id="posttype-page-tabs"
															className="posttype-tabs add-menu-item-tabs"
														>
															<li className="tabs">
																<a
																	className="nav-tab-link"
																	data-type="tabs-panel-posttype-page-most-recent"
																	href="/wp-admin/nav-menus.php?page-tab=most-recent#tabs-panel-posttype-page-most-recent"
																>
																	Most Recent{" "}
																</a>
															</li>
															<li>
																<a
																	className="nav-tab-link"
																	data-type="page-all"
																	href="/wp-admin/nav-menus.php?page-tab=all#page-all"
																>
																	View All{" "}
																</a>
															</li>
															<li>
																<a
																	className="nav-tab-link"
																	data-type="tabs-panel-posttype-page-search"
																	href="/wp-admin/nav-menus.php?page-tab=search#tabs-panel-posttype-page-search"
																>
																	Search{" "}
																</a>
															</li>
														</ul>
														{/* .posttype-tabs */}
														<div
															id="tabs-panel-posttype-page-most-recent"
															className="tabs-panel tabs-panel-active"
															role="region"
															aria-label="Most Recent"
															tabIndex={0}
														>
															<ul
																id="pagechecklist-most-recent"
																className="categorychecklist form-no-clear"
															>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-2][menu-item-object-id]"
																			defaultValue={
																				4075
																			}
																		/>{" "}
																		test
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-2][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-2][menu-item-object]"
																		defaultValue="page"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-2][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-2][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-2][menu-item-title]"
																		defaultValue="test"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-2][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/test/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-2][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-2][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-2][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-2][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
															</ul>
														</div>
														{/* /.tabs-panel */}
														<div
															className="tabs-panel tabs-panel-inactive"
															id="tabs-panel-posttype-page-search"
															role="region"
															aria-label="Search Pages"
															tabIndex={0}
														>
															<p className="quick-search-wrap">
																<label
																	htmlFor="quick-search-posttype-page"
																	className="screen-reader-text"
																>
																	Search
																</label>
																<input
																	type="search"
																	className="quick-search"
																	defaultValue=""
																	name="quick-search-posttype-page"
																	id="quick-search-posttype-page"
																/>
																<span className="spinner" />
																<input
																	type="submit"
																	name="submit"
																	id="submit-quick-search-posttype-page"
																	className="button button-small quick-search-submit hide-if-js"
																	defaultValue="Search"
																/>{" "}
															</p>
															<ul
																id="page-search-checklist"
																data-wp-lists="list:page"
																className="categorychecklist form-no-clear"
															></ul>
														</div>
														{/* /.tabs-panel */}
														<div
															id="page-all"
															className="tabs-panel tabs-panel-view-all tabs-panel-inactive"
															role="region"
															aria-label="All Pages"
															tabIndex={0}
														>
															<ul
																id="pagechecklist"
																data-wp-lists="list:page"
																className="categorychecklist form-no-clear"
															>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox add-to-top"
																			name="menu-item[-1][menu-item-object-id]"
																			defaultValue={
																				-1
																			}
																		/>{" "}
																		Home
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-1][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-1][menu-item-object]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-1][menu-item-parent-id]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-1][menu-item-type]"
																		defaultValue="custom"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-1][menu-item-title]"
																		defaultValue="Home"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-1][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-1][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-1][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-1][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-1][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-4][menu-item-object-id]"
																			defaultValue={
																				4075
																			}
																		/>{" "}
																		test
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-4][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-4][menu-item-object]"
																		defaultValue="page"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-4][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-4][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-4][menu-item-title]"
																		defaultValue="test"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-4][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/test/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-4][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-4][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-4][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-4][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
															</ul>
														</div>
														{/* /.tabs-panel */}
														<p
															className="button-controls wp-clearfix"
															data-items-type="posttype-page"
														>
															<span className="list-controls hide-if-no-js">
																<input
																	type="checkbox"
																	id="page-tab"
																	className="select-all"
																/>
																<label htmlFor="page-tab">
																	Select All
																</label>
															</span>
															<span className="add-to-menu">
																<input
																	type="submit"
																	className="button submit-add-to-menu right"
																	defaultValue="Add to Menu"
																	name="add-post-type-menu-item"
																	id="submit-posttype-page"
																/>
																<span className="spinner" />
															</span>
														</p>
													</div>
													{/* /.posttypediv */}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
										<li
											className="control-section accordion-section   add-post-type-post"
											id="add-post-type-post"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Posts{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<div
														id="posttype-post"
														className="posttypediv"
													>
														<ul
															id="posttype-post-tabs"
															className="posttype-tabs add-menu-item-tabs"
														>
															<li className="tabs">
																<a
																	className="nav-tab-link"
																	data-type="tabs-panel-posttype-post-most-recent"
																	href="/wp-admin/nav-menus.php?post-tab=most-recent#tabs-panel-posttype-post-most-recent"
																>
																	Most Recent{" "}
																</a>
															</li>
															<li>
																<a
																	className="nav-tab-link"
																	data-type="post-all"
																	href="/wp-admin/nav-menus.php?post-tab=all#post-all"
																>
																	View All{" "}
																</a>
															</li>
															<li>
																<a
																	className="nav-tab-link"
																	data-type="tabs-panel-posttype-post-search"
																	href="/wp-admin/nav-menus.php?post-tab=search#tabs-panel-posttype-post-search"
																>
																	Search{" "}
																</a>
															</li>
														</ul>
														{/* .posttype-tabs */}
														<div
															id="tabs-panel-posttype-post-most-recent"
															className="tabs-panel tabs-panel-active"
															role="region"
															aria-label="Most Recent"
															tabIndex={0}
														>
															<ul
																id="postchecklist-most-recent"
																className="categorychecklist form-no-clear"
															>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-5][menu-item-object-id]"
																			defaultValue={
																				29
																			}
																		/>{" "}
																		The New
																		Website
																		Design
																		Trends:
																		Overstimulation.
																		Parallax
																		zoom
																		scrolling.
																		’90s
																		navigation.
																		Scrapbook
																		aesthetic.
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-5][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-5][menu-item-object]"
																		defaultValue="post"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-5][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-5][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-5][menu-item-title]"
																		defaultValue="The New Website Design Trends: Overstimulation. Parallax zoom scrolling. '90s navigation. Scrapbook aesthetic."
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-5][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/the-new-website-design-trends-overstimulation-parallax-zoom-scrolling-90s-navigation-scrapbook-aesthetic/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-5][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-5][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-5][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-5][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-6][menu-item-object-id]"
																			defaultValue={
																				21
																			}
																		/>{" "}
																		Google’s
																		200
																		Ranking
																		Factors:
																		The
																		Complete
																		List
																		(2022)
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-6][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-6][menu-item-object]"
																		defaultValue="post"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-6][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-6][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-6][menu-item-title]"
																		defaultValue="Google’s 200 Ranking Factors: The Complete List (2022)"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-6][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/googles-200-ranking-factors-the-complete-list-2022/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-6][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-6][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-6][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-6][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-7][menu-item-object-id]"
																			defaultValue={
																				8
																			}
																		/>{" "}
																		How
																		Microsoft
																		Bing’s
																		New Chat
																		AI Could
																		Impact
																		Website
																		SEO
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-7][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-7][menu-item-object]"
																		defaultValue="post"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-7][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-7][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-7][menu-item-title]"
																		defaultValue="How Microsoft Bing's New Chat AI Could Impact Website SEO"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-7][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/how-microsoft-bings-new-chat-ai-could-impact-website-seo/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-7][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-7][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-7][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-7][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-8][menu-item-object-id]"
																			defaultValue={
																				5
																			}
																		/>{" "}
																		22 Ways
																		ChatGPT
																		Could Be
																		Used in
																		Website
																		Design
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-8][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-8][menu-item-object]"
																		defaultValue="post"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-8][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-8][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-8][menu-item-title]"
																		defaultValue="22 Ways ChatGPT Could Be Used in Website Design"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-8][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/22-ways-chatgpt-could-be-used-in-website-design/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-8][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-8][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-8][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-8][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
															</ul>
														</div>
														{/* /.tabs-panel */}
														<div
															className="tabs-panel tabs-panel-inactive"
															id="tabs-panel-posttype-post-search"
															role="region"
															aria-label="Search Posts"
															tabIndex={0}
														>
															<p className="quick-search-wrap">
																<label
																	htmlFor="quick-search-posttype-post"
																	className="screen-reader-text"
																>
																	Search
																</label>
																<input
																	type="search"
																	className="quick-search"
																	defaultValue=""
																	name="quick-search-posttype-post"
																	id="quick-search-posttype-post"
																/>
																<span className="spinner" />
																<input
																	type="submit"
																	name="submit"
																	id="submit-quick-search-posttype-post"
																	className="button button-small quick-search-submit hide-if-js"
																	defaultValue="Search"
																/>{" "}
															</p>
															<ul
																id="post-search-checklist"
																data-wp-lists="list:post"
																className="categorychecklist form-no-clear"
															></ul>
														</div>
														{/* /.tabs-panel */}
														<div
															id="post-all"
															className="tabs-panel tabs-panel-view-all tabs-panel-inactive"
															role="region"
															aria-label="All Posts"
															tabIndex={0}
														>
															<ul
																id="postchecklist"
																data-wp-lists="list:post"
																className="categorychecklist form-no-clear"
															>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-9][menu-item-object-id]"
																			defaultValue={
																				5
																			}
																		/>{" "}
																		22 Ways
																		ChatGPT
																		Could Be
																		Used in
																		Website
																		Design
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-9][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-9][menu-item-object]"
																		defaultValue="post"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-9][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-9][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-9][menu-item-title]"
																		defaultValue="22 Ways ChatGPT Could Be Used in Website Design"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-9][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/22-ways-chatgpt-could-be-used-in-website-design/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-9][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-9][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-9][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-9][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-10][menu-item-object-id]"
																			defaultValue={
																				21
																			}
																		/>{" "}
																		Google’s
																		200
																		Ranking
																		Factors:
																		The
																		Complete
																		List
																		(2022)
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-10][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-10][menu-item-object]"
																		defaultValue="post"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-10][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-10][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-10][menu-item-title]"
																		defaultValue="Google’s 200 Ranking Factors: The Complete List (2022)"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-10][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/googles-200-ranking-factors-the-complete-list-2022/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-10][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-10][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-10][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-10][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-11][menu-item-object-id]"
																			defaultValue={
																				8
																			}
																		/>{" "}
																		How
																		Microsoft
																		Bing’s
																		New Chat
																		AI Could
																		Impact
																		Website
																		SEO
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-11][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-11][menu-item-object]"
																		defaultValue="post"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-11][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-11][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-11][menu-item-title]"
																		defaultValue="How Microsoft Bing's New Chat AI Could Impact Website SEO"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-11][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/how-microsoft-bings-new-chat-ai-could-impact-website-seo/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-11][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-11][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-11][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-11][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-12][menu-item-object-id]"
																			defaultValue={
																				29
																			}
																		/>{" "}
																		The New
																		Website
																		Design
																		Trends:
																		Overstimulation.
																		Parallax
																		zoom
																		scrolling.
																		’90s
																		navigation.
																		Scrapbook
																		aesthetic.
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-12][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-12][menu-item-object]"
																		defaultValue="post"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-12][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-12][menu-item-type]"
																		defaultValue="post_type"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-12][menu-item-title]"
																		defaultValue="The New Website Design Trends: Overstimulation. Parallax zoom scrolling. '90s navigation. Scrapbook aesthetic."
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-12][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/the-new-website-design-trends-overstimulation-parallax-zoom-scrolling-90s-navigation-scrapbook-aesthetic/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-12][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-12][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-12][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-12][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
															</ul>
														</div>
														{/* /.tabs-panel */}
														<p
															className="button-controls wp-clearfix"
															data-items-type="posttype-post"
														>
															<span className="list-controls hide-if-no-js">
																<input
																	type="checkbox"
																	id="post-tab"
																	className="select-all"
																/>
																<label htmlFor="post-tab">
																	Select All
																</label>
															</span>
															<span className="add-to-menu">
																<input
																	type="submit"
																	className="button submit-add-to-menu right"
																	defaultValue="Add to Menu"
																	name="add-post-type-menu-item"
																	id="submit-posttype-post"
																/>
																<span className="spinner" />
															</span>
														</p>
													</div>
													{/* /.posttypediv */}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
										<li
											className="control-section accordion-section   add-post-type-projects"
											id="add-post-type-projects"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Projects{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<p>No items.</p>{" "}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
										<li
											className="control-section accordion-section   add-custom-links"
											id="add-custom-links"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Custom Links{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<div
														className="customlinkdiv"
														id="customlinkdiv"
													>
														<input
															type="hidden"
															defaultValue="custom"
															name="menu-item[-13][menu-item-type]"
														/>
														<p
															id="menu-item-url-wrap"
															className="wp-clearfix"
														>
															<label
																className="howto"
																htmlFor="custom-menu-item-url"
															>
																URL
															</label>
															<input
																id="custom-menu-item-url"
																name="menu-item[-13][menu-item-url]"
																type="text"
																className="code menu-item-textbox form-required"
																placeholder="https://"
															/>
														</p>
														<p
															id="menu-item-name-wrap"
															className="wp-clearfix"
														>
															<label
																className="howto"
																htmlFor="custom-menu-item-name"
															>
																Link Text
															</label>
															<input
																id="custom-menu-item-name"
																name="menu-item[-13][menu-item-title]"
																type="text"
																className="regular-text menu-item-textbox"
															/>
														</p>
														<p className="button-controls wp-clearfix">
															<span className="add-to-menu">
																<input
																	type="submit"
																	className="button submit-add-to-menu right"
																	defaultValue="Add to Menu"
																	name="add-custom-menu-item"
																	id="submit-customlinkdiv"
																/>
																<span className="spinner" />
															</span>
														</p>
													</div>
													{/* /.customlinkdiv */}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
										<li
											className="control-section accordion-section   add-category"
											id="add-category"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Categories{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<div
														id="taxonomy-category"
														className="taxonomydiv"
													>
														<ul
															id="taxonomy-category-tabs"
															className="taxonomy-tabs add-menu-item-tabs"
														>
															<li className="tabs">
																<a
																	className="nav-tab-link"
																	data-type="tabs-panel-category-pop"
																	href="/wp-admin/nav-menus.php?category-tab=most-used#tabs-panel-category-pop"
																>
																	Most Used{" "}
																</a>
															</li>
															<li>
																<a
																	className="nav-tab-link"
																	data-type="tabs-panel-category-all"
																	href="/wp-admin/nav-menus.php?category-tab=all#tabs-panel-category-all"
																>
																	View All{" "}
																</a>
															</li>
															<li>
																<a
																	className="nav-tab-link"
																	data-type="tabs-panel-search-taxonomy-category"
																	href="/wp-admin/nav-menus.php?category-tab=search#tabs-panel-search-taxonomy-category"
																>
																	Search{" "}
																</a>
															</li>
														</ul>
														{/* .taxonomy-tabs */}
														<div
															id="tabs-panel-category-pop"
															className="tabs-panel tabs-panel-active"
															role="region"
															aria-label="Most Used"
															tabIndex={0}
														>
															<ul
																id="categorychecklist-pop"
																className="categorychecklist form-no-clear"
															>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-14][menu-item-object-id]"
																			defaultValue={
																				1
																			}
																		/>{" "}
																		Uncategorized
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-14][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-14][menu-item-object]"
																		defaultValue="category"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-14][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-14][menu-item-type]"
																		defaultValue="taxonomy"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-14][menu-item-title]"
																		defaultValue="Uncategorized"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-14][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/category/uncategorized/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-14][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-14][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-14][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-14][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
															</ul>
														</div>
														{/* /.tabs-panel */}
														<div
															id="tabs-panel-category-all"
															className="tabs-panel tabs-panel-view-all tabs-panel-inactive"
															role="region"
															aria-label="All Categories"
															tabIndex={0}
														>
															<ul
																id="categorychecklist"
																data-wp-lists="list:category"
																className="categorychecklist form-no-clear"
															>
																<li>
																	<label className="menu-item-title">
																		<input
																			type="checkbox"
																			className="menu-item-checkbox"
																			name="menu-item[-15][menu-item-object-id]"
																			defaultValue={
																				1
																			}
																		/>{" "}
																		Uncategorized
																	</label>
																	<input
																		type="hidden"
																		className="menu-item-db-id"
																		name="menu-item[-15][menu-item-db-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-object"
																		name="menu-item[-15][menu-item-object]"
																		defaultValue="category"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-parent-id"
																		name="menu-item[-15][menu-item-parent-id]"
																		defaultValue={
																			0
																		}
																	/>
																	<input
																		type="hidden"
																		className="menu-item-type"
																		name="menu-item[-15][menu-item-type]"
																		defaultValue="taxonomy"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-title"
																		name="menu-item[-15][menu-item-title]"
																		defaultValue="Uncategorized"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-url"
																		name="menu-item[-15][menu-item-url]"
																		defaultValue="https://byronw34.sg-host.com/category/uncategorized/"
																	/>
																	<input
																		type="hidden"
																		className="menu-item-target"
																		name="menu-item[-15][menu-item-target]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-attr-title"
																		name="menu-item[-15][menu-item-attr-title]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-classes"
																		name="menu-item[-15][menu-item-classes]"
																		defaultValue=""
																	/>
																	<input
																		type="hidden"
																		className="menu-item-xfn"
																		name="menu-item[-15][menu-item-xfn]"
																		defaultValue=""
																	/>
																</li>
															</ul>
														</div>
														{/* /.tabs-panel */}
														<div
															className="tabs-panel tabs-panel-inactive"
															id="tabs-panel-search-taxonomy-category"
															role="region"
															aria-label="Search Categories"
															tabIndex={0}
														>
															<p className="quick-search-wrap">
																<label
																	htmlFor="quick-search-taxonomy-category"
																	className="screen-reader-text"
																>
																	Search
																</label>
																<input
																	type="search"
																	className="quick-search"
																	defaultValue=""
																	name="quick-search-taxonomy-category"
																	id="quick-search-taxonomy-category"
																/>
																<span className="spinner" />
																<input
																	type="submit"
																	name="submit"
																	id="submit-quick-search-taxonomy-category"
																	className="button button-small quick-search-submit hide-if-js"
																	defaultValue="Search"
																/>{" "}
															</p>
															<ul
																id="category-search-checklist"
																data-wp-lists="list:category"
																className="categorychecklist form-no-clear"
															></ul>
														</div>
														{/* /.tabs-panel */}
														<p
															className="button-controls wp-clearfix"
															data-items-type="taxonomy-category"
														>
															<span className="list-controls hide-if-no-js">
																<input
																	type="checkbox"
																	id="category-tab"
																	className="select-all"
																/>
																<label htmlFor="category-tab">
																	Select All
																</label>
															</span>
															<span className="add-to-menu">
																<input
																	type="submit"
																	className="button submit-add-to-menu right"
																	defaultValue="Add to Menu"
																	name="add-taxonomy-menu-item"
																	id="submit-taxonomy-category"
																/>
																<span className="spinner" />
															</span>
														</p>
													</div>
													{/* /.taxonomydiv */}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
										<li
											className="control-section accordion-section hide-if-js  add-post_tag"
											id="add-post_tag"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Tags{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<p>No items.</p>{" "}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
										<li
											className="control-section accordion-section   add-graphql_query_alias"
											id="add-graphql_query_alias"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Alias Names{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<p>No items.</p>{" "}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
										<li
											className="control-section accordion-section   add-graphql_document_grant"
											id="add-graphql_document_grant"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Allow/Deny{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<p>No items.</p>{" "}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
										<li
											className="control-section accordion-section   add-graphql_document_http_maxage"
											id="add-graphql_document_http_maxage"
										>
											<h3
												className="accordion-section-title hndle"
												tabIndex={0}
											>
												Max-Age Header{" "}
												<span className="screen-reader-text">
													Press return or enter to
													open this section
												</span>
											</h3>
											<div className="accordion-section-content ">
												<div className="inside">
													<p>No items.</p>{" "}
												</div>
												{/* .inside */}
											</div>
											{/* .accordion-section-content */}
										</li>
										{/* .accordion-section */}
									</ul>
									{/* .outer-border */}
								</div>
								{/* .accordion-container */}
							</form>
						</div>
						{/* /#menu-settings-column */}
						<div id="menu-management-liquid">
							<div id="menu-management">
								<form
									id="update-nav-menu"
									method="post"
									encType="multipart/form-data"
								>
									<h2>Menu structure</h2>
									<div className="menu-edit">
										<input
											type="hidden"
											name="nav-menu-data"
										/>
										<input
											type="hidden"
											id="closedpostboxesnonce"
											name="closedpostboxesnonce"
											defaultValue="38248450bb"
										/>
										<input
											type="hidden"
											id="meta-box-order-nonce"
											name="meta-box-order-nonce"
											defaultValue="425516acb4"
										/>
										<input
											type="hidden"
											id="update-nav-menu-nonce"
											name="update-nav-menu-nonce"
											defaultValue="3e3ed2f70d"
										/>
										<input
											type="hidden"
											name="_wp_http_referer"
											defaultValue="/wp-admin/nav-menus.php"
										/>{" "}
										<input
											type="hidden"
											name="action"
											defaultValue="update"
										/>
										<input
											type="hidden"
											name="menu"
											id="menu"
											defaultValue={3}
										/>
										<div id="nav-menu-header">
											<div className="major-publishing-actions wp-clearfix">
												<label
													className="menu-name-label"
													htmlFor="menu-name"
												>
													Menu Name
												</label>
												<input
													name="menu-name"
													id="menu-name"
													type="text"
													className="menu-name regular-text menu-item-textbox form-required"
													required="required"
													defaultValue="Primary"
												/>
												<div className="publishing-action">
													<input
														type="submit"
														name="save_menu"
														id="save_menu_header"
														className="button button-primary button-large menu-save"
														defaultValue="Save Menu"
													/>{" "}
												</div>
												{/* END .publishing-action */}
											</div>
											{/* END .major-publishing-actions */}
										</div>
										{/* END .nav-menu-header */}
										<div id="post-body">
											<div
												id="post-body-content"
												className="wp-clearfix"
											>
												<div className="drag-instructions post-body-plain">
													<p>
														Drag the items into the
														order you prefer. Click
														the arrow on the right
														of the item to reveal
														additional configuration
														options.
													</p>
												</div>
												<div
													id="nav-menu-bulk-actions-top"
													className="bulk-actions"
												>
													<label
														className="bulk-select-button"
														htmlFor="bulk-select-switcher-top"
													>
														<input
															type="checkbox"
															id="bulk-select-switcher-top"
															name="bulk-select-switcher-top"
															className="bulk-select-switcher"
														/>
														<span className="bulk-select-button-label">
															Bulk Select
														</span>
													</label>
												</div>
												<div
													id="menu-instructions"
													className="post-body-plain menu-instructions-inactive"
												>
													<p>
														Add menu items from the
														column on the left.
													</p>
												</div>
												<ul
													className="menu ui-sortable"
													id="menu-to-edit"
												>
													{" "}
													<li
														id="menu-item-4109"
														className="menu-item menu-item-depth-0 menu-item-custom menu-item-edit-inactive"
													>
														<div className="menu-item-bar">
															<div className="menu-item-handle ui-sortable-handle">
																<label
																	className="item-title"
																	htmlFor="menu-item-checkbox-4109"
																>
																	<input
																		id="menu-item-checkbox-4109"
																		type="checkbox"
																		className="menu-item-checkbox"
																		data-menu-item-id={
																			4109
																		}
																		disabled="disabled"
																	/>
																	<span className="menu-item-title">
																		home
																	</span>
																	<span
																		className="is-submenu"
																		style={{
																			display:
																				"none",
																		}}
																	>
																		sub item
																	</span>
																</label>
																<span className="item-controls">
																	<span className="item-type">
																		Custom
																		Link
																	</span>
																	<span className="item-order hide-if-js">
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-up-menu-item&menu-item=4109&_wpnonce=ddfa74c059"
																			className="item-move-up"
																			aria-label="Move up"
																		>
																			↑
																		</a>{" "}
																		|
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-down-menu-item&menu-item=4109&_wpnonce=ddfa74c059"
																			className="item-move-down"
																			aria-label="Move down"
																		>
																			↓
																		</a>{" "}
																	</span>
																	<a
																		className="item-edit"
																		id="edit-4109"
																		href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4109#menu-item-settings-4109"
																		aria-label="home. Menu item 1 of 7."
																	>
																		<span className="screen-reader-text">
																			Edit
																		</span>
																	</a>{" "}
																</span>
															</div>
														</div>
														<div
															className="menu-item-settings wp-clearfix"
															id="menu-item-settings-4109"
														>
															<p className="field-url description description-wide">
																<label htmlFor="edit-menu-item-url-4109">
																	URL
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-url-4109"
																		className="widefat code edit-menu-item-url"
																		name="menu-item-url[4109]"
																		defaultValue="/"
																	/>
																</label>
															</p>
															<p className="description description-wide">
																<label htmlFor="edit-menu-item-title-4109">
																	Navigation
																	Label
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-title-4109"
																		className="widefat edit-menu-item-title"
																		name="menu-item-title[4109]"
																		defaultValue="home"
																	/>
																</label>
															</p>
															<p className="field-title-attribute field-attr-title description description-wide hidden-field">
																<label htmlFor="edit-menu-item-attr-title-4109">
																	Title
																	Attribute
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-attr-title-4109"
																		className="widefat edit-menu-item-attr-title"
																		name="menu-item-attr-title[4109]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-link-target description hidden-field">
																<label htmlFor="edit-menu-item-target-4109">
																	<input
																		type="checkbox"
																		id="edit-menu-item-target-4109"
																		defaultValue="_blank"
																		name="menu-item-target[4109]"
																	/>
																	Open link in
																	a new tab{" "}
																</label>
															</p>
															<p className="field-css-classes description description-thin hidden-field">
																<label htmlFor="edit-menu-item-classes-4109">
																	CSS Classes
																	(optional)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-classes-4109"
																		className="widefat code edit-menu-item-classes"
																		name="menu-item-classes[4109]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-xfn description description-thin hidden-field">
																<label htmlFor="edit-menu-item-xfn-4109">
																	Link
																	Relationship
																	(XFN)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-xfn-4109"
																		className="widefat code edit-menu-item-xfn"
																		name="menu-item-xfn[4109]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-description description description-wide hidden-field">
																<label htmlFor="edit-menu-item-description-4109">
																	Description
																	<br />
																	<textarea
																		id="edit-menu-item-description-4109"
																		className="widefat edit-menu-item-description"
																		rows={3}
																		cols={
																			20
																		}
																		name="menu-item-description[4109]"
																		defaultValue={
																			""
																		}
																	/>
																	<span className="description">
																		The
																		description
																		will be
																		displayed
																		in the
																		menu if
																		the
																		active
																		theme
																		supports
																		it.
																	</span>
																</label>
															</p>
															<fieldset className="field-move hide-if-no-js description description-wide">
																<span
																	className="field-move-visual-label"
																	aria-hidden="true"
																>
																	Move
																</span>
																<button
																	type="button"
																	className="button-link menus-move menus-move-up"
																	data-dir="up"
																	style={{
																		display:
																			"none",
																	}}
																>
																	Up one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-down"
																	data-dir="down"
																	aria-label="Move down one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Down one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-left"
																	data-dir="left"
																	style={{
																		display:
																			"none",
																	}}
																/>
																<button
																	type="button"
																	className="button-link menus-move menus-move-right"
																	data-dir="right"
																	style={{
																		display:
																			"none",
																	}}
																/>
																<button
																	type="button"
																	className="button-link menus-move menus-move-top"
																	data-dir="top"
																	style={{
																		display:
																			"none",
																	}}
																>
																	To the top
																</button>
															</fieldset>
															<div className="menu-item-actions description-wide submitbox">
																<a
																	className="item-delete submitdelete deletion"
																	id="delete-4109"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=delete-menu-item&menu-item=4109&_wpnonce=6b1f7e0c39"
																>
																	Remove
																</a>{" "}
																<span className="meta-sep hide-if-no-js">
																	{" "}
																	|{" "}
																</span>
																<a
																	className="item-cancel submitcancel hide-if-no-js"
																	id="cancel-4109"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4109&cancel=1676628849#menu-item-settings-4109"
																>
																	Cancel
																</a>{" "}
															</div>
															<input
																className="menu-item-data-db-id"
																type="hidden"
																name="menu-item-db-id[4109]"
																defaultValue={
																	4109
																}
															/>
															<input
																className="menu-item-data-object-id"
																type="hidden"
																name="menu-item-object-id[4109]"
																defaultValue={
																	4109
																}
															/>
															<input
																className="menu-item-data-object"
																type="hidden"
																name="menu-item-object[4109]"
																defaultValue="custom"
															/>
															<input
																className="menu-item-data-parent-id"
																type="hidden"
																name="menu-item-parent-id[4109]"
																defaultValue={0}
															/>
															<input
																className="menu-item-data-position"
																type="hidden"
																name="menu-item-position[4109]"
																defaultValue={1}
															/>
															<input
																className="menu-item-data-type"
																type="hidden"
																name="menu-item-type[4109]"
																defaultValue="custom"
															/>
														</div>
														{/* .menu-item-settings*/}
														<ul className="menu-item-transport" />
													</li>
													<li
														id="menu-item-4104"
														className="menu-item menu-item-depth-0 menu-item-custom menu-item-edit-inactive"
													>
														<div className="menu-item-bar">
															<div className="menu-item-handle ui-sortable-handle">
																<label
																	className="item-title"
																	htmlFor="menu-item-checkbox-4104"
																>
																	<input
																		id="menu-item-checkbox-4104"
																		type="checkbox"
																		className="menu-item-checkbox"
																		data-menu-item-id={
																			4104
																		}
																		disabled="disabled"
																	/>
																	<span className="menu-item-title">
																		buy
																	</span>
																	<span
																		className="is-submenu"
																		style={{
																			display:
																				"none",
																		}}
																	>
																		sub item
																	</span>
																</label>
																<span className="item-controls">
																	<span className="item-type">
																		Custom
																		Link
																	</span>
																	<span className="item-order hide-if-js">
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-up-menu-item&menu-item=4104&_wpnonce=ddfa74c059"
																			className="item-move-up"
																			aria-label="Move up"
																		>
																			↑
																		</a>{" "}
																		|
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-down-menu-item&menu-item=4104&_wpnonce=ddfa74c059"
																			className="item-move-down"
																			aria-label="Move down"
																		>
																			↓
																		</a>{" "}
																	</span>
																	<a
																		className="item-edit"
																		id="edit-4104"
																		href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4104#menu-item-settings-4104"
																		aria-label="buy. Menu item 2 of 7."
																	>
																		<span className="screen-reader-text">
																			Edit
																		</span>
																	</a>{" "}
																</span>
															</div>
														</div>
														<div
															className="menu-item-settings wp-clearfix"
															id="menu-item-settings-4104"
														>
															<p className="field-url description description-wide">
																<label htmlFor="edit-menu-item-url-4104">
																	URL
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-url-4104"
																		className="widefat code edit-menu-item-url"
																		name="menu-item-url[4104]"
																		defaultValue="/buy"
																	/>
																</label>
															</p>
															<p className="description description-wide">
																<label htmlFor="edit-menu-item-title-4104">
																	Navigation
																	Label
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-title-4104"
																		className="widefat edit-menu-item-title"
																		name="menu-item-title[4104]"
																		defaultValue="buy"
																	/>
																</label>
															</p>
															<p className="field-title-attribute field-attr-title description description-wide hidden-field">
																<label htmlFor="edit-menu-item-attr-title-4104">
																	Title
																	Attribute
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-attr-title-4104"
																		className="widefat edit-menu-item-attr-title"
																		name="menu-item-attr-title[4104]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-link-target description hidden-field">
																<label htmlFor="edit-menu-item-target-4104">
																	<input
																		type="checkbox"
																		id="edit-menu-item-target-4104"
																		defaultValue="_blank"
																		name="menu-item-target[4104]"
																	/>
																	Open link in
																	a new tab{" "}
																</label>
															</p>
															<p className="field-css-classes description description-thin hidden-field">
																<label htmlFor="edit-menu-item-classes-4104">
																	CSS Classes
																	(optional)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-classes-4104"
																		className="widefat code edit-menu-item-classes"
																		name="menu-item-classes[4104]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-xfn description description-thin hidden-field">
																<label htmlFor="edit-menu-item-xfn-4104">
																	Link
																	Relationship
																	(XFN)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-xfn-4104"
																		className="widefat code edit-menu-item-xfn"
																		name="menu-item-xfn[4104]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-description description description-wide hidden-field">
																<label htmlFor="edit-menu-item-description-4104">
																	Description
																	<br />
																	<textarea
																		id="edit-menu-item-description-4104"
																		className="widefat edit-menu-item-description"
																		rows={3}
																		cols={
																			20
																		}
																		name="menu-item-description[4104]"
																		defaultValue={
																			""
																		}
																	/>
																	<span className="description">
																		The
																		description
																		will be
																		displayed
																		in the
																		menu if
																		the
																		active
																		theme
																		supports
																		it.
																	</span>
																</label>
															</p>
															<fieldset className="field-move hide-if-no-js description description-wide">
																<span
																	className="field-move-visual-label"
																	aria-hidden="true"
																>
																	Move
																</span>
																<button
																	type="button"
																	className="button-link menus-move menus-move-up"
																	data-dir="up"
																	aria-label="Move up one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Up one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-down"
																	data-dir="down"
																	aria-label="Move down one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Down one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-left"
																	data-dir="left"
																	style={{
																		display:
																			"none",
																	}}
																/>
																<button
																	type="button"
																	className="button-link menus-move menus-move-right"
																	data-dir="right"
																	aria-label="Move under home"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Under home
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-top"
																	data-dir="top"
																	aria-label="Move to the top"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	To the top
																</button>
															</fieldset>
															<div className="menu-item-actions description-wide submitbox">
																<a
																	className="item-delete submitdelete deletion"
																	id="delete-4104"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=delete-menu-item&menu-item=4104&_wpnonce=a4027e6776"
																>
																	Remove
																</a>{" "}
																<span className="meta-sep hide-if-no-js">
																	{" "}
																	|{" "}
																</span>
																<a
																	className="item-cancel submitcancel hide-if-no-js"
																	id="cancel-4104"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4104&cancel=1676628849#menu-item-settings-4104"
																>
																	Cancel
																</a>{" "}
															</div>
															<input
																className="menu-item-data-db-id"
																type="hidden"
																name="menu-item-db-id[4104]"
																defaultValue={
																	4104
																}
															/>
															<input
																className="menu-item-data-object-id"
																type="hidden"
																name="menu-item-object-id[4104]"
																defaultValue={
																	4104
																}
															/>
															<input
																className="menu-item-data-object"
																type="hidden"
																name="menu-item-object[4104]"
																defaultValue="custom"
															/>
															<input
																className="menu-item-data-parent-id"
																type="hidden"
																name="menu-item-parent-id[4104]"
																defaultValue={0}
															/>
															<input
																className="menu-item-data-position"
																type="hidden"
																name="menu-item-position[4104]"
																defaultValue={2}
															/>
															<input
																className="menu-item-data-type"
																type="hidden"
																name="menu-item-type[4104]"
																defaultValue="custom"
															/>
														</div>
														{/* .menu-item-settings*/}
														<ul className="menu-item-transport" />
													</li>
													<li
														id="menu-item-4107"
														className="menu-item menu-item-depth-0 menu-item-custom menu-item-edit-inactive"
													>
														<div className="menu-item-bar">
															<div className="menu-item-handle ui-sortable-handle">
																<label
																	className="item-title"
																	htmlFor="menu-item-checkbox-4107"
																>
																	<input
																		id="menu-item-checkbox-4107"
																		type="checkbox"
																		className="menu-item-checkbox"
																		data-menu-item-id={
																			4107
																		}
																		disabled="disabled"
																	/>
																	<span className="menu-item-title">
																		projects
																	</span>
																	<span
																		className="is-submenu"
																		style={{
																			display:
																				"none",
																		}}
																	>
																		sub item
																	</span>
																</label>
																<span className="item-controls">
																	<span className="item-type">
																		Custom
																		Link
																	</span>
																	<span className="item-order hide-if-js">
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-up-menu-item&menu-item=4107&_wpnonce=ddfa74c059"
																			className="item-move-up"
																			aria-label="Move up"
																		>
																			↑
																		</a>{" "}
																		|
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-down-menu-item&menu-item=4107&_wpnonce=ddfa74c059"
																			className="item-move-down"
																			aria-label="Move down"
																		>
																			↓
																		</a>{" "}
																	</span>
																	<a
																		className="item-edit"
																		id="edit-4107"
																		href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4107#menu-item-settings-4107"
																		aria-label="projects. Menu item 3 of 7."
																	>
																		<span className="screen-reader-text">
																			Edit
																		</span>
																	</a>{" "}
																</span>
															</div>
														</div>
														<div
															className="menu-item-settings wp-clearfix"
															id="menu-item-settings-4107"
														>
															<p className="field-url description description-wide">
																<label htmlFor="edit-menu-item-url-4107">
																	URL
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-url-4107"
																		className="widefat code edit-menu-item-url"
																		name="menu-item-url[4107]"
																		defaultValue="/projects"
																	/>
																</label>
															</p>
															<p className="description description-wide">
																<label htmlFor="edit-menu-item-title-4107">
																	Navigation
																	Label
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-title-4107"
																		className="widefat edit-menu-item-title"
																		name="menu-item-title[4107]"
																		defaultValue="projects"
																	/>
																</label>
															</p>
															<p className="field-title-attribute field-attr-title description description-wide hidden-field">
																<label htmlFor="edit-menu-item-attr-title-4107">
																	Title
																	Attribute
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-attr-title-4107"
																		className="widefat edit-menu-item-attr-title"
																		name="menu-item-attr-title[4107]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-link-target description hidden-field">
																<label htmlFor="edit-menu-item-target-4107">
																	<input
																		type="checkbox"
																		id="edit-menu-item-target-4107"
																		defaultValue="_blank"
																		name="menu-item-target[4107]"
																	/>
																	Open link in
																	a new tab{" "}
																</label>
															</p>
															<p className="field-css-classes description description-thin hidden-field">
																<label htmlFor="edit-menu-item-classes-4107">
																	CSS Classes
																	(optional)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-classes-4107"
																		className="widefat code edit-menu-item-classes"
																		name="menu-item-classes[4107]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-xfn description description-thin hidden-field">
																<label htmlFor="edit-menu-item-xfn-4107">
																	Link
																	Relationship
																	(XFN)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-xfn-4107"
																		className="widefat code edit-menu-item-xfn"
																		name="menu-item-xfn[4107]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-description description description-wide hidden-field">
																<label htmlFor="edit-menu-item-description-4107">
																	Description
																	<br />
																	<textarea
																		id="edit-menu-item-description-4107"
																		className="widefat edit-menu-item-description"
																		rows={3}
																		cols={
																			20
																		}
																		name="menu-item-description[4107]"
																		defaultValue={
																			""
																		}
																	/>
																	<span className="description">
																		The
																		description
																		will be
																		displayed
																		in the
																		menu if
																		the
																		active
																		theme
																		supports
																		it.
																	</span>
																</label>
															</p>
															<fieldset className="field-move hide-if-no-js description description-wide">
																<span
																	className="field-move-visual-label"
																	aria-hidden="true"
																>
																	Move
																</span>
																<button
																	type="button"
																	className="button-link menus-move menus-move-up"
																	data-dir="up"
																	aria-label="Move up one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Up one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-down"
																	data-dir="down"
																	aria-label="Move down one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Down one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-left"
																	data-dir="left"
																	style={{
																		display:
																			"none",
																	}}
																/>
																<button
																	type="button"
																	className="button-link menus-move menus-move-right"
																	data-dir="right"
																	aria-label="Move under buy"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Under buy
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-top"
																	data-dir="top"
																	aria-label="Move to the top"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	To the top
																</button>
															</fieldset>
															<div className="menu-item-actions description-wide submitbox">
																<a
																	className="item-delete submitdelete deletion"
																	id="delete-4107"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=delete-menu-item&menu-item=4107&_wpnonce=fd4b6724ca"
																>
																	Remove
																</a>{" "}
																<span className="meta-sep hide-if-no-js">
																	{" "}
																	|{" "}
																</span>
																<a
																	className="item-cancel submitcancel hide-if-no-js"
																	id="cancel-4107"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4107&cancel=1676628849#menu-item-settings-4107"
																>
																	Cancel
																</a>{" "}
															</div>
															<input
																className="menu-item-data-db-id"
																type="hidden"
																name="menu-item-db-id[4107]"
																defaultValue={
																	4107
																}
															/>
															<input
																className="menu-item-data-object-id"
																type="hidden"
																name="menu-item-object-id[4107]"
																defaultValue={
																	4107
																}
															/>
															<input
																className="menu-item-data-object"
																type="hidden"
																name="menu-item-object[4107]"
																defaultValue="custom"
															/>
															<input
																className="menu-item-data-parent-id"
																type="hidden"
																name="menu-item-parent-id[4107]"
																defaultValue={0}
															/>
															<input
																className="menu-item-data-position"
																type="hidden"
																name="menu-item-position[4107]"
																defaultValue={3}
															/>
															<input
																className="menu-item-data-type"
																type="hidden"
																name="menu-item-type[4107]"
																defaultValue="custom"
															/>
														</div>
														{/* .menu-item-settings*/}
														<ul className="menu-item-transport" />
													</li>
													<li
														id="menu-item-4108"
														className="menu-item menu-item-depth-0 menu-item-custom menu-item-edit-inactive"
													>
														<div className="menu-item-bar">
															<div className="menu-item-handle ui-sortable-handle">
																<label
																	className="item-title"
																	htmlFor="menu-item-checkbox-4108"
																>
																	<input
																		id="menu-item-checkbox-4108"
																		type="checkbox"
																		className="menu-item-checkbox"
																		data-menu-item-id={
																			4108
																		}
																		disabled="disabled"
																	/>
																	<span className="menu-item-title">
																		portfolio
																	</span>
																	<span
																		className="is-submenu"
																		style={{
																			display:
																				"none",
																		}}
																	>
																		sub item
																	</span>
																</label>
																<span className="item-controls">
																	<span className="item-type">
																		Custom
																		Link
																	</span>
																	<span className="item-order hide-if-js">
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-up-menu-item&menu-item=4108&_wpnonce=ddfa74c059"
																			className="item-move-up"
																			aria-label="Move up"
																		>
																			↑
																		</a>{" "}
																		|
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-down-menu-item&menu-item=4108&_wpnonce=ddfa74c059"
																			className="item-move-down"
																			aria-label="Move down"
																		>
																			↓
																		</a>{" "}
																	</span>
																	<a
																		className="item-edit"
																		id="edit-4108"
																		href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4108#menu-item-settings-4108"
																		aria-label="portfolio. Menu item 4 of 7."
																	>
																		<span className="screen-reader-text">
																			Edit
																		</span>
																	</a>{" "}
																</span>
															</div>
														</div>
														<div
															className="menu-item-settings wp-clearfix"
															id="menu-item-settings-4108"
														>
															<p className="field-url description description-wide">
																<label htmlFor="edit-menu-item-url-4108">
																	URL
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-url-4108"
																		className="widefat code edit-menu-item-url"
																		name="menu-item-url[4108]"
																		defaultValue="/portfolio"
																	/>
																</label>
															</p>
															<p className="description description-wide">
																<label htmlFor="edit-menu-item-title-4108">
																	Navigation
																	Label
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-title-4108"
																		className="widefat edit-menu-item-title"
																		name="menu-item-title[4108]"
																		defaultValue="portfolio"
																	/>
																</label>
															</p>
															<p className="field-title-attribute field-attr-title description description-wide hidden-field">
																<label htmlFor="edit-menu-item-attr-title-4108">
																	Title
																	Attribute
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-attr-title-4108"
																		className="widefat edit-menu-item-attr-title"
																		name="menu-item-attr-title[4108]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-link-target description hidden-field">
																<label htmlFor="edit-menu-item-target-4108">
																	<input
																		type="checkbox"
																		id="edit-menu-item-target-4108"
																		defaultValue="_blank"
																		name="menu-item-target[4108]"
																	/>
																	Open link in
																	a new tab{" "}
																</label>
															</p>
															<p className="field-css-classes description description-thin hidden-field">
																<label htmlFor="edit-menu-item-classes-4108">
																	CSS Classes
																	(optional)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-classes-4108"
																		className="widefat code edit-menu-item-classes"
																		name="menu-item-classes[4108]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-xfn description description-thin hidden-field">
																<label htmlFor="edit-menu-item-xfn-4108">
																	Link
																	Relationship
																	(XFN)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-xfn-4108"
																		className="widefat code edit-menu-item-xfn"
																		name="menu-item-xfn[4108]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-description description description-wide hidden-field">
																<label htmlFor="edit-menu-item-description-4108">
																	Description
																	<br />
																	<textarea
																		id="edit-menu-item-description-4108"
																		className="widefat edit-menu-item-description"
																		rows={3}
																		cols={
																			20
																		}
																		name="menu-item-description[4108]"
																		defaultValue={
																			""
																		}
																	/>
																	<span className="description">
																		The
																		description
																		will be
																		displayed
																		in the
																		menu if
																		the
																		active
																		theme
																		supports
																		it.
																	</span>
																</label>
															</p>
															<fieldset className="field-move hide-if-no-js description description-wide">
																<span
																	className="field-move-visual-label"
																	aria-hidden="true"
																>
																	Move
																</span>
																<button
																	type="button"
																	className="button-link menus-move menus-move-up"
																	data-dir="up"
																	aria-label="Move up one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Up one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-down"
																	data-dir="down"
																	aria-label="Move down one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Down one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-left"
																	data-dir="left"
																	style={{
																		display:
																			"none",
																	}}
																/>
																<button
																	type="button"
																	className="button-link menus-move menus-move-right"
																	data-dir="right"
																	aria-label="Move under projects"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Under
																	projects
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-top"
																	data-dir="top"
																	aria-label="Move to the top"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	To the top
																</button>
															</fieldset>
															<div className="menu-item-actions description-wide submitbox">
																<a
																	className="item-delete submitdelete deletion"
																	id="delete-4108"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=delete-menu-item&menu-item=4108&_wpnonce=a64575c5eb"
																>
																	Remove
																</a>{" "}
																<span className="meta-sep hide-if-no-js">
																	{" "}
																	|{" "}
																</span>
																<a
																	className="item-cancel submitcancel hide-if-no-js"
																	id="cancel-4108"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4108&cancel=1676628849#menu-item-settings-4108"
																>
																	Cancel
																</a>{" "}
															</div>
															<input
																className="menu-item-data-db-id"
																type="hidden"
																name="menu-item-db-id[4108]"
																defaultValue={
																	4108
																}
															/>
															<input
																className="menu-item-data-object-id"
																type="hidden"
																name="menu-item-object-id[4108]"
																defaultValue={
																	4108
																}
															/>
															<input
																className="menu-item-data-object"
																type="hidden"
																name="menu-item-object[4108]"
																defaultValue="custom"
															/>
															<input
																className="menu-item-data-parent-id"
																type="hidden"
																name="menu-item-parent-id[4108]"
																defaultValue={0}
															/>
															<input
																className="menu-item-data-position"
																type="hidden"
																name="menu-item-position[4108]"
																defaultValue={4}
															/>
															<input
																className="menu-item-data-type"
																type="hidden"
																name="menu-item-type[4108]"
																defaultValue="custom"
															/>
														</div>
														{/* .menu-item-settings*/}
														<ul className="menu-item-transport" />
													</li>
													<li
														id="menu-item-4105"
														className="menu-item menu-item-depth-0 menu-item-custom menu-item-edit-inactive"
													>
														<div className="menu-item-bar">
															<div className="menu-item-handle ui-sortable-handle">
																<label
																	className="item-title"
																	htmlFor="menu-item-checkbox-4105"
																>
																	<input
																		id="menu-item-checkbox-4105"
																		type="checkbox"
																		className="menu-item-checkbox"
																		data-menu-item-id={
																			4105
																		}
																		disabled="disabled"
																	/>
																	<span className="menu-item-title">
																		blog
																	</span>
																	<span
																		className="is-submenu"
																		style={{
																			display:
																				"none",
																		}}
																	>
																		sub item
																	</span>
																</label>
																<span className="item-controls">
																	<span className="item-type">
																		Custom
																		Link
																	</span>
																	<span className="item-order hide-if-js">
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-up-menu-item&menu-item=4105&_wpnonce=ddfa74c059"
																			className="item-move-up"
																			aria-label="Move up"
																		>
																			↑
																		</a>{" "}
																		|
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-down-menu-item&menu-item=4105&_wpnonce=ddfa74c059"
																			className="item-move-down"
																			aria-label="Move down"
																		>
																			↓
																		</a>{" "}
																	</span>
																	<a
																		className="item-edit"
																		id="edit-4105"
																		href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4105#menu-item-settings-4105"
																		aria-label="blog. Menu item 5 of 7."
																	>
																		<span className="screen-reader-text">
																			Edit
																		</span>
																	</a>{" "}
																</span>
															</div>
														</div>
														<div
															className="menu-item-settings wp-clearfix"
															id="menu-item-settings-4105"
														>
															<p className="field-url description description-wide">
																<label htmlFor="edit-menu-item-url-4105">
																	URL
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-url-4105"
																		className="widefat code edit-menu-item-url"
																		name="menu-item-url[4105]"
																		defaultValue="/blog"
																	/>
																</label>
															</p>
															<p className="description description-wide">
																<label htmlFor="edit-menu-item-title-4105">
																	Navigation
																	Label
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-title-4105"
																		className="widefat edit-menu-item-title"
																		name="menu-item-title[4105]"
																		defaultValue="blog"
																	/>
																</label>
															</p>
															<p className="field-title-attribute field-attr-title description description-wide hidden-field">
																<label htmlFor="edit-menu-item-attr-title-4105">
																	Title
																	Attribute
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-attr-title-4105"
																		className="widefat edit-menu-item-attr-title"
																		name="menu-item-attr-title[4105]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-link-target description hidden-field">
																<label htmlFor="edit-menu-item-target-4105">
																	<input
																		type="checkbox"
																		id="edit-menu-item-target-4105"
																		defaultValue="_blank"
																		name="menu-item-target[4105]"
																	/>
																	Open link in
																	a new tab{" "}
																</label>
															</p>
															<p className="field-css-classes description description-thin hidden-field">
																<label htmlFor="edit-menu-item-classes-4105">
																	CSS Classes
																	(optional)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-classes-4105"
																		className="widefat code edit-menu-item-classes"
																		name="menu-item-classes[4105]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-xfn description description-thin hidden-field">
																<label htmlFor="edit-menu-item-xfn-4105">
																	Link
																	Relationship
																	(XFN)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-xfn-4105"
																		className="widefat code edit-menu-item-xfn"
																		name="menu-item-xfn[4105]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-description description description-wide hidden-field">
																<label htmlFor="edit-menu-item-description-4105">
																	Description
																	<br />
																	<textarea
																		id="edit-menu-item-description-4105"
																		className="widefat edit-menu-item-description"
																		rows={3}
																		cols={
																			20
																		}
																		name="menu-item-description[4105]"
																		defaultValue={
																			""
																		}
																	/>
																	<span className="description">
																		The
																		description
																		will be
																		displayed
																		in the
																		menu if
																		the
																		active
																		theme
																		supports
																		it.
																	</span>
																</label>
															</p>
															<fieldset className="field-move hide-if-no-js description description-wide">
																<span
																	className="field-move-visual-label"
																	aria-hidden="true"
																>
																	Move
																</span>
																<button
																	type="button"
																	className="button-link menus-move menus-move-up"
																	data-dir="up"
																	aria-label="Move up one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Up one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-down"
																	data-dir="down"
																	aria-label="Move down one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Down one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-left"
																	data-dir="left"
																	style={{
																		display:
																			"none",
																	}}
																/>
																<button
																	type="button"
																	className="button-link menus-move menus-move-right"
																	data-dir="right"
																	aria-label="Move under portfolio"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Under
																	portfolio
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-top"
																	data-dir="top"
																	aria-label="Move to the top"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	To the top
																</button>
															</fieldset>
															<div className="menu-item-actions description-wide submitbox">
																<a
																	className="item-delete submitdelete deletion"
																	id="delete-4105"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=delete-menu-item&menu-item=4105&_wpnonce=6769d3a3b0"
																>
																	Remove
																</a>{" "}
																<span className="meta-sep hide-if-no-js">
																	{" "}
																	|{" "}
																</span>
																<a
																	className="item-cancel submitcancel hide-if-no-js"
																	id="cancel-4105"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4105&cancel=1676628849#menu-item-settings-4105"
																>
																	Cancel
																</a>{" "}
															</div>
															<input
																className="menu-item-data-db-id"
																type="hidden"
																name="menu-item-db-id[4105]"
																defaultValue={
																	4105
																}
															/>
															<input
																className="menu-item-data-object-id"
																type="hidden"
																name="menu-item-object-id[4105]"
																defaultValue={
																	4105
																}
															/>
															<input
																className="menu-item-data-object"
																type="hidden"
																name="menu-item-object[4105]"
																defaultValue="custom"
															/>
															<input
																className="menu-item-data-parent-id"
																type="hidden"
																name="menu-item-parent-id[4105]"
																defaultValue={0}
															/>
															<input
																className="menu-item-data-position"
																type="hidden"
																name="menu-item-position[4105]"
																defaultValue={5}
															/>
															<input
																className="menu-item-data-type"
																type="hidden"
																name="menu-item-type[4105]"
																defaultValue="custom"
															/>
														</div>
														{/* .menu-item-settings*/}
														<ul className="menu-item-transport" />
													</li>
													<li
														id="menu-item-4106"
														className="menu-item menu-item-depth-0 menu-item-custom menu-item-edit-inactive"
													>
														<div className="menu-item-bar">
															<div className="menu-item-handle ui-sortable-handle">
																<label
																	className="item-title"
																	htmlFor="menu-item-checkbox-4106"
																>
																	<input
																		id="menu-item-checkbox-4106"
																		type="checkbox"
																		className="menu-item-checkbox"
																		data-menu-item-id={
																			4106
																		}
																		disabled="disabled"
																	/>
																	<span className="menu-item-title">
																		contact
																	</span>
																	<span
																		className="is-submenu"
																		style={{
																			display:
																				"none",
																		}}
																	>
																		sub item
																	</span>
																</label>
																<span className="item-controls">
																	<span className="item-type">
																		Custom
																		Link
																	</span>
																	<span className="item-order hide-if-js">
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-up-menu-item&menu-item=4106&_wpnonce=ddfa74c059"
																			className="item-move-up"
																			aria-label="Move up"
																		>
																			↑
																		</a>{" "}
																		|
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-down-menu-item&menu-item=4106&_wpnonce=ddfa74c059"
																			className="item-move-down"
																			aria-label="Move down"
																		>
																			↓
																		</a>{" "}
																	</span>
																	<a
																		className="item-edit"
																		id="edit-4106"
																		href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4106#menu-item-settings-4106"
																		aria-label="contact. Menu item 6 of 7."
																	>
																		<span className="screen-reader-text">
																			Edit
																		</span>
																	</a>{" "}
																</span>
															</div>
														</div>
														<div
															className="menu-item-settings wp-clearfix"
															id="menu-item-settings-4106"
														>
															<p className="field-url description description-wide">
																<label htmlFor="edit-menu-item-url-4106">
																	URL
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-url-4106"
																		className="widefat code edit-menu-item-url"
																		name="menu-item-url[4106]"
																		defaultValue="/contact"
																	/>
																</label>
															</p>
															<p className="description description-wide">
																<label htmlFor="edit-menu-item-title-4106">
																	Navigation
																	Label
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-title-4106"
																		className="widefat edit-menu-item-title"
																		name="menu-item-title[4106]"
																		defaultValue="contact"
																	/>
																</label>
															</p>
															<p className="field-title-attribute field-attr-title description description-wide hidden-field">
																<label htmlFor="edit-menu-item-attr-title-4106">
																	Title
																	Attribute
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-attr-title-4106"
																		className="widefat edit-menu-item-attr-title"
																		name="menu-item-attr-title[4106]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-link-target description hidden-field">
																<label htmlFor="edit-menu-item-target-4106">
																	<input
																		type="checkbox"
																		id="edit-menu-item-target-4106"
																		defaultValue="_blank"
																		name="menu-item-target[4106]"
																	/>
																	Open link in
																	a new tab{" "}
																</label>
															</p>
															<p className="field-css-classes description description-thin hidden-field">
																<label htmlFor="edit-menu-item-classes-4106">
																	CSS Classes
																	(optional)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-classes-4106"
																		className="widefat code edit-menu-item-classes"
																		name="menu-item-classes[4106]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-xfn description description-thin hidden-field">
																<label htmlFor="edit-menu-item-xfn-4106">
																	Link
																	Relationship
																	(XFN)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-xfn-4106"
																		className="widefat code edit-menu-item-xfn"
																		name="menu-item-xfn[4106]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-description description description-wide hidden-field">
																<label htmlFor="edit-menu-item-description-4106">
																	Description
																	<br />
																	<textarea
																		id="edit-menu-item-description-4106"
																		className="widefat edit-menu-item-description"
																		rows={3}
																		cols={
																			20
																		}
																		name="menu-item-description[4106]"
																		defaultValue={
																			""
																		}
																	/>
																	<span className="description">
																		The
																		description
																		will be
																		displayed
																		in the
																		menu if
																		the
																		active
																		theme
																		supports
																		it.
																	</span>
																</label>
															</p>
															<fieldset className="field-move hide-if-no-js description description-wide">
																<span
																	className="field-move-visual-label"
																	aria-hidden="true"
																>
																	Move
																</span>
																<button
																	type="button"
																	className="button-link menus-move menus-move-up"
																	data-dir="up"
																	aria-label="Move up one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Up one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-down"
																	data-dir="down"
																	aria-label="Move down one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Down one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-left"
																	data-dir="left"
																	style={{
																		display:
																			"none",
																	}}
																/>
																<button
																	type="button"
																	className="button-link menus-move menus-move-right"
																	data-dir="right"
																	aria-label="Move under blog"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Under blog
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-top"
																	data-dir="top"
																	aria-label="Move to the top"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	To the top
																</button>
															</fieldset>
															<div className="menu-item-actions description-wide submitbox">
																<a
																	className="item-delete submitdelete deletion"
																	id="delete-4106"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=delete-menu-item&menu-item=4106&_wpnonce=5ac47eae34"
																>
																	Remove
																</a>{" "}
																<span className="meta-sep hide-if-no-js">
																	{" "}
																	|{" "}
																</span>
																<a
																	className="item-cancel submitcancel hide-if-no-js"
																	id="cancel-4106"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4106&cancel=1676628849#menu-item-settings-4106"
																>
																	Cancel
																</a>{" "}
															</div>
															<input
																className="menu-item-data-db-id"
																type="hidden"
																name="menu-item-db-id[4106]"
																defaultValue={
																	4106
																}
															/>
															<input
																className="menu-item-data-object-id"
																type="hidden"
																name="menu-item-object-id[4106]"
																defaultValue={
																	4106
																}
															/>
															<input
																className="menu-item-data-object"
																type="hidden"
																name="menu-item-object[4106]"
																defaultValue="custom"
															/>
															<input
																className="menu-item-data-parent-id"
																type="hidden"
																name="menu-item-parent-id[4106]"
																defaultValue={0}
															/>
															<input
																className="menu-item-data-position"
																type="hidden"
																name="menu-item-position[4106]"
																defaultValue={6}
															/>
															<input
																className="menu-item-data-type"
																type="hidden"
																name="menu-item-type[4106]"
																defaultValue="custom"
															/>
														</div>
														{/* .menu-item-settings*/}
														<ul className="menu-item-transport" />
													</li>
													<li
														id="menu-item-4118"
														className="menu-item menu-item-depth-0 menu-item-page menu-item-edit-inactive"
													>
														<div className="menu-item-bar">
															<div className="menu-item-handle ui-sortable-handle">
																<label
																	className="item-title"
																	htmlFor="menu-item-checkbox-4118"
																>
																	<input
																		id="menu-item-checkbox-4118"
																		type="checkbox"
																		className="menu-item-checkbox"
																		data-menu-item-id={
																			4118
																		}
																		disabled="disabled"
																	/>
																	<span className="menu-item-title">
																		test
																	</span>
																	<span
																		className="is-submenu"
																		style={{
																			display:
																				"none",
																		}}
																	>
																		sub item
																	</span>
																</label>
																<span className="item-controls">
																	<span className="item-type">
																		Page
																	</span>
																	<span className="item-order hide-if-js">
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-up-menu-item&menu-item=4118&_wpnonce=ddfa74c059"
																			className="item-move-up"
																			aria-label="Move up"
																		>
																			↑
																		</a>{" "}
																		|
																		<a
																			href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=move-down-menu-item&menu-item=4118&_wpnonce=ddfa74c059"
																			className="item-move-down"
																			aria-label="Move down"
																		>
																			↓
																		</a>{" "}
																	</span>
																	<a
																		className="item-edit"
																		id="edit-4118"
																		href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4118#menu-item-settings-4118"
																		aria-label="test. Menu item 7 of 7."
																	>
																		<span className="screen-reader-text">
																			Edit
																		</span>
																	</a>{" "}
																</span>
															</div>
														</div>
														<div
															className="menu-item-settings wp-clearfix"
															id="menu-item-settings-4118"
														>
															<p className="description description-wide">
																<label htmlFor="edit-menu-item-title-4118">
																	Navigation
																	Label
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-title-4118"
																		className="widefat edit-menu-item-title"
																		name="menu-item-title[4118]"
																		defaultValue="test"
																	/>
																</label>
															</p>
															<p className="field-title-attribute field-attr-title description description-wide hidden-field">
																<label htmlFor="edit-menu-item-attr-title-4118">
																	Title
																	Attribute
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-attr-title-4118"
																		className="widefat edit-menu-item-attr-title"
																		name="menu-item-attr-title[4118]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-link-target description hidden-field">
																<label htmlFor="edit-menu-item-target-4118">
																	<input
																		type="checkbox"
																		id="edit-menu-item-target-4118"
																		defaultValue="_blank"
																		name="menu-item-target[4118]"
																	/>
																	Open link in
																	a new tab{" "}
																</label>
															</p>
															<p className="field-css-classes description description-thin hidden-field">
																<label htmlFor="edit-menu-item-classes-4118">
																	CSS Classes
																	(optional)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-classes-4118"
																		className="widefat code edit-menu-item-classes"
																		name="menu-item-classes[4118]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-xfn description description-thin hidden-field">
																<label htmlFor="edit-menu-item-xfn-4118">
																	Link
																	Relationship
																	(XFN)
																	<br />
																	<input
																		type="text"
																		id="edit-menu-item-xfn-4118"
																		className="widefat code edit-menu-item-xfn"
																		name="menu-item-xfn[4118]"
																		defaultValue=""
																	/>
																</label>
															</p>
															<p className="field-description description description-wide hidden-field">
																<label htmlFor="edit-menu-item-description-4118">
																	Description
																	<br />
																	<textarea
																		id="edit-menu-item-description-4118"
																		className="widefat edit-menu-item-description"
																		rows={3}
																		cols={
																			20
																		}
																		name="menu-item-description[4118]"
																		defaultValue={
																			""
																		}
																	/>
																	<span className="description">
																		The
																		description
																		will be
																		displayed
																		in the
																		menu if
																		the
																		active
																		theme
																		supports
																		it.
																	</span>
																</label>
															</p>
															<fieldset className="field-move hide-if-no-js description description-wide">
																<span
																	className="field-move-visual-label"
																	aria-hidden="true"
																>
																	Move
																</span>
																<button
																	type="button"
																	className="button-link menus-move menus-move-up"
																	data-dir="up"
																	aria-label="Move up one"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Up one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-down"
																	data-dir="down"
																	style={{
																		display:
																			"none",
																	}}
																>
																	Down one
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-left"
																	data-dir="left"
																	style={{
																		display:
																			"none",
																	}}
																/>
																<button
																	type="button"
																	className="button-link menus-move menus-move-right"
																	data-dir="right"
																	aria-label="Move under contact"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	Under
																	contact
																</button>
																<button
																	type="button"
																	className="button-link menus-move menus-move-top"
																	data-dir="top"
																	aria-label="Move to the top"
																	style={{
																		display:
																			"inline",
																	}}
																>
																	To the top
																</button>
															</fieldset>
															<div className="menu-item-actions description-wide submitbox">
																<p className="link-to-original">
																	Original:{" "}
																	<a href="https://byronw34.sg-host.com/test/">
																		test
																	</a>{" "}
																</p>
																<a
																	className="item-delete submitdelete deletion"
																	id="delete-4118"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=delete-menu-item&menu-item=4118&_wpnonce=86081e8e5d"
																>
																	Remove
																</a>{" "}
																<span className="meta-sep hide-if-no-js">
																	{" "}
																	|{" "}
																</span>
																<a
																	className="item-cancel submitcancel hide-if-no-js"
																	id="cancel-4118"
																	href="https://byronw34.sg-host.com/wp-admin/nav-menus.php?edit-menu-item=4118&cancel=1676628849#menu-item-settings-4118"
																>
																	Cancel
																</a>{" "}
															</div>
															<input
																className="menu-item-data-db-id"
																type="hidden"
																name="menu-item-db-id[4118]"
																defaultValue={
																	4118
																}
															/>
															<input
																className="menu-item-data-object-id"
																type="hidden"
																name="menu-item-object-id[4118]"
																defaultValue={
																	4075
																}
															/>
															<input
																className="menu-item-data-object"
																type="hidden"
																name="menu-item-object[4118]"
																defaultValue="page"
															/>
															<input
																className="menu-item-data-parent-id"
																type="hidden"
																name="menu-item-parent-id[4118]"
																defaultValue={0}
															/>
															<input
																className="menu-item-data-position"
																type="hidden"
																name="menu-item-position[4118]"
																defaultValue={7}
															/>
															<input
																className="menu-item-data-type"
																type="hidden"
																name="menu-item-type[4118]"
																defaultValue="post_type"
															/>
														</div>
														{/* .menu-item-settings*/}
														<ul className="menu-item-transport" />
													</li>
												</ul>
												<div
													id="nav-menu-bulk-actions-bottom"
													className="bulk-actions"
												>
													<label
														className="bulk-select-button"
														htmlFor="bulk-select-switcher-bottom"
													>
														<input
															type="checkbox"
															id="bulk-select-switcher-bottom"
															name="bulk-select-switcher-top"
															className="bulk-select-switcher"
														/>
														<span className="bulk-select-button-label">
															Bulk Select
														</span>
													</label>
													<input
														type="button"
														className="deletion menu-items-delete disabled"
														defaultValue="Remove Selected Items"
													/>
													<div id="pending-menu-items-to-delete">
														<p>
															List of menu items
															selected for
															deletion:
														</p>
														<ul />
													</div>
												</div>
												<div className="menu-settings">
													<h3>Menu Settings</h3>
													<fieldset className="menu-settings-group auto-add-pages">
														<legend className="menu-settings-group-name howto">
															Auto add pages
														</legend>
														<div className="menu-settings-input checkbox-input">
															<input
																type="checkbox"
																defaultChecked="checked"
																name="auto-add-pages"
																id="auto-add-pages"
																defaultValue={1}
															/>{" "}
															<label htmlFor="auto-add-pages">
																Automatically
																add new
																top-level pages
																to this menu
															</label>
														</div>
													</fieldset>
													<fieldset className="menu-settings-group menu-theme-locations">
														<legend className="menu-settings-group-name howto">
															Display location
														</legend>
														<div className="menu-settings-input checkbox-input">
															<input
																type="checkbox"
																defaultChecked="checked"
																name="menu-locations[header-menu]"
																id="locations-header-menu"
																defaultValue={3}
															/>
															<label htmlFor="locations-header-menu">
																Header Menu
															</label>
														</div>
													</fieldset>
												</div>
											</div>
											{/* /#post-body-content */}
										</div>
										{/* /#post-body */}
										<div id="nav-menu-footer">
											<div className="major-publishing-actions wp-clearfix">
												<span className="delete-action">
													<a
														className="submitdelete deletion menu-delete"
														href="
									https://byronw34.sg-host.com/wp-admin/nav-menus.php?action=delete&menu=3&_wpnonce=6a5aedd0cc									"
													>
														Delete Menu
													</a>
												</span>
												{/* END .delete-action */}
												<div className="publishing-action">
													<input
														type="submit"
														name="save_menu"
														id="save_menu_footer"
														className="button button-primary button-large menu-save"
														defaultValue="Save Menu"
													/>{" "}
												</div>
												{/* END .publishing-action */}
											</div>
											{/* END .major-publishing-actions */}
										</div>
										{/* /#nav-menu-footer */}
									</div>
									{/* /.menu-edit */}
								</form>
								{/* /#update-nav-menu */}
							</div>
							{/* /#menu-management */}
						</div>
						{/* /#menu-management-liquid */}
					</div>
					{/* /#nav-menus-frame */}
				</div>
				{/* /.wrap*/}
				<div className="clear" />
			</div>
		</>
	);
}
