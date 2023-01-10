// const router =require('express').Router();

// const fs = require('fs');

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
// router.get('/about', (req, res) => {
//     res.send('<h3>This is About page</h3>');
// });


// router.get('/help', (req, res) => {
//     res.send('<h3>This is Help page</h3>');
// });


// module.exports = router;



// best way 
const router =require('express').Router();
const { homeController, aboutController, helpController } = require('./controllers');


router.get('/', homeController);

// router.get('/about', (req, res) => {
//     res.send('<h3>This is About page</h3>');
// });
router.get('/about', aboutController);


router.get('/help', helpController);


module.exports = router;
