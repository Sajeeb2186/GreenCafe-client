import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

//react rating
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="what Our Client Say"
        heading="Client Reviews"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24  f;lex flex-col items-center">
              <Rating className=" mx-auto mb-10 "
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />

              <p className="text-center mb-10">{review.details}</p>
              <h3 className="text-2xl text-center text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
