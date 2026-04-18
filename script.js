//your JS code here. If required.
let firstName = documet.getElementById("firstname").value;
let lastName = documet.getElementById("lastname").value;
let phoneNumber = documet.getElementById("phonenumber").value;
let email = documet.getElementById("email").value;
let submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`);
});