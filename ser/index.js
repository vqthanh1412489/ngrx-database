const express = require('express');
const bodyParser = require('body-parser');
const Word = require('./db');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
    });
// Doc tat ca tu vung

app.get('/word', (req, res) => {
    // send tat ca cac tu vung hien co
    Word.find({})
    .then(words => res.send({ isSuccess: true, words }))
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.get('/word/:id', (req, res) => {
    // send tat ca cac tu vung hien co
    const { id } = req.params;
    Word.findById(id)
    .then(word => res.send({ isSuccess: true, word }))
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.post('/word', (req, res) => {
    // Them 1 tu vung
    const { en, vn } = req.body;
    const word = new Word({ en, vn });
    word.save()
    .then(word => res.send({ isSuccess: true, word }))
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.put('/word', (req, res) => {
    const { en, vn, isMemorized, id } = req.body;
    Word.findByIdAndUpdate(id, { en, vn, isMemorized })
    .then(word => res.send({ isSuccess: true, word }))
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
    // Update 1 tu vung
});

app.delete('/word/:id', (req, res) => {
    // Xoa 1 tu vung cu the
    const { id } = req.params;
    Word.findByIdAndRemove(id)
    .then(word => res.send({ isSuccess: true, word }))
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.listen(3009, () => console.log('Server started'));
