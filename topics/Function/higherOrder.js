import { posts } from './post.js';

// console.log(posts.posts)
// await console.log(posts) API
// console.log(posts)
// console.log(posts)


// Synchrous 3 4 5 6
//Asynchrous 3 5 4 6

//Foreach to Iterate through all the posts
posts.forEach((post) => {
    console.log(post);
}
);

//Filter to return elements based on condition
const filteredPosts = posts.filter((post) => {
    return post.userId === 2;
});

// console.log(filteredPosts);

//Mapped to return specific value in a array
const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});

console.log(mappedPosts);

//Reduce to calculate 
const reducePost = mappedPosts.reduce((sum, post) => {
    return sum + post;
});

console.log(reducePost);