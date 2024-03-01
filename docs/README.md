# Fantastical Foundlings—Server

<!-- [Deployed Site](https://fantastical-foundlings.vercel.app/) -->

# 💻 Tech Stack
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Dungeons & Dragons](https://img.shields.io/badge/Dungeons%20&%20Dragons-ED1C24.svg?style=for-the-badge&logo=dungeonsanddragons&logoColor=white)

# 🧠 Contributors
### Erica Hagle
[![LinkedIn][linkedin-shield]][linkedin-url-eh] 
[![GitHub][github-shield-eh]][github-url-eh]

# 💭 Abstract
Building onto a front end Showcase project from Turing School of Software and Design's Front End Web Development program, Mod 3, this repo houses a back end for the Fantastical Foundlings app. Specifically, data for "staff bios" has been added and is consumed by the front end React application via RESTful APIs. MongoDB/Mongoose is used for the database, and Node.js/Express.js is used for the API.

I specifically chose MongoDB to avoid the added complexity of SQL in such a quick project for which I had no technical guidance. Being already 100% stretch tech, I decided it made more sense to go with a NoSQL database. It also gave me a chance to build a full MERN stack application. As MERN is quite popular, I wanted to dig into the stack and understand how it all worked together.

# 📝 Context
This application was built as Part 2 of the Capstone project of Turing School of Software and Design's Front End Web Development program, Mod 4. We were given 10 days, from kick-off, to complete and submit the project for evaluation from scratch using the [provided rubric](https://mod4.turing.edu/projects/capstone_expansion/rubric.html).

<!-- # 🎬 Preview -->

# 🔧 Installation
1. Clone this repository to your local machine
2. Navigate (`cd`) to your local directory containing the repository
3. To install the dependencies 
    ```
    npm install
    ```
4. To start the local server, http://localhost:8080/
    ```
    nodemon index.js
    ```
5. All endpoints may be run in Postman 
6. Visit [front end repo](https://github.com/ericahagle/fantastical-foundlings), follow installation instructions, and switch to `feature/about-page` branch




# 📃 JSON Contract
## Endpoints
RESTful APIs were created in this repo for all of the following endpoints

### [POST] createStaffBio
Creates a new staff bio
```
http://localhost:8080/api/staff/
```
Request Body:
```json
{
    "name": "Erica Hagle",
    "title": "Founder",
    "image": "https://avatars.githubusercontent.com/u/133910120?v=4",
    "fave": "Xorn" 
}
```
Response Body:
```json
{
    "success": true,
    "id": "65de849581b03d26c08f3719",
    "message": "Staff Bio created!"
}
```

### [PUT] updateStaffBio
Updates an existing staff bio, using `_id`
```
http://localhost:8080/api/staff/:id
```
Request Body:
```json
{
    "name": "Erica Hagle",
    "title": "Founder",
    "image": "https://avatars.githubusercontent.com/u/133910120?v=4",
    "fave": "Buffy" 
}
```
Response Body:
```json
{
    "success": true,
    "id": "65de849581b03d26c08f3719",
    "message": "Staff Bio created!"
}
```

### [DELETE] deleteStaffBio
Deletes an existing staff bio, using `_id`
```
http://localhost:8080/api/staff/:id
```
Response Body:
```json
{
    "success": true,
    "data": {
        "_id": "65de849581b03d26c08f3719",
        "createdAt": "2024-02-28T00:55:49.885Z",
        "updatedAt": "2024-02-29T02:41:42.599Z",
        "__v": 0,
        "image": "https://avatars.githubusercontent.com/u/133910120?v=4",
        "fave": "Buffy",
        "name": "Erica Hagle",
        "title": "Founder"
    }
}
```

### [GET] getStaffBioById
Gets an existing staff bio, using `_id`
```
http://localhost:8080/api/staff/:id
```
Response Body:
```json
{
    "success": true,
    "data": {
        "_id": "65e12c6188c089c7ea5ccd3d",
        "name": "Erica Hagle",
        "title": "Founder",
        "image": "https://avatars.githubusercontent.com/u/133910120?v=4",
        "fave": "Buffy",
        "createdAt": "2024-03-01T01:16:17.665Z",
        "updatedAt": "2024-03-01T01:16:17.665Z",
        "__v": 0
    }
}
```

### [GET] getStaffBios*
Gets all existing staff bios
```
http://localhost:8080/api/staff
```
Response Body:
```json
{
    "success": true,
    "data": [
        {
            "_id": "65dfef324a5eaa3b77db2360",
            "name": "Buffy",
            "title": "Mascot",
            "image": "https://s3.amazonaws.com/keybase_processed_uploads/21062f162873268afdc01d5ff7779b05_360_360.jpg",
            "fave": "Herself",
            "createdAt": "2024-02-29T02:42:58.349Z",
            "updatedAt": "2024-02-29T02:42:58.349Z",
            "__v": 0
        },
        {
            "_id": "65e12c6188c089c7ea5ccd3d",
            "name": "Erica Hagle",
            "title": "Founder",
            "image": "https://avatars.githubusercontent.com/u/133910120?v=4",
            "fave": "Buffy",
            "createdAt": "2024-03-01T01:16:17.665Z",
            "updatedAt": "2024-03-01T01:16:17.665Z",
            "__v": 0
        }
    ]
}
```
#### *The only endpoint being used on the front end in this iteration.


# 🕵️ Testing 
While testing is always very important to me, this first iteration was already a lot to try and learn on my own in a short time, so I have not included testing yet. I plan to implement some tests as a next step in the evolution of this application. 

# 💡 Learning Goals
- Gain competency with MERN stack applications
- Learn how to set up a database
- Learn how to build APIs

# 🚧 Challenges & Wins 🌟
## 🚧 Challenges
- Learning how to build a back end for the first time, with no assistance!
- Trying to get file uploads to work (Spoiler Alert: I ended up scrapping that idea for this iteration and am passing URLs for images as strings)
- Figuring out how to document for back end—surprisingly, it's a little different than how I document for front end

## 🌟 Wins
- I. Got. It. To. Work. 🙌
- Seriously though, I have never built a full back end before. I managed to research the best options, run through some courses/tutorials on the internets, and then actually implement for my own existing project! There's plenty to iterate on, and I'm excited to continue working on this back end in the future.
- Hooking up my React app with a new page route quickly and relatively easily (Hooray! I remember how to write front end code!) and seeing the data magically appear was heaven.

<!-- GitHub & LinkedIn Shields and URLs -->
[github-shield-eh]: https://img.shields.io/badge/GitHub-black.svg?style=for-the-badge&logo=github
[github-url-eh]: https://github.com/ericahagle
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-eh]: https://www.linkedin.com/in/ericahagle