function required(){
    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var psword = document.getElementById('psword').value
    var support = document.getElementById('support').value
    var male = document.getElementById('male').checked
    var female = document.getElementById('female').checked
    var pnts = document.getElementById('pnts').checked
    var blank1 = false
    var blank2 = false
    var blank3 = false
    var blank4 = false
    var blank5 = false
    var blank6 = false
    var blank7 = false
    if (fname==''){
        document.getElementById('fnamereq').innerHTML = " Required"
        document.getElementById("fnamereq").style.color="red"
        document.getElementById("fname").style.borderColor="red"
        blank1 = true
    }
    else {
        document.getElementById('fnamereq').innerHTML = ""
        document.getElementById("fname").style.borderColor="lime"
        blank1 = false
    }
    if (lname==''){
        document.getElementById('lnamereq').innerHTML = " Required"
        document.getElementById("lnamereq").style.color="red"
        document.getElementById("lname").style.borderColor="red"
        blank2 = true
    }
    else {
        document.getElementById('lnamereq').innerHTML = ""
        document.getElementById("lname").style.borderColor="lime"
        blank2 = false
    }
    if (email==''){
        document.getElementById('emailreq').innerHTML = " Required"
        document.getElementById("emailreq").style.color="red"
        document.getElementById("email").style.borderColor="red"
        blank3 = true
    }
    else {
        document.getElementById('emailreq').innerHTML = ""
        document.getElementById("email").style.borderColor="lime"
        blank3 = false
    }
    if (psword==''){
        document.getElementById('pswordreq').innerHTML = " Required"
        document.getElementById("pswordreq").style.color="red"
        document.getElementById("psword").style.borderColor="red"
        blank4 = true
    }
    else {
        document.getElementById('pswordreq').innerHTML = ""
        document.getElementById("psword").style.borderColor="lime"
        blank4 = false
    }
    if (support==''){
        document.getElementById('supportreq').innerHTML = " Required"
        document.getElementById("supportreq").style.color="red"
        document.getElementById("support").style.borderColor="red"
        blank5 = true
    }
    else {
        document.getElementById('supportreq').innerHTML = ""
        document.getElementById("support").style.borderColor="lime"
        blank5 = false
    }
    if ((male==true)||(female==true)||(pnts==true)){
        if (male==true){
            localStorage.setItem("gender", "Male")
        }
        if (female==true){
            localStorage.setItem("gender", "Female")
        }
        if (pnts==true){
            localStorage.setItem("gender", "Prefer not to say")
        }
        document.getElementById('genderreq').innerHTML = ""
        blank6 = false
    }
    else {
        document.getElementById('genderreq').innerHTML = " Required"
        document.getElementById("genderreq").style.color="red"
        blank6 = true
    }
    if (blank1==false&&blank2==false&&blank3==false&&blank4==false&&blank5==false&&blank6==false){
        localStorage.setItem("firstname", fname)
        localStorage.setItem("lastname", lname)
        localStorage.setItem("emailadd", email)
        localStorage.setItem("support", support)
        window.open("page2.html", "_self")
    }
}

function redirectPFP() {
    location.replace("page2.html");
}

    var fname = localStorage.getItem("firstname")
    var lname = localStorage.getItem("lastname")
    var email = localStorage.getItem("emailadd")
    var gender = localStorage.getItem("gender")
    var support = localStorage.getItem("support")

    document.getElementById("first").innerHTML = fname;
    document.getElementById("last").innerHTML = lname;
    document.getElementById("email").innerHTML = email;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("support").innerHTML = support;