function toggleLogin() {
    var loginPage = $("#login")
    var signupPage = $("#signup")

    loginPage.toggle()
    signupPage.toggle()
}

function checkLogin() {
    // get input variables with jquery 
    // call db & retrieve info 

    //if success
    window.location.href = "index.html"
}

function checkSignup(){
    // get input variables with jquery 
    // call db & create entry in db

    //if success home/login page
    window.location.href = "index.html"
}

function redirectFacebook() {
    //call facebook api
}

function redirectGoogle() {
    //call google api
}