//PROMISE ALL CONCEPT

//First we need to create a user
const user = {
    name: 'Shankar',
    lastActivityTime: null,
    posts: [],
};

// Updating the user's lastActivityTime
async function lastUpdate() {
    return new Promise((resolve) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

// Function to create a post
async function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            user.posts.push(post);
            resolve(post);
        }, 1000);
    });
}
async function deleteLastPost() {
    return new Promise((resolve, reject) => {
        if (user.posts.length === 0) {
            reject(new Error("No posts to delete"));
        } else {
            setTimeout(() => {
                user.posts.pop();
                resolve();
            }, 1000);
        }
    });
}
//Async and await works and here also it takes the array of promises
async function main() {
    try {
        //createPost takes as first array and lastUpdate takes as a second array
        //created two post and pushed to post using create post
        await Promise.all([
                createPost({ title: "Post 1", content: "Whatever" }),
                createPost({ title: "Post 2", content: "This is a new post." })
                ,lastUpdate()
        ]);

        console.log("User's lastActivityTime:", user.lastActivityTime);
        console.log(user.posts);

        await deleteLastPost();

        console.log(`User last activity time after deleting post`, new Date() - user.lastActivityTime);

        await deleteLastPost();

    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();