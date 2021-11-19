const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config() ;

const mongoConnect = require('./Config/Mongo');


var corsOptions = {
    origin: "http://localhost:8081"
  };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({extended: true  }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ChatNow application." });
});

require('./Routes/auth.routes')(app);
require('./Routes/user.routes')(app);

const initApp = async () =>{
    try{
      await mongoConnect();
     // set port, listen for requests
      const PORT = process.env.HTTP_PORT || 8080;
      app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
});

    } catch (e) {
      throw e;
    }
  }
  
  initApp().catch(err => console.log(`Error on startup! ${err}`));

