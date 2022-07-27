//Check upper case
function upperCaseCheck() {
    upperCase = false;
    for (let i = 0; i <= p1.length - 1; i++) {
        let c = p1.charAt(i);
        if ('A' <= c && c <= 'Z') {
            upperCase = true;
            break;
        }
    }
    return upperCase;
}

function verify() {
    let p1 = document.querySelector("#password").value;
    let p2 = document.querySelector("#retype_password").value;
    let res = document.querySelector("#verification_status");


    if (p1 == p2) {
        if (p1.length >= 8 && p1.length <= 20) {
            if (upperCaseCheck == true) {
                res.innerText = 'Success';
                res.classList.add("status-success");
                res.classList.remove("status-error");
            }
            else {
                res.innerText = 'Password must contain an upper case character';
                res.classList.add("status-error");
                res.classList.remove("status-success");
            }
        } 
        else {
            res.innerText = 'Password must be between 8 and 20 characters';
            res.classList.add("status-error");
            res.classList.remove("status-success");
        }
    }
    else {
        res.innerText = 'Passwords do not match';
        res.classList.add("status-error");
        res.classList.remove("status-success");
    }


}

