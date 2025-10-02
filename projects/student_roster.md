# Project: Student Roster Tracker

This project combines variables, numbers, and arrays (from my JS practice).

```js
// Teacher and class
let teacher = "Mr. Doe";
let className = "Intro to JS";

// Number of students
let studentCount = 3;

// Array of students
let students = ["Naomi", "Quincy", "CamperChan"];

// Print initial roster
console.log("Class:", className, "Teacher:", teacher);
console.log("Roster:", students, "Total:", studentCount);

// Update the 3rd student
students[2] = "Mexico City";
console.log("Updated Roster:", students);

// Update student count
studentCount = students.length;
console.log("New total:", studentCount);
```

### Output Example
```
Class: Intro to JS Teacher: Mr. Doe
Roster: [ 'Naomi', 'Quincy', 'CamperChan' ] Total: 3
Updated Roster: [ 'Naomi', 'Quincy', 'Mexico City' ]
New total: 3
```
