import React from "react";
import styles from "./services.styles.module.css";
import image1 from "../../assets/image/01-icon-transport-700x700.png";
import image2 from "../../assets/image/02-icon-food-700x700.png";

const Services = () => {
  console.log(styles);
  const dummyData = [
    {
      id: 1,
      image: image1,
      title: "Food",
      description:
        "Gets you a meal when you're too busy ( or tired ) to go out,",
    },
    {
      id: 2,
      image: image2,
      title: "Transport",
      description: "Takes you from A to B safely without upfront prices.",
    },
    {
      id: 3,
      image: image2,
      title: "Mart",
      description: "Find everything you need",
    },
    {
      id: 4,
      image: image2,
      title: "Delivery",
      description:
        "Gets your documents or packages to their destination, on-demand",
    },
    {
      id: 5,
      image: image2,
      title: "Pay",
      description:
        "Helps you make cashless payments quickly, safely, and securely",
    },
    {
      id: 6,
      image: image2,
      title: "Airtime",
      description: "Helps you stay connected with quick prepaid top-ups.",
    },
    {
      id: 7,
      image: image2,
      title: "Hotels",
      description: "Gets your hotels bookings sorted, easy.",
    },
    {
      id: 8,
      image: image2,
      title: "Rewards",
      description:
        "Lets you earn points, and unlock benefits with every Grab transation.",
    },
    {
      id: 9,
      image: image2,
      title: "Gifts",
      description:
        "Send fun yet practical Grab gift cards to family and friends",
    },
    {
      id: 10,
      image: image2,
      title: "Insurance",
      description:
        "Conveniently access insurance coverage for your everydau needs",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h2>
        Learn more about the many different ways we serve your everyday needs.
      </h2>
      <div className={styles.services}>
        {dummyData.map((data) => (
          <div key={data.id}>
            <img
              src={data.image}
              alt="services"
              className={styles.serviceImage}
            />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
