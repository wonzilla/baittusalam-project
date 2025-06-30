
const Allstudents = () => {
    const table = document.getElementById("table");
    const storedData = localStorage.getItem("allstudents");
    const StudentsData = storedData ? JSON.parse(storedData) : [];
    table.innerHTML = `
     <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Roll No</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>`;
    console.log(StudentsData.length)
    if(StudentsData.length === 0){
         table.innerHTML = "<p> No Students Found </p>";
         return;
    }
    StudentsData.map((student, index) => {
        let NewRow = document.createElement("tr");
        NewRow.innerHTML = `<td>${student.name}</td>
                            <td>${student.phone}</td>
                            <td>${student.roll}</td>
                            <td>${student.email}</td>
                            <td>${student.class}</td>
                            <td class="actions" > <button data-index=${index} onclick="DeleteStudent(${index})"} id="delete">Delete </button> 
                            <button data-index=${index} onclick="EditStudent(${index})" id="edit">Edit </button> 
                            </td>
                             `;
        NewRow.setAttribute("data-index", index)
        table.appendChild(NewRow)

        


    })
}

 const DeleteStudent = (index) => {

    const storedData = localStorage.getItem("allstudents");
    const StudentsData = storedData ? JSON.parse(storedData) : [];
    StudentsData.splice(index, 1)
    localStorage.setItem("allstudents", JSON.stringify(StudentsData))
    Allstudents()


}

const EditStudent = (index) => {
  localStorage.setItem("editIndex", index); // selected index save karo
  window.location.href = "../pages/editstudents.html"; // redirect to edit page
};

window.EditStudent = EditStudent; // important for inline onclick


Allstudents();