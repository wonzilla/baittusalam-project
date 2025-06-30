const index = localStorage.getItem("editIndex");
  const storedData = JSON.parse(localStorage.getItem("allstudents") || "[]");
  const student = storedData[index];

  // Fill form with existing data
  document.getElementById("name").value = student.name;
  document.getElementById("phone").value = student.phone;
  document.getElementById("roll_no").value = student.roll;
  document.getElementById("email").value = student.email;
  document.getElementById("class").value = student.class;

  // On form submit, update student
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    storedData[index] = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      roll: document.getElementById("roll_no").value,
      email: document.getElementById("email").value,
      class: document.getElementById("class").value
    };

    localStorage.setItem("allstudents", JSON.stringify(storedData));
    localStorage.removeItem("editIndex"); // cleanup
    window.location.href = "allstudents.html"; // redirect back
  });