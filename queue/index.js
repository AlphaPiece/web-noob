let counter = 1;
const log = console.log;

class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
        this.id = counter++;
    }
}

const studentAddForm = document.querySelector("#studentAddForm");
studentAddForm.addEventListener("submit", addStudent);

const studentPopButton = document.querySelector("#studentPopButton");
studentPopButton.addEventListener("click", popStudent);

function addStudent(e) {
    e.preventDefault();

    log("Add new student");

    const name = document.querySelector("#name").value;
    const course = document.querySelector("#course").value;
    const student = new Student(name, course);

    const table = document.querySelector("#queue-table");
    const newRow = table.insertRow(-1);
    const idCell = newRow.insertCell(0);
    const idText = document.createTextNode(student.id);
    idCell.appendChild(idText);
    const nameCell = newRow.insertCell(1);
    const nameText = document.createTextNode(student.name);
    nameCell.appendChild(nameText);
    const courseCell = newRow.insertCell(2);
    const courseText = document.createTextNode(student.course);
    courseCell.appendChild(courseText);
    const cancelCell = newRow.insertCell(3);
    const cancelButton = document.createElement("button");
    const cancelButtonText = document.createTextNode("Cancel");
    cancelButton.appendChild(cancelButtonText);
    cancelButton.addEventListener("click", function() {
        cancelStudent(student.id);
    });
    cancelCell.appendChild(cancelButton);
    
}

function cancelStudent(id) {
    const table = document.querySelector("#queue-table");
    for (let i = 0; table.rows[i]; i++) {
        const studentId = table.rows[i].cells[0].innerHTML.trim();
        if (studentId.localeCompare(id.toString()) == 0) {
            table.deleteRow(i);
            break;
        }
    }
}
    
function popStudent(e) {
    e.preventDefault();

    const table = document.querySelector("#queue-table");
    if (table.rows.length > 1) {
        log("Pop a student");
        table.deleteRow(1);
    } else {
        log("No student in queue");
    }
}



    

