import React from "react";
import { Carousel } from "react-bootstrap";

const Section = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="w-75"
            src="https://dz2cdn1.dzone.com/storage/temp/14351099-digitalproddev.png"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-75"
            src="https://conceptboard.com/wp-content/uploads/Product-Development-01-01.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-75"
            src="https://www.productplan.com/uploads/Stages-in-Product-Management-Process.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Section;
