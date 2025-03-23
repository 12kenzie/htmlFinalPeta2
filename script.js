document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("aboutLink");
    const homeLink = document.getElementById("homeLink");
    const contactLink = document.getElementById("contactLink");
    const workspaceLink = document.getElementById("workspaceLink"); // Select the existing element
    const content = document.getElementById("content");
    const style = document.createElement("style");

    // Add CSS styles
    style.textContent = `
        /* General styles */
        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
        }

        /* Profile icon styles */
        .profile-icon {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #372d2f;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .profile-icon img {
            width: 24px;
            height: 24px;
            filter: invert(1); /* Makes the icon white */
        }

        .profile-dropdown {
            position: fixed;
            top: 70px;
            right: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            display: none;
            z-index: 1000;
        }

        .profile-dropdown a {
            display: block;
            padding: 10px 20px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            color: #372d2f;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }

        .profile-dropdown a:hover {
            background-color: #f7f7f7;
        }

        /* Features section styles */
        .features-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            margin: 50px 20px;
            text-align: center;
            background-color: #f7f7f7;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .feature-item {
            flex: 1;
            margin: 0 10px;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
            width: 100px;
            height: 100px;
            margin-bottom: 15px;
        }

        .feature-item h2 {
            font-family: 'Lilita One', sans-serif;
            font-size: 24px;
            color: #372d2f;
            margin-bottom: 10px;
        }

        .feature-item p {
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #372d2f;
        }

        /* Contact form styles */
        .contact-container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f7f7f7;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .contact-title {
            font-family: 'Lilita One', sans-serif;
            font-size: 36px;
            color: #372d2f;
            margin-bottom: 20px;
        }

        .contact-description {
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            color: #372d2f;
            margin-bottom: 30px;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
        }

        .contact-form input,
        .contact-form textarea {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
        }

        .contact-form textarea {
            resize: vertical;
            min-height: 150px;
        }

        .contact-form button {
            padding: 10px 20px;
            background-color: #372d2f;
            color: white;
            border: none;
            border-radius: 5px;
            font-family: 'Lilita One', sans-serif;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
            background-color: #4a3f41;
        }

        .contact-info {
            text-align: left;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            color: #372d2f;
            margin-top: 20px;
        }

        .contact-info h3 {
            font-family: 'Lilita One', sans-serif;
            font-size: 24px;
            color: #372d2f;
            margin-bottom: 20px;
        }

        .contact-info ul {
            list-style: none;
            padding: 0;
        }

        .contact-info ul li {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }

        .contact-info ul li strong {
            font-family: 'Lilita One', sans-serif;
            font-size: 18px;
            color: #372d2f;
            margin-right: 10px;
        }

        .contact-info ul li a {
            color: #372d2f;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .contact-info ul li a:hover {
            color: #4a3f41;
        }

        .contact-info ul li img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }

        /* Pomodoro Timer Styles */
    #timer {
        font-family: 'Lilita One', sans-serif;
        color: #372d2f;
        margin: 20px 0;
    }
    
    .start-btn, .settings-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .start-btn {
        background-color: #372d2f;
        color: white;
    }
    
    .start-btn:hover {
        background-color: #4a3f41;
    }
    
    .settings-btn {
        background-color: #f7f7f7;
        color: #372d2f;
        border: 1px solid #ccc;
    }
    
    .settings-btn:hover {
        background-color: #e0e0e0;
    }
        
    `;
    document.head.appendChild(style); // Add <style> tag to <head>

    // Add profile icon to the top-right corner
    const profileIcon = document.createElement("div");
    profileIcon.className = "profile-icon";
    profileIcon.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Profile Icon">`;
    document.body.appendChild(profileIcon);

    // Add dropdown menu for profile icon
    const profileDropdown = document.createElement("div");
    profileDropdown.className = "profile-dropdown";
    profileDropdown.innerHTML = `
        <a href="#" id="loginLink">Login</a>
        <a href="#" id="signupLink">Sign Up</a>
    `;
    document.body.appendChild(profileDropdown);

    // Toggle dropdown menu on profile icon click
    profileIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the document click event from closing the dropdown
        profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.style.display = "none";
        }
    });

    // Popup Form for Login and Signup
    const popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay";
    popupOverlay.style.display = "none"; // Initially hidden
    popupOverlay.innerHTML = `
        <div class="popup-form">
            <h2 id="popupTitle">Login</h2>
            <form id="authForm">
                <input type="text" id="username" placeholder="Username" required>
                <input type="password" id="password" placeholder="Password" required>
                <button type="submit" id="submitBtn">Login</button>
            </form>
            <div class="close-popup">Close</div>
        </div>
    `;
    document.body.appendChild(popupOverlay);

    // Show Login Form
    document.getElementById("loginLink").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("popupTitle").textContent = "Login";
        document.getElementById("submitBtn").textContent = "Login";
        popupOverlay.style.display = "flex";
    });

    // Show Signup Form
    document.getElementById("signupLink").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("popupTitle").textContent = "Sign Up";
        document.getElementById("submitBtn").textContent = "Sign Up";
        popupOverlay.style.display = "flex";
    });

    // Close Popup Form
    document.querySelector(".close-popup").addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });

    // Close Popup Form when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });

    // Handle Form Submission
    document.getElementById("authForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const action = document.getElementById("popupTitle").textContent.toLowerCase();
        alert(`${action} with Username: ${username}, Password: ${password}`);
        popupOverlay.style.display = "none";
    });

    // Click event for "About" link
    if (aboutLink) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (content) {
                content.innerHTML = `
                    <div class="container">
                        <div class="navbar">
                            <img src="LG.jpg" alt="Logo" class="logo">
                            <nav>
                                <ul>
                                    <li><a href="HOME.html">Home</a></li>
                                    <li><a href="ABT.html">About Us</a></li>
                                    <li><a href="WORKS.html">Workspace</a></li>
                                    <li><a href="CONTACT.html">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                
                        <div class="content">
                            <div class="about-section">
                                <h2>WHAT IS <span>DREAMIS</span>?</h2>
                                <p>This platform is designed to enhance the educational experience for students and teachers, ensuring that they can accomplish their tasks more efficiently and effectively. By providing a range of user-friendly tools and resources, the platform streamlines communication, facilitates collaboration, and optimizes the learning process. Students will find valuable features tailored to help them manage their assignments, access study materials, and engage with their peers and instructors seamlessly. Meanwhile, teachers can benefit from tools that simplify lesson planning, grading, and tracking student progress, allowing them to focus more on teaching and mentoring.</p>
                            </div>
                
                            <div class="missions">
                                <h3>OUR MISSIONS</h3>
                                <div class="mission-cards">
                                    <div class="card">
                                        <img src="mission1.png" alt="Mission 1">
                                        <h4>Create a vibrant and supportive educational environment</h4>
                                        <p>Not only drives academic success but also cultivates a culture of student engagement and learning.</p>
                                    </div>
                                    <div class="card">
                                        <img src="mission2.png" alt="Mission 2">
                                        <h4>Bridging the gap between students and educators</h4>
                                        <p>We strive to make education more accessible, interactive, and rewarding for every participant.</p>
                                    </div>
                                    <div class="card">
                                        <img src="mission3.png" alt="Mission 3">
                                        <h4>Designed with user-friendliness in mind</h4>
                                        <p>Mentoring and inspiring students through innovative tools and strategies.</p>
                                    </div>
                                    <div class="card">
                                        <img src="mission4.png" alt="Mission 4">
                                        <h4>Encouraging creativity & efficiency</h4>
                                        <p>Helping students and teachers achieve their best through structured resources.</p>
                                    </div>
                                </div>
                            </div>
                
                            <div class="closing-statement">
                                <h2>WHERE <span>CREATIVITY</span> MEETS <span>EFFICIENCY</span></h2>
                                <p><b>JOIN US</b> IN REVOLUTIONIZING THE WAY WE LEARN AND TEACH!</p>
                                <button>Start Your Journey</button>
                            </div>
                        </div>
                    </div>

                `;
            }
        });
    }

    // Click event for "Workspace" link
