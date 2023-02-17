export default function ThemeEditor() {
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
            <li id="tab-link-overview" className="active">
              <a href="#tab-panel-overview" aria-controls="tab-panel-overview">
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
            <a href="https://developer.wordpress.org/themes/">
              Documentation on Theme Development
            </a>
          </p>
          <p>
            <a href="https://wordpress.org/support/article/appearance-editor-screen/">
              Documentation on Editing Themes
            </a>
          </p>
          <p>
            <a href="https://wordpress.org/support/article/editing-files/">
              Documentation on Editing Files
            </a>
          </p>
          <p>
            <a href="https://developer.wordpress.org/themes/basics/template-tags/">
              Documentation on Template Tags
            </a>
          </p>
          <p>
            <a href="https://wordpress.org/support/">Support</a>
          </p>{" "}
        </div>
        <div className="contextual-help-tabs-wrap">
          <div id="tab-panel-overview" className="help-tab-content active">
            <p>
              You can use the theme file editor to edit the individual CSS and
              PHP files which make up your theme.
            </p>
            <p>
              Begin by choosing a theme to edit from the dropdown menu and
              clicking the Select button. A list then appears of the theme’s
              template files. Clicking once on any file name causes the file to
              appear in the large Editor box.
            </p>
            <p>
              For PHP files, you can use the documentation dropdown to select
              from functions recognized in that file. Look Up takes you to a web
              page with reference material about that particular function.
            </p>
            <p id="editor-keyboard-trap-help-1">
              When using a keyboard to navigate:
            </p>
            <ul>
              <li id="editor-keyboard-trap-help-2">
                In the editing area, the Tab key enters a tab character.
              </li>
              <li id="editor-keyboard-trap-help-3">
                To move away from this area, press the Esc key followed by the
                Tab key.
              </li>
              <li id="editor-keyboard-trap-help-4">
                Screen reader users: when in forms mode, you may need to press
                the Esc key twice.
              </li>
            </ul>
            <p>After typing in your edits, click Update File.</p>
            <p>
              <strong>Advice:</strong> Think very carefully about your site
              crashing if you are live-editing the theme currently in use.
            </p>
            <p>
              Upgrading to a newer version of the same theme will override
              changes made here. To avoid this, consider creating a{" "}
              <a href="https://developer.wordpress.org/themes/advanced-topics/child-themes/">
                child theme
              </a>{" "}
              instead.
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
    <h1>Edit Themes</h1>
    <div id="message" className="notice-info notice">
      <p>
        <strong>Did you know?</strong>
      </p>
      <p>
        There is no need to change your CSS here — you can edit and live preview
        CSS changes in the{" "}
        <a href="https://byronw34.sg-host.com/wp-admin/customize.php?autofocus%5Bsection%5D=custom_css">
          built-in CSS editor
        </a>
        .{" "}
      </p>
    </div>
    <div className="fileedit-sub">
      <div className="alignleft">
        <h2>
          Wade's Headless WordPress: Stylesheet <span>(style.css)</span>
        </h2>
      </div>
      <div className="alignright">
        <form action="theme-editor.php" method="get">
          <label htmlFor="theme" id="theme-plugin-editor-selector">
            Select theme to edit:{" "}
          </label>
          <select name="theme" id="theme">
            <option value="wades-headless" selected="selected">
              Wade's Headless WordPress
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
      <h2 id="theme-files-label">Theme Files</h2>
      <ul role="tree" aria-labelledby="theme-files-label">
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
                href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=style.css&theme=wades-headless"
                aria-level={2}
                aria-setsize={1}
                aria-posinset={6}
              >
                <span className="notice notice-info">
                  Stylesheet
                  <br />
                  <span className="nonessential">(style.css)</span>
                </span>{" "}
              </a>
            </li>
            <li role="none" className="">
              <a
                role="treeitem"
                tabIndex={-1}
                href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=functions.php&theme=wades-headless"
                aria-level={2}
                aria-setsize={2}
                aria-posinset={6}
              >
                Theme Functions
                <br />
                <span className="nonessential">(functions.php)</span>{" "}
              </a>
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
                acf-json <span className="screen-reader-text">folder</span>
                <span aria-hidden="true" className="icon" />
              </span>
              <ul role="group" className="tree-folder">
                {" "}
                <li role="none" className="">
                  <a
                    role="treeitem"
                    tabIndex={-1}
                    href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=acf-json%2Findex.php&theme=wades-headless"
                    aria-level={3}
                    aria-setsize={1}
                    aria-posinset={1}
                  >
                    index.php{" "}
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
                inc <span className="screen-reader-text">folder</span>
                <span aria-hidden="true" className="icon" />
              </span>
              <ul role="group" className="tree-folder">
                {" "}
                <li role="none" className="">
                  <a
                    role="treeitem"
                    tabIndex={-1}
                    href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Facf-options.php&theme=wades-headless"
                    aria-level={3}
                    aria-setsize={1}
                    aria-posinset={8}
                  >
                    acf-options.php{" "}
                  </a>
                </li>
                <li role="none" className="">
                  <a
                    role="treeitem"
                    tabIndex={-1}
                    href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Fadmin.php&theme=wades-headless"
                    aria-level={3}
                    aria-setsize={2}
                    aria-posinset={8}
                  >
                    admin.php{" "}
                  </a>
                </li>
                <li role="none" className="">
                  <a
                    role="treeitem"
                    tabIndex={-1}
                    href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Fclass-acf-commands.php&theme=wades-headless"
                    aria-level={3}
                    aria-setsize={3}
                    aria-posinset={8}
                  >
                    class-acf-commands.php{" "}
                  </a>
                </li>
                <li role="none" className="">
                  <a
                    role="treeitem"
                    tabIndex={-1}
                    href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Fcors.php&theme=wades-headless"
                    aria-level={3}
                    aria-setsize={4}
                    aria-posinset={8}
                  >
                    cors.php{" "}
                  </a>
                </li>
                <li role="none" className="">
                  <a
                    role="treeitem"
                    tabIndex={-1}
                    href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Ffrontend-origin.php&theme=wades-headless"
                    aria-level={3}
                    aria-setsize={5}
                    aria-posinset={8}
                  >
                    frontend-origin.php{" "}
                  </a>
                </li>
                <li
                  role="treeitem"
                  aria-expanded="false"
                  tabIndex={-1}
                  aria-level={3}
                  aria-setsize={8}
                  aria-posinset={6}
                >
                  <span className="folder-label">
                    graphql <span className="screen-reader-text">folder</span>
                    <span aria-hidden="true" className="icon" />
                  </span>
                  <ul role="group" className="tree-folder">
                    {" "}
                    <li
                      role="treeitem"
                      aria-expanded="false"
                      tabIndex={-1}
                      aria-level={4}
                      aria-setsize={2}
                      aria-posinset={1}
                    >
                      <span className="folder-label">
                        resolvers{" "}
                        <span className="screen-reader-text">folder</span>
                        <span aria-hidden="true" className="icon" />
                      </span>
                      <ul role="group" className="tree-folder">
                        {" "}
                        <li role="none" className="">
                          <a
                            role="treeitem"
                            tabIndex={-1}
                            href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Fgraphql%2Fresolvers%2Fheader-menu.php&theme=wades-headless"
                            aria-level={5}
                            aria-setsize={1}
                            aria-posinset={1}
                          >
                            header-menu.php{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li role="none" className="">
                      <a
                        role="treeitem"
                        tabIndex={-1}
                        href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Fgraphql%2Fresolvers.php&theme=wades-headless"
                        aria-level={4}
                        aria-setsize={2}
                        aria-posinset={2}
                      >
                        resolvers.php{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li role="none" className="">
                  <a
                    role="treeitem"
                    tabIndex={-1}
                    href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Flog.php&theme=wades-headless"
                    aria-level={3}
                    aria-setsize={7}
                    aria-posinset={8}
                  >
                    log.php{" "}
                  </a>
                </li>
                <li role="none" className="">
                  <a
                    role="treeitem"
                    tabIndex={-1}
                    href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=inc%2Fmenus.php&theme=wades-headless"
                    aria-level={3}
                    aria-setsize={8}
                    aria-posinset={8}
                  >
                    menus.php{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li role="none" className="">
              <a
                role="treeitem"
                tabIndex={-1}
                href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=index.php&theme=wades-headless"
                aria-level={2}
                aria-setsize={5}
                aria-posinset={6}
              >
                Main Index Template
                <br />
                <span className="nonessential">(index.php)</span>{" "}
              </a>
            </li>
            <li role="none" className="">
              <a
                role="treeitem"
                tabIndex={-1}
                href="https://byronw34.sg-host.com/wp-admin/theme-editor.php?file=phpcs.xml&theme=wades-headless"
                aria-level={2}
                aria-setsize={6}
                aria-posinset={6}
              >
                phpcs.xml{" "}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <form name="template" id="template" action="theme-editor.php" method="post">
      <input type="hidden" id="nonce" name="nonce" defaultValue="93845f1604" />
      <input
        type="hidden"
        name="_wp_http_referer"
        defaultValue="/wp-admin/theme-editor.php"
      />{" "}
      <div>
        <label htmlFor="newcontent" id="theme-plugin-editor-label">
          Selected file content:
        </label>
        <textarea
          cols={70}
          rows={30}
          name="newcontent"
          id="newcontent"
          aria-describedby="editor-keyboard-trap-help-1 editor-keyboard-trap-help-2 editor-keyboard-trap-help-3 editor-keyboard-trap-help-4"
          style={{ display: "none" }}
          defaultValue={
            "/*\nTheme Name: Wade's Headless WordPress\nAuthor: Wade's Inc\nAuthor URI: https://byronwade.com\nDescription:\n*/\n"
          }
        />
        <div className="CodeMirror cm-s-default CodeMirror-wrap">
          <div
            className="CodeMirror-vscrollbar"
            cm-not-content="true"
            style={{ width: 18, pointerEvents: "none" }}
          >
            <div style={{ minWidth: 1, height: 0 }} />
          </div>
          <div
            className="CodeMirror-hscrollbar"
            cm-not-content="true"
            style={{ height: 18, pointerEvents: "none" }}
          >
            <div style={{ height: "100%", minHeight: 1, width: 0 }} />
          </div>
          <div className="CodeMirror-scrollbar-filler" cm-not-content="true" />
          <div className="CodeMirror-gutter-filler" cm-not-content="true" />
          <div className="CodeMirror-scroll" tabIndex={-1}>
            <div
              className="CodeMirror-sizer"
              style={{
                marginLeft: 30,
                marginBottom: 0,
                borderRightWidth: 30,
                minHeight: 135,
                paddingRight: 0,
                paddingBottom: 0
              }}
            >
              <div style={{ position: "relative", top: 0 }}>
                <div className="CodeMirror-lines" role="presentation">
                  <div
                    role="presentation"
                    style={{ position: "relative", outline: "none" }}
                  >
                    <div className="CodeMirror-measure">
                      <span>
                        <span>​</span>x
                      </span>
                    </div>
                    <div className="CodeMirror-measure" />
                    <div style={{ position: "relative", zIndex: 1 }} />
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
                      style={{}}
                    >
                      <div
                        className="CodeMirror-activeline"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="CodeMirror-activeline-background CodeMirror-linebackground"
                          contentEditable="false"
                        />
                        <div
                          className="CodeMirror-gutter-background CodeMirror-activeline-gutter"
                          contentEditable="false"
                          style={{ left: "-30px", width: 30 }}
                        />
                        <div
                          className="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter"
                          contentEditable="false"
                          style={{ left: "-30px" }}
                        >
                          <div
                            className="CodeMirror-linenumber CodeMirror-gutter-elt"
                            style={{ left: 0, width: 21 }}
                          >
                            1
                          </div>
                        </div>
                        <pre className=" CodeMirror-line " role="presentation">
                          <span
                            role="presentation"
                            style={{ paddingRight: "0.1px" }}
                          >
                            <span className="cm-comment">/*</span>
                          </span>
                        </pre>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div
                          className="CodeMirror-gutter-wrapper"
                          contentEditable="false"
                          style={{ left: "-30px" }}
                        >
                          <div
                            className="CodeMirror-linenumber CodeMirror-gutter-elt"
                            style={{ left: 0, width: 21 }}
                          >
                            2
                          </div>
                        </div>
                        <pre className=" CodeMirror-line " role="presentation">
                          <span
                            role="presentation"
                            style={{ paddingRight: "0.1px" }}
                          >
                            <span className="cm-comment">
                              Theme Name: Wade's Headless WordPress
                            </span>
                          </span>
                        </pre>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div
                          className="CodeMirror-gutter-wrapper"
                          contentEditable="false"
                          style={{ left: "-30px" }}
                        >
                          <div
                            className="CodeMirror-linenumber CodeMirror-gutter-elt"
                            style={{ left: 0, width: 21 }}
                          >
                            3
                          </div>
                        </div>
                        <pre className=" CodeMirror-line " role="presentation">
                          <span
                            role="presentation"
                            style={{ paddingRight: "0.1px" }}
                          >
                            <span className="cm-comment">
                              Author: Wade's Inc
                            </span>
                          </span>
                        </pre>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div
                          className="CodeMirror-gutter-wrapper"
                          contentEditable="false"
                          style={{ left: "-30px" }}
                        >
                          <div
                            className="CodeMirror-linenumber CodeMirror-gutter-elt"
                            style={{ left: 0, width: 21 }}
                          >
                            4
                          </div>
                        </div>
                        <pre className=" CodeMirror-line " role="presentation">
                          <span
                            role="presentation"
                            style={{ paddingRight: "0.1px" }}
                          >
                            <span className="cm-comment">
                              Author URI: https://byronwade.com
                            </span>
                          </span>
                        </pre>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div
                          className="CodeMirror-gutter-wrapper"
                          contentEditable="false"
                          style={{ left: "-30px" }}
                        >
                          <div
                            className="CodeMirror-linenumber CodeMirror-gutter-elt"
                            style={{ left: 0, width: 21 }}
                          >
                            5
                          </div>
                        </div>
                        <pre className=" CodeMirror-line " role="presentation">
                          <span
                            role="presentation"
                            style={{ paddingRight: "0.1px" }}
                          >
                            <span className="cm-comment">Description:</span>
                          </span>
                        </pre>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div
                          className="CodeMirror-gutter-wrapper"
                          contentEditable="false"
                          style={{ left: "-30px" }}
                        >
                          <div
                            className="CodeMirror-linenumber CodeMirror-gutter-elt"
                            style={{ left: 0, width: 21 }}
                          >
                            6
                          </div>
                        </div>
                        <pre className=" CodeMirror-line " role="presentation">
                          <span
                            role="presentation"
                            style={{ paddingRight: "0.1px" }}
                          >
                            <span className="cm-comment">*/</span>
                          </span>
                        </pre>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div
                          className="CodeMirror-gutter-wrapper"
                          contentEditable="false"
                          style={{ left: "-30px" }}
                        >
                          <div
                            className="CodeMirror-linenumber CodeMirror-gutter-elt"
                            style={{ left: 0, width: 21 }}
                          >
                            7
                          </div>
                        </div>
                        <pre className=" CodeMirror-line " role="presentation">
                          <span
                            role="presentation"
                            style={{ paddingRight: "0.1px" }}
                          >
                            <span cm-text="">​</span>
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
                borderBottom: "0px solid transparent",
                top: 135
              }}
            />
            <div className="CodeMirror-gutters" style={{ height: 165 }}>
              <div
                className="CodeMirror-gutter CodeMirror-linenumbers"
                style={{ width: 29 }}
              />
            </div>
          </div>
        </div>
        <input type="hidden" name="action" defaultValue="update" />
        <input type="hidden" name="file" defaultValue="style.css" />
        <input type="hidden" name="theme" defaultValue="wades-headless" />
      </div>
      <div>
        <div className="editor-notices"></div>
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
      </div>
    </form>
    <br className="clear" />
  </div>
  <div className="clear" />
</div>

		</>
	);
}
