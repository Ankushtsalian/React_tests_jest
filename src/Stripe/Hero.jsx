import React from "react";
import { useGlobalContext } from "../context/context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeStripeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeStripeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="stripe-btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
