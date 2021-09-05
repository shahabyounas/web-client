import React from 'react';
import { Closeicon } from '../Svgs';
import './FilterSlide'


const FilterSlide = (props) => {

    const { trigger, setTrigger, children } = props;
    return trigger ? (
    <div className="slide-bg">
        <div className="slide-inner">
            <div onClick={() => setTrigger()} className="close-icon"> <Closeicon  /></div>
            <div className="my-3">{children}</div>
        </div>
    </div>
    ) : "There is nothing in the Slide";
}

export default FilterSlide;