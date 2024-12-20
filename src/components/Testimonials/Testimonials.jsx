import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { reviews } from "./reviewsData";
import Quote from "../../../public/Icons/blockquote.svg";

const Testimonials = () => {
  return (
    <section className="testimonial-container mx-auto flex flex-col justify-center mt-20 max-w-3xl">
      <div className="title text-center mb-8">
        <h2 className="capitalize font-bold md:text-5x1 text-2xl leading-tight">
          Testimonial
        </h2>
        <p className="text-gray-600 mt-2">What my Clients are saying....</p>
      </div>

      <div className="slider-container relative px-4 user-select-none">
        <blockquote className="relative z-10">
          <img
            className="absolute top-[-1rem] left-[-1rem] w-8 h-8 z-[-1]"
            src={Quote}
            alt="quote"
          />
          <img
            className="absolute bottom-[-1rem] right-[-0.5rem] rotate-180 w-8 h-8 z-[-1]"
            src={Quote}
            alt="quote"
          />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
            pauseOnHover: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide
              key={review.id}
              className="flex items-center bg-white p-12 rounded-xl gap-4"
            >
              <img
                className="review-img w-36 h-36 rounded-full object-cover mb-4 mx-auto"
                src={review.image}
                alt={`${review.name}'s profile`}
              />
              <div className="content">
                <p className="text text-gray-800 mb-4 text-lg">{review.text}</p>
                <div className="info flex flex-col ">
                  <div className="rating text-orange-500 text-lg leading-none">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="star">
                        {index < review.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="user font-bold text-2xl mt-2">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
