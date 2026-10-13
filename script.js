// Login

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const email =
                document.getElementById("email").value;

            const password =
                document.getElementById("password").value;

            if (
                email === "admin@gmail.com" &&
                password === "admin123"
            ) {

                alert("Login Successful!");

                window.location.href =
                    "dashboard.html";

            } else {

                alert(
                    "Invalid Email or Password!"
                );

            }

        }
    );

}


// Camera Search

const cameraSearch =
    document.getElementById("cameraSearch");

if (cameraSearch) {

    cameraSearch.addEventListener(
        "keyup",
        function() {

            const searchValue =
                cameraSearch.value.toLowerCase();

            const cameras =
                document.querySelectorAll(
                    ".camera-card"
                );

            cameras.forEach(function(camera) {

                const text =
                    camera.innerText.toLowerCase();

                if (
                    text.includes(searchValue)
                ) {

                    camera.style.display =
                        "block";

                } else {

                    camera.style.display =
                        "none";

                }

            });

        }
    );

}


// View Camera

function viewCamera(cameraName) {

    alert(
        "Opening " +
        cameraName +
        "...\n\n" +
        "Live CCTV preview will be available " +
        "in the future version."
    );

}


// Contact Form

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Thank you! " +
                "Your message has been submitted."
            );

            contactForm.reset();

        }
    );

}


// Save Settings

function saveSettings() {

    const systemName =
        document.getElementById(
            "systemName"
        ).value;

    const notifications =
        document.getElementById(
            "notifications"
        ).checked;

    const darkMode =
        document.getElementById(
            "darkMode"
        ).checked;

    alert(
        "Settings Saved!\n\n" +
        "System: " +
        systemName +
        "\nNotifications: " +
        (notifications ? "ON" : "OFF") +
        "\nDark Mode: " +
        (darkMode ? "ON" : "OFF")
    );

}


console.log(
    "CCTVGuard Smart CCTV Monitoring System Loaded"
);