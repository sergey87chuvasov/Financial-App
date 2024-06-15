import Carousel from "../common/Carousel";
import StoreLinks from "../common/StoreLinks";

function Reviews() {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1718203694879-766b434639f2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: '"Kobodrop has helped me send and receive money with little to no complications. It´s what everyone who wants to be on top of their money needs!"',
      name: "Haruka Sato",
      country: "Japan",
    },
    {
      src: "https://images.unsplash.com/photo-1662894312870-54126d344de5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: '"Using Kobodrop has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
      name: "Elena Rodriguez",
      country: "Spain",
    },
    {
      src: "https://images.unsplash.com/photo-1600013476945-381eaba8022d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: '"Kobodrop has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
      country: "USA",
    },
  ];

  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join other thousands of people growing with Kobodrop
        </h2>
        <StoreLinks />
      </article>
      <Carousel slides={slides} />
    </section>
  );
}

export default Reviews;
