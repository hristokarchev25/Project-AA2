import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./services.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { db } from "../../utils/firebase";

class Gym extends Component {
  state = {
    gym: null,
  };

  componentDidMount() {
    db.collection("gym")
      .get()
      .then((snapshot) => {
        const gym = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          gym.push({ ...data, id: doc.id });
        });
        this.setState({ gym: gym });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className="services__container" id="gym">
        <h1 className="services__H1">Gym Equipment</h1>
        <Swiper
          className="container swiper__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {this.state.gym &&
            this.state.gym.map(({ id, name, image }, index) => {
              return (
                <SwiperSlide key={index} className="slider__container">
                  <div className="product__avatar">
                    <img src={image} alt="avatar" />
                  </div>
                  <h2 className="product__name">{name}</h2>
                  <Link
                    className="details__link"
                    to={`/shop/details/gym/${id}`}
                  >
                    Details
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    );
  }
}

export default Gym;
