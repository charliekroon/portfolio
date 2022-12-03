import MenuBar from "../components/MenuBar";
import {General, StandardText, Title} from "../styles/Global";
import {Headertje, ProjectsText} from "../styles/projects.styles";
import React, {useState, useEffect} from "react";
import {Blogje} from "./blogje";

export default function Projects() {
	const [blogs, setBlogs] = useState<any[]>([]);

	useEffect(() => {
		getAllBlogjes();
	}, []);

	const getBlogs: () => Promise<Array<Blogje>> = async () => {
		return fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@charliekroon/", {
			method: "GET",
		})
			.then(res => {
				return res.json();
			})
			.then(data => {
				return data.items;
			})
			.catch(error => console.error(error));
	};

	const getAllBlogjes = async () => {
		const allbbblogggs = await getBlogs();
		return setBlogs(allbbblogggs);
	};

	console.log(
		"tell me whyhy?",
		blogs.map(i => i.title)
	);

	const displayBlogjes = blogs.map(i => i.title);

	return (
		<>
			<MenuBar />
			<General>
				<Title>Work</Title>
				<>{displayBlogjes}</>
			</General>
		</>
	);
}
