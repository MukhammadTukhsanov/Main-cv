import React from "react"
import ClearMrg from "./clear-mrg/ClearMrg"
import Galery from "./Galery/Galery"
import IconList from "./IconList/IconList"
import Info from "./Info/Info"
import Languages from "./Languages/Languages"
import PerOvalSkills from "./PerOvalSkills/PerOvalSkills"
import PerSkills from "./PerSkils/PerSkills"
import PerInfo from "./PrInfo/PerInfo"

import './Right.scss'

export default function Right() {

    return(
            <div className="Right">
                <div className="card">
                    <div className="card-body">
                        <div data-aos="zoom-in">
                            <Info />
                        </div>
                        <hr />
                        <div 
                            data-aos="zoom-in"
                            data-aos-anchor-placement="top-bottom"
                            className="per_info row"
                        >
                            <div
                                data-aos="fade-up-right"
                                data-aos-anchor-placement="top-bottom"
                                className="col"
                            >
                                <PerInfo />
                            </div>
                            <div 
                                data-aos="fade-up-left"
                                data-aos-anchor-placement="top-bottom"
                                className="col"
                            >
                                <Languages />
                            </div>
                        </div>
                        <hr />
                        <div className="per_skills row">
                            <div className="col">
                                <PerSkills />
                            </div>
                            <div className="col">
                                <h4 className="mt-2 per_info_title">additional skills</h4>
                                <PerOvalSkills />
                            </div>
                        </div>
                        <hr />
                        <div 
                            className="row"
                        >
                            <div className="col ml-4">
                                <h4 className="mt-2 per_info_title">styled list</h4>
                                <ClearMrg />
                            </div>
                            <div className="col">
                                <h4 className="mt-2 per_info_title">icon list</h4>
                                <IconList />
                            </div>
                        </div>
                        <hr />
                        <div className="galery">
                            <Galery />
                        </div>
                    </div>
                </div>
            </div>
   )
}