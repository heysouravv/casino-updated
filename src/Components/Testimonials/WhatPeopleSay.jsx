import React from "react";
import SectionContainer from "../Container/SectionContainer";
import Carousel from "./Carousel";
import Testimonial from "./Testimonial";

const WhatPeopleSay = () => {
  const PeopleReviews = [
    {
      id: 1,
      title:
        "Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!",
      name: "Rohit Sharma",
    },
    {
      id: 2,
      title: "Great ambiance and friendly staff. Will definitely come back!",
      name: "Priya Gupta",
    },
    {
      id: 3,
      title: "An unforgettable night with friends! The games were thrilling.",
      name: "Amit Verma",
    },
    {
      id: 4,
      title: "Best casino experience I've ever had! Highly recommend it.",
      name: "Sneha Reddy",
    },
    {
      id: 5,
      title: "The food and entertainment were top-notch!",
      name: "Rahul Mehta",
    },
    {
      id: 6,
      title:
        "I had a blast! The games were exciting and the service was excellent.",
      name: "Anjali Singh",
    },
    {
      id: 7,
      title: "A perfect place for a night out with friends. Loved it!",
      name: "Vikram Joshi",
    },
    {
      id: 8,
      title: "The atmosphere is electric! Can't wait to visit again.",
      name: "Deepika Kaur",
    },
  ];

  return (
    <div className="">
      <SectionContainer heading={"What People Say"} desc={""}>
        <div className="z-20 flex flex-col items-center justify-start w-full gap-6 overflow-hidden">
          <Carousel>
            {PeopleReviews.map(({ name, title, id }) => (
              <Testimonial key={id} name={name} message={title} />
            ))}
          </Carousel>
        </div>
      </SectionContainer>
    </div>
  );
};

export default WhatPeopleSay;
