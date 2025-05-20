// Selecting elements
let rContainer = document.querySelector("#ryt-container")
const menu = document.getElementById("menu")



// AboutContainer
function about() {
    

    rContainer.innerHTML = `
            <div class="aboutContainer">
                <h1>Harsh Verma</h1>
                <h5>Web Developer</h5>
                <p>Highly skilled Web and Graphic Designer with over 7+ years of experience in designing and developing web components, including HTML emailers, static web pages, and interactive deliverables. Proficient in HTML5, CSS3, Bootstrap, JavaScript, and Adobe Creative Suite (Photoshop, Illustrator, InDesign, Dreamweaver, Premiere Pro). Adept at web development, graphic design, and optimizing for SEO and responsive design. Strong communicator, experienced in collaborating with cross-functional teams and stakeholders to deliver high-quality, on-time project outcomes.<p>

            </div>
            `
}
about()

function experience() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        openBut.style.display = "block";
        closeBut.style.display = "none";
        menu.style.display = "none";
    }

    rContainer.innerHTML = `
            <div class="experienceContainer">
                            <h2>Experience</h2>

                            <div class="companyDetails">
                                <h5 class="comName">
                                    <span><i class="fa-solid fa-briefcase"></i> Cvent Inc</span> 
                                    <span class="durationTime"><i class="fa-solid fa-calendar-days"></i> 02/2023 – 01/2025</span>
                                    <span class="comLocation"><i class="fa-solid fa-location-dot"></i> Gurugram</span>

                                    </h5>
                                        <h6 class="Title">Web Designer
                                            <h6>
                                                <ul>
                                                    <li>Designed and developed HTML email templates, 50+ responsive
                                                        websites, and interactive digital deliverables using
                                                        <strong>HTML5</strong>, <strong>CSS3</strong>, and
                                                        <strong>JavaScript</strong>, ensuring high-quality output and
                                                        adherence to web standards.
                                                    </li>
                                                    <li>Collaborate with content and scientific teams to create web and
                                                        email deliverables in line with scientific communication
                                                        standards</li>
                                                    <li>Build <strong>responsive web designs</strong> using
                                                        <strong>Bootstrap</strong>, ensuring compatibility across
                                                        devices.
                                                    </li>
                                                    <li>Lead design and technical discussions, offering guidance to
                                                        fellow designers and resolving web/email issues.</li>
                                                    <li>Produce visually compelling templates and layouts using
                                                        <strong>Adobe Photoshop</strong> and <strong>Figma</strong>,
                                                        adhering to brand guidelines.
                                                    </li>
                                                </ul>
                            </div>

                            <div class="companyDetails">
                                
                                <h5 class="comName"><span><i class="fa-solid fa-briefcase"></i> Adaan Digital Solutions Pvt. Ltd.</span> 
                                    <span class="durationTime"><i class="fa-solid fa-calendar-days"></i> 01/2020 – 02/2023</span>
                                        <span class="comLocation"><i class="fa-solid fa-location-dot"></i> Delhi</span>
                                    </h5>
                                        <h6 class="Title">Web Designer and QA
                                            <h6>
                                                <ul>
                                                    <li>Developed <strong>SEO-optimized websites</strong> using
                                                        <strong>HTML5</strong>, <strong>CSS3</strong>, and
                                                        <strong>JavaScript</strong> for high performance and
                                                        cross-browser functionality.
                                                    </li>
                                                    <li>Conducted testing for compatibility across browsers and devices
                                                        to ensure optimal user experience.</li>
                                                    <li>Worked with teams to align design specifications with business
                                                        goals, delivering innovative and user-friendly designs.</li>
                                                    <li>Stayed updated on industry trends and incorporated modern design
                                                        practices into projects.</li>
                                                </ul>
                            </div>

                            <div class="companyDetails">
                                <h5 class="comName">
                                    <span><i class="fa-solid fa-briefcase"></i> Ayka Tech Pvt. Ltd.</span>
                                    <span class="durationTime"><i class="fa-solid fa-calendar-days"></i> 12/2019 – 01/2020</span>
                                    <span class="comLocation"><i class="fa-solid fa-location-dot"></i> Noida</span>
                                    </h5>
                                        <h6 class="Title">Web and Graphic Designer
                                            <h6>
                                                <ul>
                                                    <li>Designed and developed front-end components for <a
                                                            href="salestown.in"
                                                            target="_blank"></a><strong>salestown.in</strong></li>
                                                    <li>Collaborated with stakeholders to deliver design solutions that
                                                        aligned with project requirements and brand guidelines.</li>
                                                </ul>
                            </div>

                            <div class="companyDetails">
                                <h5 class="comName">
                                    <span><i class="fa-solid fa-briefcase"></i> Spinered Pvt. Ltd.</span>
                                        <span class="durationTime"><i class="fa-solid fa-calendar-days"></i> 08/2019 – 12/2019</span>
                                        <span class="comLocation"><i class="fa-solid fa-location-dot"></i> Laxmi Nagar</span>
                                    </h5>
                                        <h6 class="Title">Web and Graphic Designer
                                            <h6>
                                                <ul>
                                                    <li>Utilized <strong>Adobe Creative Suite</strong> (Photoshop,
                                                        Illustrator, Premiere Pro, Dreamweaver) to design and edit web
                                                        and marketing visuals.</li>
                                                    <li>Redesigned websites to improve <strong>SEO</strong>, user
                                                        experience, and visual appeal.</li>
                                                    <li>Created responsive, visually appealing designs for web and
                                                        social media platforms.</li>
                                                </ul>
                            </div>

                            <div class="companyDetails">
                                <h5 class="comName">
                                    <span><i class="fa-solid fa-briefcase"></i> Web Pulse Solution Pvt. Ltd.</span>
                                        <span class="durationTime"><i class="fa-solid fa-calendar-days"></i> 02/2019 – 08/2019</span>
                                        <span class="comLocation"><i class="fa-solid fa-location-dot"></i> Kirti Nagar</span>
                                    </h5>
                                        <h6 class="Title">Web and Graphic Designer
                                            <h6>
                                                <ul>
                                                    <li>Designed and optimized websites with an emphasis on <strong>SEO</strong> and user experience.</li>
                                                    <li>Enhanced site navigation and responsiveness, ensuring usability across multiple platforms.</li>
                                                    <li>Created marketing materials (e.g., social media posts, banners, other graphics) that maintained <strong>brand consistency</strong>.</li>
                                                </ul>
                            </div>

                            <div class="companyDetails">
                                <h5 class="comName">
                                    <span><i class="fa-solid fa-briefcase"></i> Freelance Work</span>
                                    <span class="durationTime"><i class="fa-solid fa-calendar-days"></i> 05/2018 – 02/2019</span>
                                    <span class="comLocation"><i class="fa-solid fa-location-dot"></i> NA</span>
                                    </h5>
                                        <h6 class="Title">Web and Graphic Designer
                                            <h6>
                                                <ul>
                                                    <li>Developed web designs based on client references, ensuring alignment with brand guidelines and increasing user engagement.</li>
                                                    <li>Created graphics for websites and social media to boost visual communication and engagement.</li>
                                                </ul>
                            </div>
                        </div>
            `
}

