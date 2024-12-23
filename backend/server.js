import express from 'express'

const app = express();

app.use(express.static('dist'))

// app.get('/',(req,res)=>{
//     res.send('Server is ready')
// });

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id : 1,
            title : "First joke",
            content : "This is a joke"
        },
        {
            id : 2,
            title : "Second joke",
            content : "This is a joke"
        },
        {
            id : 3,
            title : "Third joke",
            content : "This is a joke"
        },
        {
            id : 4,
            title : "Fourth joke",
            content : "This is a joke"
        },
        {
            id : 5,
            title : "Fifth joke",
            content : "This is a joke"
        }
    ];

    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})

