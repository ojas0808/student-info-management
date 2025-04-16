// filepath: c:\ELIA\HTML\student-info-management\src\scripts\app.js
document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('student-form');
    const studentList = document.getElementById('student-list');

    studentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('student-name').value;
        const age = document.getElementById('student-age').value;
        const grade = document.getElementById('student-grade').value;

        addStudentToList(name, age, grade);

        studentForm.reset();
    });

    function addStudentToList(name, age, grade) {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${name}, Age: ${age}, Grade: ${grade}`;
        studentList.appendChild(listItem);
    }
});