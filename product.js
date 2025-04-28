const products = document.querySelectorAll("#produits-container article");
const popup = document.getElementById("product-information");
const popupImg = document.getElementById("product-image");
const popupTitle = document.getElementById("product-title");
const popupDescription = document.getElementById("product-description");
const popupPrice = document.getElementById("product-price");
const popupFormat = document.getElementById("product-format");

products.forEach((product) => {
    product.addEventListener("click", (e) => {
        e.preventDefault();
        const pictureClone = product.querySelector("picture").cloneNode(true);
popupImg.replaceChildren(pictureClone);
        popupTitle.innerText = product.getAttribute("data-title");
        popupDescription.innerText = product.getAttribute("data-description");
        popupPrice.innerText = product.getAttribute("data-price");
        popupFormat.innerText = product.getAttribute("data-format");
        popup.showPopover();
    });
    })