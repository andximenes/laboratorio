"use strict"

const students = [
    { id: 1, name: "Lucas", grades: [8, 7, 9] },
    { id: 2, name: "Mariana", grades: [5, 6, 4] },
    { id: 3, name: "Pedro", grades: [7, 7, 7] },
    { id: 4, name: "Juliana", grades: [9, 8, 10] }
]

const studentsResults = students.map((student) => {
    let average = 0
    let status = "" 

    const total = student.grades.reduce((accumulator, grade) => {
        return accumulator + grade;
    }, 0);

    average = total / student.grades.length;

    if (average >= 7) {
        status = "Approved"
    } else {
        status = "failed"
    }

    return {
        ...student,
        average,
        status
    }

    
});

console.log(students)
console.log(studentsResults)

studentsResults.forEach((student) => {
    console.log(`Name: ${student.name} - Average: ${student.average} - Status: ${student.status}`);
});