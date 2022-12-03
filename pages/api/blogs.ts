import {Blogje} from "../blogje";

export const getBlogs: () => Promise<Array<Blogje>> = async () => {
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
