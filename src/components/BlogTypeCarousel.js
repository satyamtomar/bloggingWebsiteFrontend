import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const BlogTypes = ({ types }) => {
  return (
    <div className="blogTypeContainer">
      <Carousel 
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-32-px"
      >
        {types.map((type, index) => (
          <div key={index} className="blogType">
            {type}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default BlogTypes;
