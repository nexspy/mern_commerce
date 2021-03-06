const app = require('./app');

const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

// setting up config file
dotenv.config({ path: 'server/config/config.env' })

// connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server started at PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode. `)
});
