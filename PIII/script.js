document.addEventListener("DOMContentLoaded", function () {
    const openPopupButton = document.getElementById("open-popup");
    const closePopupButton = document.getElementById("close-popup");
    const popup = document.getElementById("popup");

    openPopupButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
