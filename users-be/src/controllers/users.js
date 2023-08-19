//const { validationResult } = require('express-validator');
const connection = require('../db');
const bodyParser = require('body-parser')

const isAlive =   (req, res) => {
    res.send('Hello World!. Current time is : '+ new Date());
};

const getUsers = (req, res) => {
    connection.query('SELECT * from users', (err, rows) => {
        if (err) 
            res.send(err);
        else  
            res.send(rows);
    });
};

const initDatabase = (req, res) => {
    const sqlQuery =  'create table IF NOT EXISTS users(UserID int(11) , Name varchar(40), Login varchar(20), LastLoginTime timestamp, status int(11) )';

    connection.query(sqlQuery, (err) => {
        //if (err) throw err;
        if (err) res.send(err);

        res.send('Table created!')
    });
};

const addUser =  (req, res) => {

    let data = req.body;
    //const errors = validationResult(req);
    if (data.length > 0) {
        res.send(errors.array());
    } else {
        const subscriber = {
            UserID: req.body.UserID,
            Name: req.body.Name,
            Login: req.body.Login,
            LastLoginTime: new Date(),
            status: req.body.status | 'Active'
        };

        const sqlQuery = 'INSERT INTO users SET ?';

        connection.query(sqlQuery, subscriber, (err, row) => {
            if (err) throw err;

            res.send('user added successfully!');
        });
    }
};

module.exports = {
    isAlive,
    getUsers,
    addUser,
    initDatabase

}