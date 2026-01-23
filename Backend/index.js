const express = require('express')
const mongoose=require('mongoose')
const app = express();

mongoose.connect("mongodb://localhost:27017/expressDB")
.then(()=> console.log("mongoDB connected"))

.catch(err =>console.log(err))

const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  age : Number
})
const user=mongoose.model("User",userSchema) //ek model database create kela ,ORM object rotation model


app.use(express.json())
app.get('/', async (req, res) => {
   const users = await user.find() 
   res.json(users)
  res.send('Hello World!');
})

app.post('/', (req, res) => {
  res.send("form data submitted");
})
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})