import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styled from "styled-components";

export const Title = styled.p`
	font-family: Grandslang roman;
	font-weight: 100;
	font-style: light-weight;
	color: #1a1919;
	font-size: 200px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
	margin-left: 10%;
	margin-top: 5%;
	margin-bottom: -20px;
	letter-spacing: 3.5px;
`;

export const Hi = styled.p`
	font-family: Grandslang roman;
	font-weight: 50;
	font-style: light-weight;
	color: #1a1919;
	font-size: 50px;
	display: flex;
	align-items: flex-start;
	flex: 1;
	margin-left: 10%;
	margin-top: -20%;
	letter-spacing: 2px;
`;

export const ContainerTwo = styled.span`
	display: flex;
	min-height: 100vh;
	padding: 4rem 0;
	background-color: #eee7e1;
	gap: 4rem;
	flex-direction: column;
	justify-content: center;
`;

export default function About({posts}) {
	console.log(posts);
	const description = "Hi, I am Charlie";
	return (
		<>
			<ContainerTwo>
				<Title>About</Title>
				<Hi>{description}</Hi>
				<Link href="/">home</Link>
			</ContainerTwo>
		</>
	);
}

export async function getStaticProps() {
	// Get files from the posts dir
	const files = fs.readdirSync(path.join("posts"));

	// Get slug and frontmatter from posts
	const posts = files.map(filename => {
		// Create slug
		const slug = filename.replace(".md", "");

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts", filename),
			"utf-8"
		);

		const {data: frontmatter} = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts,
		},
	};
}
