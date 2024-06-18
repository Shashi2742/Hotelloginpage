
    // Simple validation (example: check if username is "user" and password is "password")
function valid(){

const Email=document.getElementById('email').value;
const password=document.getElementById('password').value;
    if (Email=== 'shashankjagtap2742@gmail.com' && password === 'Shashi@2742') {  
           alert("Succesfully Matched");
            window.open("https://www.orchidhotel.com/pune/","_blank");
        }
     else {
        alert('Invalid Email ID or password');
    }
}
