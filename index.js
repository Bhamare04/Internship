const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost:27017/expressDB")
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err))

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number
  },
  { collection: "students" } // 👈 FORCE collection name
)

const Student = mongoose.model("Student", userSchema)

app.use(express.json())

// GET ALL STUDENTS
app.get("/students", async (req, res) => {
  const students = await Student.find()
  res.json(students)
})

// ADD STUDENT
app.post("/students", async (req, res) => {
  const student = new Student(req.body)
  await student.save()
  res.send("Student added")
})

// UPDATE STUDENT
app.put("/students/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(student)
})

// DELETE STUDENT
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id)
  res.send("Student deleted")
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})
