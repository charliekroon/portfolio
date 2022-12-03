import MenuBar from "../components/MenuBar";
import {General, StandardText, Title} from "../styles/Global";
import {Headertje, ProjectsText} from "../styles/projects.styles";
import React, {useState, useEffect} from "react";

export default function Projects() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [blogs, setBlogs] = useState<any[]>([]);
	useEffect(() => {
		fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@charliekroon/")
			.then(res => res.json())
			.then(
				data => {
					setIsLoaded(true);
					setBlogs(data.items);
				},
				error => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	console.log("blogs", blogs);

	if (error) {
		return <div>Error: {error}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<>
				<MenuBar />
				<General>
					<Title>Work</Title>
					<>
						{blogs.map(item => (
							<>
								<a href={item.link} target="_blank">
									{item.title}
								</a>
							</>
						))}
					</>
				</General>
			</>
		);
	}
}
