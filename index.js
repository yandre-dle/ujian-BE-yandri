const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const PORT = 1988;

var app = express();

app.use(cors());
app.use(bodyParser.json());

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'moviebertasbih',
    port: 3306
});

app.get('/', (req,res) => {
    var msg = conn ? 'Koneksi ke database sukses!' : 'Koneksi ke database gagal!';
    res.send(`<h3>Selamat datang di API Movie Bertasbih! <br/> ${msg}</h3>`);
});

//===================Start > Manage Movies=======================//
//=========Show data set of movies
app.get('/getlistmovies', (req,res) => {
    var sql = 'SELECT * FROM movies;';
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }
        res.send(results);
    });
});

//=========Add/Post to movies
app.post('/addmovie', (req,res) => {
    var data = req.body;

    //Check if data already exist
    var sql = `SELECT * FROM movies WHERE nama = '${data.nama}'`;
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }

        //If data does not exist excute insert query
        if(results.length === 0) {
            var sql = 'INSERT INTO movies SET ?';
            conn.query(sql, data, (err, results) => {
                if(err) {
                    return res.status(500).json({ 
                        message: "There's an error on the server. Please contact the administrator.", error: err.message 
                    });
                }
                res.send(results);
            });
        } else {
            res.send('Data already exist.');
        }
    });
});

//=========Update/Edit movies
app.put('/editmovie/:id', (req,res) => {
    var data = req.body;

    var sql = `SELECT id FROM movies WHERE id = '${req.params.id}'`;
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }

        //If data exist execute update query
        if(results.length > 0) {
            var sql = `UPDATE movies SET ? WHERE id = '${req.params.id}';`
            conn.query(sql, data, (err, results) => {
                if(err) {
                    return res.status(500).json({ 
                        message: "There's an error on the server. Please contact the administrator.", error: err.message 
                    });
                }
                res.send(results);
            });
        } else {
            res.send('Data does not exist.')
        }
    });
});

//=========Delete movies
app.delete('/deletemovie/:id', (req,res) => {

    //Check data if exist
    var sql = `SELECT id FROM movies WHERE id = '${req.params.id}'`;
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }
        //If data exist execute delete query
        if(results.length > 0) {
            var sql = `DELETE FROM movies WHERE id = '${req.params.id}'`;
            conn.query(sql, (err,results) => {
                if(err) {
                    return res.status(500).json({ 
                        message: "There's an error on the server. Please contact the administrator.", error: err.message 
                    });
                }
                res.send(results);
            });
        } else {
            res.send('Data does not exist.');
        }
    });
});
//===================Finish > Manage Movies=======================//


//===================Start > Manage Categories=======================//
//=========Show data set of categories
app.get('/getlistcategories', (req,res) => {
    var sql = 'SELECT * FROM categories;';
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }
        res.send(results);
    });
});

//=========Add/Post to categories
app.post('/addcategory', (req,res) => {
    var data = req.body;
    console.log(data)

    //Check if data already exist
    var sql = `SELECT nama FROM categories WHERE nama = '${data}'`;
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }

        //If data does not exist excute insert query
        if(results.length === 0) {
            var sql = 'INSERT INTO categories SET ?';
            conn.query(sql, data, (err1, results1) => {
                if(err) {
                    return res.status(500).json({ 
                        message: "There's an error on the server. Please contact the administrator.", error: err.message 
                    });
                }
                res.send(results1);
            });
        } else {
            res.send('Data already exist.');
        }
    });
});

//=========Update/Edit categories
app.put('/editcategory/:id', (req,res) => {
    var data = req.body;
    //Check data if exist
    var sql = `SELECT id FROM categories WHERE id = '${req.params.id}'`;
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }
        //Execute update query if data exist
        if(results.length > 0) {
            var sql = `UPDATE categories SET ? WHERE id = '${req.params.id}';`
            conn.query(sql, data, (err1, results1) => {
                if(err) {
                    return res.status(500).json({ 
                        message: "There's an error on the server. Please contact the administrator.", error: err.message 
                    });
                }
                res.send(results1);
            });
        } else {
            res.send('Data does not exist.');
        }
    });
});

