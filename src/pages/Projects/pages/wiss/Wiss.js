import "./wiss.css"
import React, { Component } from "react";

class Wiss extends Component {
    render() {
        return (
            <div className="wiss-container">
                <div className="wiss-header">
                    <h1>Wiss App</h1>
                    <div className="grid gap-8 content-center lg:grid-cols-3 md:grid-cols-2 flex justify-evenly card-section mt-[50px] mb-[50px]">
                        <section id="wiss-one" className="h-[600px] py-8 px-10 rounded-md overflow-hidden project-picture" />
                        <section id="wiss-two" className="h-[600px] py-8 px-10 rounded-md overflow-hidden" />
                        <section id="wiss-three" className="h-[600px] py-8 px-10 rounded-md overflow-hidden" />
                    </div>
                </div>
                <div className="wiss-text">
                    <p>
                        Technical Environment: <span>Flutter (Dart)</span>
                    </p>
                    <p>
                        Description: <span>Self designed and developed essential/ tools app, available on both Android and iOS. Used Flutter to develop
                            this cross-platform app. The app features a basic calculator, unit converter, tip and sales tax calculator for a quick and
                            easy way to calculate when you are out with friends. In order to experiment and to gain some minimal revenue, I implemented
                            ads (Admob) in the app. Although not as much as the social media app, this app is still being worked on and updated as I get
                            more tool/ essential ideas for the app.
                        </span>
                    </p>
                    <p>
                        Availability: <span><a href="https://play.google.com/store/apps/details?id=com.jhdevelopment.wiss_app&pli=1" target="_blank" rel="noopener noreferrer">Android</a> & <a href="" target="_blank" >iOS</a></span>
                    </p>
                </div>

            </div>
        );
    }
}
export default Wiss;