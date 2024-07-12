#!/usr/bin/node
// HTTP BASICS :

// console.log('Express Tutorial')
// const http = require('http')
// const {readFileSync} = require("fs")
// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyles = readFileSync('./navbar-app/styles.css')
// const homeLogo = readFileSync('./navbar-app/logo.svg')
// const homeScript = readFileSync('./navbar-app/browser-app.js')

// const { application } = require('express');

// const { reset } = require('nodemon')
// const server = http.createServer((req, res) => {
//     console.log("User Hit The Server")
//     const Url = req.url;
//     if(Url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write(homePage)
//         res.end()
//     } else if(Url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write("<h1>About Page</h1>")
//         res.end()
//     } else if(Url === '/styles.css') {
//             res.writeHead(200, {'Content-Type': 'text/css'})
//             res.write(homeStyles)
//             res.end()
//     } else if (Url === '/logo.svg') {
//         res.writeHead(200, {'content-Type': 'image/svg+xml'})
//         res.write(homeLogo)
//         res.end()
//     } else if (Url === '/browser-app.js') {
//             res.writeHead(200, {'content-Type': 'text/javascript'})
//             res.write(homeScript)
//             res.end()
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         res.write("<h1>Page Not Found</h1>")
//         res.end()
//     }
// })
// server.listen(5000)


// ===========================================================


// Express:
    // app.get
    // app.post
    // app.put
    // app.delete
    // app.all
    // app.use
    // app.listen

// const express = require('express');
// const app = express();
// const path = require('path');

// app .listen(5000, () => {
//     console.log("Server Is Listening On Port 5000.../")
// })
// app.use(express.static('./puplic'))
// app.get('/', (req, res) => {
     // res.send('Home Page')
     // res.status(200).send('Home Page')
//    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
     // adding to static assets
// })
// app.get('/about', (req, res) => {
//     res.send('About Page')
// })
// app.all('*', (req, res) => {
//     res.status(404).send('<h1>Resources Not Found</h1>')
// })

// ===========================================================
// const express = require('express');
// const app = express();
// const { products } = require('./data');

// app.get('/', (req, res) => {
//     // res.json(products);
//     res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
// });

// app.get('/api/products', (req, res) => {
//     const newProducts = products.map((product) => {
//         const { id, name, image } = product;
//         return { id, name, image };
//     });
//     res.json(newProducts);
// });

// app.get('/api/products/1', (req, res) => {
//     const {productID} = req.params;
//     const single = products.find((product) => product.id === 1);
//     res.json(single);
// });

// app.get('/api/products/:productID', (req, res) => {
//     const {productID} = req.params;
//     const single = products.find((product) => product.id === Number(productID));
//     if(!single) {
//         return res.status(404).send('Product Does Not Exist')
//     }
//     console.log(single);
//     res.json(single);
// });

// app.get('/api/v1/query', (req, res) => {
//     let storerdProducts = [...products];
//     const { search, limit } = req.query;

//     if (search) {
//         storerdProducts = storerdProducts.filter((product) => {
//             return product.name.startsWith(search);
//         });
//     }

//     if (limit) {
//         storerdProducts = storerdProducts.slice(0, Number(limit));
//     }
//     if (storerdProducts.length < 1) {
//         res.status(200).send('No Products Match Your Search')
//         return res.status(200).json({sucess:true, data:[]})
//     }
//     res.status(200).json(storerdProducts);
// });

// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//     console.log(req.params);
//     res.send("Hello World");
// });

// app.listen(5000, () => {
//     console.log("Server Is Listening On Port 5000...");
// });

// ===========================================================

// const express = require('express')
// const app = express()
// const author = require('./author')
// const logger = require("./logger")
// const morgan = require('morgan')
// req => middleware => res
// Use Vs Route
// Options - our own / express / Third Party

// app.use([logger, author])
// app.use(morgan('tiny'))
// app.get('/', (req, res)  => {
//     res.send('Home')
// })
// app.get('/about', (req, res) => {
//     res.send('About')
// })
// app.get('/api/items', (req, res) => {
//     console.log(req.user)
//     res.send('items')
// })
// app.get('/cat', [logger, author], (req, res) => {
//     console.log(req.user)
//     res.send('Meow')
// })
// app.listen(5000, () => {
//     console.log("Server Is Listening On Port 5000")
// })

const express = require('express')
const app = express()
const people = require('./routes/people')
app.use(express.static('./methods-public'))
const auth = require('./routes/auth')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/people/', people)
app.use('/login', auth)
// Moved To Routes/auth
// router.get('/', (req, res) => {
//     res.status(200).json({ success: true, data: people})
// })

// ====================================================

// Moved To People File Inside Routes Dir
// app.get('/api/people', (req, res) => {
//     res.status(200).json({ success: true, data: people})
// })

// app.post('/api/people', (req, res) => {
//     const { name } = req.body;
//     if(!name) {
//         return res.status(400).json({success:false, msg:'Please provide name value'})
//     }
//     res.status(201).json({success:true, person:name})
// });

// app.post('/api/people/postman', (req, res) => {
//     const { name } = req.body;
//     if(!name) {
//         return res.status(400).json({success:false, msg:'Please provide name value'})
//     }
//     res.status(201).json({success:true, data:[...people, name]}) 
// })


// app.put('/api/people/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     const person = people.find((person) => person.id === Number(id));
//     if(!person) {
//         return res
//             .status(404)
//             .json({success:false, msg:`No person with id ${req.params.id}`})
//     }
//     const newPerson = people.map((person) => {
//         if(person.id === Number(req.params.id)) {
//             person.name = name
//         }
//         return person
//     })
//     res.status(200).json({success:true, data:newPerson})
// });

// app.delete('/api/people/:id', (req, res) => {
//     const person = people.find((person) => person.id === Number(req.params.id));
//     if (!person) {
//         return res
//             .status(404)
//             .json({ success: false, msg: `No person with id ${req.params.id}` });
//     }
//     people = people.filter((person) => person.id !== Number(req.params.id));
//     res.status(200).json({ success: true, data: people });
// });

app.listen(5000, () => {
    console.log("Server Is Listening On Port 5000")
})
