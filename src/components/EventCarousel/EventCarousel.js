import { Link } from 'react-router-dom';
import React from 'react';
import Slider from "react-slick";
import EventCard from '../EventCard/EventCard';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} arrow`}
        style={{ ...style, display: "block", right: 20 , top: -25, color: 'black' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} arrow`}
        style={{ ...style, display: "block" , left: 1240, top: -25, color: 'black' }}
        onClick={onClick}
      />
    );
  }

const EventCarousel = (props) => {

  const { events = [], title } = props;

  
  if(!events || events.length === 0) {
    return null;
  }

    var settings = {
        className: "center",
        centerPadding: "60px",
        lazyLoad: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
              }
            },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 0,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
          ]
    };

    const showTitle = true;

    return <div className="d-flex flex-column px-5  my-4 eventcarousel">

        <div className="d-flex justify-content-between">
            {showTitle && <div className="h4 font-weight-bold align-self-start mx-4"> {title}</div>}
            <div className="mx-5 px-5">
                <Link to="#" className="text-decoration-underline text-muted user-select-auto" >
                    {`View all (${events.length})`}
                </Link>
            </div>
        </div>

        <div>
                <Slider {...settings}>
                    {events.map((event) => (<EventCard key={event.id} event={event} />))}
                </Slider>
        </div>

    </div>

}

export default EventCarousel;