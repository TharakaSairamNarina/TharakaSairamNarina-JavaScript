function checkValid(){
    var display="";
    var name=document.register.name.value;
    var email=document.register.email.value;
    var password1=document.register.password1.value;
    var password2=document.register.password2.value;
    var number=document.register.number.value;
    var date=document.register.date.value;
    var rename =  /^[a-z A-Z]+$/;
    var remail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var renumber= /^[0-9]{10}$/;
    var redate =  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var error="";
    var flag=0;
    if (!name.match(rename)) {
        flag++;
        error += "Name Error : Please Enter Your Name Properly\n"
    }
    if (!email.match(remail)) {
        flag++;
        error += "E-Mail Error : Please Enter a valid Email\n";
    }
    if (password1.length<9 || password1!=password2) {
        flag++;
        error += "Password Error : Please enter a strong Password\n"
    }
    if (!number.match(renumber)) {
        flag++;
        error += "Phone Number Error : Enter a Valid Number\n"
    }
    if (!date.match(redate)) {
        flag++;
        error += "Date Error : Enter a Valid Date\n"
    }
    if (flag!=0) {
        window.alert(error);
    }
    else{
        window.alert("Successfully Registered!");
    }
}