function skills() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        openBut.style.display = "block";
        closeBut.style.display = "none";
        menu.style.display = "none";
    }

    rContainer.innerHTML = `
                        <div class="skillsContainer">
                            <h2>Skills</h2>
                            <ul>
                                <li>
                                    <label for="file">
                                    <div>
<img src="images/html.png">
                                        <span class="skillName">HTML/HTML5</span>
                                    </div>
                                        
                                        <span class="skillExperience">Experience: 7 Years</span>
                                    </label>
                                   
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:93%">93%</div>
                                    </div>
                                </li>
                                <li>
                                    <label for="file">
                                    <div>
<img src="images/css.png">
                                        <span class="skillName">CSS/CSS3</span>
                                    </div>
                                        
                                        <span class="skillExperience">Experience: 7 Years</span>
                                    </label>                                   
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:90%">90%</div>
                                    </div>
                                </li>
                                <li>
                                    <label for="file">
                                    <div>
<img src="images/js.png">
                                        <span class="skillName">JavaScript</span>
                                    </div>
                                        

                                        <span class="skillExperience">Experience: 4 Years</span>
                                    </label>
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:75%">75%</div>
                                    </div>
                                </li>
                                <li>
                                    <label for="file">
                                    <div>
<img src="images/jquery.png">
                                        <span class="skillName">JQuery</span>
                                    </div>
                                        

                                        <span class="skillExperience">Experience: 6 Years</span>
                                    </label>
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:78%">78%</div>
                                    </div>
                                </li>
                                <li>
                                    <label for="file">
                                    <div>
<img src="images/bootstrap.png">
                                        <span class="skillName">Bootstrap</span>
                                    </div>
                                        

                                        <span class="skillExperience">Experience: 7 Years</span>
                                    </label>
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:80%">80%</div>
                                    </div>
                                </li>
                                <li>
                                    <label for="file">
                                    <div>
 <img src="images/figma.png">
                                        <span class="skillName">Figma</span>
                                    </div>
                                       

                                        <span class="skillExperience">Experience: 4 Years</span>
                                    </label>
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:75%">75%</div>
                                    </div>
                                </li>
                                <li>
                                    <label for="file">
                                    <div>
<img src="images/photoshop.png">
                                        <span class="skillName">Photoshop</span>
                                    </div>
                                        

                                        <span class="skillExperience">Experience: 7 Years</span>
                                    </label>
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:78%">78%</div>
                                    </div>
                                </li>
                                <li>
                                    <label for="file">
                                    <div>
<img src="images/illustrator.png">
                                        <span class="skillName">Illustrator</span>
                                    </div>
                                        

                                        <span class="skillExperience">Experience: 5 Years</span>
                                    </label>
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:50%">50%</div>
                                    </div>
                                </li>

                                <li>
                                    <label for="file">
                                        <div>
                                        <img src="images/premiere-pro.png">
                                        <span class="skillName">Premiere Pro</span>
                                        </div>

                                        <span class="skillExperience">Experience: 7 Years</span>
                                    </label>
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:65%">65%</div>
                                    </div>
                                </li>

                                <li>
                                    <label for="file">
                                    <div>
                                    <img src="images/adobe.png">
                                        <span class="skillName">Adobe Creative Suite</span>
                                    </div>
                                        
                                        <span class="skillExperience">Experience: 5 Years</span>
                                    </label>
                                    <div class="w3-section w3-light-grey">
                                        <div class="w3-container w3-padding-small w3-red w3-center" style="width:65%">65%</div>
                                    </div>
                                </li>

                                

                            </ul>

                        </div>`
}



