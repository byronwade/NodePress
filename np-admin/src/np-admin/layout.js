import Toolbar from "./toolbar";

//Dashboard Main Components
import Index from "./index";
import Update from "./update-core";
import About from "./about";

// Edit is for all post types displayed threw table
import Edit from "./edit"; // will need to break this out into more components later (edit.php displays table for all post types)

// Posts
import PostNew from "./post-new"; // will need to break this out into more components later (All post types including pages)
import EditTags from "./edit-tags"; // will need to break this out into more components later (All taxonomy)

// Media
import Upload from "./upload"; // I need to fix how the menu header is displaying
import MediaNew from "./media-new";

//Comments
import EditComments from "./edit-comments";

//Appearance - We are skipping the customize.php until we have a plan on how to handle themes in react
import Themes from "./themes"; // Dont forget the layout changes when there is more then one theme
import NavMenus from "./nav-menus"; //menu structure is buggy, will probably remove it until I get some react drag and drop added
import ThemeEditor from "./theme-editor";

// Plugins
import Plugins from "./plugins";
import PluginInstall from "./plugin-install"; // plugin tags acting alittle funky
import PluginEditor from "./plugin-editor";

// Users
import Users from "./users";
import UserNew from "./user-new";
import Profile from "./profile";

// Tools
import Tools from "./tools";
import Import from "./import";
import Export from "./export";
import SiteHealth from "./site-health";
import ExportPersonalData from "./export-personal-data";
import ErasePersonalData from "./erase-personal-data";

// Settings
import OptionsGeneral from "./options-general";
import OptionsWriting from "./options-writing";
import OptionsReading from "./options-reading";
import OptionsDiscussion from "./options-discussion";
import OptionsMedia from "./options-media";
import OptionsPermalink from "./options-permalink";
import OptionsPrivacy from "./options-privacy";

// Footer
import Footer from "./footer";

export default function Layout() {
	return (
		<>
			<div id="wpcontent">
				<Toolbar />
				<div id="wpbody" role="main">
					<Index />
					<Update />
					<About />
					<Edit />
					<PostNew />
					<EditTags />
					<Upload />
					<MediaNew />
					<EditComments />
					<Themes />
					<NavMenus />
					<ThemeEditor />
					<Plugins />
					<PluginInstall />
					<PluginEditor />
					<Users />
					<UserNew />
					<Profile />
					<Tools />
					<Import />
					<Export />
					<SiteHealth />
					<ExportPersonalData />
					<ErasePersonalData />
					<OptionsGeneral />
					<OptionsWriting />
					<OptionsReading />
					<OptionsDiscussion />
					<OptionsMedia />
					<OptionsPermalink />
					<OptionsPrivacy />
					<Footer />
				</div>
			</div>
		</>
	);
}
