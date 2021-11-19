const mongoose = require('mongoose');
require('dotenv').config() ;

/**
 * init database connection
 * to be called once when starting app
 * and use connection for all transactions
 * @returns {Promise<void>}
 */
const mongoConnect = async () =>{
  await mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
}

module.exports = mongoConnect;