function projects() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        openBut.style.display = "block";
        closeBut.style.display = "none";
        menu.style.display = "none";
    }

    rContainer.innerHTML = `<div class="projectContainer">
                            <h2>Projects</h2>

                            <div class="projectDetails">
                                <h5 class="projectHeading">HR Dashboard</h5>
                                <h6 class="projectlanguageHeading">Used Languages & Tools</h6>
                                <ul class="projectLanguage">
                                    <li><img src="images/html.png"></li>
                                    <li><img src="images/css.png"></li>
                                    <li><img src="images/bootstrap.png"></li>
                                    <li><img src="images/js.png"></li>
                                    <li><img src="images/photoshop.png"></li>
                                </ul>
                                <p class="projectDescription">
                                    The HR Dashboard is a secure, user-friendly web application designed to streamline employee management for administrators. With robust authentication, admins can log in using their credentials to access a centralized platform that provides comprehensive insights into employee data. Key features include:</p>

                                    <ul class="projectDescUl">
    <li><strong>Employee Profiles</strong>: View detailed information for each employee, including personal details, contact information, and role-specific data.</li>
    <li><strong>Financial Insights</strong>: Access financial records such as salary details, bonuses, deductions, and payment history.</li>
    <li><strong>Performance Analytics</strong>: Monitor employee performance through intuitive stats, including KPIs, project progress, and evaluation metrics.</li>
    <li><strong>Secure Access</strong>: Built with strong authentication protocols to ensure data privacy and restricted access for authorized users only.</li>
</ul>
                                
                                <p>
This dashboard empowers HR teams to efficiently manage and analyze employee information, enhancing decision-making and operational efficiency.
                                </p>
                                <a href="#" class="gitLink">Git Preview <span class="btn-hover-icon"><i class="fa-sharp-duotone fa-solid fa-eye"></i></span></a>
                            </div>

                            <div class="projectDetails">
                                <h5 class="projectHeading">Employee Dashboard</h5>
                                <h6 class="projectlanguageHeading">Used Languages & Tools</h6>
                                <ul class="projectLanguage">
                                    <li><img src="images/html.png"></li>
                                    <li><img src="images/css.png"></li>
                                    <li><img src="images/bootstrap.png"></li>
                                    <li><img src="images/js.png"></li>
                                    <li><img src="images/photoshop.png"></li>
                                </ul>
                                <p class="projectDescription">
                                    The Employee Dashboard is a secure, intuitive web application designed to empower employees with easy access to their personal and professional information. By logging in with their credentials, employees can explore a comprehensive, user-friendly platform tailored to their needs. Key features include:
                                </p>
                                <ul class="projectDescUl">
        <li><strong>Personal Information</strong>: Access and review basic details such as contact information, job role, and departmental data.</li>
        <li><strong>Financial Overview</strong>: View detailed financial records, including salary breakdowns, bonuses, and deductions.</li>
        <li><strong>Tax Details</strong>: Check tax-related information, such as withholdings and annual tax summaries, for better financial planning.</li>
        <li><strong>Performance Metrics</strong>: Monitor individual performance through clear, actionable stats, including KPIs, project contributions, and evaluation scores.</li>
        <li><strong>Secure Authentication</strong>: Implements robust security measures to ensure data privacy and protect sensitive information.</li>
    </ul>
    <p>This dashboard enhances employee engagement by providing transparent access to critical information, fostering better financial awareness and performance tracking.</p>
                                <a href="#" class="gitLink">Git Preview <span class="btn-hover-icon"><i class="fa-sharp-duotone fa-solid fa-eye"></i></span></a>
                            </div>

                            <div class="projectDetails">
                                <h5 class="projectHeading">Dynamic Portfolio</h5>
                                <h6 class="projectlanguageHeading">Used Languages & Tools</h6>
                               <ul class="projectLanguage">
                                    <li><img src="images/html.png"></li>
                                    <li><img src="images/css.png"></li>
                                    <li><img src="images/bootstrap.png"></li>
                                    <li><img src="images/js.png"></li>
                                    <li><img src="images/photoshop.png"></li>
                                </ul>
                                
                                <p class="projectDescription">This is a dynamic, single-page web application designed to showcase my professional profile with a seamless and engaging user experience. The application features a smooth "shifter" navigation system that allows users to transition effortlessly between various sections. Key sections and features include:</p>
    <ul class="projectDescUl">
        <li><strong>About</strong>: Provides an overview of my background, passions, and professional journey.</li>
        <li><strong>Experience</strong>: Highlights my professional work history, including roles, responsibilities, and key achievements.</li>
        <li><strong>Skillset</strong>: Showcases my technical and soft skills, emphasizing expertise relevant to my field.</li>
        <li><strong>Projects</strong>: Displays a curated selection of my projects, with detailed descriptions and outcomes (e.g., Employee Dashboard).</li>
        <li><strong>Education</strong>: Details my academic qualifications, certifications, and relevant coursework.</li>
        <li><strong>Contact</strong>: Offers a user-friendly way to connect with me through email, social media, or a contact form.</li>
    </ul>
    <p>The shifter functionality ensures fluid navigation, enhancing the user experience while maintaining a clean, modern design. This portfolio effectively communicates my professional identity and capabilities to potential employers and collaborators.</p>
                                <a href="#" class="gitLink">Git Preview <span class="btn-hover-icon"><i class="fa-sharp-duotone fa-solid fa-eye"></i></span></a>
                            </div>

                            <div class="projectDetails">
                                <h5 class="projectHeading">Greeting Web App</h5>
                                <h6 class="projectlanguageHeading">Used Languages & Tools</h6>
                                <ul class="projectLanguage">
                                    <li><img src="images/html.png"></li>
                                    <li><img src="images/css.png"></li>
                                    <li><img src="images/bootstrap.png"></li>
                                    <li><img src="images/js.png"></li>
                                    <li><img src="images/Ejs.png"></li>
                                    <li><img src="images/figma.png"></li>
                                    <li><img src="images/photoshop.png"></li>
                                </ul>
                                <p class="projectDescription">
                                    This is an engaging single-page web application designed to deliver personalized greetings to users via a shareable link. The app combines interactive elements, vibrant visuals, and a seamless user experience to create a delightful interaction. Key features include:
                                </p>
                                <ul class="projectDescUl">
        <li><strong>Shifter Functionality</strong>: A unique navigation system activated by an "Ideal" button, allowing smooth transitions between greeting stages.</li>
        <li><strong>Multimedia Experience</strong>: Includes a carefully selected background song to set the mood, paired with dynamic textual and graphical content for an immersive vibe.</li>
        <li><strong>Message Collection</strong>: Enables users to write and send messages at the final step, which are delivered directly to the creator’s email using EmailJS integration, bypassing JavaScript-only limitations.</li>
        <li><strong>Shareable Link</strong>: Users can easily share the app link to invite others to experience the personalized greeting.</li>
    </ul>
    <p>The integration of EmailJS ensures reliable message delivery, enhancing interactivity, while the shifter functionality and multimedia elements make this app a memorable and user-friendly way to connect and celebrate.</p>
                                <a href="#" class="gitLink">Git Preview <span class="btn-hover-icon"><i class="fa-sharp-duotone fa-solid fa-eye"></i></span></a>
                            </div>

                            <div class="projectDetails">
                                <h5 class="projectHeading">To -Do List </h5>
                                <h6 class="projectlanguageHeading">Used Languages & Tools</h6>
                                <ul class="projectLanguage">
                                    <li><img src="images/html.png"></li>
                                    <li><img src="images/css.png"></li>
                                    <li><img src="images/bootstrap.png"></li>
                                    <li><img src="images/js.png"></li>
                                </ul>
                                <p class="projectDescription">
                                    This is a streamlined web application designed to help users efficiently manage their tasks through an intuitive to-do list. The app allows users to add, remove, and organize notes with ease, ensuring a clutter-free task management experience. Key features include:</p>
    <ul class="projectDescUl">
        <li><strong>Add and Remove Notes</strong>: Seamlessly create new tasks or delete completed ones with a simple, user-friendly interface.</li>
        <li><strong>LocalStorage Integration</strong>: Utilizes the browser's localStorage to persistently save notes, ensuring tasks remain intact even after the browser is closed or refreshed.</li>
        <li><strong>Minimalist Design</strong>: Focuses on functionality with a clean layout, making task management straightforward and distraction-free.</li>
    </ul>
    <p>By leveraging localStorage, this application provides a reliable and lightweight solution for task management, perfect for users seeking simplicity and persistence in their daily planning.</p>
                                <a href="#" class="gitLink">Git Preview <span class="btn-hover-icon"><i class="fa-sharp-duotone fa-solid fa-eye"></i></span></a>
                            </div>

                        </div>`
}


