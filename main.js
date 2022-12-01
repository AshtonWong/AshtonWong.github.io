// function correct_email(){
//     window.alert("Make sure the email entered is correct.")
// }
function termsOfService(){
    window.confirm("Do you want to view the Terms of Service?")
}
function validation_joinUs(){
    var valid = false;

    if(document.getElementById("agree_tos").checked){
        valid = true

        var email = document.getElementById("inputEmail");

        const success = document.getElementById("success");
        const danger = document.getElementById("danger");

        if(email.value === ""){
            window.alert("Please enter en email.")
            danger.style.display = 'block';
        }
        else{
            setTimeout(() => {
                email.value = "";
            }, 1500)

            window.alert("You are now officially part of us!")
            window.location.reload()
            success.style.display = "block"   
        }
    }
    else{
        window.alert("You must agree to the terms of service!")
    }
}
function validation_contactUs(){
    valid = true

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var country = document.getElementById("country");
    var subject = document.getElementById("subject");

    const success = document.getElementById("success");
    const danger = document.getElementById("danger");

    if(firstName.value === "" || lastName.value === "" || country.value === "" || subject.value === ""){
        window.alert("Fields cannot be empty!")
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            firstName.value = "";
            lastName.value = "";
            country.value = "";
            subject.value = "";
        }, 1500)

        window.alert("Thanks for contacting us! We will get back to you as soon as possible")
        window.location.reload()
        success.style.display = "block"   
    }

}