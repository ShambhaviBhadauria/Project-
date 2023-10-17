import mongoose from 'mongoose';

const { Schema } = mongoose;

const submissionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authorname: {
        type: String,
        required: true
    },
    yearOfPublication: {
        type: String,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    extraInformation: {
        type: String
    },
    responseEmail: {
        type: String,
        required: true
    }
});

const Submission = mongoose.model('submission', submissionSchema);

export default Submission;
