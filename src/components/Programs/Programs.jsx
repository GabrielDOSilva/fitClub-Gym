import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RighArrow from '../../assets/rightArrow.png';

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/* header */}
            <div className="programs-header">
                <span className='stroke-text'>Explore ours</span>
                <span>Progrmas</span>
                <span className='stroke-text'>To shape you</span>
            </div>

            <div className="programs-categorires">
                {programsData.map((program) =>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            Join Now
                            <span><img src={RighArrow} alt="" /></span>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Programs;