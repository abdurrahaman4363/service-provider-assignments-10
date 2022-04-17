import React from 'react';
import pic1 from '../../images/pic-1.png';

const About = () => {
    return (
        <div className='text-center'>
            <h2 className='text-center'>This is about me.</h2>
            <img style={{width:'150px', height:'200px'}} src={pic1} alt="" />
            <p>Name: Abdur Rahaman.</p>
            <p>Goal: I want to be a developer with my hardwork.I am complete change to fulfil my mission. Despite I face some problem to continue my mission, i was not going my path and goal.Until my mission completed i will try give my best.</p>
            
        </div>
    );
};

export default About;