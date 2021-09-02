import React from 'react';
import { Closeicon } from '../Svgs';
import './FilterSlide'


const FilterSlide = (props) => {

    const { trigger, children } = props;
    return trigger ? (
    <div className="slide-bg">
        <div className="slide-inner">
            
            <span onClick={() => props.setTrigger(false)}>  <Closeicon className="close-icon" ></Closeicon></span>
            {children}
        </div>
    </div>
    ) : "There is nothing in the Slide";
}

export default FilterSlide;