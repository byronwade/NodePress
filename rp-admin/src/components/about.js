import React from "react";

function About() {
	return (
		<div id="wpbody-content">
			<div id="screen-meta" className="metabox-prefs">
				<div
					id="contextual-help-wrap"
					className="hidden no-sidebar"
					tabIndex={-1}
					aria-label="Contextual Help Tab"
				>
					<div id="contextual-help-back" />
					<div id="contextual-help-columns">
						<div className="contextual-help-tabs">
							<ul></ul>
						</div>
						<div className="contextual-help-tabs-wrap"></div>
					</div>
				</div>
			</div>
			<div className="wrap about__container">
				<div className="about__header">
					<div className="about__header-title">
						<h1>WordPress 6.1.1 </h1>
					</div>
					<div className="about__header-text" />
					<nav
						className="about__header-navigation nav-tab-wrapper wp-clearfix"
						aria-label="Secondary menu"
					>
						<a
							href="about.php"
							className="nav-tab nav-tab-active"
							aria-current="page"
						>
							What’s New
						</a>
						<a href="credits.php" className="nav-tab">
							Credits
						</a>
						<a href="freedoms.php" className="nav-tab">
							Freedoms
						</a>
						<a href="privacy.php" className="nav-tab">
							Privacy
						</a>
					</nav>
				</div>
				<div className="about__section changelog">
					<div className="column">
						<h2>Maintenance and Security Releases</h2>
						<p>
							<strong>Version 6.1.1</strong> addressed 50 bugs.
							For more information, see{" "}
							<a href="https://wordpress.org/support/wordpress-version/version-6-1-1/">
								the release notes
							</a>
							.{" "}
						</p>
					</div>
				</div>
				<div className="about__section">
					<div className="column">
						<h2 className="aligncenter">
							Welcome to WordPress 6.1.1{" "}
						</h2>
						<p className="is-subheading">
							This page highlights some of the most significant
							changes to the product since the May 2022 release of
							WordPress 6.0. You will also find resources for
							developers and anyone seeking a deeper understanding
							of WordPress.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div
							className="about__image"
							style={{ backgroundColor: "#353535" }}
						>
							<img
								src="https://s.w.org/images/core/6.1/about-61-style-variations.webp"
								alt=""
							/>
						</div>
					</div>
					<div className="column is-vertically-aligned-center">
						<h3>
							A new default theme powered by 10 distinct style
							variations
						</h3>
						<p>
							Building on the foundational elements in the 5.9 and
							6.0 releases for block themes and style variations,
							the new default theme, Twenty Twenty-Three, includes{" "}
							<a href="https://make.wordpress.org/design/2022/09/07/tt3-default-theme-announcing-style-variation-selections/">
								10 different styles
							</a>{" "}
							and is “
							<a href="https://make.wordpress.org/themes/handbook/review/accessibility/">
								Accessibility Ready
							</a>
							”.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column is-vertically-aligned-center">
						<h3>
							A better creator experience with refined and
							additional templates
						</h3>
						<p>
							<a href="https://make.wordpress.org/core/2022/07/21/core-editor-improvement-deeper-customization-with-more-template-options/">
								New templates
							</a>{" "}
							include a custom template for posts and pages in the
							Site Editor. Search-and-replace tools speed up the
							design of{" "}
							<a href="https://make.wordpress.org/core/2022/08/25/core-editor-improvement-refining-the-template-creation-experience/">
								template parts
							</a>
							.{" "}
						</p>
					</div>
					<div className="column">
						<div className="about__image has-subtle-background-color">
							<img
								src="https://s.w.org/images/core/6.1/about-61-templates.webp"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image has-subtle-background-color">
							<img
								src="https://s.w.org/images/core/6.1/about-61-design-tools.webp"
								alt=""
							/>
						</div>
					</div>
					<div className="column is-vertically-aligned-center">
						<h3>
							More consistency and control across design tools
						</h3>
						<p>
							Upgrades to the{" "}
							<a href="https://make.wordpress.org/core/2022/10/11/roster-of-design-tools-per-block/">
								controls for design elements and blocks
							</a>{" "}
							make the layout and site-building process more
							consistent, complete, and intuitive.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column is-vertically-aligned-center">
						<h3>Menus just got easier to create and manage</h3>
						<p>
							<a href="https://make.wordpress.org/core/2022/09/27/navigation-block-fallback-behavior-in-wp-6-1-dev-note/">
								New fallback options
							</a>{" "}
							in the navigation block mean you can edit the menu
							that’s open; no searching needed. Plus, the controls
							for choosing and working on menus have their own
							place in the block settings. The mobile menu system
							also gets an upgrade with new features, including
							different icon options, to make the menu yours.{" "}
						</p>
					</div>
					<div className="column">
						<div className="about__image has-subtle-background-color">
							<img
								src="https://s.w.org/images/core/6.1/about-61-navigation.webp"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image has-accent-background-color">
							<img
								src="https://s.w.org/images/core/6.1/about-61-document-settings.webp"
								alt=""
							/>
						</div>
						<h3>
							Improved layout and visualization of document
							settings
						</h3>
						<p>
							A cleaner, better-organized display helps you easily
							view and manage important post and page settings,
							especially the template picker and scheduler.
						</p>
					</div>
					<div className="column">
						<div className="about__image has-accent-background-color">
							<img
								src="https://s.w.org/images/core/6.1/about-61-lock.webp"
								alt=""
							/>
						</div>
						<h3>One-click lock settings for all inner blocks</h3>
						<p>
							When locking blocks, a new toggle lets you apply
							your lock settings to all the blocks in a containing
							block like the group, cover, and column blocks.
						</p>
					</div>
				</div>
				<div className="about__section has-3-columns">
					<div className="column">
						<div className="column about__image is-edge-to-edge has-accent-background-color">
							<img
								src="https://s.w.org/images/core/6.1/about-61-sub-feature-1.webp"
								alt=""
							/>
						</div>
						<h3 className="is-smaller-heading">
							Improved block placeholders
						</h3>
						<p>
							Various blocks have improved placeholders that
							reflect customization options to help you design
							your site and its content. For example, the Image
							block placeholder displays custom borders and
							duotone filters even before selecting an image.
						</p>
					</div>
					<div className="column">
						<div className="column about__image is-edge-to-edge has-accent-background-color">
							<img
								src="https://s.w.org/images/core/6.1/about-61-sub-feature-2.webp"
								alt=""
							/>
						</div>
						<h3 className="is-smaller-heading">
							Compose richer lists and quotes with inner blocks
						</h3>
						<p>
							The List and Quote blocks now support inner blocks,
							allowing for more flexible and rich compositions
							like adding headings inside your Quote blocks.
						</p>
					</div>
					<div className="column">
						<div className="column about__image is-edge-to-edge has-accent-background-color">
							<img
								src="https://s.w.org/images/core/6.1/about-61-sub-feature-3.webp"
								alt=""
							/>
						</div>
						<h3 className="is-smaller-heading">
							More responsive text with fluid typography
						</h3>
						<p>
							<a href="https://make.wordpress.org/core/2022/10/03/fluid-font-sizes-in-wordpress-6-1/">
								Fluid typography
							</a>{" "}
							lets you define font sizes that adapt for easy
							reading in any screen size.{" "}
						</p>
					</div>
				</div>
				<hr />
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M29.25 18.75v2.5h1.5v-2.5h2.5v-1.5h-2.5v-2.5h-1.5v2.5h-2.5v1.5h2.5zm-6.5-1.5h-6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h-1.5v6a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h6v-1.5z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Add starter patterns to any post type
						</h3>
						<p>
							In WordPress 6.0, when you created a new page, you
							would see suggested patterns so you did not have to
							start with a blank page. In 6.1, you will also see
							the starter patterns modal when you create a new
							instance of any post type.
						</p>
					</div>
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M29.99 23.16a4.628 4.628 0 1 1-9.257 0 4.628 4.628 0 0 1 9.257 0zm1.5 0a6.128 6.128 0 0 1-10.252 4.535l-3.74 3.273-.988-1.13 3.75-3.28a6.128 6.128 0 1 1 11.23-3.397z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Find block themes faster
						</h3>
						<p>
							The Themes Directory has{" "}
							<a href="https://wordpress.org/themes/tags/full-site-editing/">
								a filter for block themes
							</a>
							, and a pattern preview gives a better sense of what
							the theme might look like while exploring different
							themes and patterns.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M22.29 16.836a1 1 0 0 1 .986-.836h1.306a1 1 0 0 1 .986.836l.244 1.466c.788.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 0 1 1.217.437l.653 1.13a1 1 0 0 1-.23 1.273l-1.148.944a6.025 6.025 0 0 1 0 2.435l1.148.946a1 1 0 0 1 .23 1.272l-.652 1.13a1 1 0 0 1-1.217.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 0 1-.986.836h-1.306a1 1 0 0 1-.987-.836l-.244-1.466a5.994 5.994 0 0 1-2.108-1.218l-1.394.522a1 1 0 0 1-1.216-.436l-.653-1.131a1 1 0 0 1 .23-1.272l1.148-.946a6.028 6.028 0 0 1 0-2.435l-1.147-.944a1 1 0 0 1-.23-1.273l.652-1.13a1 1 0 0 1 1.217-.437l1.393.522a5.996 5.996 0 0 1 2.108-1.218l.244-1.466zM26.928 24a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Keep your Site Editor settings for later
						</h3>
						<p>
							Site Editor settings are now{" "}
							<a href="https://make.wordpress.org/core/2022/10/10/changes-to-block-editor-preferences-in-wordpress-6-1/">
								persistent for each user
							</a>
							. This means your settings will now be consistent
							across browsers and devices.{" "}
						</p>
					</div>
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M31 24a7 7 0 0 1-7 7V17a7 7 0 0 1 7 7zm-7-8a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							A streamlined style system
						</h3>
						<p>
							The CSS rules for margin, padding, typography,
							colors, and borders within the{" "}
							<a href="https://make.wordpress.org/core/2022/10/10/block-styles-generation-style-engine/">
								styles engine
							</a>{" "}
							are now all in one place, reducing time spent on
							layout-specific tasks and helps to generate semantic
							class names.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									d="M24 18.285a1.58 1.58 0 0 1-1.159-.484 1.58 1.58 0 0 1-.484-1.159c0-.45.162-.836.484-1.158A1.58 1.58 0 0 1 24 15c.45 0 .836.161 1.159.484.322.322.483.708.483 1.158 0 .45-.16.837-.483 1.16a1.581 1.581 0 0 1-1.16.483zM21.592 33V21.008a44.174 44.174 0 0 1-2.958-.316 28.99 28.99 0 0 1-2.734-.517l.337-1.35c1.275.3 2.543.514 3.803.641 1.26.128 2.58.191 3.96.191s2.7-.063 3.96-.19a29.603 29.603 0 0 0 3.802-.642l.338 1.35c-.87.21-1.781.383-2.734.517-.952.136-1.939.24-2.959.316V33h-1.35v-5.85h-2.115V33h-1.35z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Improved admin and editor accessibility
						</h3>
						<p>
							More than 40 improvements in accessibility include
							resolving focus loss problems in the editor,
							improving form labels and audible messages, making
							alternative text easier to edit, and fixing the
							sub-menu overlap in the expanded admin side
							navigation at smaller screen sizes and higher zoom
							levels. Learn more about{" "}
							<a href="https://make.wordpress.org/core/2022/10/11/wordpress-6-1-accessibility-improvements/">
								accessibility in WordPress
							</a>
							.{" "}
						</p>
					</div>
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M23.019 25.517l-4.258 4.385-.718-.697 4.212-4.337-5.752-.025.005-1 5.826.025-3.997-4.116.717-.696 3.952 4.07-.03-5.623 1-.005.03 5.567 3.894-4.01.717.697-4.007 4.126 6.046.026-.005 1-5.942-.025 4.201 4.326-.717.697-4.174-4.298.032 6.048-1 .006-.032-6.14z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Other notes of interest
						</h3>
						<p>
							6.1 includes a new time-to-read feature showing
							content authors the approximate time-to-read values
							for pages, posts, and custom post types.
						</p>
						<p>
							The site tagline is empty by default in new sites
							but can be modified in{" "}
							<a href="https://byronw34.sg-host.com/wp-admin/options-general.php">
								General Settings
							</a>
							.{" "}
						</p>
						<p>
							A new modal design offers a background blur effect,
							making it easier to focus on the task at hand.
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<rect
									x={11}
									y={17}
									width={26}
									height={14}
									rx={7}
									fill="#fff"
								/>
								<circle cx={18} cy={24} r={4} fill="#1E1E1E" />
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Updated interface options and features
						</h3>
						<p>
							Updates include{" "}
							<a href="https://make.wordpress.org/core/2022/10/10/styling-elements-in-block-themes/">
								styling elements
							</a>{" "}
							like buttons, citations, and links globally;
							controlling hover, active, and focus states for
							links using theme.json (not available to control in
							the interface yet); and customizing outline support
							for blocks and elements, among other features.{" "}
						</p>
					</div>
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18 16h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2zm12 1.5H18a.5.5 0 0 0-.5.5v3h13v-3a.5.5 0 0 0-.5-.5zm.5 5H22v8h8a.5.5 0 0 0 .5-.5v-7.5zm-10 0h-3V30a.5.5 0 0 0 .5.5h2.5v-8z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Continued evolution of layout options
						</h3>
						<p>
							The default content dimensions provided by themes
							can now be overridden in the Styles Sidebar, giving
							site builders better control over full-width
							content. Developers have{" "}
							<a href="https://make.wordpress.org/core/2022/10/10/updated-editor-layout-support-in-6-1-after-refactor/">
								fine-grained control over these controls
							</a>
							.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									d="M27.7 17.2l5.6 5.6c.7.6.7 1.8-.1 2.5l-5.6 5.6c-.3.3-.8.5-1.2.5-.4 0-.9-.2-1.2-.5l-5.6-5.6c-.7-.7-.7-1.8 0-2.5l5.6-5.6c.7-.7 1.8-.7 2.5 0z"
									fill="#fff"
								/>
								<path
									d="M22 17.5l-6.3 6.3c-.1.1-.1.3.1.3l6.3 6.3-1.1 1.1-6.3-6.2c-.7-.7-.7-1.8 0-2.5l6.3-6.3 1 1z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Block template parts in classic themes
						</h3>
						<p>
							<a href="https://make.wordpress.org/core/2022/10/04/block-based-template-parts-in-traditional-themes/">
								Block template parts can now be defined in
								classic themes
							</a>{" "}
							by adding the appropriate HTML files to the{" "}
							<code>parts</code> directory at the root of the
							theme.{" "}
						</p>
					</div>
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M31.349 23.579a3.18 3.18 0 0 1-6.262.796l-.007-.03-.01-.029-.734-2.166-.005.002a4.818 4.818 0 0 0-9.418 1.427 4.816 4.816 0 0 0 6.575 4.485l-.598-1.523a3.18 3.18 0 1 1 1.92-3.758l.012-.003.69 2.034a4.818 4.818 0 0 0 9.472-1.235 4.816 4.816 0 0 0-6.57-4.487l.596 1.524a3.18 3.18 0 0 1 4.34 2.963z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Expanded support for Query Loop blocks
						</h3>
						<p>
							<a href="https://make.wordpress.org/core/2022/10/10/extending-the-query-loop-block/">
								New filters
							</a>{" "}
							let Query Block variations support custom queries
							for more powerful variations and advanced
							hierarchical post types filtering options.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									d="M17.25 30.25L24 17.594l6.75 12.656h-13.5z"
									stroke="#fff"
									strokeWidth="1.5"
								/>
								<path d="M24 16v15h-8l8-15z" fill="#fff" />
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Filters for all your styles
						</h3>
						<p>
							<a href="https://make.wordpress.org/core/2022/10/10/filters-for-theme-json-data/">
								Leverage filters
							</a>{" "}
							in the Styles sidebar to control settings at all
							four levels of your site—core, theme, user, or
							block, from less to more specific.{" "}
						</p>
					</div>
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M19.114 20.5H16V19h3.114a2.501 2.501 0 0 1 4.771 0H32v1.5h-8.114a2.501 2.501 0 0 1-4.771 0zM16 29h8.114a2.501 2.501 0 0 0 4.771 0H32v-1.5h-3.114a2.501 2.501 0 0 0-4.771 0H16V29z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Spacing presets for faster, consistent design
						</h3>
						<p>
							Save time and help avoid hard-coding a values into a
							theme with{" "}
							<a href="https://make.wordpress.org/core/2022/10/07/introduction-of-presets-across-padding-margin-and-block-gap/">
								preset margin and padding values for multiple
								blocks
							</a>
							.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-2-columns">
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M17.517 20.75A7.268 7.268 0 0 1 22 17.03a8.142 8.142 0 0 0-1.19 1.875 10.763 10.763 0 0 0-.657 1.845h-2.636zm-.554 1.5a7.266 7.266 0 0 0 0 3.5h2.9a13.453 13.453 0 0 1 0-3.5h-2.9zm4.415 0c-.084.56-.128 1.145-.128 1.75s.044 1.19.128 1.75h5.244c.084-.56.128-1.145.128-1.75s-.044-1.19-.128-1.75h-5.244zm6.759 0a13.45 13.45 0 0 1 0 3.5h2.9a7.266 7.266 0 0 0 0-3.5h-2.9zm2.346-1.5h-2.636a10.759 10.759 0 0 0-.657-1.845A8.14 8.14 0 0 0 26 17.03a7.269 7.269 0 0 1 4.483 3.721zm-4.194 0h-4.578c.13-.43.283-.836.458-1.211.495-1.063 1.139-1.847 1.831-2.306.692.46 1.335 1.243 1.83 2.306.176.375.33.78.46 1.211zm-8.772 6.5h2.636c.18.693.416 1.344.7 1.938A8.08 8.08 0 0 0 22 30.97a7.268 7.268 0 0 1-4.483-3.721zm8.772 0h-4.578c.138.46.305.892.495 1.29.491 1.024 1.12 1.78 1.794 2.227.692-.46 1.336-1.243 1.83-2.306a9.02 9.02 0 0 0 .46-1.211zm.901 1.845c.266-.57.486-1.188.657-1.845h2.636A7.268 7.268 0 0 1 26 30.97a8.145 8.145 0 0 0 1.19-1.875zM15.25 24a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Performance highlights
						</h3>
						<p>
							WordPress 6.1 resolved more than 25 tickets
							dedicated to enhancing performance. From the{" "}
							<a href="https://make.wordpress.org/core/2022/10/10/performance-improvements-to-the-rest-api/">
								REST API
							</a>{" "}
							to{" "}
							<a href="https://make.wordpress.org/core/2022/10/10/multisite-improvements-in-wordpress-6-1/">
								multisite
							</a>
							,{" "}
							<a href="https://make.wordpress.org/core/2022/10/07/improvements-to-wp_query-performance-in-6-1/">
								<code>WP_Query</code>
							</a>{" "}
							to{" "}
							<a href="https://make.wordpress.org/core/2022/10/07/improved-php-performance-for-core-blocks-registration/">
								core block registration
							</a>
							, and{" "}
							<a href="https://make.wordpress.org/core/2022/10/06/new-cache-site-health-checks-in-wordpress-6-1/">
								new Site Health checks
							</a>{" "}
							to the addition of the <code>async</code> attribute
							to images, there are performance improvements for
							every type of site. A full breakdown can be found in
							the{" "}
							<a href="https://make.wordpress.org/core/2022/10/11/performance-field-guide-for-wordpress-6-1/">
								Performance Field Guide
							</a>
							.{" "}
						</p>
						<p>
							Be among the first to get the latest improvements by
							adding the{" "}
							<a href="https://byronw34.sg-host.com/wp-admin/plugin-install.php?s=slug%253Aperformance-lab&tab=search&type=term">
								Performance Lab plugin
							</a>{" "}
							to your WordPress test site or sandbox.{" "}
						</p>
					</div>
					<div className="column">
						<div className="about__image">
							<svg
								width={48}
								height={48}
								viewBox="0 0 48 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
							>
								<rect
									width={48}
									height={48}
									rx={4}
									fill="#1E1E1E"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M32.067 17.085l-3.245-3.14-10.621 10.726-1.303 4.412 4.528-1.252 10.64-10.746zM16 32.75h8v-1.5h-8v1.5z"
									fill="#fff"
								/>
							</svg>
						</div>
						<h3 className="is-smaller-heading">
							Content-only editing support for container blocks
						</h3>
						<p>
							Thanks to{" "}
							<a href="https://make.wordpress.org/core/2022/10/11/content-locking-features-and-updates/">
								content-only editing settings
							</a>
							, layouts can be locked within container blocks. In
							a content-only block, its children are invisible to
							the List View and entirely uneditable. So you
							control the layout while your writers can focus on
							the content.{" "}
						</p>
						<p>
							Combine it with block locking options for even more
							advanced control over your blocks.
						</p>
					</div>
				</div>
				<hr />
				<div className="about__section has-2-columns is-wider-right">
					<div className="column about__image is-vertically-aligned-top">
						<a href="https://youtu.be/1w9oywSa6Hw">
							<img
								src="data:image/svg+xml,%3Csvg width='269' height='163' viewBox='0 0 269 163' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Crect width='269' height='163' rx='4' fill='%23FDFF85'/%3E%3Cpath d='M238.84 130.043a1 1 0 0 0-1.524.852v8.21a1 1 0 0 0 1.524.852l6.671-4.105a1 1 0 0 0 0-1.703l-6.671-4.106Z' fill='%231E1E1E'/%3E%3Crect x='226.25' y='120.25' width='29.5' height='29.5' rx='2.75' stroke='%231E1E1E' stroke-width='1.5'/%3E%3Cpath d='M99.597 127.44c-6.16 0-11.36-1.16-15.6-3.48-4.24-2.32-7.68-5.4-10.32-9.24-2.56-3.84-4.4-8.16-5.52-12.96A64.74 64.74 0 0 1 66.477 87c0-9.28 1.28-17.4 3.84-24.36 2.64-6.96 6.4-12.36 11.28-16.2 4.88-3.92 10.8-5.88 17.76-5.88 5.521 0 10.241 1.08 14.161 3.24s6.96 5.04 9.12 8.64c2.24 3.6 3.6 7.52 4.08 11.76h-11.88c-.72-4.16-2.44-7.36-5.16-9.6-2.72-2.24-6.2-3.36-10.44-3.36-5.84 0-10.68 2.76-14.52 8.28-3.76 5.44-5.76 13.84-6 25.2 1.92-3.52 4.88-6.52 8.88-9 4.08-2.48 8.76-3.72 14.04-3.72 4.72 0 9.12 1.12 13.2 3.36 4.16 2.24 7.52 5.4 10.08 9.48 2.64 4 3.96 8.76 3.96 14.28 0 4.88-1.2 9.48-3.6 13.8-2.4 4.32-5.8 7.84-10.2 10.56-4.32 2.64-9.48 3.96-15.48 3.96Zm-.72-11.04c3.361 0 6.361-.72 9.001-2.16 2.64-1.44 4.72-3.4 6.24-5.88 1.52-2.56 2.28-5.44 2.28-8.64 0-5.12-1.68-9.2-5.04-12.24-3.28-3.04-7.48-4.56-12.6-4.56-3.36 0-6.4.76-9.12 2.28-2.64 1.52-4.72 3.56-6.24 6.12-1.52 2.48-2.28 5.24-2.28 8.28 0 3.28.76 6.2 2.28 8.76 1.6 2.48 3.72 4.44 6.36 5.88 2.72 1.44 5.76 2.16 9.12 2.16Zm45.925 10.32c-2.4 0-4.4-.76-6-2.28-1.52-1.6-2.28-3.48-2.28-5.64 0-2.24.76-4.12 2.28-5.64 1.6-1.6 3.6-2.4 6-2.4s4.36.8 5.88 2.4c1.52 1.52 2.28 3.4 2.28 5.64 0 2.16-.76 4.04-2.28 5.64-1.52 1.52-3.48 2.28-5.88 2.28Zm26.814-.72V56.4l-13.56 3.12v-9.36l18.6-8.16h8.16v84h-13.2Z' fill='%231E1E1E'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Crect width='269' height='163' rx='4' fill='%23fff'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
								alt="Exploring WordPress 6.1 video"
							/>
						</a>
					</div>
					<div className="column">
						<h3>Learn more about WordPress 6.1.1 </h3>
						<p>
							See WordPress 6.1 in action!{" "}
							<a href="https://youtu.be/1w9oywSa6Hw">
								Watch a brief overview video
							</a>{" "}
							highlighting some of the major features debuting in
							WordPress 6.1.{" "}
						</p>
					</div>
				</div>
				<div className="about__section has-3-columns">
					<div className="column" style={{ paddingTop: 0 }}>
						<p>
							Explore{" "}
							<a href="https://learn.wordpress.org/">
								learn.wordpress.org
							</a>{" "}
							for tutorial videos, online workshops, courses, and
							lesson plans for Meetup organizers, including new
							features in WordPress.{" "}
						</p>
					</div>
					<div className="column" style={{ paddingTop: 0 }}>
						<p>
							Check out the latest version of the{" "}
							<a href="https://make.wordpress.org/core/2022/10/12/wordpress-6-1-field-guide/">
								WordPress Field Guide
							</a>
							. It is overflowing with detailed developer notes to
							help you build with WordPress.{" "}
						</p>
					</div>
					<div className="column" style={{ paddingTop: 0 }}>
						<p>
							<a href="https://wordpress.org/support/wordpress-version/version-6-1/">
								Read the WordPress 6.1 Release Notes
							</a>{" "}
							for more information on the included enhancements
							and issues fixed, installation information,
							developer notes and resources, release contributors,
							and the list of file changes in this release.{" "}
						</p>
					</div>
				</div>
				<hr className="is-large" />
				<div className="return-to-dashboard">
					<a href="https://byronw34.sg-host.com/wp-admin/">
						Go to Dashboard → Home
					</a>
				</div>
			</div>
			<div className="clear" />
		</div>
	);
}

export default About;
