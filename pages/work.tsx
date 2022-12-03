import MenuBar from "../components/MenuBar";
import {General, StandardText, Title, Text} from "../styles/Global";
import {Headertje, ProjectsText} from "../styles/projects.styles";
import React, {useState, useEffect} from "react";
import {Blogje} from "./blogje";
import {getBlogs} from "./api/blogs";

export default function Projects() {
	const [blogs, setBlogs] = useState<any[]>([]);

	useEffect(() => {
		getAllBlogjes();
	}, []);

	const getAllBlogjes = async () => {
		const kutblogs = await getBlogs();
		return setBlogs(kutblogs);
	};

	console.log("TELL ME WHYHYHY?", blogs);

	console.log(
		"AINT NOTHING BUT A HEARTACHE",
		blogs.map(i => i.title)
	);

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
