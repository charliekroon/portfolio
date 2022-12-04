import MenuBar from "../src/components/MenuBar";
import {General, StandardText, Title, Text} from "../src/styles/Global";
import React, {useState, useEffect} from "react";
import {getBlogs} from "./api/blogAPI";
import {Blog} from "../src/interfaces/blog";
import Link from "next/link";
import {WorkLink} from "../src/styles/WorkStyles";

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
				<Link href={blog.link}>{blog.title}</Link>
			</WorkLink>
		</>
	));

	return (
		<>
			<MenuBar />
			<General>
				<Title>Work</Title>
				<Text>
					<StandardText>
						{" "}
						I occasionally write a blog about the things I learned (For example: timezones in JavaScript), things I enjoyed or things that I wish there was a blog about when I was starting out as a Software Engineer. You can read them here:
						<div> {displayBlogjes}</div>
						<br />
						<div>
							I build very small side projects, that I created either because I wanted to{" "}
							<WorkLink>
								<Link href="https://github.com/charliekroon/projectje">
									<strong>learn something new</strong>
								</Link>
							</WorkLink>
							, because I thought it was <Link href="https://github.com/charliekroon/spelen-met-css-animations">fun</Link>, or are a thing that I need in my life and can't find elsewhere.{" "}
						</div>
						<br />
						<div>There are soooo many things I enjoy or want to learn more about, that I often have to pace myself and choose just one thing to focus on at that moment. There was a time I wanted to learn how to create my own NFT contracts. I now am focused on Front End (out of work, during work I am very much FE and BE focused) and in particular creating super coolprettycute design stuff with code.</div>
					</StandardText>
				</Text>
			</General>
		</>
	);
}
