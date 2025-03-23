document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("aboutLink");
    const homeLink = document.getElementById("homeLink");
    const contactLink = document.getElementById("contactLink");
    const workspaceLink = document.getElementById("workspaceLink");
    const content = document.getElementById("content");

    // Add CSS styles dynamically
    const style = document.createElement("style");
    style.textContent = `
        body {
            margin: 0;
            padding: 0;
            font-family: 'Lilita One', sans-serif;
            background: url('1.jpg'); 
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            min-height: 100vh; 
            display: flex;
            flex-direction: column;
        }
    
        .container {
            flex: 1; 
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Navbar */
        .navbar {
          height: 12%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          width: 50px;
          cursor: pointer;
          border-radius: 50%;
        }
        
        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        
        nav ul li {
          margin-left: 40px;
        }
        
        nav ul li a {
          text-decoration: none;
          color: #372d2f;
          font-size: 16px;
          transition: color 0.3s;
        }
        
        nav ul li a:hover {
          color: #ff69b4;
        }
        
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            text-align: center;
          }
        
          nav ul {
            flex-direction: column;
          }
        
          nav ul li {
            margin: 10px 0;
          }
        }

        /* About Section */
        .about-section {
            text-align: center;
            padding: 20px;
        }
        
        .about-section h2 {
            font-size: 24px;
        }
        
        .about-section span {
            color: #c94b7c;
            font-weight: bold;
        }
        
        .about-section p {
            max-width: 800px;
            margin: 0 auto;
            font-size: 16px;
            line-height: 1.5;
        }
        
        .missions {
            text-align: center;
            padding: 20px;
        }
        
        .mission-cards {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
        }
        
        .card {
            width: 250px;
            background: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .card img {
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
        }
        
        .card h4 {
            font-size: 16px;
            margin-bottom: 5px;
        }
        
        .card p {
            font-size: 14px;
            line-height: 1.4;
        }
        
        /* Closing Statement */
        .closing-statement {
            text-align: center;
            padding: 30px;
        }
        
        .closing-statement h2 {
            font-size: 24px;
        }
        
        .closing-statement span {
            color: #c94b7c;
            font-weight: bold;
        }
        
        .closing-statement p {
            font-size: 16px;
            margin-top: 10px;
        }
        
        .closing-statement button {
            background: #c94b7c;
            color: white;
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 20px;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .closing-statement button:hover {
            background: #b23b69;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .mission-cards {
                flex-direction: column;
                align-items: center;
            }
        
            .card {
                width: 90%;
            }
        }
    `;
    document.head.appendChild(style); // Add <style> tag to <head>

    // Function to load content dynamically
    function loadContent(html) {
        if (content) {
            content.innerHTML = html;
        }
    }

    // Click event for "About" link
    if (aboutLink) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();
            loadContent(`
                <div class="container">
                    <div class="navbar">
                        <img src="LG.jpg" alt="Logo" class="logo">
                        <nav>
                            <ul>
                                <li><a href="#home" id="homeLink">Home</a></li>
                                <li><a href="#about" id="aboutLink">About Us</a></li>
                                <li><a href="#works" id="workspaceLink">Workspace</a></li>
                                <li><a href="#contact" id="contactLink">Contact Us</a></li>
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
            `);
        });
    }

    // Click event for "Workspace" link
    if (workspaceLink) {
        workspaceLink.addEventListener("click", function (event) {
            event.preventDefault();
            loadContent(`
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
            `);

            // Add event listeners for workspace buttons
            document.getElementById("pomodoroBtn").addEventListener("click", loadPomodoro);
            document.getElementById("calendarBtn").addEventListener("click", loadCalendar);
            document.getElementById("flashcardsBtn").addEventListener("click", loadFlashcards);

            // Load Pomodoro by default
            loadPomodoro();
        });
    }

    // Click event for "Home" link
    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault();
            loadContent(`
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
            `);
        });
    }

    // Click event for "Contact" link
    if (contactLink) {
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            loadContent(`
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
            `);
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
