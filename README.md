# Posts Star Rating

This is post star rating mechanism API functionality in NodeJS, ExpressJS, MySql.

## Installation

1. Download this repository
2. Create database and table (seeder/dbstructure.sql)
3. Run the seeder file (seeder/dbseeder.js)
4. After all successfull, hit the `npm install` command in the root folder.
5. Start the server

## Usage

1. `POST`  `/api/user/login` => Endpoint for user login
2. `POST`  `/api/user/logout` => Endpoint for user logout (destroy the session)

3. `GET`  `/api/posts/` => Endpoint for get all the posts
4. `POST`  `/api/post/` => Endpoint for create the new post
5. `PUT`  `/api/post/` => Endpoint for update the posts
6. `DELETE`  `/api/post/` => Endpoint for delete the post based on id

7. `GET`  `/api/post-rating/{post_id}` => Endpoint for get the average post rating
8. `POST`  `/api/post-rating` => Endpoint for submit the rating

See my [website](https://yourblogcoach.com) for more programming tutorials.

## License

ISC