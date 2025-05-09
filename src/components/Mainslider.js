import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Mainslider.css';



function Mainslider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item >
        <img src= {process.env.PUBLIC_URL +'/img/17.png'} />
      </Carousel.Item>
     
     <Carousel.Item >
        <img src= {process.env.PUBLIC_URL +'/img/16.png'} />
      </Carousel.Item>
     
      <Carousel.Item>
       < img src= {process.env.PUBLIC_URL +'/img/4.png' }/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mainslider;

