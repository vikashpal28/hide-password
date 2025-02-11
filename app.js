const password = document.getElementById('password')
const eyeIcon = document.getElementById('eyeicon')

eyeIcon.onclick =  function(){
if(password.type == "password"){
  password.type = "text";
  eyeIcon.src = "photos/open.png"
}
else{
    password.type = "password";
    eyeIcon.src = "photos/closed.png"
}

}