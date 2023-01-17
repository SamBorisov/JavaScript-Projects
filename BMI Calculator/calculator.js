const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.post("/",(req, res) => {
    
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send("The sum is: " + result)
})

app.get("/bmi",(req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmi", (req, res) => {
    let h = parseFloat(req.body.h);
    let w = parseFloat(req.body.w);

    let restult = w/Math.pow(h, 2);

    function BMI (weight, height) {
          
        
        if (restult < 18.5) {
            res.send( "Your BMI is "+ restult +", so you are underweight.");
        } else if ( restult >= 18.5 && restult <= 24.9) {
            res.send("Your BMI is "+ restult +", so you have a normal weight.");
        } else if ( restult > 24.9) {
            res.send( "Your BMI is "+ restult +", so you are overweight.")
        }
    }
    BMI(w,h);   

})

app.listen("3000");