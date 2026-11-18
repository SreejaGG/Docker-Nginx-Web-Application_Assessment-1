
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Temporary student storage
let students = [];
let nextId = 1;

// Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// Add a student
app.post("/students", (req, res) => {
    const { name, rollNo, department, email } = req.body;

    if (!name || !rollNo || !department || !email) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const student = {
        id: nextId++,
        name,
        rollNo,
        department,
        email
    };

    students.push(student);
    res.status(201).json(student);
});

// Update a student
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    Object.assign(student, req.body);
    res.json(student);
});

// Delete a student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    students = students.filter(s => s.id !== id);
    res.json({ message: "Student deleted successfully" });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Student Management System running on port ${PORT}`);
});
