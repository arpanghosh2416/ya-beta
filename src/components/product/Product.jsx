import React from 'react'
import { Container } from "../../components";
import ProductCards from './ProductCards';

const Product = () => {
    return (
            <Container>
              <article
                id="work"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                className="flex flex-col justify-between gap-6 py-16"
              >
                <section className="w-full text-center text-white">
                  <h1 className="font-poppins text-[24px] font-bold leading-8 md:text-[35px] md:leading-10">
                    <span className="text-primary">Our Works</span>
                  </h1>
                </section>
                <ProductCards />
              </article>
            </Container>
      );
}

export default Product
