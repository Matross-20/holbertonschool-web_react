interface Student {
    firstName: string;
    lastName : string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Ali",
    lastName: "Khan",
    age: 20,
    location: "New York",
  };
  
  let student2: Student = {
    firstName: "Debbie",
    lastName: "Smith",
    age: 22,
    location: "London",
  };
  
  let studentsList: Student[] = [student1, student2];
  
  document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement("table");
  
    // Create header row
    const headerRow = table.insertRow();
    const headerNames = ["First Name", "Location"];
    headerNames.forEach((name) => {
      const th = document.createElement("th");
      th.textContent = name;
      headerRow.appendChild(th);
    });
  
    // Create a row for each student in studentsList
    studentsList.forEach((student) => {
      const row = table.insertRow();
      const cellFirstName = row.insertCell();
      const cellLocation = row.insertCell();
      cellFirstName.textContent = student.firstName;
      cellLocation.textContent = student.location;
    });
  
    // Append the table to the body
    document.body.appendChild(table);
  });
