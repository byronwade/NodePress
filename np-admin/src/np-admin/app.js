import "../index.css";
import Sidebar from "./sidebar";
import Layout from "./layout";

export default function RPAdmin() {
	return (
		<div className="wp-toolbar">
			<div className="wp-admin wp-core-ui js edit-php auto-fold admin-bar post-type-page branch-6-1 version-6-1-1 admin-color-fresh locale-en-us customize-support sticky-menu svg">
				<Sidebar />
				<Layout />
			</div>
		</div>
	);
}
