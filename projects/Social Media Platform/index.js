// Task 3: Social Media Platform
// Develop a TypeScript application for a social media platform. Define the following types and interfaces:
// Define an interface Profile with properties like id, username, bio, and an array of Posts.
// Create a type Like that represents an object with user (of type User) and timestamp.
// Define an interface Comment with properties like id, user (of type User), content, and timestamp.
// Implement a function that finds the most liked post and the user who posted it
import chalk from 'chalk';
let user = [
    {
        id: 1,
        username: 'Hmzi'
    },
    {
        id: 1,
        username: 'Saif'
    },
    {
        id: 1,
        username: 'jamal'
    },
];
let posts = [
    {
        id: 1,
        title: 'Sunset',
        username: user[0].username,
    },
    {
        id: 2,
        title: 'Natural Beauty',
        username: user[1].username,
    },
    {
        id: 3,
        title: 'Fashion',
        username: user[2].username,
    },
];
let profile = {
    id: 1,
    username: user[0],
    bio: 'Software Developer',
    posts: [posts[0], posts[1], posts[2]],
};
let like = [
    {
        id: 1,
        user: [user[0], user[1]],
        content: posts[0],
        timestamp: new Date(),
    },
    {
        id: 2,
        user: [user[0], user[1], user[2]],
        content: posts[1],
        timestamp: new Date(),
    },
    {
        id: 3,
        user: [user[1]],
        content: posts[2],
        timestamp: new Date(),
    },
];
like.sort((a, b) => b.user.length - a.user.length);
console.log(like);
function mostLikedPost() {
    console.log(chalk.bold.yellow(`Most liked post is ${like[0].content.title}, and posted by ${like[0].content.username}`));
}
mostLikedPost();
// interface Posts {
//     id : number ,
//     title : string,
//     username :string,
// }
// interface Profile {
//     id : number
//     username: User
//     bio: string,
//     posts: Posts[],
// }
// type User = {
//     id : number,
//     username : string
// }
// let user : User[]=[{
//     id : 1,
//     username : 'Saif'
// },
// {
//     id : 1,
//     username : 'Hamza'
// },
// {
//     id : 1,
//     username : 'Awais'
// }
// ]
// let posts : Posts[]=[{
//     id : 1 ,
//     title : 'software engineer' ,
//     username :user[0].username,
// },
// {
//     id : 1 ,
//     title : 'software engineer' ,
//     username :user[1].username,
// },
// {
//     id : 1 ,
//     title : 'software engineer' ,
//     username :user[2].username,
// }
// ]
