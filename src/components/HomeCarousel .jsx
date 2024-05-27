const HomeCarousel = () => {
  //  https://i.ibb.co/wyTqkrm/1.png
  // https://i.ibb.co/5c0ZcQP/2.png
  // https://i.ibb.co/hWDVkVv/3.png
  // https://i.ibb.co/ZLRQds8/4.png

  return (
    <div className="carousel w-full mt-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/wyTqkrm/1.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className="btn btn-circle bg-red-500 text-white hover:bg-red-600"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-red-500 text-white hover:bg-red-600"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/5c0ZcQP/2.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn btn-circle bg-red-500 text-white hover:bg-red-600"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-red-500 text-white hover:bg-red-600"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/hWDVkVv/3.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn btn-circle bg-red-500 text-white hover:bg-red-600"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-red-500 text-white hover:bg-red-600"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/ZLRQds8/4.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className="btn btn-circle bg-red-500 text-white hover:bg-red-600"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-red-500 text-white hover:bg-red-600"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
