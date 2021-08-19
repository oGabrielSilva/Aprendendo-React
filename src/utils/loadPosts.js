export const loadPosts = async () => {
    const postsLoad = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosLoad = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([postsLoad, photosLoad]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const photosAndPosts = postsJson.map((post, index) => {
        return { ...post, cover: photosJson[index].url }
    });
    return photosAndPosts;
}