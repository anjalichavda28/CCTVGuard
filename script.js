
// ===================================
// 1. LOGIN FUNCTION
// ===================================

function loginUser(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const message = document.getElementById("loginMessage");


    if (email === "admin@gmail.com" && password === "admin123") {

        message.textContent = "Login Successful!";

        message.style.color = "green";

        window.location.href = "dashboard.html";

    }

    else {

        message.textContent = "Invalid Email or Password!";

        message.style.color = "red";

    }

}


// ===================================
// 2. CAMERA SEARCH FUNCTION
// ===================================

function filterCameras() {

    const search = document
        .getElementById("cameraSearch")
        .value.toLowerCase();

    const cards = document.querySelectorAll(".searchable");

    let count = 0;


    cards.forEach(function(card) {

        const cameraName = card.innerText.toLowerCase();

        if (cameraName.includes(search)) {

            card.style.display = "";

            count++;

        }

        else {

            card.style.display = "none";

        }

    });


    const noCameras = document.getElementById("noCameras");

    if (noCameras) {

        noCameras.textContent =
            count === 0 ? "No cameras found." : "";

    }

}


// ===================================
// 3. VIEW CAMERA FUNCTION
// ===================================

function viewCamera(name) {

    alert(
        name +
        "\n\nCamera Details\nStatus: Demo Camera\nLive CCTV Streaming is not connected."
    );

}


// ===================================
// 4. CONTACT FORM FUNCTION
// ===================================

function submitContact(event) {

    event.preventDefault();

    const message = document.getElementById("contactMessage");

    message.textContent =
        "Thank you! Your message has been submitted successfully.";

    message.style.color = "green";

    event.target.reset();

}


// ===================================
// 5. SETTINGS SAVE FUNCTION
// ===================================

function saveSettings() {

    const adminName =
        document.getElementById("adminName").value.trim();

    const message =
        document.getElementById("settingsMessage");


    if (adminName === "") {

        message.textContent =
            "Please enter Administrator Name.";

        message.style.color = "red";

    }

    else {

        message.textContent =
            "Settings Saved Successfully!";

        message.style.color = "green";

    }

}


// ===================================
// END OF CCTVGUARD JAVASCRIPT
// ===================================
