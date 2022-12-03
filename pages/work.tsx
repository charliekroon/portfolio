import MenuBar from "../src/interfaces/components/MenuBar";
import {General, StandardText, Title, Text} from "../styles/Global";
import React, {useState, useEffect} from "react";
import {getBlogs} from "./api/blogAPI";
import {Blog} from "../src/interfaces/blog";
import Link from "next/link";

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
			<Text>
				<StandardText>
					<Link href={blog.link}>{blog.title}</Link>
				</StandardText>
			</Text>
		</>
	));

	return (
		<>
			<MenuBar />
			<General>
				<Title>Work</Title>
				{displayBlogjes}
			</General>
		</>
	);
}
