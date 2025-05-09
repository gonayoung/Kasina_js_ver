import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Mainslider.css';



function Midslider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item >
        <img src= {process.env.PUBLIC_URL +'/img/23.png'} />
      </Carousel.Item>
     
     <Carousel.Item >
        <img src= {process.env.PUBLIC_URL +'/img/24.png'} />
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Midslider;