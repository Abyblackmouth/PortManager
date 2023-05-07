const { default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 12,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 8,
        trim: true
    }

})
