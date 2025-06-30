
const Form = document.getElementById("form");
const Button = document.getElementById("submit");
const storedData = localStorage.getItem("allstudents");
const allstudents = storedData ? JSON.parse(storedData) : [];


const addStudent= (e)=>{
    const StudentName = document.getElementById("name").value;
const RollNO = document.getElementById("roll_no").value;
const Class = document.getElementById("class").value;
const Phone = document.getElementById("phone").value;
const Email = document.getElementById("email").value;
const Error = document.getElementById("error_message")
    e.preventDefault()
    let ErrorMessage;
  if(StudentName === ""  || StudentName === undefined ){
    ErrorMessage = "Please Enter Student Name";
    Error.innerHTML = ErrorMessage;
    setTimeout( ()=>{
           Error.innerHTML = "";
    },2000 )
    return;
  }
   if(RollNO === ""  || RollNO === undefined ){
    ErrorMessage = "Please Enter Roll Number";
     Error.innerHTML = ErrorMessage;
      setTimeout( ()=>{
           Error.innerHTML = "";
    },2000 )
    return;
  }
   if(Class === ""  || Class === undefined ){
    ErrorMessage = "Please Enter Class Name";
     Error.innerHTML = ErrorMessage;
      setTimeout( ()=>{
           Error.innerHTML = "";
    },2000 )
    return;
  }
   if(Phone === ""  || Phone === undefined ){
    ErrorMessage = "Please Enter Phone Number";
     Error.innerHTML = ErrorMessage;
      setTimeout( ()=>{
           Error.innerHTML = "";
    },2000 )
    return;
  }
   if(Email === ""  || Email === undefined ){
    ErrorMessage = "Please Enter Email";
     Error.innerHTML = ErrorMessage;
      setTimeout( ()=>{
           Error.innerHTML = "";
    },2000 )
    return;
  }


  allstudents.push({
    name : StudentName,
    roll: RollNO,
    class: Class,   
    phone: Phone,
    email: Email
  })

  localStorage.setItem("allstudents" , JSON.stringify(allstudents))
  

}




Button.addEventListener("click" , addStudent)