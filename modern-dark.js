document.addEventListener("DOMContentLoaded", function() {
    const status = document.querySelector(".status");

    status.addEventListener("click", function() {
        if (status.innerText === "Active") {
            status.innerText = "Inactive";
            status.style.backgroundColor = "#dc3545";
        } else {
            status.innerText = "Active";
            status.style.backgroundColor = "#ff4c4c";
        }
    });
});