import "./wiss.css"
import React, { Component } from "react";

class Wiss extends Component {
    render() {
        return (
            <div className="wiss-container">
                <div className="wiss-header">
                    <h1>Wiss App</h1>
                    <div className="grid gap-8 content-center lg:grid-cols-3 md:grid-cols-2 flex justify-evenly card-section mt-[50px] mb-[50px]">
                        <section id="wiss-one" className="h-[350px] py-8 px-10 rounded-md overflow-hidden project-picture" />
                        <section id="wiss-two" className="h-[350px] py-8 px-10 rounded-md overflow-hidden" />
                        <section id="wiss-three" className="h-[350px] py-8 px-10 rounded-md overflow-hidden" />
                    </div>
                </div>
                <div className="wiss-text">
                    <p>
                        Project Introduction: <span>Automobile hemming factory, automobile glass monomer factory, machining center, float glass factory</span>
                    </p>
                    <p>
                        Location: <span>Detroit, Michigan, Dayton, Ohio, Greenville, South Carolina, Decatur, Illinois</span>
                    </p>
                    <p>
                        Service: <span>Including but not limited to the owner's purchase of factory buildings, steel structures, pipelines, equipment installation, electrical installation, HVAC,
                            Cooling water, pure wastewater, exhaust gas systems, etc.</span>
                    </p>
                </div>

            </div>
        );
    }
}
export default Wiss;