export default function PluginEditor() {
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
									<a href="https://wordpress.org/support/article/plugins-editor-screen/">
										Documentation on Editing Plugins
									</a>
								</p>
								<p>
									<a href="https://developer.wordpress.org/plugins/">
										Documentation on Writing Plugins
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
										You can use the plugin file editor to
										make changes to any of your plugins’
										individual PHP files. Be aware that if
										you make changes, plugins updates will
										overwrite your customizations.
									</p>
									<p>
										Choose a plugin to edit from the
										dropdown menu and click the Select
										button. Click once on any file name to
										load it in the editor, and make your
										changes. Do not forget to save your
										changes (Update File) when you are
										finished.
									</p>
									<p>
										The documentation menu below the editor
										lists the PHP functions recognized in
										the plugin file. Clicking Look Up takes
										you to a web page about that particular
										function.
									</p>
									<p id="editor-keyboard-trap-help-1">
										When using a keyboard to navigate:
									</p>
									<ul>
										<li id="editor-keyboard-trap-help-2">
											In the editing area, the Tab key
											enters a tab character.
										</li>
										<li id="editor-keyboard-trap-help-3">
											To move away from this area, press
											the Esc key followed by the Tab key.
										</li>
										<li id="editor-keyboard-trap-help-4">
											Screen reader users: when in forms
											mode, you may need to press the Esc
											key twice.
										</li>
									</ul>
									<p>
										If you want to make changes but do not
										want them to be overwritten when the
										plugin is updated, you may be ready to
										think about writing your own plugin. For
										information on how to edit plugins,
										write your own from scratch, or just
										better understand their anatomy, check
										out the links below.
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
					<h1>Edit Plugins</h1>
					<div className="fileedit-sub">
						<div className="alignleft">
							<h2>
								Editing{" "}
								<strong>
									custom-post-type-ui/custom-post-type-ui.php
								</strong>{" "}
								(active)
							</h2>
						</div>
						<div className="alignright">
							<form action="plugin-editor.php" method="get">
								<label
									htmlFor="plugin"
									id="theme-plugin-editor-selector"
								>
									Select plugin to edit:{" "}
								</label>
								<select name="plugin" id="plugin">
									<option
										value="custom-post-type-ui/custom-post-type-ui.php"
										selected="selected"
									>
										Custom Post Type UI
									</option>
									<option value="headless-mode/headless-mode.php">
										Headless Mode
									</option>
									<option value="integrate-firebase/init.php">
										Integrate Firebase
									</option>
									<option value="pageviews/post-views-total-views-wpgraphql.php">
										Post Views and Total Views for WPGraphQL
									</option>
									<option value="wordpress-importer/wordpress-importer.php">
										WordPress Importer
									</option>
									<option value="wp-graphql/wp-graphql.php">
										WP GraphQL
									</option>
									<option value="wpgraphql-smart-cache/wp-graphql-smart-cache.php">
										WPGraphQL Smart Cache
									</option>{" "}
								</select>
								<input
									type="submit"
									name="Submit"
									id="Submit"
									className="button"
									defaultValue="Select"
								/>{" "}
							</form>
						</div>
						<br className="clear" />
					</div>
					<div id="templateside">
						<h2 id="plugin-files-label">Plugin Files</h2>
						<ul role="tree" aria-labelledby="plugin-files-label">
							<li
								role="treeitem"
								tabIndex={-1}
								aria-expanded="true"
								aria-level={1}
								aria-posinset={1}
								aria-setsize={1}
							>
								<ul role="group">
									<li role="none" className="current-file">
										<a
											role="treeitem"
											tabIndex={0}
											href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fcustom-post-type-ui.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
											aria-level={2}
											aria-setsize={1}
											aria-posinset={6}
										>
											<span className="notice notice-info">
												custom-post-type-ui.php
											</span>{" "}
										</a>
									</li>
									<li
										role="treeitem"
										aria-expanded="false"
										tabIndex={-1}
										aria-level={2}
										aria-setsize={6}
										aria-posinset={2}
									>
										<span className="folder-label">
											classes{" "}
											<span className="screen-reader-text">
												folder
											</span>
											<span
												aria-hidden="true"
												className="icon"
											/>
										</span>
										<ul
											role="group"
											className="tree-folder"
										>
											{" "}
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fclasses%2Fclass.cptui_debug_info.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={1}
													aria-posinset={2}
												>
													class.cptui_debug_info.php{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fclasses%2Fclass.cptui_admin_ui.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={2}
													aria-posinset={2}
												>
													class.cptui_admin_ui.php{" "}
												</a>
											</li>
										</ul>
									</li>
									<li
										role="treeitem"
										aria-expanded="false"
										tabIndex={-1}
										aria-level={2}
										aria-setsize={6}
										aria-posinset={3}
									>
										<span className="folder-label">
											external{" "}
											<span className="screen-reader-text">
												folder
											</span>
											<span
												aria-hidden="true"
												className="icon"
											/>
										</span>
										<ul
											role="group"
											className="tree-folder"
										>
											{" "}
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fexternal%2Fwpgraphql.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={1}
													aria-posinset={1}
												>
													wpgraphql.php{" "}
												</a>
											</li>
										</ul>
									</li>
									<li
										role="treeitem"
										aria-expanded="false"
										tabIndex={-1}
										aria-level={2}
										aria-setsize={6}
										aria-posinset={4}
									>
										<span className="folder-label">
											inc{" "}
											<span className="screen-reader-text">
												folder
											</span>
											<span
												aria-hidden="true"
												className="icon"
											/>
										</span>
										<ul
											role="group"
											className="tree-folder"
										>
											{" "}
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Fsupport.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={1}
													aria-posinset={9}
												>
													support.php{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Ftools.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={2}
													aria-posinset={9}
												>
													tools.php{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Futility.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={3}
													aria-posinset={9}
												>
													utility.php{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Fabout.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={4}
													aria-posinset={9}
												>
													about.php{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Fwp-cli.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={5}
													aria-posinset={9}
												>
													wp-cli.php{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Fpost-types.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={6}
													aria-posinset={9}
												>
													post-types.php{" "}
												</a>
											</li>
											<li
												role="treeitem"
												aria-expanded="false"
												tabIndex={-1}
												aria-level={3}
												aria-setsize={9}
												aria-posinset={7}
											>
												<span className="folder-label">
													tools-sections{" "}
													<span className="screen-reader-text">
														folder
													</span>
													<span
														aria-hidden="true"
														className="icon"
													/>
												</span>
												<ul
													role="group"
													className="tree-folder"
												>
													{" "}
													<li
														role="none"
														className=""
													>
														<a
															role="treeitem"
															tabIndex={-1}
															href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Ftools-sections%2Ftools-post-types.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
															aria-level={4}
															aria-setsize={1}
															aria-posinset={4}
														>
															tools-post-types.php{" "}
														</a>
													</li>
													<li
														role="none"
														className=""
													>
														<a
															role="treeitem"
															tabIndex={-1}
															href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Ftools-sections%2Ftools-debug.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
															aria-level={4}
															aria-setsize={2}
															aria-posinset={4}
														>
															tools-debug.php{" "}
														</a>
													</li>
													<li
														role="none"
														className=""
													>
														<a
															role="treeitem"
															tabIndex={-1}
															href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Ftools-sections%2Ftools-get-code.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
															aria-level={4}
															aria-setsize={3}
															aria-posinset={4}
														>
															tools-get-code.php{" "}
														</a>
													</li>
													<li
														role="none"
														className=""
													>
														<a
															role="treeitem"
															tabIndex={-1}
															href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Ftools-sections%2Ftools-taxonomies.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
															aria-level={4}
															aria-setsize={4}
															aria-posinset={4}
														>
															tools-taxonomies.php{" "}
														</a>
													</li>
												</ul>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Ftaxonomies.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={8}
													aria-posinset={9}
												>
													taxonomies.php{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Finc%2Flistings.php&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={9}
													aria-posinset={9}
												>
													listings.php{" "}
												</a>
											</li>
										</ul>
									</li>
									<li
										role="treeitem"
										aria-expanded="false"
										tabIndex={-1}
										aria-level={2}
										aria-setsize={6}
										aria-posinset={5}
									>
										<span className="folder-label">
											build{" "}
											<span className="screen-reader-text">
												folder
											</span>
											<span
												aria-hidden="true"
												className="icon"
											/>
										</span>
										<ul
											role="group"
											className="tree-folder"
										>
											{" "}
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fbuild%2Fcptui-scripts.js&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={1}
													aria-posinset={6}
												>
													cptui-scripts.js{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fbuild%2Fdashicons-picker.js&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={2}
													aria-posinset={6}
												>
													dashicons-picker.js{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fbuild%2Fcptui-scripts.min.js&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={3}
													aria-posinset={6}
												>
													cptui-scripts.min.js{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fbuild%2Fdashicons-picker.min.js&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={4}
													aria-posinset={6}
												>
													dashicons-picker.min.js{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fbuild%2Fcptui-styles.min.css&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={5}
													aria-posinset={6}
												>
													cptui-styles.min.css{" "}
												</a>
											</li>
											<li role="none" className="">
												<a
													role="treeitem"
													tabIndex={-1}
													href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Fbuild%2Fcptui-styles.css&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
													aria-level={3}
													aria-setsize={6}
													aria-posinset={6}
												>
													cptui-styles.css{" "}
												</a>
											</li>
										</ul>
									</li>
									<li role="none" className="">
										<a
											role="treeitem"
											tabIndex={-1}
											href="https://byronw34.sg-host.com/wp-admin/plugin-editor.php?file=custom-post-type-ui%2Freadme.txt&plugin=custom-post-type-ui%2Fcustom-post-type-ui.php"
											aria-level={2}
											aria-setsize={6}
											aria-posinset={6}
										>
											readme.txt{" "}
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<form
						name="template"
						id="template"
						action="plugin-editor.php"
						method="post"
					>
						<input
							type="hidden"
							id="nonce"
							name="nonce"
							defaultValue="37d486131e"
						/>
						<input
							type="hidden"
							name="_wp_http_referer"
							defaultValue="/wp-admin/plugin-editor.php"
						/>{" "}
						<div>
							<label
								htmlFor="newcontent"
								id="theme-plugin-editor-label"
							>
								Selected file content:
							</label>
							<textarea
								cols={70}
								rows={25}
								name="newcontent"
								id="newcontent"
								aria-describedby="editor-keyboard-trap-help-1 editor-keyboard-trap-help-2 editor-keyboard-trap-help-3 editor-keyboard-trap-help-4"
								style={{ display: "none" }}
								defaultValue={
									"<?php\n/**\n * Custom Post Type UI.\n *\n * For all your post type and taxonomy needs.\n *\n * @package CPTUI\n * @subpackage Loader\n * @author WebDevStudios\n * @since 0.1.0.0\n * @license GPL-2.0+\n */\n\n/**\n * Plugin Name: Custom Post Type UI\n * Plugin URI: https://github.com/WebDevStudios/custom-post-type-ui/\n * Description: Admin UI panel for registering custom post types and taxonomies in WordPress\n * Author: WebDevStudios\n * Version: 1.13.4\n * Author URI: https://webdevstudios.com/\n * Text Domain: custom-post-type-ui\n * Domain Path: /languages\n * License: GPL-2.0+\n */\n\n// phpcs:disable WebDevStudios.All.RequireAuthor\n// phpcs:set WordPress.WP.I18n check_translator_comments false\n\n// Exit if accessed directly.\nif ( ! defined( 'ABSPATH' ) ) {\n\texit;\n}\n\ndefine( 'CPT_VERSION', '1.13.4' ); // Left for legacy purposes.\ndefine( 'CPTUI_VERSION', '1.13.4' );\ndefine( 'CPTUI_WP_VERSION', get_bloginfo( 'version' ) );\n\n/**\n * Load our Admin UI class that powers our form inputs.\n *\n * @since 1.0.0\n *\n * @internal\n */\nfunction cptui_load_ui_class() {\n\trequire_once plugin_dir_path( __FILE__ ) . 'classes/class.cptui_admin_ui.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'classes/class.cptui_debug_info.php';\n}\nadd_action( 'init', 'cptui_load_ui_class' );\n\n/**\n * Set a transient used for redirection upon activation.\n *\n * @since 1.4.0\n */\nfunction cptui_activation_redirect() {\n\t// Bail if activating from network, or bulk.\n\tif ( is_network_admin() ) {\n\t\treturn;\n\t}\n\n\t// Add the transient to redirect.\n\tset_transient( 'cptui_activation_redirect', true, 30 );\n}\nadd_action( 'activate_' . plugin_basename( __FILE__ ), 'cptui_activation_redirect' );\n\n/**\n * Redirect user to CPTUI about page upon plugin activation.\n *\n * @since 1.4.0\n */\nfunction cptui_make_activation_redirect() {\n\n\tif ( ! get_transient( 'cptui_activation_redirect' ) ) {\n\t\treturn;\n\t}\n\n\tdelete_transient( 'cptui_activation_redirect' );\n\n\t// Bail if activating from network, or bulk.\n\tif ( is_network_admin() ) {\n\t\treturn;\n\t}\n\n\tif ( ! cptui_is_new_install() ) {\n\t\treturn;\n\t}\n\n\t// Redirect to CPTUI about page.\n\twp_safe_redirect(\n\t\tadd_query_arg(\n\t\t\t[ 'page' => 'cptui_main_menu' ],\n\t\t\tcptui_admin_url( 'admin.php?page=cptui_main_menu' )\n\t\t)\n\t);\n}\nadd_action( 'admin_init', 'cptui_make_activation_redirect', 1 );\n\n/**\n * Flush our rewrite rules on deactivation.\n *\n * @since 0.8.0\n *\n * @internal\n */\nfunction cptui_deactivation() {\n\tflush_rewrite_rules();\n}\nregister_deactivation_hook( __FILE__, 'cptui_deactivation' );\n\n/**\n * Register our text domain.\n *\n * @since 0.8.0\n *\n * @internal\n */\nfunction cptui_load_textdomain() {\n\tload_plugin_textdomain( 'custom-post-type-ui' );\n}\nadd_action( 'plugins_loaded', 'cptui_load_textdomain' );\n\n/**\n * Load our main menu.\n *\n * Submenu items added in version 1.1.0\n *\n * @since 0.1.0\n *\n * @internal\n */\nfunction cptui_plugin_menu() {\n\n\t/**\n\t * Filters the required capability to manage CPTUI settings.\n\t *\n\t * @since 1.3.0\n\t *\n\t * @param string $value Capability required.\n\t */\n\t$capability  = apply_filters( 'cptui_required_capabilities', 'manage_options' );\n\t$parent_slug = 'cptui_main_menu';\n\n\tadd_menu_page( __( 'Custom Post Types', 'custom-post-type-ui' ), __( 'CPT UI', 'custom-post-type-ui' ), $capability, $parent_slug, 'cptui_settings', cptui_menu_icon() );\n\tadd_submenu_page( $parent_slug, __( 'Add/Edit Post Types', 'custom-post-type-ui' ), __( 'Add/Edit Post Types', 'custom-post-type-ui' ), $capability, 'cptui_manage_post_types', 'cptui_manage_post_types' );\n\tadd_submenu_page( $parent_slug, __( 'Add/Edit Taxonomies', 'custom-post-type-ui' ), __( 'Add/Edit Taxonomies', 'custom-post-type-ui' ), $capability, 'cptui_manage_taxonomies', 'cptui_manage_taxonomies' );\n\tadd_submenu_page( $parent_slug, __( 'Registered Types and Taxes', 'custom-post-type-ui' ), __( 'Registered Types/Taxes', 'custom-post-type-ui' ), $capability, 'cptui_listings', 'cptui_listings' );\n\tadd_submenu_page( $parent_slug, __( 'Custom Post Type UI Tools', 'custom-post-type-ui' ), __( 'Tools', 'custom-post-type-ui' ), $capability, 'cptui_tools', 'cptui_tools' );\n\tadd_submenu_page( $parent_slug, __( 'Help/Support', 'custom-post-type-ui' ), __( 'Help/Support', 'custom-post-type-ui' ), $capability, 'cptui_support', 'cptui_support' );\n\n\t/**\n\t * Fires after the default submenu pages.\n\t *\n\t * @since 1.3.0\n\t *\n\t * @param string $value      Parent slug for Custom Post Type UI menu.\n\t * @param string $capability Capability required to manage CPTUI settings.\n\t */\n\tdo_action( 'cptui_extra_menu_items', $parent_slug, $capability );\n\n\t// Remove the default one so we can add our customized version.\n\tremove_submenu_page( $parent_slug, 'cptui_main_menu' );\n\tadd_submenu_page( $parent_slug, __( 'About CPT UI', 'custom-post-type-ui' ), __( 'About CPT UI', 'custom-post-type-ui' ), $capability, 'cptui_main_menu', 'cptui_settings' );\n}\nadd_action( 'admin_menu', 'cptui_plugin_menu' );\n\n/**\n * Fire our CPTUI Loaded hook.\n *\n * @since 1.3.0\n *\n * @internal Use `cptui_loaded` hook.\n */\nfunction cptui_loaded() {\n\n\tif ( class_exists( 'WPGraphQL' ) ) {\n\t\trequire_once plugin_dir_path( __FILE__ ) . 'external/wpgraphql.php';\n\t}\n\n\t/**\n\t * Fires upon plugins_loaded WordPress hook.\n\t *\n\t * CPTUI loads its required files on this hook.\n\t *\n\t * @since 1.3.0\n\t */\n\tdo_action( 'cptui_loaded' );\n}\nadd_action( 'plugins_loaded', 'cptui_loaded' );\n\n/**\n * Load our submenus.\n *\n * @since 1.0.0\n *\n * @internal\n */\nfunction cptui_create_submenus() {\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/about.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/utility.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/post-types.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/taxonomies.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/listings.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/tools.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/tools-sections/tools-post-types.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/tools-sections/tools-taxonomies.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/tools-sections/tools-get-code.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/tools-sections/tools-debug.php';\n\trequire_once plugin_dir_path( __FILE__ ) . 'inc/support.php';\n\n\tif ( defined( 'WP_CLI' ) && WP_CLI ) {\n\t\trequire_once plugin_dir_path( __FILE__ ) . 'inc/wp-cli.php';\n\t}\n}\nadd_action( 'cptui_loaded', 'cptui_create_submenus' );\n\n/**\n * Fire our CPTUI init hook.\n *\n * @since 1.3.0\n *\n * @internal Use `cptui_init` hook.\n */\nfunction cptui_init() {\n\n\t/**\n\t * Fires upon init WordPress hook.\n\t *\n\t * @since 1.3.0\n\t */\n\tdo_action( 'cptui_init' );\n}\nadd_action( 'init', 'cptui_init' );\n\n/**\n * Enqueue CPTUI admin styles.\n *\n * @since 1.0.0\n *\n * @internal\n */\nfunction cptui_add_styles() {\n\tif ( wp_doing_ajax() ) {\n\t\treturn;\n\t}\n\t$min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';\n\twp_register_script( 'cptui', plugins_url( \"build/cptui-scripts{$min}.js\", __FILE__ ), [ 'jquery', 'jquery-ui-dialog', 'postbox' ], CPTUI_VERSION, true );\n\twp_register_script( 'dashicons-picker', plugins_url( \"build/dashicons-picker{$min}.js\", __FILE__ ), [ 'jquery'], '1.0.0', true );\n\twp_register_style( 'cptui-css', plugins_url( \"build/cptui-styles{$min}.css\", __FILE__ ), [ 'wp-jquery-ui-dialog' ], CPTUI_VERSION );\n}\nadd_action( 'admin_enqueue_scripts', 'cptui_add_styles' );\n\n/**\n * Register our users' custom post types.\n *\n * @since 0.5.0\n *\n * @internal\n */\nfunction cptui_create_custom_post_types() {\n\t$cpts = get_option( 'cptui_post_types', [] );\n\t/**\n\t * Filters an override array of post type data to be registered instead of our saved option.\n\t *\n\t * @since 1.10.0\n\t *\n\t * @param array $value Default override value.\n\t */\n\t$cpts_override = apply_filters( 'cptui_post_types_override', [] );\n\n\tif ( empty( $cpts ) && empty( $cpts_override ) ) {\n\t\treturn;\n\t}\n\n\t// Assume good intent, and we're also not wrecking the option so things are always reversable.\n\tif ( is_array( $cpts_override ) && ! empty( $cpts_override ) ) {\n\t\t$cpts = $cpts_override;\n\t}\n\n\t/**\n\t * Fires before the start of the post type registrations.\n\t *\n\t * @since 1.3.0\n\t *\n\t * @param array $cpts Array of post types to register.\n\t */\n\tdo_action( 'cptui_pre_register_post_types', $cpts );\n\n\tif ( is_array( $cpts ) ) {\n\t\tforeach ( $cpts as $post_type ) {\n\n\t\t\t/**\n\t\t\t * Filters whether or not to skip registration of the current iterated post type.\n\t\t\t *\n\t\t\t * Dynamic part of the filter name is the chosen post type slug.\n\t\t\t *\n\t\t\t * @since 1.7.0\n\t\t\t *\n\t\t\t * @param bool  $value     Whether or not to skip the post type.\n\t\t\t * @param array $post_type Current post type being registered.\n\t\t\t */\n\t\t\tif ( (bool) apply_filters( \"cptui_disable_{$post_type['name']}_cpt\", false, $post_type ) ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t/**\n\t\t\t * Filters whether or not to skip registration of the current iterated post type.\n\t\t\t *\n\t\t\t * @since 1.7.0\n\t\t\t *\n\t\t\t * @param bool  $value     Whether or not to skip the post type.\n\t\t\t * @param array $post_type Current post type being registered.\n\t\t\t */\n\t\t\tif ( (bool) apply_filters( 'cptui_disable_cpt', false, $post_type ) ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tcptui_register_single_post_type( $post_type );\n\t\t}\n\t}\n\n\t/**\n\t * Fires after the completion of the post type registrations.\n\t *\n\t * @since 1.3.0\n\t *\n\t * @param array $cpts Array of post types registered.\n\t */\n\tdo_action( 'cptui_post_register_post_types', $cpts );\n}\nadd_action( 'init', 'cptui_create_custom_post_types', 10 ); // Leave on standard init for legacy purposes.\n\n/**\n * Helper function to register the actual post_type.\n *\n * @since 1.0.0\n *\n * @internal\n *\n * @param array $post_type Post type array to register. Optional.\n * @return null Result of register_post_type.\n */\nfunction cptui_register_single_post_type( $post_type = [] ) {\n\n\t/**\n\t * Filters the map_meta_cap value.\n\t *\n\t * @since 1.0.0\n\t *\n\t * @param bool   $value     True.\n\t * @param string $name      Post type name being registered.\n\t * @param array  $post_type All parameters for post type registration.\n\t */\n\t$post_type['map_meta_cap'] = apply_filters( 'cptui_map_meta_cap', true, $post_type['name'], $post_type );\n\n\tif ( empty( $post_type['supports'] ) ) {\n\t\t$post_type['supports'] = [];\n\t}\n\n\t/**\n\t * Filters custom supports parameters for 3rd party plugins.\n\t *\n\t * @since 1.0.0\n\t *\n\t * @param array  $value     Empty array to add supports keys to.\n\t * @param string $name      Post type slug being registered.\n\t * @param array  $post_type Array of post type arguments to be registered.\n\t */\n\t$user_supports_params = apply_filters( 'cptui_user_supports_params', [], $post_type['name'], $post_type );\n\n\tif ( is_array( $user_supports_params ) && ! empty( $user_supports_params ) ) {\n\t\tif ( is_array( $post_type['supports'] ) ) {\n\t\t\t$post_type['supports'] = array_merge( $post_type['supports'], $user_supports_params );\n\t\t} else {\n\t\t\t$post_type['supports'] = [ $user_supports_params ];\n\t\t}\n\t}\n\n\t$yarpp = false; // Prevent notices.\n\tif ( ! empty( $post_type['custom_supports'] ) ) {\n\t\t$custom = explode( ',', $post_type['custom_supports'] );\n\t\tforeach ( $custom as $part ) {\n\t\t\t// We'll handle YARPP separately.\n\t\t\tif ( in_array( $part, [ 'YARPP', 'yarpp' ], true ) ) {\n\t\t\t\t$yarpp = true;\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\t$post_type['supports'][] = trim( $part );\n\t\t}\n\t}\n\n\tif ( isset( $post_type['supports'] ) && is_array( $post_type['supports'] ) && in_array( 'none', $post_type['supports'], true ) ) {\n\t\t$post_type['supports'] = false;\n\t}\n\n\t$labels = [\n\t\t'name'          => $post_type['label'],\n\t\t'singular_name' => $post_type['singular_label'],\n\t];\n\n\t$preserved        = cptui_get_preserved_keys( 'post_types' );\n\t$preserved_labels = cptui_get_preserved_labels();\n\tforeach ( $post_type['labels'] as $key => $label ) {\n\n\t\tif ( ! empty( $label ) ) {\n\t\t\tif ( 'parent' === $key ) {\n\t\t\t\t$labels['parent_item_colon'] = $label;\n\t\t\t} else {\n\t\t\t\t$labels[ $key ] = $label;\n\t\t\t}\n\t\t} elseif ( empty( $label ) && in_array( $key, $preserved, true ) ) {\n\t\t\t$singular_or_plural = ( in_array( $key, array_keys( $preserved_labels['post_types']['plural'] ) ) ) ? 'plural' : 'singular'; // phpcs:ignore.\n\t\t\t$label_plurality    = ( 'plural' === $singular_or_plural ) ? $post_type['label'] : $post_type['singular_label'];\n\t\t\t$labels[ $key ]     = sprintf( $preserved_labels['post_types'][ $singular_or_plural ][ $key ], $label_plurality );\n\t\t}\n\t}\n\n\t$has_archive = isset( $post_type['has_archive'] ) ? get_disp_boolean( $post_type['has_archive'] ) : false;\n\tif ( $has_archive && ! empty( $post_type['has_archive_string'] ) ) {\n\t\t$has_archive = $post_type['has_archive_string'];\n\t}\n\n\t$show_in_menu = get_disp_boolean( $post_type['show_in_menu'] );\n\tif ( ! empty( $post_type['show_in_menu_string'] ) ) {\n\t\t$show_in_menu = $post_type['show_in_menu_string'];\n\t}\n\n\t$rewrite = get_disp_boolean( $post_type['rewrite'] );\n\tif ( false !== $rewrite ) {\n\t\t// Core converts to an empty array anyway, so safe to leave this instead of passing in boolean true.\n\t\t$rewrite         = [];\n\t\t$rewrite['slug'] = ! empty( $post_type['rewrite_slug'] ) ? $post_type['rewrite_slug'] : $post_type['name'];\n\n\t\t$rewrite['with_front'] = true; // Default value.\n\t\tif ( isset( $post_type['rewrite_withfront'] ) ) {\n\t\t\t$rewrite['with_front'] = 'false' === disp_boolean( $post_type['rewrite_withfront'] ) ? false : true;\n\t\t}\n\t}\n\n\t$menu_icon            = ! empty( $post_type['menu_icon'] ) ? $post_type['menu_icon'] : null;\n\t$register_meta_box_cb = ! empty( $post_type['register_meta_box_cb'] ) ? $post_type['register_meta_box_cb'] : null;\n\n\tif ( in_array( $post_type['query_var'], [ 'true', 'false', '0', '1' ], true ) ) {\n\t\t$post_type['query_var'] = get_disp_boolean( $post_type['query_var'] );\n\t}\n\tif ( ! empty( $post_type['query_var_slug'] ) ) {\n\t\t$post_type['query_var'] = $post_type['query_var_slug'];\n\t}\n\n\t$menu_position = null;\n\tif ( ! empty( $post_type['menu_position'] ) ) {\n\t\t$menu_position = (int) $post_type['menu_position'];\n\t}\n\n\t$delete_with_user = null;\n\tif ( ! empty( $post_type['delete_with_user'] ) ) {\n\t\t$delete_with_user = get_disp_boolean( $post_type['delete_with_user'] );\n\t}\n\n\t$capability_type = 'post';\n\tif ( ! empty( $post_type['capability_type'] ) ) {\n\t\t$capability_type = $post_type['capability_type'];\n\t\tif ( false !== strpos( $post_type['capability_type'], ',' ) ) {\n\t\t\t$caps = array_map( 'trim', explode( ',', $post_type['capability_type'] ) );\n\t\t\tif ( count( $caps ) > 2 ) {\n\t\t\t\t$caps = array_slice( $caps, 0, 2 );\n\t\t\t}\n\t\t\t$capability_type = $caps;\n\t\t}\n\t}\n\n\t$public = get_disp_boolean( $post_type['public'] );\n\tif ( ! empty( $post_type['exclude_from_search'] ) ) {\n\t\t$exclude_from_search = get_disp_boolean( $post_type['exclude_from_search'] );\n\t} else {\n\t\t$exclude_from_search = false === $public;\n\t}\n\n\t$queryable = ( ! empty( $post_type['publicly_queryable'] ) && isset( $post_type['publicly_queryable'] ) ) ? get_disp_boolean( $post_type['publicly_queryable'] ) : $public;\n\n\tif ( empty( $post_type['show_in_nav_menus'] ) ) {\n\t\t// Defaults to value of public.\n\t\t$post_type['show_in_nav_menus'] = $public;\n\t}\n\n\tif ( empty( $post_type['show_in_rest'] ) ) {\n\t\t$post_type['show_in_rest'] = false;\n\t}\n\n\t$rest_base = null;\n\tif ( ! empty( $post_type['rest_base'] ) ) {\n\t\t$rest_base = $post_type['rest_base'];\n\t}\n\n\t$rest_controller_class = null;\n\tif ( ! empty( $post_type['rest_controller_class'] ) ) {\n\t\t$rest_controller_class = $post_type['rest_controller_class'];\n\t}\n\n\t$rest_namespace = null;\n\tif ( ! empty( $post_type['rest_namespace'] ) ) {\n\t\t$rest_namespace = $post_type['rest_namespace'];\n\t}\n\n\t$can_export = null;\n\tif ( ! empty( $post_type['can_export'] ) ) {\n\t\t$can_export = get_disp_boolean( $post_type['can_export'] );\n\t}\n\n\t$args = [\n\t\t'labels'                => $labels,\n\t\t'description'           => $post_type['description'],\n\t\t'public'                => get_disp_boolean( $post_type['public'] ),\n\t\t'publicly_queryable'    => $queryable,\n\t\t'show_ui'               => get_disp_boolean( $post_type['show_ui'] ),\n\t\t'show_in_nav_menus'     => get_disp_boolean( $post_type['show_in_nav_menus'] ),\n\t\t'has_archive'           => $has_archive,\n\t\t'show_in_menu'          => $show_in_menu,\n\t\t'delete_with_user'      => $delete_with_user,\n\t\t'show_in_rest'          => get_disp_boolean( $post_type['show_in_rest'] ),\n\t\t'rest_base'             => $rest_base,\n\t\t'rest_controller_class' => $rest_controller_class,\n\t\t'rest_namespace'        => $rest_namespace,\n\t\t'exclude_from_search'   => $exclude_from_search,\n\t\t'capability_type'       => $capability_type,\n\t\t'map_meta_cap'          => $post_type['map_meta_cap'],\n\t\t'hierarchical'          => get_disp_boolean( $post_type['hierarchical'] ),\n\t\t'can_export'            => $can_export,\n\t\t'rewrite'               => $rewrite,\n\t\t'menu_position'         => $menu_position,\n\t\t'menu_icon'             => $menu_icon,\n\t\t'register_meta_box_cb'  => $register_meta_box_cb,\n\t\t'query_var'             => $post_type['query_var'],\n\t\t'supports'              => $post_type['supports'],\n\t\t'taxonomies'            => $post_type['taxonomies'],\n\t];\n\n\tif ( true === $yarpp ) {\n\t\t$args['yarpp_support'] = $yarpp;\n\t}\n\n\t/**\n\t * Filters the arguments used for a post type right before registering.\n\t *\n\t * @since 1.0.0\n\t * @since 1.3.0 Added original passed in values array\n\t *\n\t * @param array  $args      Array of arguments to use for registering post type.\n\t * @param string $value     Post type slug to be registered.\n\t * @param array  $post_type Original passed in values for post type.\n\t */\n\t$args = apply_filters( 'cptui_pre_register_post_type', $args, $post_type['name'], $post_type );\n\n\treturn register_post_type( $post_type['name'], $args );\n}\n\n/**\n * Register our users' custom taxonomies.\n *\n * @since 0.5.0\n *\n * @internal\n */\nfunction cptui_create_custom_taxonomies() {\n\t$taxes = get_option( 'cptui_taxonomies', [] );\n\t/**\n\t * Filters an override array of taxonomy data to be registered instead of our saved option.\n\t *\n\t * @since 1.10.0\n\t *\n\t * @param array $value Default override value.\n\t */\n\t$taxes_override = apply_filters( 'cptui_taxonomies_override', [] );\n\n\tif ( empty( $taxes ) && empty( $taxes_override ) ) {\n\t\treturn;\n\t}\n\n\t// Assume good intent, and we're also not wrecking the option so things are always reversable.\n\tif ( is_array( $taxes_override ) && ! empty( $taxes_override ) ) {\n\t\t$taxes = $taxes_override;\n\t}\n\n\t/**\n\t * Fires before the start of the taxonomy registrations.\n\t *\n\t * @since 1.3.0\n\t *\n\t * @param array $taxes Array of taxonomies to register.\n\t */\n\tdo_action( 'cptui_pre_register_taxonomies', $taxes );\n\n\tif ( is_array( $taxes ) ) {\n\t\tforeach ( $taxes as $tax ) {\n\t\t\t/**\n\t\t\t * Filters whether or not to skip registration of the current iterated taxonomy.\n\t\t\t *\n\t\t\t * Dynamic part of the filter name is the chosen taxonomy slug.\n\t\t\t *\n\t\t\t * @since 1.7.0\n\t\t\t *\n\t\t\t * @param bool  $value Whether or not to skip the taxonomy.\n\t\t\t * @param array $tax   Current taxonomy being registered.\n\t\t\t */\n\t\t\tif ( (bool) apply_filters( \"cptui_disable_{$tax['name']}_tax\", false, $tax ) ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t/**\n\t\t\t * Filters whether or not to skip registration of the current iterated taxonomy.\n\t\t\t *\n\t\t\t * @since 1.7.0\n\t\t\t *\n\t\t\t * @param bool  $value Whether or not to skip the taxonomy.\n\t\t\t * @param array $tax   Current taxonomy being registered.\n\t\t\t */\n\t\t\tif ( (bool) apply_filters( 'cptui_disable_tax', false, $tax ) ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tcptui_register_single_taxonomy( $tax );\n\t\t}\n\t}\n\n\t/**\n\t * Fires after the completion of the taxonomy registrations.\n\t *\n\t * @since 1.3.0\n\t *\n\t * @param array $taxes Array of taxonomies registered.\n\t */\n\tdo_action( 'cptui_post_register_taxonomies', $taxes );\n}\nadd_action( 'init', 'cptui_create_custom_taxonomies', 9 );  // Leave on standard init for legacy purposes.\n\n/**\n * Helper function to register the actual taxonomy.\n *\n * @since 1.0.0\n *\n * @internal\n *\n * @param array $taxonomy Taxonomy array to register. Optional.\n * @return null Result of register_taxonomy.\n */\nfunction cptui_register_single_taxonomy( $taxonomy = [] ) {\n\n\t$labels = [\n\t\t'name'          => $taxonomy['label'],\n\t\t'singular_name' => $taxonomy['singular_label'],\n\t];\n\n\t$description = '';\n\tif ( ! empty( $taxonomy['description'] ) ) {\n\t\t$description = $taxonomy['description'];\n\t}\n\n\t$preserved        = cptui_get_preserved_keys( 'taxonomies' );\n\t$preserved_labels = cptui_get_preserved_labels();\n\tforeach ( $taxonomy['labels'] as $key => $label ) {\n\n\t\tif ( ! empty( $label ) ) {\n\t\t\t$labels[ $key ] = $label;\n\t\t} elseif ( empty( $label ) && in_array( $key, $preserved, true ) ) {\n\t\t\t$singular_or_plural = ( in_array( $key, array_keys( $preserved_labels['taxonomies']['plural'] ) ) ) ? 'plural' : 'singular'; // phpcs:ignore.\n\t\t\t$label_plurality    = ( 'plural' === $singular_or_plural ) ? $taxonomy['label'] : $taxonomy['singular_label'];\n\t\t\t$labels[ $key ]     = sprintf( $preserved_labels['taxonomies'][ $singular_or_plural ][ $key ], $label_plurality );\n\t\t}\n\t}\n\n\t$rewrite = get_disp_boolean( $taxonomy['rewrite'] );\n\tif ( false !== get_disp_boolean( $taxonomy['rewrite'] ) ) {\n\t\t$rewrite               = [];\n\t\t$rewrite['slug']       = ! empty( $taxonomy['rewrite_slug'] ) ? $taxonomy['rewrite_slug'] : $taxonomy['name'];\n\t\t$rewrite['with_front'] = true;\n\t\tif ( isset( $taxonomy['rewrite_withfront'] ) ) {\n\t\t\t$rewrite['with_front'] = ( 'false' === disp_boolean( $taxonomy['rewrite_withfront'] ) ) ? false : true;\n\t\t}\n\t\t$rewrite['hierarchical'] = false;\n\t\tif ( isset( $taxonomy['rewrite_hierarchical'] ) ) {\n\t\t\t$rewrite['hierarchical'] = ( 'true' === disp_boolean( $taxonomy['rewrite_hierarchical'] ) ) ? true : false;\n\t\t}\n\t}\n\n\tif ( in_array( $taxonomy['query_var'], [ 'true', 'false', '0', '1' ], true ) ) {\n\t\t$taxonomy['query_var'] = get_disp_boolean( $taxonomy['query_var'] );\n\t}\n\tif ( true === $taxonomy['query_var'] && ! empty( $taxonomy['query_var_slug'] ) ) {\n\t\t$taxonomy['query_var'] = $taxonomy['query_var_slug'];\n\t}\n\n\t$public             = ( ! empty( $taxonomy['public'] ) && false === get_disp_boolean( $taxonomy['public'] ) ) ? false : true;\n\t$publicly_queryable = ( ! empty( $taxonomy['publicly_queryable'] ) && false === get_disp_boolean( $taxonomy['publicly_queryable'] ) ) ? false : true;\n\tif ( empty( $taxonomy['publicly_queryable'] ) ) {\n\t\t$publicly_queryable = $public;\n\t}\n\n\t$show_admin_column = ( ! empty( $taxonomy['show_admin_column'] ) && false !== get_disp_boolean( $taxonomy['show_admin_column'] ) ) ? true : false;\n\n\t$show_in_menu = ( ! empty( $taxonomy['show_in_menu'] ) && false !== get_disp_boolean( $taxonomy['show_in_menu'] ) ) ? true : false;\n\n\tif ( empty( $taxonomy['show_in_menu'] ) ) {\n\t\t$show_in_menu = get_disp_boolean( $taxonomy['show_ui'] );\n\t}\n\n\t$show_in_nav_menus = ( ! empty( $taxonomy['show_in_nav_menus'] ) && false !== get_disp_boolean( $taxonomy['show_in_nav_menus'] ) ) ? true : false;\n\tif ( empty( $taxonomy['show_in_nav_menus'] ) ) {\n\t\t$show_in_nav_menus = $public;\n\t}\n\n\t$show_tagcloud = ( ! empty( $taxonomy['show_tagcloud'] ) && false !== get_disp_boolean( $taxonomy['show_tagcloud'] ) ) ? true : false;\n\tif ( empty( $taxonomy['show_tagcloud'] ) ) {\n\t\t$show_tagcloud = get_disp_boolean( $taxonomy['show_ui'] );\n\t}\n\n\t$show_in_rest = ( ! empty( $taxonomy['show_in_rest'] ) && false !== get_disp_boolean( $taxonomy['show_in_rest'] ) ) ? true : false;\n\n\t$show_in_quick_edit = ( ! empty( $taxonomy['show_in_quick_edit'] ) && false !== get_disp_boolean( $taxonomy['show_in_quick_edit'] ) ) ? true : false;\n\n\t$sort = ( ! empty( $taxonomy['sort'] ) && false !== get_disp_boolean( $taxonomy['sort'] ) ) ? true : false;\n\n\t$rest_base = null;\n\tif ( ! empty( $taxonomy['rest_base'] ) ) {\n\t\t$rest_base = $taxonomy['rest_base'];\n\t}\n\n\t$rest_controller_class = null;\n\tif ( ! empty( $taxonomy['rest_controller_class'] ) ) {\n\t\t$rest_controller_class = $taxonomy['rest_controller_class'];\n\t}\n\n\t$rest_namespace = null;\n\tif ( ! empty( $taxonomy['rest_namespace'] ) ) {\n\t\t$rest_namespace = $taxonomy['rest_namespace'];\n\t}\n\n\t$meta_box_cb = null;\n\tif ( ! empty( $taxonomy['meta_box_cb'] ) ) {\n\t\t$meta_box_cb = ( false !== get_disp_boolean( $taxonomy['meta_box_cb'] ) ) ? $taxonomy['meta_box_cb'] : false;\n\t}\n\t$default_term = null;\n\tif ( ! empty( $taxonomy['default_term'] ) ) {\n\t\t$term_parts = explode( ',', $taxonomy['default_term'] );\n\t\tif ( ! empty( $term_parts[0] ) ) {\n\t\t\t$default_term['name'] = trim( $term_parts[0] );\n\t\t}\n\t\tif ( ! empty( $term_parts[1] ) ) {\n\t\t\t$default_term['slug'] = trim( $term_parts[1] );\n\t\t}\n\t\tif ( ! empty( $term_parts[2] ) ) {\n\t\t\t$default_term['description'] = trim( $term_parts[2] );\n\t\t}\n\t}\n\n\t$args = [\n\t\t'labels'                => $labels,\n\t\t'label'                 => $taxonomy['label'],\n\t\t'description'           => $description,\n\t\t'public'                => $public,\n\t\t'publicly_queryable'    => $publicly_queryable,\n\t\t'hierarchical'          => get_disp_boolean( $taxonomy['hierarchical'] ),\n\t\t'show_ui'               => get_disp_boolean( $taxonomy['show_ui'] ),\n\t\t'show_in_menu'          => $show_in_menu,\n\t\t'show_in_nav_menus'     => $show_in_nav_menus,\n\t\t'show_tagcloud'         => $show_tagcloud,\n\t\t'query_var'             => $taxonomy['query_var'],\n\t\t'rewrite'               => $rewrite,\n\t\t'show_admin_column'     => $show_admin_column,\n\t\t'show_in_rest'          => $show_in_rest,\n\t\t'rest_base'             => $rest_base,\n\t\t'rest_controller_class' => $rest_controller_class,\n\t\t'rest_namespace'        => $rest_namespace,\n\t\t'show_in_quick_edit'    => $show_in_quick_edit,\n\t\t'sort'                  => $sort,\n\t\t'meta_box_cb'           => $meta_box_cb,\n\t\t'default_term'          => $default_term,\n\t];\n\n\t$object_type = ! empty( $taxonomy['object_types'] ) ? $taxonomy['object_types'] : '';\n\n\t/**\n\t * Filters the arguments used for a taxonomy right before registering.\n\t *\n\t * @since 1.0.0\n\t * @since 1.3.0 Added original passed in values array\n\t * @since 1.6.0 Added $obect_type variable to passed parameters.\n\t *\n\t * @param array  $args        Array of arguments to use for registering taxonomy.\n\t * @param string $value       Taxonomy slug to be registered.\n\t * @param array  $taxonomy    Original passed in values for taxonomy.\n\t * @param array  $object_type Array of chosen post types for the taxonomy.\n\t */\n\t$args = apply_filters( 'cptui_pre_register_taxonomy', $args, $taxonomy['name'], $taxonomy, $object_type );\n\n\treturn register_taxonomy( $taxonomy['name'], $object_type, $args );\n}\n\n/**\n * Construct and output tab navigation.\n *\n * @since 1.0.0\n *\n * @param string $page Whether it's the CPT or Taxonomy page. Optional. Default \"post_types\".\n * @return string\n */\nfunction cptui_settings_tab_menu( $page = 'post_types' ) {\n\n\t/**\n\t * Filters the tabs to render on a given page.\n\t *\n\t * @since 1.3.0\n\t *\n\t * @param array  $value Array of tabs to render.\n\t * @param string $page  Current page being displayed.\n\t */\n\t$tabs = (array) apply_filters( 'cptui_get_tabs', [], $page );\n\n\tif ( empty( $tabs['page_title'] ) ) {\n\t\treturn '';\n\t}\n\n\t$tmpl = '<h1>%s</h1><nav class=\"nav-tab-wrapper wp-clearfix\" aria-label=\"Secondary menu\">%s</nav>';\n\n\t$tab_output = '';\n\tforeach ( $tabs['tabs'] as $tab ) {\n\t\t$tab_output .= sprintf(\n\t\t\t'<a class=\"%s\" href=\"%s\" aria-selected=\"%s\">%s</a>',\n\t\t\timplode( ' ', $tab['classes'] ),\n\t\t\t$tab['url'],\n\t\t\t$tab['aria-selected'],\n\t\t\t$tab['text']\n\t\t);\n\t}\n\n\tprintf(\n\t\t$tmpl, // phpcs:ignore.\n\t\t$tabs['page_title'], // phpcs:ignore.\n\t\t$tab_output // phpcs:ignore.\n\t);\n}\n\n/**\n * Convert our old settings to the new options keys.\n *\n * These are left with standard get_option/update_option function calls for legacy and pending update purposes.\n *\n * @since 1.0.0\n *\n * @internal\n *\n * @return bool Whether or not options were successfully updated.\n */\nfunction cptui_convert_settings() {\n\n\tif ( wp_doing_ajax() ) {\n\t\treturn;\n\t}\n\n\t$retval = '';\n\n\tif ( false === get_option( 'cptui_post_types' ) && ( $post_types = get_option( 'cpt_custom_post_types' ) ) ) { // phpcs:ignore.\n\n\t\t$new_post_types = [];\n\t\tforeach ( $post_types as $type ) {\n\t\t\t$new_post_types[ $type['name'] ]               = $type; // This one assigns the # indexes. Named arrays are our friend.\n\t\t\t$new_post_types[ $type['name'] ]['supports']   = ! empty( $type[0] ) ? $type[0] : []; // Especially for multidimensional arrays.\n\t\t\t$new_post_types[ $type['name'] ]['taxonomies'] = ! empty( $type[1] ) ? $type[1] : [];\n\t\t\t$new_post_types[ $type['name'] ]['labels']     = ! empty( $type[2] ) ? $type[2] : [];\n\t\t\tunset(\n\t\t\t\t$new_post_types[ $type['name'] ][0],\n\t\t\t\t$new_post_types[ $type['name'] ][1],\n\t\t\t\t$new_post_types[ $type['name'] ][2]\n\t\t\t); // Remove our previous indexed versions.\n\t\t}\n\n\t\t$retval = update_option( 'cptui_post_types', $new_post_types );\n\t}\n\n\tif ( false === get_option( 'cptui_taxonomies' ) && ( $taxonomies = get_option( 'cpt_custom_tax_types' ) ) ) { // phpcs:ignore.\n\n\t\t$new_taxonomies = [];\n\t\tforeach ( $taxonomies as $tax ) {\n\t\t\t$new_taxonomies[ $tax['name'] ]                 = $tax;    // Yep, still our friend.\n\t\t\t$new_taxonomies[ $tax['name'] ]['labels']       = $tax[0]; // Taxonomies are the only thing with.\n\t\t\t$new_taxonomies[ $tax['name'] ]['object_types'] = $tax[1]; // \"tax\" in the name that I like.\n\t\t\tunset(\n\t\t\t\t$new_taxonomies[ $tax['name'] ][0],\n\t\t\t\t$new_taxonomies[ $tax['name'] ][1]\n\t\t\t);\n\t\t}\n\n\t\t$retval = update_option( 'cptui_taxonomies', $new_taxonomies );\n\t}\n\n\tif ( ! empty( $retval ) ) {\n\t\tflush_rewrite_rules();\n\t}\n\n\treturn $retval;\n}\nadd_action( 'admin_init', 'cptui_convert_settings' );\n\n/**\n * Return a notice based on conditions.\n *\n * @since 1.0.0\n *\n * @param string $action       The type of action that occurred. Optional. Default empty string.\n * @param string $object_type  Whether it's from a post type or taxonomy. Optional. Default empty string.\n * @param bool   $success      Whether the action succeeded or not. Optional. Default true.\n * @param string $custom       Custom message if necessary. Optional. Default empty string.\n * @return bool|string false on no message, else HTML div with our notice message.\n */\nfunction cptui_admin_notices( $action = '', $object_type = '', $success = true, $custom = '' ) {\n\n\t$class       = [];\n\t$class[]     = $success ? 'updated' : 'error';\n\t$class[]     = 'notice is-dismissible';\n\t$object_type = esc_attr( $object_type );\n\n\t$messagewrapstart = '<div id=\"message\" class=\"' . implode( ' ', $class ) . '\"><p>';\n\t$message          = '';\n\n\t$messagewrapend = '</p></div>';\n\n\tif ( 'add' === $action ) {\n\t\tif ( $success ) {\n\t\t\t$message .= sprintf( __( '%s has been successfully added', 'custom-post-type-ui' ), $object_type );\n\t\t} else {\n\t\t\t$message .= sprintf( __( '%s has failed to be added', 'custom-post-type-ui' ), $object_type );\n\t\t}\n\t} elseif ( 'update' === $action ) {\n\t\tif ( $success ) {\n\t\t\t$message .= sprintf( __( '%s has been successfully updated', 'custom-post-type-ui' ), $object_type );\n\t\t} else {\n\t\t\t$message .= sprintf( __( '%s has failed to be updated', 'custom-post-type-ui' ), $object_type );\n\t\t}\n\t} elseif ( 'delete' === $action ) {\n\t\tif ( $success ) {\n\t\t\t$message .= sprintf( __( '%s has been successfully deleted', 'custom-post-type-ui' ), $object_type );\n\t\t} else {\n\t\t\t$message .= sprintf( __( '%s has failed to be deleted', 'custom-post-type-ui' ), $object_type );\n\t\t}\n\t} elseif ( 'import' === $action ) {\n\t\tif ( $success ) {\n\t\t\t$message .= sprintf( __( '%s has been successfully imported', 'custom-post-type-ui' ), $object_type );\n\t\t} else {\n\t\t\t$message .= sprintf( __( '%s has failed to be imported', 'custom-post-type-ui' ), $object_type );\n\t\t}\n\t} elseif ( 'error' === $action ) {\n\t\tif ( ! empty( $custom ) ) {\n\t\t\t$message = $custom;\n\t\t}\n\t}\n\n\tif ( $message ) {\n\n\t\t/**\n\t\t * Filters the custom admin notice for CPTUI.\n\t\t *\n\t\t * @since 1.0.0\n\t\t *\n\t\t * @param string $value            Complete HTML output for notice.\n\t\t * @param string $action           Action whose message is being generated.\n\t\t * @param string $message          The message to be displayed.\n\t\t * @param string $messagewrapstart Beginning wrap HTML.\n\t\t * @param string $messagewrapend   Ending wrap HTML.\n\t\t */\n\t\treturn apply_filters( 'cptui_admin_notice', $messagewrapstart . $message . $messagewrapend, $action, $message, $messagewrapstart, $messagewrapend );\n\t}\n\n\treturn false;\n}\n\n/**\n * Return array of keys needing preserved.\n *\n * @since 1.0.5\n *\n * @param string $type Type to return. Either 'post_types' or 'taxonomies'. Optional. Default empty string.\n * @return array Array of keys needing preservered for the requested type.\n */\nfunction cptui_get_preserved_keys( $type = '' ) {\n\n\t$preserved_labels = [\n\t\t'post_types' => [\n\t\t\t'add_new_item',\n\t\t\t'edit_item',\n\t\t\t'new_item',\n\t\t\t'view_item',\n\t\t\t'view_items',\n\t\t\t'all_items',\n\t\t\t'search_items',\n\t\t\t'not_found',\n\t\t\t'not_found_in_trash',\n\t\t],\n\t\t'taxonomies' => [\n\t\t\t'search_items',\n\t\t\t'popular_items',\n\t\t\t'all_items',\n\t\t\t'parent_item',\n\t\t\t'parent_item_colon',\n\t\t\t'edit_item',\n\t\t\t'update_item',\n\t\t\t'add_new_item',\n\t\t\t'new_item_name',\n\t\t\t'separate_items_with_commas',\n\t\t\t'add_or_remove_items',\n\t\t\t'choose_from_most_used',\n\t\t],\n\t];\n\treturn ! empty( $type ) ? $preserved_labels[ $type ] : [];\n}\n\n/**\n * Return label for the requested type and label key.\n *\n * @since 1.0.5\n *\n * @deprecated\n *\n * @param string $type Type to return. Either 'post_types' or 'taxonomies'. Optional. Default empty string.\n * @param string $key Requested label key. Optional. Default empty string.\n * @param string $plural Plural verbiage for the requested label and type. Optional. Default empty string.\n * @param string $singular Singular verbiage for the requested label and type. Optional. Default empty string.\n * @return string Internationalized default label.\n */\nfunction cptui_get_preserved_label( $type = '', $key = '', $plural = '', $singular = '' ) {\n\n\t$preserved_labels = [\n\t\t'post_types' => [\n\t\t\t'add_new_item'       => sprintf( __( 'Add new %s', 'custom-post-type-ui' ), $singular ),\n\t\t\t'edit_item'          => sprintf( __( 'Edit %s', 'custom-post-type-ui' ), $singular ),\n\t\t\t'new_item'           => sprintf( __( 'New %s', 'custom-post-type-ui' ), $singular ),\n\t\t\t'view_item'          => sprintf( __( 'View %s', 'custom-post-type-ui' ), $singular ),\n\t\t\t'view_items'         => sprintf( __( 'View %s', 'custom-post-type-ui' ), $plural ),\n\t\t\t'all_items'          => sprintf( __( 'All %s', 'custom-post-type-ui' ), $plural ),\n\t\t\t'search_items'       => sprintf( __( 'Search %s', 'custom-post-type-ui' ), $plural ),\n\t\t\t'not_found'          => sprintf( __( 'No %s found.', 'custom-post-type-ui' ), $plural ),\n\t\t\t'not_found_in_trash' => sprintf( __( 'No %s found in trash.', 'custom-post-type-ui' ), $plural ),\n\t\t],\n\t\t'taxonomies' => [\n\t\t\t'search_items'               => sprintf( __( 'Search %s', 'custom-post-type-ui' ), $plural ),\n\t\t\t'popular_items'              => sprintf( __( 'Popular %s', 'custom-post-type-ui' ), $plural ),\n\t\t\t'all_items'                  => sprintf( __( 'All %s', 'custom-post-type-ui' ), $plural ),\n\t\t\t'parent_item'                => sprintf( __( 'Parent %s', 'custom-post-type-ui' ), $singular ),\n\t\t\t'parent_item_colon'          => sprintf( __( 'Parent %s:', 'custom-post-type-ui' ), $singular ),\n\t\t\t'edit_item'                  => sprintf( __( 'Edit %s', 'custom-post-type-ui' ), $singular ),\n\t\t\t'update_item'                => sprintf( __( 'Update %s', 'custom-post-type-ui' ), $singular ),\n\t\t\t'add_new_item'               => sprintf( __( 'Add new %s', 'custom-post-type-ui' ), $singular ),\n\t\t\t'new_item_name'              => sprintf( __( 'New %s name', 'custom-post-type-ui' ), $singular ),\n\t\t\t'separate_items_with_commas' => sprintf( __( 'Separate %s with commas', 'custom-post-type-ui' ), $plural ),\n\t\t\t'add_or_remove_items'        => sprintf( __( 'Add or remove %s', 'custom-post-type-ui' ), $plural ),\n\t\t\t'choose_from_most_used'      => sprintf( __( 'Choose from the most used %s', 'custom-post-type-ui' ), $plural ),\n\t\t],\n\t];\n\n\treturn $preserved_labels[ $type ][ $key ];\n}\n\n/**\n * Returns an array of translated labels, ready for use with sprintf().\n *\n * Replacement for cptui_get_preserved_label for the sake of performance.\n *\n * @since 1.6.0\n *\n * @return array\n */\nfunction cptui_get_preserved_labels() {\n\treturn [\n\t\t'post_types' => [\n\t\t\t'singular' => [\n\t\t\t\t'add_new_item' => __( 'Add new %s', 'custom-post-type-ui' ),\n\t\t\t\t'edit_item'    => __( 'Edit %s', 'custom-post-type-ui' ),\n\t\t\t\t'new_item'     => __( 'New %s', 'custom-post-type-ui' ),\n\t\t\t\t'view_item'    => __( 'View %s', 'custom-post-type-ui' ),\n\t\t\t],\n\t\t\t'plural'   => [\n\t\t\t\t'view_items'         => __( 'View %s', 'custom-post-type-ui' ),\n\t\t\t\t'all_items'          => __( 'All %s', 'custom-post-type-ui' ),\n\t\t\t\t'search_items'       => __( 'Search %s', 'custom-post-type-ui' ),\n\t\t\t\t'not_found'          => __( 'No %s found.', 'custom-post-type-ui' ),\n\t\t\t\t'not_found_in_trash' => __( 'No %s found in trash.', 'custom-post-type-ui' ),\n\t\t\t],\n\t\t],\n\t\t'taxonomies' => [\n\t\t\t'singular' => [\n\t\t\t\t'parent_item'       => __( 'Parent %s', 'custom-post-type-ui' ),\n\t\t\t\t'parent_item_colon' => __( 'Parent %s:', 'custom-post-type-ui' ),\n\t\t\t\t'edit_item'         => __( 'Edit %s', 'custom-post-type-ui' ),\n\t\t\t\t'update_item'       => __( 'Update %s', 'custom-post-type-ui' ),\n\t\t\t\t'add_new_item'      => __( 'Add new %s', 'custom-post-type-ui' ),\n\t\t\t\t'new_item_name'     => __( 'New %s name', 'custom-post-type-ui' ),\n\t\t\t],\n\t\t\t'plural'   => [\n\t\t\t\t'search_items'               => __( 'Search %s', 'custom-post-type-ui' ),\n\t\t\t\t'popular_items'              => __( 'Popular %s', 'custom-post-type-ui' ),\n\t\t\t\t'all_items'                  => __( 'All %s', 'custom-post-type-ui' ),\n\t\t\t\t'separate_items_with_commas' => __( 'Separate %s with commas', 'custom-post-type-ui' ),\n\t\t\t\t'add_or_remove_items'        => __( 'Add or remove %s', 'custom-post-type-ui' ),\n\t\t\t\t'choose_from_most_used'      => __( 'Choose from the most used %s', 'custom-post-type-ui' ),\n\t\t\t],\n\t\t],\n\t];\n}\n"
								}
							/>
							<div className="CodeMirror cm-s-default CodeMirror-wrap">
								<div
									className="CodeMirror-vscrollbar"
									cm-not-content="true"
									style={{
										display: "block",
										bottom: 0,
										width: 18,
										pointerEvents: "none",
									}}
								>
									<div style={{ minWidth: 1 }} />
								</div>
								<div
									className="CodeMirror-hscrollbar"
									cm-not-content="true"
									style={{
										height: 18,
										pointerEvents: "none",
									}}
								>
									<div
										style={{
											height: "100%",
											minHeight: 1,
											width: 0,
										}}
									/>
								</div>
								<div
									className="CodeMirror-scrollbar-filler"
									cm-not-content="true"
								/>
								<div
									className="CodeMirror-gutter-filler"
									cm-not-content="true"
								/>
								<div
									className="CodeMirror-scroll"
									tabIndex={-1}
								>
									<div
										className="CodeMirror-sizer"
										style={{
											marginLeft: 41,
											marginBottom: 0,
											borderRightWidth: 30,
											paddingRight: 0,
											paddingBottom: 0,
										}}
									>
										<div
											style={{
												position: "relative",
												top: 0,
											}}
										>
											<div
												className="CodeMirror-lines"
												role="presentation"
											>
												<div
													role="presentation"
													style={{
														position: "relative",
														outline: "none",
													}}
												>
													<div className="CodeMirror-measure">
														<span>
															<span>​</span>x
														</span>
													</div>
													<div className="CodeMirror-measure" />
													<div
														style={{
															position:
																"relative",
															zIndex: 1,
														}}
													/>
													<div className="CodeMirror-cursors" />
													<div
														className="CodeMirror-code"
														role="textbox"
														autoCorrect="off"
														autoCapitalize="off"
														spellCheck="false"
														contentEditable="true"
														tabIndex={0}
														aria-multiline="true"
														aria-labelledby="theme-plugin-editor-label"
														aria-describedby="editor-keyboard-trap-help-1 editor-keyboard-trap-help-2 editor-keyboard-trap-help-3 editor-keyboard-trap-help-4"
														style={{ height: 300 }}
													>
														<div
															className="CodeMirror-activeline"
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-activeline-background CodeMirror-linebackground"
																contentEditable="false"
															/>
															<div
																className="CodeMirror-gutter-background CodeMirror-activeline-gutter"
																contentEditable="false"
																style={{
																	left: "-41px",
																	width: 41,
																}}
															/>
															<div
																className="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	1
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-meta">
																		&lt;?php
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	2
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-comment">
																		/**
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	3
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* Custom
																		Post
																		Type UI.
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	4
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	5
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* For
																		all your
																		post
																		type and
																		taxonomy
																		needs.
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	6
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	7
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		@package
																		CPTUI
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	8
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		@subpackage
																		Loader
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	9
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		@author
																		WebDevStudios
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	10
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* @since
																		0.1.0.0
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	11
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		@license
																		GPL-2.0+
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	12
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*/
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	13
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span cm-text="">
																		​
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	14
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-comment">
																		/**
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	15
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* Plugin
																		Name:
																		Custom
																		Post
																		Type UI
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	16
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* Plugin
																		URI:
																		https://github.com/WebDevStudios/custom-post-type-ui/
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	17
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		Description:
																		Admin UI
																		panel
																		for
																		registering
																		custom
																		post
																		types
																		and
																		taxonomies
																		in
																		WordPress
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	18
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		Author:
																		WebDevStudios
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	19
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		Version:
																		1.13.4
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	20
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* Author
																		URI:
																		https://webdevstudios.com/
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	21
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* Text
																		Domain:
																		custom-post-type-ui
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	22
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* Domain
																		Path:
																		/languages
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	23
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		License:
																		GPL-2.0+
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	24
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*/
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	25
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span cm-text="">
																		​
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	26
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-comment">
																		//
																		phpcs:disable
																		WebDevStudios.All.RequireAuthor
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	27
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-comment">
																		//
																		phpcs:set
																		WordPress.WP.I18n
																		check_translator_comments
																		false
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	28
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span cm-text="">
																		​
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	29
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-comment">
																		// Exit
																		if
																		accessed
																		directly.
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	30
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-keyword">
																		if
																	</span>{" "}
																	({" "}
																	<span className="cm-operator">
																		!
																	</span>{" "}
																	<span className="cm-builtin">
																		defined
																	</span>
																	({" "}
																	<span className="cm-string">
																		'ABSPATH'
																	</span>{" "}
																	) ) {"{"}
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	31
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span
																		className="cm-tab"
																		role="presentation"
																		cm-text="	"
																	>
																		{"    "}
																	</span>
																	<span className="cm-keyword">
																		exit
																	</span>
																	;
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	32
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{"}"}
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	33
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span cm-text="">
																		​
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	34
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-builtin">
																		define
																	</span>
																	({" "}
																	<span className="cm-string">
																		'CPT_VERSION'
																	</span>
																	,{" "}
																	<span className="cm-string">
																		'1.13.4'
																	</span>{" "}
																	);{" "}
																	<span className="cm-comment">
																		// Left
																		for
																		legacy
																		purposes.
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	35
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-builtin">
																		define
																	</span>
																	({" "}
																	<span className="cm-string">
																		'CPTUI_VERSION'
																	</span>
																	,{" "}
																	<span className="cm-string">
																		'1.13.4'
																	</span>{" "}
																	);
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	36
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-builtin">
																		define
																	</span>
																	({" "}
																	<span className="cm-string">
																		'CPTUI_WP_VERSION'
																	</span>
																	,{" "}
																	<span className="cm-variable">
																		get_bloginfo
																	</span>
																	({" "}
																	<span className="cm-string">
																		'version'
																	</span>{" "}
																	) );
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	37
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span cm-text="">
																		​
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	38
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	<span className="cm-comment">
																		/**
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	39
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* Load
																		our
																		Admin UI
																		class
																		that
																		powers
																		our form
																		inputs.
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	40
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	41
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		* @since
																		1.0.0
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	42
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																	</span>
																</span>
															</pre>
														</div>
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<div
																className="CodeMirror-gutter-wrapper"
																contentEditable="false"
																style={{
																	left: "-41px",
																}}
															>
																<div
																	className="CodeMirror-linenumber CodeMirror-gutter-elt"
																	style={{
																		left: 0,
																		width: 32,
																	}}
																>
																	43
																</div>
															</div>
															<pre
																className=" CodeMirror-line "
																role="presentation"
															>
																<span
																	role="presentation"
																	style={{
																		paddingRight:
																			"0.1px",
																	}}
																>
																	{" "}
																	<span className="cm-comment">
																		*
																		@internal
																	</span>
																</span>
															</pre>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										style={{
											position: "absolute",
											height: 30,
											width: 1,
											borderBottom:
												"0px solid transparent",
										}}
									/>
									<div className="CodeMirror-gutters">
										<div
											className="CodeMirror-gutter CodeMirror-linenumbers"
											style={{ width: 40 }}
										/>
									</div>
								</div>
							</div>
							<input
								type="hidden"
								name="action"
								defaultValue="update"
							/>
							<input
								type="hidden"
								name="file"
								defaultValue="custom-post-type-ui/custom-post-type-ui.php"
							/>
							<input
								type="hidden"
								name="plugin"
								defaultValue="custom-post-type-ui/custom-post-type-ui.php"
							/>
						</div>
						<div id="documentation" className="hide-if-no-js">
							<label htmlFor="docs-list">Documentation:</label>
							<select name="docs-list" id="docs-list">
								<option value="">Function Name…</option>
								<option value="__">__()</option>
								<option value="add_action">add_action()</option>
								<option value="add_menu_page">
									add_menu_page()
								</option>
								<option value="add_query_arg">
									add_query_arg()
								</option>
								<option value="add_submenu_page">
									add_submenu_page()
								</option>
								<option value="apply_filters">
									apply_filters()
								</option>
								<option value="array_keys">array_keys()</option>
								<option value="array_map">array_map()</option>
								<option value="array_merge">
									array_merge()
								</option>
								<option value="array_slice">
									array_slice()
								</option>
								<option value="class_exists">
									class_exists()
								</option>
								<option value="count">count()</option>
								<option value="cptui_admin_url">
									cptui_admin_url()
								</option>
								<option value="cptui_is_new_install">
									cptui_is_new_install()
								</option>
								<option value="cptui_menu_icon">
									cptui_menu_icon()
								</option>
								<option value="define">define()</option>
								<option value="defined">defined()</option>
								<option value="delete_transient">
									delete_transient()
								</option>
								<option value="disp_boolean">
									disp_boolean()
								</option>
								<option value="do_action">do_action()</option>
								<option value="esc_attr">esc_attr()</option>
								<option value="explode">explode()</option>
								<option value="flush_rewrite_rules">
									flush_rewrite_rules()
								</option>
								<option value="get_bloginfo">
									get_bloginfo()
								</option>
								<option value="get_disp_boolean">
									get_disp_boolean()
								</option>
								<option value="get_option">get_option()</option>
								<option value="get_transient">
									get_transient()
								</option>
								<option value="implode">implode()</option>
								<option value="in_array">in_array()</option>
								<option value="is_array">is_array()</option>
								<option value="is_network_admin">
									is_network_admin()
								</option>
								<option value="load_plugin_textdomain">
									load_plugin_textdomain()
								</option>
								<option value="plugin_basename">
									plugin_basename()
								</option>
								<option value="plugin_dir_path">
									plugin_dir_path()
								</option>
								<option value="plugins_url">
									plugins_url()
								</option>
								<option value="printf">printf()</option>
								<option value="register_deactivation_hook">
									register_deactivation_hook()
								</option>
								<option value="register_post_type">
									register_post_type()
								</option>
								<option value="register_taxonomy">
									register_taxonomy()
								</option>
								<option value="remove_submenu_page">
									remove_submenu_page()
								</option>
								<option value="set_transient">
									set_transient()
								</option>
								<option value="sprintf">sprintf()</option>
								<option value="strpos">strpos()</option>
								<option value="trim">trim()</option>
								<option value="update_option">
									update_option()
								</option>
								<option value="wp_doing_ajax">
									wp_doing_ajax()
								</option>
								<option value="wp_register_script">
									wp_register_script()
								</option>
								<option value="wp_register_style">
									wp_register_style()
								</option>
								<option value="wp_safe_redirect">
									wp_safe_redirect()
								</option>
							</select>{" "}
							<input
								disabled=""
								id="docs-lookup"
								type="button"
								className="button"
								defaultValue="Look Up"
								onclick="if ( '' != jQuery('#docs-list').val() ) { window.open( 'https://api.wordpress.org/core/handbook/1.0/?function=' + escape( jQuery( '#docs-list' ).val() ) + '&locale=en_US&version=6.1.1&redirect=true'); }"
							/>
						</div>
						<div className="editor-notices">
							<div className="notice notice-warning inline active-plugin-edit-warning">
								<p>
									<strong>Warning:</strong> Making changes to
									active plugins is not recommended.
								</p>
							</div>
						</div>
						<p className="submit">
							<input
								type="submit"
								name="submit"
								id="submit"
								className="button button-primary"
								defaultValue="Update File"
							/>{" "}
							<span className="spinner" />
						</p>
					</form>
					<br className="clear" />
				</div>
				<div className="clear" />
			</div>
		</>
	);
}
