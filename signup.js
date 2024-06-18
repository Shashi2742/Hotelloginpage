function valid(){
    const pass1=document.getElementById("password").value;
    const pass2=document.getElementById("RePass").value;

    const email=document.getElementById("email").value;


    if(pass1===pass2){

         alert("Password Set Succefully");
         window.open("http://127.0.0.1:5500/Index.html");
    }
    else{
        alert("Password Not Matched");
    }
    
 
}