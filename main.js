const state = {
    page: "main",
    notes: []
};

function el(id) { return document.getElementById(id); }

function setPage(page) {
    const mainPage = el("main_page");
    const addPage = el("addnote_page");
    state.page = page;
    if (page === "main") {
        mainPage.style.display = "block";
        addPage.style.display = "none";
    } else if (page === "addnote") {
        mainPage.style.display = "none";
        addPage.style.display = "block";
    }
}

el("floating-add-button").addEventListener("click", function() {
    setPage("addnote");
});