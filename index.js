const generateButton = document.getElementById("generate");
const nameField = document.getElementById("name");
const ageField = document.getElementById("age");
const sectionField = document.getElementById("section");
const rollnoField = document.getElementById("rollno");
const contactnoField = document.getElementById("contactno");

const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displaySection = document.getElementById("displaySection");
const displayRollNumber = document.getElementById("displayRollNumber");
const displayContactNumber = document.getElementById("displayContactNumber");

generateButton.addEventListener("click", updateDisplay);

function updateDisplay() {
   
    const name = nameField.value;
    const age = ageField.value;
    const section = sectionField.value;
    const rollno = rollnoField.value;
    const contactno = contactnoField.value;
  

    displayName.textContent = "Name : " + name;
    displayAge.textContent = "Age : " + age;
    displaySection.textContent = "Section : " + section;
    displayRollNumber.textContent = "Roll No. : " + rollno;
    displayContactNumber.textContent = "Contact No. : " + contactno;
  }
  
 

 

  