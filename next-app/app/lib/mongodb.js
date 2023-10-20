const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected Successfully!');
        }
    } catch (error) {
        console.error('Error Connectiong', error);
    }
};

export default connectDB;
