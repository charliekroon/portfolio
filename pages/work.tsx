import MenuBar from "../components/MenuBar";
import {General, StandardText, Title, Text} from "../styles/Global";
import React, {useState, useEffect} from "react";
import {getBlogs} from "./api/blogs";
import {Blogje} from "./blogje";

export default function Projects() {
	const [blogs, setBlogs] = useState<Blogje[]>([]);

	useEffect(() => {
		getAllBlogs();
	}, []);

	const getAllBlogs = async () => {
		const allBlogs = await getBlogs();
		return setBlogs(allBlogs);
	};

	const displayBlogjes = blogs.map(i => i.title);

	return (
		<>
			<MenuBar />
			<General>
				<Title>Work</Title>
				<Text>
					{" "}
					<StandardText>{displayBlogjes}</StandardText>
				</Text>
			</General>
		</>
	);
}
