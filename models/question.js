var mongoose = require('mongoose');
var questionSchema = mongoose.Schema(
    {
        "question": {
            type: String,
            required: true
        },
        "choices": {
            type: [String],
            required: true
        },
        "answer": {
            type: Number,
            required: true
        },
    }
);
mongoose.model('question', questionSchema);