if (workspaceLink) {
    workspaceLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (content) {
            content.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h1 style="font-family: 'Lilita One', sans-serif; color: #372d2f;">Workspace</h1>
                    <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
                        <button id="pomodoroBtn" class="nav-btn">Pomodoro</button>
                        <button id="calendarBtn" class="nav-btn">View Calendar</button>
                        <button id="flashcardsBtn" class="nav-btn">Flashcards</button>
                    </div>
                    <div id="workspaceContent">
                        <!-- Content will be dynamically loaded here -->
                    </div>
                    ${getFooter()}
                </div>
            `;

            // Add event listeners for navigation buttons
            document.getElementById("pomodoroBtn").addEventListener("click", loadPomodoro);
            document.getElementById("calendarBtn").addEventListener("click", loadCalendar);
            document.getElementById("flashcardsBtn").addEventListener("click", loadFlashcards);

            // Load Pomodoro by default
            loadPomodoro();
        }
    });
}


    // Click event for "Home" link
    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (content) {
                content.innerHTML = `
                    <h1 style="font-family: Lilita One; color: #372d2f; text-align: center; margin-top: 70px">
                        DREAMIS
                    </h1>
                    <h2 style="font-family: Poppins; color: #372d2f; text-align: center; margin-top: 30px">
                        WHERE <b>CREATIVITY</b> MEETS <b>EFFICIENCY</b>
                    </h2>
                    <button class="start-button" style="display: block; margin: auto;">
                        <img src="https://www.pngkit.com/png/full/88-886775_transparent-black-hearts-tumblr-black-heart.png" alt="Heart Icon"> 
                        Start your day
                    </button>
                    <div style="height: 20px;"></div>
                    <img src="https://sigmawire.net/i/03/sI6FnO.png" alt="Study desk" style="border-radius: 15px; width: 800px; height: 500px; margin: auto; display:block;">
                    <h1 style="font-family: Lilita One; margin-top: 40px; margin-left: 70px; font-size: 70px;">WORKSPACE</h1>
                    <div style="display: flex; align-items: flex-start; justify-content: flex-start; gap: 20px;">
                        <div style="margin-top: 50px;">
                            <div style="font-family: Lilita One, sans-serif; font-size: 30px; color: #372d2f; margin-bottom: 10px;">
                                Your Calendar and To-Do List
                            </div>
                            <p style="font-family: Poppins, sans-serif; font-size: 16px; color: #372d2f;">
                                Manage your time effectively and boost productivity with your personalized calendar and to-do list.
                                Stay organized and never miss a deadline!
                            </p>
                        </div>
                        <img src="https://sigmawire.net/i/03/q54SKJ.jpg" alt="Calendar" style="border-radius: 15px; width: 900px; height: 500px;">
                    </div>
                    <div style="display: flex; align-items: flex-start; gap: 20px; justify-content: center; margin-top: 50px;">
                        <img src="https://d3dexbrq797glq.cloudfront.net/20/pomodoro_method.jpg" 
                             alt="Pomodoro Timer" 
                             style="border-radius: 15px; width: 900px; height: 500px;">
                        <div style="margin-top: 50px;">
                            <div style="font-family: Lilita One, sans-serif; font-size: 30px; color: #372d2f; margin-bottom: 10px;">
                                Pomodoro Timer
                            </div>
                            <p style="font-family: Poppins, sans-serif; font-size: 16px; color: #372d2f;">
                                Stay focused! Break your tasks into focused 25-minute sessions, followed by short 5-minute breaks to recharge.
                            </p>
                        </div>
                    </div>
                    <div style="display: flex; align-items: flex-start; justify-content: flex-start; gap: 240px; margin-top: 50px;">
                        <div style="margin-top: 50px;">
                            <div style="font-family: Lilita One, sans-serif; font-size: 30px; color: #372d2f; margin-bottom: 10px;">
                                Flashcards
                            </div>
                            <p style="font-family: Poppins, sans-serif; font-size: 16px; color: #372d2f;">
                                Test yourself, recall, and stay motivated as you unlock your full potential—one card at a time!
                            </p>
                        </div>
                        <img src="https://www.brainscape.com/academy/content/images/2020/08/flashcards-1591812_1280.jpg" alt="Flashcards" style="border-radius: 15px; width: 900px; height: 500px;">
                    </div>
                    ${getFooter()}
                `;
            }
        });
    }

    // Click event for "Contact" link
    if (contactLink) {
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (content) {
                content.innerHTML = `
                    <div class="contact-container">
                        <h1 class="contact-title">Contact Us</h1>
                        <p class="contact-description">
                            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out using the form below.
                        </p>
                        <form class="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                        <div class="contact-info">
                            <h3>Contact Information</h3>
                            <ul>
                                <li>
                                    <strong>Nica Bangalan</strong>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook Icon">
                                        <a href="https://facebook.com/Nica Francheska" target="_blank">Nica Francheska</a>
                                    </div>
                                </li>
                                <li>
                                    <strong>Mackenzie Riguer</strong>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email Icon">
                                        <a href="mailto:mackenzieriguer12@gmail.com">mackenzieriguer12@gmail.com</a>
                                    </div>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook Icon">
                                        <a href="https://facebook.com/Mackenzie Riguer" target="_blank">Mackenzie Riguer</a>
                                    </div>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/126/126341.png" alt="Phone Icon">
                                        <a href="tel:09614961963">09614961963</a>
                                    </div>
                                </li>
                                <li>
                                    <strong>Amber Jillian Caras</strong>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email Icon">
                                        <a href="mailto:carasamberjillian@gmail.com">carasamberjillian@gmail.com</a>
                                    </div>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook Icon">
                                        <a href="https://facebook.com/Amber Jillian Caras" target="_blank">Amber Jillian Caras</a>
                                    </div>
                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/126/126341.png" alt="Phone Icon">
                                        <a href="tel:09847951401">09847951401</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    ${getFooter()}
                `;
            }
        });
    }
});

// Function to generate the footer
function getFooter() {
    return `
        <footer style="background-color: #372d2f; color: white; padding: 20px 40px; text-align: center; margin-top: 20px">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px;">
                <div>
                    <h3 style="font-family: Lilita One, sans-serif; margin-bottom: 10px;">FEATURES</h3>
                    <ul style="list-style: none; padding: 0; font-family: Poppins, sans-serif; font-size: 16px; text-align: left;">
                        <li>Pomodoro</li>
                        <li>Calendar</li>
                        <li>Flashcards</li>
                    </ul>
                </div>
                <div>
                    <h3 style="font-family: Lilita One, sans-serif; margin-bottom: 10px;">CONTACTS</h3>
                    <ul style="list-style: none; padding: 0; font-family: Poppins, sans-serif; font-size: 16px; text-align: left;">
                        <li>Nica Francheska Bangalan</li>
                        <li>Mackenzie Riguer</li>
                        <li>Amber Jillian Caras</li>
                    </ul>
                </div>
                <div style="font-family: Poppins, sans-serif;">
                    <a href="https://facebook.com" style="color: white; margin: 0 10px;" target="_blank">Facebook</a>
                    <a href="https://twitter.com" style="color: white; margin: 0 10px;" target="_blank">Twitter</a>
                    <a href="https://instagram.com" style="color: white; margin: 0 10px;" target="_blank">Instagram</a>
                </div>
            </div>
            <div style="margin-top: 20px; font-family: Poppins, sans-serif; font-size: 14px;">
                © 2025 Group 3
            </div>
        </footer>
    `;
}