function education() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        openBut.style.display = "block";
        closeBut.style.display = "none";
        menu.style.display = "none";
    }

    rContainer.innerHTML = `<div class="educationContainer">
                            <h2>Education</h2>
                            
                            <div class="educationDetails">
                                <h5>FullStack Developer (MERN)</h5>
                                <span>End Date: <span><strong>Persuing</strong></span></span>
                            </div>

                            <div class="educationDetails">
                                <h5>BA Program </h5>
                                <span>End Date: <span>Sep 2022</span></span>
                            </div>

                            <div class="educationDetails">
                                <h5>Web Designing </h5>
                                <span>End Date: <span>May 2018</span></span>
                            </div>
            
                        </div>`
}

function contact() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        openBut.style.display = "block";
        closeBut.style.display = "none";
        menu.style.display = "none";
    }

    rContainer.innerHTML = `<div class="contactContainer">
                            <h2>Contact</h2>
                            <ul class="contUl-1">
                                <li>
                                    <span><i class="fa-solid fa-phone"></i></span>
                                    <span>+91 - 9315993805</span>
                                </li>
                                <li>
                                    <span><i class="fa-solid fa-envelope"></i></span>
                                    <span>harshverma6399@gmail.com</span>
                                </li>
                                <li>
                                    <span><i class="fa-brands fa-whatsapp"></i></span>
                                    <span>+91 - 9315993805</span>
                                </li>

                                <li>
                                    
                                <ul class="inner-UL">
                                
                                <li>
                                        <span>
                                            <!-- <div class="contactSocialLinks"> -->
                                                <a href="https://www.linkedin.com/in/harsh-verma-b746ba210/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>

                                                <a href="#" target="_blank"><i class="fa-brands fa-github"></i></a>

                                                <a href="https://wa.me/+919315993805" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>

                                                <a href="tel:+919315993805" target="_blank"><i class="fa-solid fa-phone"></i></a>

                                                <a href="mailto:harshverma6399@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                                            <!-- </div> -->
                                        </span>
                                    </li>
                                    
                                </ul>
                                </li>
                               
                                
                            </ul>

                            
                            <div class="D-CV-but">
                                     <button onclick="downloadPDF()" class="gitLink">Download CV <span class="btn-hover-icon"><i class="fa-solid fa-download"></i></span></button>

                                     
                            </div>    
                        </div>`
}





// hamburger

const allButs = document.querySelector('.mob-menu-buts')

const openBut = document.getElementById("hamburger-btn")
const closeBut = document.getElementById("hamburger-close-btn")

function hamburger() {
    openBut.style.display = "none"
    closeBut.style.display = "block"
    menu.style.display = "flex"
}

function hamburgerClose() {
    openBut.style.display = "block"
    closeBut.style.display = "none"
    menu.style.display = "none"
}


// RESPONSIVE JS
// const navItems = document.querySelectorAll('#menu li')



// CV Download PDF
function downloadPDF() {
    // Restrict to mobile devices (optional)
    
        // Create a link element dynamically
        const link = document.createElement("a");
        link.href = "Files/Harsh Verma - Web Designer - Resume.pdf"; // Replace with your PDF file path
        link.download = "Harsh Verma - Web Designer - Resume.pdf"; // Optional: specify the downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up
    
}