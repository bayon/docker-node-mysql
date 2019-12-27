const app = require('express'); 
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.request(bodyParser.json({
    limit:'8mb'
}));

const PORT = process.env.port || 4000;
const HOST = process.env.host || '0.0.0.0'; 

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || '172.17.0.2', 
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password', 
    database: process.env.MYSQL_DATABASE || 'test'
}) ;

connection.connect((err) => {
    if(err) {
        console.error('error connecting mysql: ',err);

    }else {
        console.log('mysql connection successful'); 
        app.listen(PORT,HOST,(err) => {
            if (err) {
                console.error('Error starting server', err);
            }else{
                console.log('server listening at port ' + PORT);
            }
        });
    }
});

app.get('/', (req,res) => {
    res.json({
        success: true, 
        message: 'Hello world'
    });
});

app.post('/add-student', (req,res) => {
    const student = req.body; 
    const query = 'INSERT INTO students values( ?, ?)';

    connection.query(query, [student.rollNo, student.name], (err, results, fields) => {
        if (err) {
            console.error(err);
            res.json({
                success: false, 
                message: 'Error Occurred'
            });
        }else {
            res.json({
                success: true, 
                message: 'Successfully added student'
            });
        }
    });
});

app.post('/get-students', (req,res) => {
    const query = 'SELECT * FROM students';
    connection.query(query, (err, results, fields)  => {
        if (err) {
            console.error(err);
            res.json({
                success: false,
                message:'Error occurred'
            });
        } else {
            res.json({
                success: true,
                results: results
            });
        }
    });
});

/*
In this file , the api indexin this case. 
We create the connection to mysql and then we use it in a few different 
circumstances. 

*/