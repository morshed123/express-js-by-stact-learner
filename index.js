// //Part 1

// const express = require('express');
// const fs = require('fs');
// const cors = require('cors');
// const morgan = require("morgan");


// // Application call 
// const app = express();


// //Writing  Listen or running the app for port number 
// const port = 4000;

// // Middleware call 
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(cors());
// app.use(globalMiddleware);

// //// didn't working
// // app.use(
// //     {
// //         // express.json(),
// //         // express.urlencoded({ extended: true }),
// //         // morgan('dev'),
// //         // cors()
// //         // globalMiddleware
// //     }
// // )

// app.get('/', (req, res) => {
//     fs.readFile('./pages/index.html', (err, data) => {
//         if (err) {
//             console.log('Error', err);
//             res.send('<h1> Some thing went wrong</h1>');
//         } else {
//             res.write(data);
//             res.end();
//         }
//     })
// });

// // app.get('/about', (req, res) => {
// //     res.send('<h3>This is About page</h3>');
// // });
// app.get('/about', localMiddleware, (req, res) => {
//     res.send('<h3>This is About page</h3>');
// });


// app.get('/help', (req, res) => {
//     res.send('<h3>This is Help page</h3>');
// });



// // Listen or running the app for port number 
// // app.listen(4000, ()=> {
// //     console.log(`Listenning the port 4000`)
// // });

// app.listen(port, ()=> {
//     console.log(`Listenning the port ${port}`)
// })


// // Handller 
// // function middlewareSignature(req, res, next) {

// //     next(),
// // };

// function globalMiddleware(req, res, next) {
//     console.log(`${req.method} - ${req.url}`);
//     console.log(' I am a global middleware');

//     if (req.query.bad) {
//         return res.status(400).send('Bad Request');  //note:( url e hit korle:  url_name_daw?=bad=true tha hole bad request dektey paba )
//     }

//     next();
// };

// function localMiddleware(req, res, next) {
//     console.log('I am a local Middleware');

//     next();
// };



// // //Part 2 with router

// const express = require('express');
// const fs = require('fs');
// const cors = require('cors');
// const morgan = require("morgan");


// // Application call 
// const app = express();
// const router = express.Router();


// //Writing  Listen or running the app for port number 
// const port = 4000;

// // Middleware call 
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(cors());
// app.use(globalMiddleware);
// app.use(router);


// //// didn't working
// // app.use(
// //     {
// //         // express.json(),
// //         // express.urlencoded({ extended: true }),
// //         // morgan('dev'),
// //         // cors()
// //         // globalMiddleware
// //     }
// // )

// router.get('/', (req, res) => {
//     fs.readFile('./pages/index.html', (err, data) => {
//         if (err) {
//             console.log('Error', err);
//             res.send('<h1> Some thing went wrong</h1>');
//         } else {
//             res.write(data);
//             res.end();
//         }
//     })
// });

// // router.get('/about', (req, res) => {
// //     res.send('<h3>This is About page</h3>');
// // });
// router.get('/about', localMiddleware, (req, res) => {
//     res.send('<h3>This is About page</h3>');
// });


// router.get('/help', (req, res) => {
//     res.send('<h3>This is Help page</h3>');
// });



// // Listen or running the app for port number 
// // router.listen(4000, ()=> {
// //     console.log(`Listenning the port 4000`)
// // });

// app.listen(port, ()=> {
//     console.log(`Listenning the port ${port}`)
// })


// // Handller 
// // function middlewareSignature(req, res, next) {

// //     next(),
// // };

// function globalMiddleware(req, res, next) {
//     console.log(`${req.method} - ${req.url}`);
//     console.log(' I am a global middleware');

//     if (req.query.bad) {
//         return res.status(400).send('Bad Request');  //note:( url e hit korle:  url_name_daw?=bad=true tha hole bad request dektey paba )
//     }

//     next();
// };

// function localMiddleware(req, res, next) {
//     console.log('I am a local Middleware');

//     next();
// };


// //Part 3 with separate router file

const express = require('express');
const cors = require('cors');
const morgan = require("morgan");


// Application call 
const app = express();
const router = express.Router();


//Writing  Listen or running the app for port number 
const port = 4000;

// Middleware call 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(globalMiddleware);
app.use(require('./routes'));

app.use(express.static('./public'));

// Error Handling Middleware

// //manually use but not best way
// app.use((req, res, next)=> {
//     res.status(404).send('<h1> 404 Not Found</h1>');
// });
// // // or, 
// // app.use('*', (req, res)=> {
// //     res.status(404).send('<h1> 404 Not Found</h1>');
// // });

// document prefer kore
//Locally & Globally Same shape e niya aser jonno use korbo 
app.use((req, res, next)=> {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
});

// Globally use 
app.use((error, req, res, next) => {
    console.log('Error', error);
    if (error.status) {
    //    return  res.status(error.status).send(error.message);
       return  res.status(error.status).send(`<h1>${error.message}</h1>`);
    }
    res.status(500).send('<h1>Something went wrong</h1>') // 500 means server internal errror
});


//// didn't working
// app.use(
//     {
//         // express.json(),
//         // express.urlencoded({ extended: true }),
//         // morgan('dev'),
//         // cors()
//         // globalMiddleware
//     }
// )



// Listen or running the app for port number 
// router.listen(4000, ()=> {
//     console.log(`Listenning the port 4000`)
// });

app.listen(port, ()=> {
    console.log(`Listenning the port ${port}`)
})


// Handller 
// function middlewareSignature(req, res, next) {

//     next(),
// };

function globalMiddleware(req, res, next) {
    console.log(`${req.method} - ${req.url}`);
    console.log(' I am a global middleware');

    if (req.query.bad) {
        return res.status(400).send('Bad Request');  //note:( url e hit korle:  url_name_daw?=bad=true tha hole bad request dektey paba )
    }

    next();
};

function localMiddleware(req, res, next) {
    console.log('I am a local Middleware');

    next();
};

