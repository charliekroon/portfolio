import MenuBar from "../src/components/MenuBar";
import {General, Title, Text} from "../src/styles/Global";
import React, {useState, useEffect} from "react";
import {getBlogs} from "./api/blogAPI";
import {Blog} from "../src/interfaces/blog";
import Link from "next/link";
import {WorkLink, ProjectsText, Headertje} from "../src/styles/WorkStyles";

export default function Projects() {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		getAllBlogs();
	}, []);

	const getAllBlogs = async () => {
		const allBlogs = await getBlogs();
		return setBlogs(allBlogs);
	};

	const displayBlogjes = blogs.map(blog => (
		<>
			<WorkLink>
				<ul>
					<Link href={blog.link}>{blog.title}</Link>
				</ul>
			</WorkLink>
		</>
	));

	return (
		<>
			<MenuBar />
			<General>
				<Title>Work</Title>
				<Text>
					<ProjectsText>
						{" "}
						I occasionally write a blog about the things I've learned, things I've enjoyed, or topics that I wish I had found when I first started as a software engineer. You can read them here: <div> {displayBlogjes}</div>
						<br />
						<div>
							I build very small side projects, usually to{" "}
							<WorkLink>
								<Link href="https://github.com/charliekroon/projectje">
									<strong>learn something new</strong>
								</Link>
							</WorkLink>
							, for{" "}
							<WorkLink>
								<Link href="https://github.com/charliekroon/spelen-met-css-animations">
									<strong>fun</strong>
								</Link>
							</WorkLink>
							, or because it's something I need in my life but can't find elsewhere.{" "}
						</div>
						<br />
						<div>There are soooo many things I enjoy or want to learn more about, so I have to pace myself and focus on one thing at a time. For example, I once wanted to learn how to create my own NFT contracts. Currently, I'm focused on front-end development (outside of work, as at work I focus on both front-end and back-end) and in particular, creating coolprettycute design stuff with code.</div>
					</ProjectsText>
				</Text>
			</General>
		</>
	);
}
