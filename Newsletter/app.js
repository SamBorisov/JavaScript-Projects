const express = require("express");
const bodyParesr = require("body-parser");
const https = require("https");
const { response } = require("express");
const request = require("request")

const app = express();

app.use(express.static("public"))
app.use(bodyParesr.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/singup.html")
})


app.post("/", (req,res) => {

    const firstName = req.body.fn;
    const lastName = req.body.ln;
    const email = req.body.em;

    // res.send(firstName + " " + lastName + " " + email)
    const data = {
        members:[{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };
    const jsonData = JSON.stringify(data);

    const url = "YOUR_URL";

    const options = {
        method: "POST",
        user: "User:YOUR_KEY" 
    }

    const request = https.request(url, options, (response) => {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html")
        } else {
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
})

app.post("/failure", (req, res) => {
    res.redirect("/")
})







app.listen(3000)