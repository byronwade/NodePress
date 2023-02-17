import Toolbar from "./components/toolbar";

//Dashboard Main Components
import Index from "./components/index";
import Update from "./components/update-core";
import About from "./components/about";

// Edit is for all post types displayed threw table
import Edit from "./components/edit"; // will need to break this out into more components later (edit.php displays table for all post types)

// Posts
import PostNew from "./components/post-new"; // will need to break this out into more components later (All post types including pages)
import EditTags from "./components/edit-tags"; // will need to break this out into more components later (All taxonomy)

// Media
import Upload from "./components/upload"; // I need to fix how the menu header is displaying
import MediaNew from "./components/media-new";

//Comments
import EditComments from "./components/edit-comments";

//Appearance - We are skipping the customize.php until we have a plan on how to handle themes in react
import Themes from "./components/themes"; // Dont forget the layout changes when there is more then one theme
import NavMenus from "./components/nav-menus"; //menu structure is buggy, will probably remove it until I get some react drag and drop added
import ThemeEditor from "./components/theme-editor";

// Plugins
import Plugins from "./components/plugins";
import PluginInstall from "./components/plugin-install"; // plugin tags acting alittle funky
import PluginEditor from "./components/plugin-editor";

// Users
import Users from "./components/users";
import UserNew from "./components/user-new";
import Profile from "./components/profile";

// Tools
import Tools from "./components/tools";
import Import from "./components/import";
import Export from "./components/export";
import SiteHealth from "./components/site-health";
import ExportPersonalData from "./components/export-personal-data";
import ErasePersonalData from "./components/erase-personal-data";

// Settings
import OptionsGeneral from "./components/options-general";
import OptionsWriting from "./components/options-writing";
import OptionsReading from "./components/options-reading";
import OptionsDiscussion from "./components/options-discussion";
import OptionsMedia from "./components/options-media";
import OptionsPermalink from "./components/options-permalink";
import OptionsPrivacy from "./components/options-privacy";

// Footer
import Footer from "./components/footer";

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
