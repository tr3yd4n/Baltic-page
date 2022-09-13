import React from 'react'


export default function Home() {
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
        <div class="contact" >
        <div class="content">
            <h2>Your DREAM holiday is just one click away...</h2>
            <p>Thinking about taking a holiday? Get in touch with any information for your ideal holiday, then one of our experienced agents will contact you regarding your query to give you complete peace of mind.</p>
        </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div class="text">
                        <h3>Address</h3>
                        <p>52 Could be lane, Maybe road, Somewhere, England, ENG 001</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-envelope"></i></div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>Contactus@contactus.com</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa-solid fa-phone"></i></div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>07779798798797</p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <form class="form" method="POST">
                    <h2>Get in touch...</h2>
                    <div class="inputBox">
                        <input type="text" name="" required="required" />
                        <span>Name</span>
                        <span class="error"></span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required" />
                        <span>Email</span>
                        <span class="error"></span>
                    </div>
                    <div class="inputBox">
                        <textarea required="required" ></textarea>
                        <span>Type youre message...</span>
                    </div>
                    <div class="inputBox">
                        <input class="button" type="submit" name="" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
        
        </div>
    </div>
  )
}
