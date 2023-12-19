# TSIS PROJECT react-fall2023

## Project description

This project named "BlogBridges" - is web application about posts something like forum.

## Installation and Running

1. Clone the repository to your computer:

### `git clone https://github.com/your-user/react-project.git`

2. Navigate to the project directory:

### `cd react-project`

3. Install dependencies:

### `npm install`

4. Start the project:

### `npm start`

The application will be accessible at http://localhost:3000.

## File structure

+ src/
  + Api/
  + components/
  + hooks/
  + pages/
  + router/
  + styles/
  + utils/
  + App.js
  + index.js

## Key features

1. List of posts from fake API https://jsonplaceholder.typicode.com/posts/
2. Post manipulations:
   + Adding
   + Deleting
   + Like
   + Dislike
   + Search
   + Filter by:
        + Post title
        + Post body
3. Comments for each post
4. Basic authentication
5. Routing:
   + Public pages - for guest users
   + Private pages - for authorized users