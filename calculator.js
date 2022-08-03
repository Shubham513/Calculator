const express=require("express");

const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req,res){
  var num1=Number(req.body.height);
  var num2=Number(req.body.weight);
  var num3=num1*num1;
  var result=num2/num3;

  res.send("Result is "+result);
})
app.listen(3000);
