import pg from 'pg';

let conString = process.env.SQL_URL;

let client = new pg.Client(conString);

// DB CONNECTION AND ERROR HANDLING 
client.connect((err) => {
  if (err) {
    return console.error('Could not connect to postgres', err);
  }
  console.log("Connected to SQL DB")
});

export default client;