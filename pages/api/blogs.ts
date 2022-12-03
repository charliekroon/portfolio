import Blogje from "../blogje";

export const getAllBlogs = (): Promise<Array<Blogje>> => {
	return fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@charliekroon/")
		.then(res => res.json())
		.then(data => {
			return data;
		})
		.catch(error => {
			console.error(error);
		});
};
