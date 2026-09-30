const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

let books = [];

app.post("/books", (req, res) => {
    const book = {
        id: books.length + 1,
        name: req.body.name
    };

    books.push(book);
    res.send(book);
});

app.delete("/books/:id", (req, res) => {
    books = books.filter(book => book.id != req.params.id);
    res.send("Book deleted");
});

app.listen(PORT, () => {
    console.log("server running");
});
