function userSignup(){

    var user = document.getElementById('username_user').value
    var password = document.getElementById('password_user').value
    localStorage.setItem(user,password)
    alert('Registration successfully!')

}
function userLogin(){
    var user = document.getElementById('user').value
    var password = document.getElementById('password').value
    var storedpassword = localStorage.getItem(user)
    if(storedpassword==password){
        alert('You sign in successfully!')
    }
}