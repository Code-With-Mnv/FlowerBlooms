import React, { useEffect } from "react";
import Carousel from "better-react-carousel";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not logged in
    if (!localStorage.getItem("name")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="text-center py-5 gallery-section">
      <Carousel gap={10} loop autoplay={2000}>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2025/04/21/14/54/daisies-9547672_640.jpg"
            alt="1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2016/10/06/14/07/sunflowers-1719119_640.jpg"
            alt="2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2022/10/07/11/02/autumn-7504819_640.jpg"
            alt="3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/06/20/red-1867767_640.jpg"
            alt="4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2022/10/21/00/28/lotus-7535941_640.jpg"
            alt="5"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.pixabay.com/photo/2022/11/07/18/33/hibiscus-7577002_640.jpg"
            alt="6"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
