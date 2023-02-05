import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./services.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { db } from "../../utils/firebase";

class Mats extends Component {
  state = {
    mats: null,
  };

  componentDidMount() {
    db.collection("mats")
      .get()
      .then((snapshot) => {
        const mats = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          mats.push({ ...data, id: doc.id });
        });
        this.setState({ mats: mats });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className="services__container" id="mats">
        <h1 className="services__H1">Yoga Mats</h1>
        <Swiper
          className="container swiper__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {this.state.mats &&
            this.state.mats.map(({ id, name, image }, index) => {
              return (
                <SwiperSlide key={index} className="slider__container">
                  <div className="product__avatar">
                    <img src={image} alt="avatar" />
                  </div>
                  <h2 className="product__name">{name}</h2>
                  <Link
                    className="details__link"
                    to={`/shop/details/mats/${id}`}
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

export default Mats;
