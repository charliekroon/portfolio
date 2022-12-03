import {Blog} from "../../src/interfaces/blog";

export const getBlogs: () => Promise<Array<Blog>> = async () => {
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
