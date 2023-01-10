const fs = require('fs');


exports.homeController =  (req, res) => {
    // // testing perpuse 
    // const error = new Error('Bad Request');
    // error.status = 404;
    // throw error;

    fs.readFile('./pages/index.html', (err, data) => {
        if (err) {
            console.log('Error', err);
            res.send('<h1> Something went wrong</h1>');
        } else {
            res.write(data);
            res.end();
        }
    })
};

// exports.homeController =  (req, res) => {
//     fs.readFile('./pages/index.html', (err, data) => {
//         if (err) {
//             console.log('Error', err);
//             res.send('<h1> Some thing went wrong</h1>');
//         } else {
//             res.write(data);
//             res.end();
//         }
//     })
// };

// // or, 
// const homeController =  (req, res) => {
//     fs.readFile('./pages/index.html', (err, data) => {
//         if (err) {
//             console.log('Error', err);
//             res.send('<h1> Some thing went wrong</h1>');
//         } else {
//             res.write(data);
//             res.end();
//         }
//     })
// };
// export default homeController;


exports.aboutController =  (req, res) => {
    res.send('<h3>This is About page</h3>');
};

// // or, 
// const aboutController =  (req, res) => {
//     res.send('<h3>This is About page</h3>');
// };
// export default aboutController;

exports.helpController = (req, res) => {
    res.send('<h3>This is Help page</h3>');
}
// // or, 
// const helpController = (req, res) => {
//     res.send('<h3>This is Help page</h3>');
// }
// export default helpController;