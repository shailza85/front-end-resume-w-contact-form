const formValid = document.querySelector("#emailForm");
const buttonValid = document.querySelector("#submit");
const fNameValid = document.querySelector("#fname");
const lNameValid = document.querySelector("#lname");
const emailValid = document.querySelector("#emailId");
const subjectValid = document.querySelector("#subject");
const messsageValid = document.querySelector("#message");
const error = document.querySelector("#errorMsg");



buttonValid.addEventListener("click", (event) => {      //send email button on click event

    event.preventDefault(); //Prevents default submission of page.
    
    // if condition to check no input from user and show error to input text fo all fields.
    if (fNameValid.value.trim() == "" && lNameValid.value.trim() == "" && emailValid.value.trim() == "" && subjectValid.value.trim() == "" && messsageValid.value.trim() == "") {
        error.innerHTML = "Please enter your details."
        return false;
    }
    // check individual field validation and shows error.
    if (fNameValid.value.trim() === "") {
        error.innerHTML = "Please enter First name."
        return false;
    }
    if (lNameValid.value.trim() === "") {
        error.innerHTML = "Please enter Last name."
        return false;
    }

    if (emailValid.value.trim() === "") {
        error.innerHTML = "Please enter EmailId."
        return false;
    }
    else if (emailValid.value != "")  // @link https://stackoverflow.com/questions/19157801/email-validation-not-working-correctly-using-javascript
                                      // @link http://zparacha.com/validate-email-address-using-javascript-regular-expression
                                      //checks regular expression for email.
    {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(emailValid.value)) {
            error.innerHTML = "Please provide a valid email address.";

            return false;
        }
    }
    if (subjectValid.value.trim() === "") {
        error.innerHTML = "Please enter a subject."
        return false;
    }
    if (messsageValid.value.trim() === "") {
        error.innerHTML = "Please enter a message."
        return false;
    }

    // if condition to check input fields are not blank.
    if (fNameValid.value.trim() !== "" && lNameValid.value.trim() !== "" && emailValid.value.trim() !== "" && subjectValid.value.trim() !== "" && messsageValid.value.trim() !== "") {

    if(FilterBadWord()===false) {   //if condition will check the swear words function.
        fNameValid.focus();
        lNameValid.focus();
        subjectValid.focus();
        messsageValid.focus();
        EmailRedirect();
    }       
    }
});
 // Function to open email window on click of send button with subject and body appended to it.
function EmailRedirect() {
    // @link https://stackoverflow.com/questions/10172499/mailto-using-javascript/10172877
    //@link https://community.articulate.com/discussions/articulate-storyline/how-to-pull-content-of-variable-into-body-of-email
    window.location.href = "mailto:shailza@ualberta.ca?subject=" + subjectValid.value + "&body=" + messsageValid.value;
}

// Function to replace swear words entered in the input. If entered by user, it will show error and replace it with ****.
function FilterBadWord() {
    let swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
    let isError= false;
    swearWords.forEach(word => { 

        let filteredName = fNameValid.value.replace(word, "");
        let filteredLastName = lNameValid.value.replace(word, "");
        let filteredSubject = subjectValid.value.replace(word, "");
        let filteredText = messsageValid.value.replace(word, "");
        if ((fNameValid.value === word) || (lNameValid.value === word) || (subjectValid.value === word) || (messsageValid.value === word)){
            isError=true;
            error.innerHTML = "Sorry, Inappropriate words entered are removed."
            fNameValid.value = filteredName;
            lNameValid.value = filteredLastName;
            subjectValid.value = filteredSubject;
            messsageValid.value = filteredText;

        }

    });

    return isError;
}

/*@link: http://zparacha.com/validate-email-address-using-javascript-regular-expression

Email format: The regular expression for email is

/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

To understand the regular expression we will divide it into smaller components:

/^[a-zA-Z0-9._-]+:  Means that the email address must begin with alpha-numeric characters (both lowercase and uppercase characters are allowed). It may have periods,underscores and hyphens.


@:   There must be a ‘@’ symbol after initial characters.

[a-zA-Z0-9.-]+: After the ‘@’ sign there must be some alpha-numeric characters. It can also contain period (‘.’) and and hyphens(‘-‘).

\.: After the second group of characters there must be a period (‘.’). This is to separate domain and subdomain names.

[a-zA-Z]{2,4}$/: Finally, the email address must end with two to four alphabets. Having a-z and A-Z means that both lowercase and uppercase letters are allowed.
{2,4} indicates the minimum and maximum number of characters. This will allow domain names with 2, 3 and 4 characters e.g.; us, tx, org, com, net, wxyz).*/


