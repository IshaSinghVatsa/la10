const fs = require("fs");
const users = require("./data.json")
const express = require("express");
const app = express();





app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("Server is now active on localhost:8080");
});




//reading the file:-
fs.readFile('./data.json', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(JSON.parse(data));
});

// defining new users
let user =  {tick_id: 101, match_name: "Football", cust_name: "Isha Singh Vatsa", 
        match_date:"2022-03-23",age:30, amount:3000
    
};

//adding new data to users object
users.push(user);

//writing to the file
fs.writeFile("data.json", JSON.stringify(users), err => {

    if (err) throw err;

    console.log("done writing to the file"); //success
});

