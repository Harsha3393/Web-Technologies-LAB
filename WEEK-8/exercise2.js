const student = {
    id: 101,
    name: "Priya",
    department: "CSE",
    marks: 92
};

const { id, name, department, marks } = student;

console.log(id, name, department, marks);

let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 75) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else {
    grade = "D";
}

const updatedStudent = {
    ...student,
    grade: grade
};

console.log(updatedStudent);