import client from '../db/elephantsql.js';

export const getSingleExit = (req, res) => {
    const {
        params: {id}
    } = req; 
    try {
        client.query(`SELECT * FROM recipes WHERE id = ${id};`, (err, result) => {
          if (err) {
            return res.status(404).json({msg: `Recipe with id of ${id} does not exist. ${err.message}`})
          }
          if (result.rows.id == null) {
            return res.status(404).json({msg: `Recipe with id of ${id} does not exist.`})
          }
          console.log(result)
          res.status(201).send(result.rows);
        });
      } catch (error) {
        res.status(400).json({ error: 'Recipe not found' });
      }
};

export const getExits = (req, res) => {
    try {
        // TODO - CONNECT TO EXIT POINT DATABASE
        client.query(`SELECT * FROM test;`, (err, result) => {
          if (err) {
            return res.status(404).json({msg: `No exits found. ${err.message}`})
          }
          res.status(201).send(result.rows);
        });
      } catch (error) {
        // TODO - FIGURE OUT ERROR HANDLING TO PASS STATUS CODES AND ERROR MESSAGES
        // res.status(400).json({ error: 'Recipe not found' });
        next(error)
      }
};