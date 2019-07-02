var form = document.getElementsByTagName("form")

function OnSubmit(event) {
    event.preventDefault();
    var username = form[0].elements[0].value;
    var password = form[0].elements[1].value;
    if (username === password) {
        window.location.href = './home.html';
    } else {
        form[0].reset();
        alert("please check the credentials!!!");
    }
}