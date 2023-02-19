import React, {useState, useEffect} from "react";
import MenuBar from "../src/components/MenuBar";
import {MainComponent, TitleComponent} from "../src/styles/Global.styles";
import {getBlogs} from "./api/blogAPI";
import {Blog} from "../src/interfaces/blog";
import Link from "next/link";
import {LinkComponent, TextComponent} from "../src/styles/Work.styles";

export default function Work() {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		document.title = "Work";
	}, []);

	useEffect(() => {
		getAllBlogs();
	}, []);

	const getAllBlogs = async () => {
		const allBlogs = await getBlogs();
		return setBlogs(allBlogs);
	};

	const displayBlogs = blogs.map(blog => (
		<>
			<LinkComponent>
				<ul>
					<a href={blog.link} target="_blank" rel="noopener noreferrer">
						{blog.title}
					</a>
				</ul>
			</LinkComponent>
		</>
	));

	return (
		<>
			<MenuBar />
			<MainComponent>
				<TitleComponent>Work</TitleComponent>
				<TextComponent>
					I occasionally write a blog about the things I've learned, things I've enjoyed, or topics that I wish I had found when I first started as a software engineer. You can read them here: <div> {displayBlogs}</div>
					<br />
					<div>
						I build very small side projects, usually to{" "}
						<LinkComponent>
							<Link href="https://github.com/charliekroon/report-app">
								<strong>learn something new</strong>
							</Link>
						</LinkComponent>
						, for{" "}
						<LinkComponent>
							<Link href="https://github.com/charliekroon/spelen-met-css-animations">
								<strong>fun</strong>
							</Link>
						</LinkComponent>
						, or because it's something I need in my life but can't find elsewhere.{" "}
					</div>
					<br />
					<div>There are soooo many things I enjoy or want to learn more about, so I have to pace myself and focus on one thing at a time. For example, I once wanted to learn how to create my own NFT contracts. Currently, I'm focused on front-end development (outside of work, as at work I focus on both front-end and back-end) and in particular, creating coolprettycute design stuff with code.</div>
				</TextComponent>
			</MainComponent>
		</>
	);
}
