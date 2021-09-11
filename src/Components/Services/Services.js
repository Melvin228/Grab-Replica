import React from "react";
import styles from "./services.styles.module.css";
import image1 from "../../assets/image/01-icon-transport-700x700.png";
import image2 from "../../assets/image/02-icon-food-700x700.png";
import image3 from "../../assets/image/03-icon-delivery-700x700.png";
import image4 from "../../assets/image/04-icon-hotels-700x700.png";
import image5 from "../../assets/image/05-icon-airtime-700x700.png";
import image6 from "../../assets/image/11-icon-rewards-700x700.png";
import image7 from "../../assets/image/15-icon-pay-700x700.png";
import image8 from "../../assets/image/icon-grabgift-700x700.png";
import image9 from "../../assets/image/Mart-Icon.png";
import image10 from "../../assets/image/icon-insurance1.png";

const Services = () => {
  console.log(styles);
  const dummyData = [
    {
      id: 1,
      href: "https://www.grab.com/my/food/",
      image: image2,
      title: "Food",
      description:
        "Gets you a meal when you're too busy ( or tired ) to go out,",
    },
    {
      id: 2,
      href: "https://www.grab.com/my/transport/",
      image: image1,
      title: "Transport",
      description: "Takes you from A to B safely without upfront prices.",
    },
    {
      id: 3,
      href: "https://www.grab.com/my/mart/",
      image: image9,
      title: "Mart",
      description: "Find everything you need",
    },
    {
      id: 4,
      href: "https://www.grab.com/my/express/",
      image: image3,
      title: "Delivery",
      description:
        "Gets your documents or packages to their destination, on-demand",
    },
    {
      id: 5,
      href: "https://www.grab.com/my/pay/",
      image: image7,
      title: "Pay",
      description:
        "Helps you make cashless payments quickly, safely, and securely",
    },
    {
      id: 6,
      href: "https://www.grab.com/my/pay/",
      image: image5,
      title: "Airtime",
      description: "Helps you stay connected with quick prepaid top-ups.",
    },
    {
      id: 7,
      href: "https://www.grab.com/my/travel/hotels/",
      image: image4,
      title: "Hotels",
      description: "Gets your hotels bookings sorted, easy.",
    },
    {
      id: 8,
      href: "https://www.grab.com/my/rewards/",
      image: image6,
      title: "Rewards",
      description:
        "Lets you earn points, and unlock benefits with every Grab transation.",
    },
    {
      id: 9,
      href: "https://gifts.grab.com/my/?utm_source=grab.com_icon",
      image: image8,
      title: "Gifts",
      description:
        "Send fun yet practical Grab gift cards to family and friends",
    },
    {
      id: 10,
      image: image10,
      href: "https://www.grab.com/my/insurance/",
      title: "Insurance",
      description:
        "Conveniently access insurance coverage for your everyday needs",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Learn more about the many different ways we serve your everyday needs.
      </h2>
      <div className={styles.services}>
        {dummyData.map((data) => (
          <div key={data.id} className={styles.card}>
            <a
              href={data.href}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={data.image}
                alt="services"
                className={styles.serviceImage}
              />
              <h3
                style={{
                  paddingBottom: 5,
                  paddingLeft: 15,
                  fontSize: 24,
                  textAlign: "left",
                  fontWeight: 500,
                }}
              >
                {data.title}
              </h3>
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: 15,
                  paddingBottom: 30,
                  lineHeight: "20px",
                  color: "grey",
                  fontSize: 17.6,
                }}
              >
                {data.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
