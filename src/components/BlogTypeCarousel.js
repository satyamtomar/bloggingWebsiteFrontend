import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const BlogTypesCarousel = ({ types ,handleTypeClick}) => {
  console.log('types:', types); // check if types is not empty

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
        {types.map((type, index) => {
          console.log('rendering:', type); // check if this is being logged
          return (
            <div key={index} className="blogType" onClick={()=>{handleTypeClick(type)}}>
              {type}
            </div>
          )
        })}
      </Carousel>

    </div>
  )
}

export default BlogTypesCarousel ;
