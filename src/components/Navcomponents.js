import './style.css';
import  abs  from './images/abs.avif';
import me from './images/me.jpg';
import download from './images/download.png';
import * as bootstrap from 'bootstrap';

const tooltips = document.querySelectorAll('.tt')
        tooltips.forEach((tooltip) => {
            new bootstrap.Tooltip(tooltip)
        })

export function Home(){
    return(
        <section style={{padding:"10px 0px",backgroundColor: "rgba(26, 194, 250, 0.764)"}} id="Home">
            <div className="container-lg">
                <div className="row justify-content-center bg-info">
                    <div className="col-lg-10" id="back">
                        <img src={abs} className="img-fluid" alt=""></img>
                        <div className="text-center text-light" id="back-text">
                            <h1>Umesh Chandra</h1>
                            <p>Porfolio made with React</p>
                            <p>Go ahead and Explore <i className="bi bi-search"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function About(){
    return(
        <section id="intro" className='mt-2'>
            <div class="container-lg">
                <div class="row justify-content-center align-item-center">
                    <div class="col-md-5 text-center text-md-start border border-secondary" style={{backgroundColor: "rgb(214, 213, 213)"}}>
                        <h1>
                            <div class="display-4">Umesh Chandra</div>
                            <div class="lead text-muted"><i class="bi bi-file-earmark-person"></i> Student | Dev</div>
                        </h1>
                        <hr />
                        <div class="contact">
                            <p class="lead pt-0">Im currently learning MERN-Stack</p>
                            <span class="lead"><i class="bi bi-envelope-at-fill"></i> How to reach me : 
                                <a href="mailto:umesh.sakinala20@gmail.com" class="btn btn-sm btn-primary fw-bold">Email</a>
                            </span>
                            <br /><br />
                            <span class="lead"><i class="bi bi-geo-fill"></i> Hyderabad, Telangana</span>
                            <br /><br />
                            <span class="lead fw-900"><i class="bi bi-at"></i> Connect with me : </span>
                            <p class="btn-group">
                                <a href="https://www.linkedin.com/in/umeshchandrasakinala/" target="_blank" class="btn btn-sm btn-success fw-bold"><i class="bi bi-linkedin"></i> LinkedIn</a>
                                <a href="https://github.com/mrcuber" target="_blank" class="btn btn-warning btn-sm fw-bold"><i class="bi bi-github"></i> GitHub</a>
                                <a href="https://leetcode.com/umeshsakinala/" target="_blank" class="btn btn-sm btn-danger fw-bold">LeetCode</a>
                            </p>

                            <div class="d-block mt-3 btn btn-secondary">
                                Explore More!<i class="bi bi-chevron-double-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 text-center d-none d-md-block">
                        <span class="tt" data-bs-placement="bottom" title="Umesh Chandra">
                            <img src={me} alt="Image" class="img-fluid border border-secondary align-items-center" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Info(){
    return(
        <section id="info" class="bg-light mt-5" style={{padding: "60px 0px"}}>
            <div class="container-lg">
                <div class="text-center">
                    <h2><i class="bi bi-info-circle-fill d-none d-md-inline"></i> Info Check</h2>
                    <p class="lead text-muted">To know more about me and my works</p>
                </div>
                <div class="row my-5 aligh-items-center justify-content-center">
                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-info border-2">
                            <h4 class="card-header border-info text-center">Web Development</h4>
                            <div class="card-body text-center py-4">
                                <h5 class="card-title">Check the GITHUB Repo</h5>
                                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">The MERN stack is a popular JavaScript stack used for developing web applications. It is made up of four technologies:
MongoDB: A NoSQL database that uses JSON documents to store data.
Express: A Node.js framework for building web applications.
React: A JavaScript library for building user interfaces.
Node.js: An open-source, cross-platform JavaScript runtime environment.</p>
                                <a href="https://github.com/mrcuber?tab=repositories" class="btn btn-outline-danger btn-md mt-3" target="_blank">View</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 col-lg-4 col-xl-3">
                        <div class="card border-primary border-2">
                            <h4 class="card-header border-primary text-center">LeetCode</h4>
                            <div class="card-body text-center py-4">
                                <h5 class="card-title">Problems solved in LeetCode</h5>
                                <p class="card-text mx-3 my-1 text-muted d-none d-lg-block">LeetCode is an online platform for coding interview preparation. It provides coding and algorithmic problems intended for users to practice coding. LeetCode has gained popularity among job seekers and coding enthusiasts as a resource for technical interviews and coding competitions.</p>
                                <a href="https://leetcode.com/umeshsakinala/" class="btn btn-outline-danger btn-md mt-3" target="_blank">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export function Contact(){
    return(
        <section id="contact" style={{backgroundColor: "rgb(240, 238, 238)"}}>
            <div class="container-lg">
                <div class="text-center">
                    <h2><i class="bi bi-hand-index-thumb-fill"></i> Get in Touch</h2>
                    <p class="lead text-muted">Questions to ask? Fill out the form to contact me directly...</p>
                </div>

                <div class="row justify-content-center my-5">
                    <div class="col-lg-6">
                        <form action="">
                            <label for="email" class="form-label">Email address:</label>
                            <div class="mb-4 input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-envelope-fill"></i>
                                </span>
                                <input type="email" class="form-control" id="email" placeholder="Your email goes here" required />

                                <span class="input-group-text">
                                    <span class="tt" data-bs-placement="bottom" title="Enter an email address we can reply to">
                                        <i class="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>

                            <label for="name" class="form-label">Name:</label>
                            <div class="mb-4 input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-person-fill"></i>
                                </span>
                                <input type="text" class="form-control" id="name" placeholder="Enter your name" required/>

                                <span class="input-group-text">
                                    <span class="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                                        <i class="bi bi-question-circle text-muted"></i>
                                    </span>
                                </span>
                            </div>

                            <label for="subject" class="form-label">Message:</label>
                            <div class="input-group mb-4">
                                <span class="input-group-text">
                                    <i class="bi bi-question-circle-fill"></i>
                                </span>
                                <select class="form-select" aria-label="Default select example" id="subject">
                                    <option selected>Open this select menu</option>
                                    <option value="web development">Web Development</option>
                                    <option value="leetcode">LeetCode</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div class="form-floating mb-4">
                                <textarea class="form-control" id="query" rows="5"></textarea>
                                <label for="query" class="form-label">Your Message...</label>
                            </div>

                            <div class="mb-4 text-center">
                                <button type="submit" class="btn btn-warning">Submit <i class="bi bi-send-fill"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export function Project(){
    return(
        <section id="projects">
            <div class="container-md">
                <div class="text-center">
                    <h2><i class="bi bi-person-workspace"></i> Main Project Works</h2>
                    <p class="lead text-muted">My Projects</p>
                </div>

                <div class="row my-5 g-5 justify-content-around align-items-center">
                    <div class="col-6 col-lg-4">
                        <img src={download} class="img-fluid" alt="" style={{width:"75%"}}/>
                    </div>

                    <div class="col-lg-6">
                        <div class="accordion" id="projects_list">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-1">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#project-1" aria-expanded="true" aria-controls="project-1">
                                        Amazon Review Analysis Chatbot
                                    </button>
                                </h2>
                                <div id="project-1" class="accordion-collapse collpase show" aria-labelledby="heading-1" data-bs-parent="#projects_list">
                                    <div class="accordion-body">
                                        <p>
                                        This project demonstrates the deployment of web application that uses machine learning model for sentiment analysis of Amazon product reviews, along with an interactive chatbot to assist customers with their product-related inquiries. The sentiment analysis helps determine the sentiment (positive, neutral, or negative) of reviews, while the chatbot aims to provide helpful responses to customer queries.
                                        </p>
                                        <a href="https://review-bots.streamlit.app/" class="btn btn-outline-danger me-2" >App</a>
                                        <a href="https://github.com/MrCuber/AmzReview-Sentiment-Analysis-Chatbot" target="_blank" class="btn btn-outline-danger" >Github Code</a>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-2">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#project-2" aria-expanded="false" aria-controls="project-2">
                                        Speech Emotion Recognition
                                    </button>
                                </h2>
                                <div id="project-2" class="accordion-collapse collpase" aria-labelledby="heading-2" data-bs-parent="#projects_list">
                                    <div class="accordion-body">
                                        <p>
                                        The goal of this project is to create an efficient and accurate model that can recognize emotions in spoken language, which can have a wide range of applications in fields such as human-computer interaction, customer service, and mental health.
                                        </p>
                                        <div className='alert alert-danger' role='alert'>
                                            This is still in Development Stage
                                        </div>
                                        <a href="https://github.com/MrCuber/Speech-Emotion-Recognition" target="_blank" class="btn btn-outline-danger" >Github Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
