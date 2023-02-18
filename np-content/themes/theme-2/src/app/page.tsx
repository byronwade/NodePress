import { getPosts } from "nodepress-components";

export default function Home() {
	const posts = getPosts();
	return (
		<main>
			<p>{JSON.stringify(posts)}</p>
		</main>
	);
}
