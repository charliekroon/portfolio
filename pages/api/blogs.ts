export const getAllBlogs = async () => {
	return fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@charliekroon/").then(res => res.json());
};
