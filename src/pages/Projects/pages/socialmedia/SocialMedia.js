import "./socialmedia.css"
import React, { Component } from "react";

class SocialMedia extends Component {
    render() {
        return (
            <div className="socialmedia-container">
                <div className="socialmedia-header">
                    <h1>Social Media App</h1>
                    <div className="grid gap-8 content-center lg:grid-cols-3 md:grid-cols-2 flex justify-evenly card-section mt-[50px] mb-[50px]">
                        <section id="socialmedia-one" className="h-[600px] py-8 px-6 rounded-md overflow-hidden project-picture" />
                        <section id="socialmedia-two" className="h-[600px] py-8 px-6 rounded-md overflow-hidden" />
                        <section id="socialmedia-three" className="h-[600px] py-8 px-6 rounded-md overflow-hidden" />
                    </div>
                </div>
                <div className="socialmedia-text">
                    <p>
                        Technical Environment: <span>Flutter (Dart), Node JS, MySQL, PHP</span>
                    </p>
                    <p>
                        Description: <span>Self designed and developed Social Media App, available on both Android and iOS. Used Flutter to develop
                            this cross-platform app. The app features safe user registration and login using MySQL database and PHP backend. As part as
                            real-time chat functionality, I used sockets with a Node JS server hosted on AWS EC2 instance. To enhance user experience, I implemented
                            a post feature that allows users to share posts with their friends. I prioritized a clean, intuitive UI to foster community
                            interaction, and in order to achieve that, I also refined state management using Provider and Riverpod for a more optimal way
                            to update any state management changes. I am constantly working and improving the app on my own time.
                        </span>
                    </p>
                    <p>
                        Availability: <span><a href="" target="_blank" >Android</a> & <a href="" target="_blank" >iOS</a></span>
                    </p>
                </div>

            </div>
        );
    }
}
export default SocialMedia;