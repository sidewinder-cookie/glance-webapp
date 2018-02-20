function loader() {
    loader = setTimeout(showPage, 3000); //3000
}

function showPage () {
    document.getElementById("page").style.display = "inline-block";
}