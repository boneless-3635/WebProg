function extraction() {
    let text = document.querySelector("#address").value;
    let result = /([^ ]+) ([^,]+),(([^,]+),)? ([^,]+),([^,]+)/.exec(text);
    document.getElementById("demo").innerHTML = result;
}

