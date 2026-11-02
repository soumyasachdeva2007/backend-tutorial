require('dotenv').config();

const connectDB = require('./config/database');
const app = require('./app');

const PORT = process.env.PORT || 5001;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
