const faker = require("faker");
const Seeder = require("mysql-db-seed").Seeder;
require('dotenv').config()

// Generate a new Seeder instance
const seed = new Seeder(
  	10, 
  	process.env.DB_HOST,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	process.env.DB
);

(async () => {
  await seed.seed(
    2,
    "posts", 
    {
      post_content: faker.lorem.paragraph
    }
  )
  seed.exit();
  process.exit();
})();

(async () => {
  await seed.seed(
  	0,
    "users", 
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'e6e061838856bf47e1de730719fb2609' //admin@123
    }
  )
  seed.exit();
  process.exit();
})();

(async () => {
  await seed.seed(
    2,
    "users", 
    {
      username: faker.internet.userName,
      email: faker.internet.email,
      password: faker.internet.password
    }
  )
  seed.exit();
  process.exit();
})();