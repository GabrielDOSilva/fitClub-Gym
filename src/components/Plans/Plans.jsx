import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className='plans-container'>
            <biv className="blur blur-p1"></biv>
            <biv className="blur blur-p2"></biv>
            {/* header */}
            <div className="plans-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>OUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>
            {/* Plans cards */}
            <div className="plans">
                {plansData.map((plans, i) =>
                    <div className="plan" key={i}>
                        {plans.icon}
                        <span>{plans.name}</span>
                        <span>$ {plans.price}</span>

                        <div className="features">
                            {plans.features.map((feature, i) => 
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                            )}
                        </div>
                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className="btn">Join now</button> 
                    </div>
                )}
            </div>

        </div>
    )
}

export default Plans;