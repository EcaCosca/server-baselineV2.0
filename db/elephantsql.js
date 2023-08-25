let pg = require('pg');

let conString = process.env.SQL_URL;

let client = new pg.Client(conString);

// DB CONNECTION AND ERROR HANDLING 
client.connect((err) => {
  if (err) {
    return console.error('Could not connect to postgres', err);
  }
  console.log("Connected to SQL DB")
});

module.exports = client;