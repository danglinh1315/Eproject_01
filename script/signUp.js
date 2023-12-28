function userSignup(){

    var user = document.getElementById('username_user').value
    var password = document.getElementById('password_user').value
    var repassword = document.getElementById('rpassword_user').value
    if(localStorage.getItem(user){
        alert('username already exists. Please choose another username.')
        return;}
    if(user.toLowerCase()==='webmaster'){
        alert('Invalid username.')
        return;}
    if(passwor!=repassword){
        aler('password and repassword do not match')
        return;}
        
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
