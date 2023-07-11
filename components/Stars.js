import React from 'react';
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai'
const Stars = () => {

    let stars = 4.5;
    const ratingStar = Array.from({length:5},(elem, index) =>{
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars > index + 1 
                    ?
                    (
                        <FaStar/>
                    )
                    :
                    stars > number 
                    ?
                    (
                        <FaStarHalfAlt/>
                    )
                    :
                    (
                        <AiOutlineStar/>
                    )
                }
            </span>
        )
    })
    return (
        <div>
            <h2>  {ratingStar} Star Review</h2>

        </div>
    );
};

export default Stars;