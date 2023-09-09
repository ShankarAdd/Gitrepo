//PROMISE ALL CONCEPT
     
    //First we need to create a user
    const user = {
        name: 'Shankar',
        lastActivityTime: null,
        posts: [],
        };
      
      // Updating the user's lastActivityTime
      function lastUpdate() {
        return new Promise((resolve) => {
          setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve();
          }, 1000);
        });
      }
      
      // Function to create a post
      function createPost(post) {
        return new Promise((resolve) => {
          setTimeout(() => {
            user.posts.push(post);
            resolve(post);
          }, 1000);
        });
      }
      function deleteLastPost() {
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
      //Here it takes the array of Promises
      Promise.all([createPost({ title: "Post 1", content: "Whatever" }),createPost({ title: "Post 2", content: "This is a new post." }), lastUpdate()])
        .then(([createdPost]) => {
          console.log("User's lastActivityTime:", user.lastActivityTime);
          console.log(user.posts);
          deleteLastPost()
          .then(()=>{
            console.log(`User last activity time after deleting post`, new Date() - user.lastActivityTime);
          })
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });