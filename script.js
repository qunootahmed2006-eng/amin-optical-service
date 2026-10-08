// ---------- REQUIREMENT FORM ----------

let selectedProduct = "";

function openRequirementForm() {

    document.getElementById("requirementModal").style.display = "flex";

}


function closeRequirementForm() {

    document.getElementById("requirementModal").style.display = "none";

}


// ---------- SEND REQUIREMENT TO WHATSAPP ----------

function sendRequirement() {

    let name = document.querySelector('.requirement-form input[type="text"]').value;
    let phone = document.querySelector('.requirement-form input[type="tel"]').value;
    let requirement = document.querySelector('.requirement-form textarea').value;

    if (name.trim() === "" || phone.trim() === "" || requirement.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    let message =
        "Hello Amin Optical Service!\n\n" +
        "New Requirement\n\n" +
        "Name: " + name + "\n" +
        "Phone / WhatsApp: " + phone + "\n" +
        "Product: " + selectedProduct + "\n" +
        "Requirement: " + requirement;

    let whatsappURL =
        "https://wa.me/923477408926?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}


// ---------- PRODUCT REQUIREMENT ----------

function openProductRequirement(productName) {

    selectedProduct = productName;

    document.getElementById("requirementModal").style.display = "flex";

    document.querySelector(".requirement-form textarea").value =
        "I am interested in " + productName + ".";
}

/* =========================================================
   GLOBAL IMAGE LOADING OPTIMIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    function optimizeProductImages() {

        const images =
            document.querySelectorAll("img");

        images.forEach(function (img) {

            /* Lazy load images */
            img.loading = "lazy";

            /* Decode images asynchronously */
            img.decoding = "async";

        });

    }

    /* Initial images */
    optimizeProductImages();


    /* Firebase se dynamically aane wale products */
    const observer =
        new MutationObserver(function () {

            optimizeProductImages();

        });


    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );

});