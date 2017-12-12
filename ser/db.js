const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/rn0411', { useMongoClient: true });

const wordSchema = new Schema({
    vn: { type: String, required: true, trim: true },
    en: { type: String, required: true, trim: true, unique: true },
    isMemorized: { type: Boolean, default: false, required: true }
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;

// const w = new Word({ vn: 'ba', en: 'three' });
// w.save()
// .then(x => console.log(x))
// .catch(err => console.log(err.message));

// Word.find({})
// .then(words => console.log(words))

// Word.findById('5a220a69e5869f0e6b0ef4b6')
// .then(word => console.log(word))
// .catch(err => console.log(err.message));

// Word.remove({ en: 'three' })
// .then(x => console.log(x));

// Word.findByIdAndRemove('5a220a69e5869f0e6b0ef4b6')
// .then(x => console.log(x));

// Word.findByIdAndUpdate('5a22055ad32c6d0d16d58963', { vn: 'MOT' })
// .then(x => console.log(x))
// .catch(err => console.log(err));

/*
    table, record, relationship  ||| collection, document, --
*/
