import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-50"
          src="http://localhost:4002/files/lamborg.png"
          alt="First slide"
        />
        <Carousel.Caption  style={{paddingLeft:"8%"}}>
          <h3>Best deal</h3>
          <p>Search for the best deal for you and book it with only a small advance payment.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{paddingLeft:"12%"}}>
        <img
          className="d-block w-50"
          src="http://localhost:4002/files/sonata.png"
          alt="Second slide"
        />

        <Carousel.Caption style={{paddingLeft:"25%"}}>
          <h3>Your in right place</h3>
          <p>We can ensure the quality of service you will receive.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50"
          src="http://localhost:4002/files/minicoper.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Choose your car now!!!</h3>
          <p>No need for huge up-front costs. </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{paddingBottom:"5%"}}>
        <img
          className="d-block w-40"
          src="http://localhost:4002/files/chevrlt.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>drive your favourtite Car</h3>
          <p>Deal with us, pick your car, and your good to go in same time.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-20"
          src="http://localhost:4002/files/bmw1.png"
          alt="First slide"
          width="450"
          height="400"
        />
        <Carousel.Caption>
          <h3>Deal!! drive your favourtite Car</h3>
          <p>Deal with us, pick your car, and your good to go in same time.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item >
        <img
          className="d-block w-50"
          src="http://localhost:4002/files/audi5.png"
          alt="First slide"
        />
        <Carousel.Caption style={{paddingLeft:"20%"}}>
          <h3>Deal!! drive your favourtite Car</h3>
          <p>Deal with us, pick your car, and your good to go in same time.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;