//=========Delete categories
app.delete('/deletecategory/:id', (req,res) => {
    //Check data if exist
    var sql = `SELECT id FROM categories WHERE id = '${req.params.id}'`;
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }
        //Execute delete query if data exist
        if(results.length > 0) {
            var sql = `DELETE FROM categories WHERE id = '${req.params.id}'`;
            conn.query(sql, (err1,results1) => {
                if(err1) {
                    return res.status(500).json({ 
                        message: "There's an error on the server. Please contact the administrator.", error: err.message 
                    });
                }
                res.send(results1);
            });
        } else {
            res.send(`Data does not exist.`);
        }
    });
});
//===================Finish > Manage Categories=======================//


//===================Start > Connect Movies & Categories =======================//
//=========Show data connection list of movies & categories
app.get('/getlistmovcat', (req,res) => {
    var sql = `SELECT 
                movies.nama AS NamaMovies,
                categories.nama AS NamaCategories
                FROM categories
                JOIN movcat ON movcat.idcategory = categories.id
                JOIN movies ON movcat.idmovie = movies.id`;
    conn.query(sql, (err, results) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", error: err.message 
            });
        }
        res.send(results);
    });
});

//=========Add connection list movies & categories
app.post('/addmovcat', (req,res) => {
    var { namaMovie, namaCategory } = req.body;

    //Check if data already exist
    var sql =  `SELECT movcat.id 
                FROM movcat
                JOIN categories
                ON movcat.idcategory = categories.id
                JOIN movies ON movcat.idmovie = movies.id
                WHERE movies.nama = '${namaMovie}' AND categories.nama = '${namaCategory}';`;
    conn.query(sql, (err, result) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", 
                error: err.message 
            });
        }

        //If data does not exist excute insert query
        if(result.length === 0) {
            var sql =   `INSERT INTO movcat VALUES
                        (NULL, (SELECT id FROM movies WHERE nama = '${namaMovie}'), 
                        (SELECT id FROM categories WHERE nama = '${namaCategory}'));`;
            conn.query(sql, (err1, results1) => {
                if(err1) {
                    return res.status(500).json({ 
                        message: "There's an error on the server. Please contact the administrator.", error: err.message 
                    });
                }
                res.send(results1);
            });
        } else {
            res.send(`Data already exist.`);
        }
    });
});

//=========Delete connection list movies & categories
app.delete('/deletemovcat', (req,res) => {
    var { namaMovie, namaCategory } = req.body;

    //Check data if exist
    var sql =  `SELECT movcat.id 
                FROM movcat
                JOIN categories
                ON movcat.idcategory = categories.id
                JOIN movies ON movcat.idmovie = movies.id
                WHERE movies.nama = '${namaMovie}' AND categories.nama = '${namaCategory}';`;

    conn.query(sql, (err, result) => {
        if(err) {
            return res.status(500).json({ 
                message: "There's an error on the server. Please contact the administrator.", 
                error: err.message 
            });
        }

        //If data exist execute delete query
        if(result.length > 0){
           var sql =   `DELETE movcat FROM movcat
                        JOIN categories ON movcat.idcategory = categories.id
                        JOIN movies ON movcat.idmovie = movies.id
                        WHERE (movies.nama = '${namaMovie}') AND (categories.nama = '${namaCategory}');`;

            conn.query(sql, (err1, results1) => {
                if(err1) {
                    return res.status(500).json({ 
                        message: "There's an error on the server. Please contact the administrator.", 
                        error: err.message 
                    });
                }
                res.send(results1);
            }) 
        } 
        else {
            res.send(`Data does not exist.`);
        }
    })
});
//===================Finish > Connect Movies & Categories =======================//


app.listen(PORT, () => console.log('Node is running, APi active at ' + PORT));
