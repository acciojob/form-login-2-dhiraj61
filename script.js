//your JS code here. If required.
document.getElementById('myForm').addEventListener("submit",(event)=>{
	event.preventDefault();
	let firstName = document.getElementById("firstname").value;
	let lastName = document.getElementById("lastname").value;
	let phoneNumber = document.getElementById("phonenumber").value;
	let email = document.getElementById("email").value;

	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`);
});