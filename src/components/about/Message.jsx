import React, { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  });

  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Achievements
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal">
          Plastics have changed the world around us in ways more that we can
          account for, and in the days ahead, the role of plastics will not
          diminish, on the contrary, we will see increased use of plastics in
          novel applications. We at Hashim Industries, understand our
          responsibilities and are prepared to meet the challenges and demands
          of the future through breakthrough concepts and innovative products.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          We invest thousands on man hours in making our organization valuable
          to our partners and our consumers. In addition to that our research
          team is making steady progress in creating better and sustainable
          plastics for the future generation.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          Since our inception we have grown in strength and presence and today
          we are in over 43 different countries and we are capable of producing
          300 ,000 T/A of high quality products thanks to our 2300 dedicated and
          highly talented employees hired from a diverse cultural and social
          background.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          In a short time, the group has expanded from a Jeddah in Saudi Arabia
          to over 43 locations, offering unparalleled service and excellent
          products consistently. We have diversified our portfolio from consumer
          plastics to construction and high performance petro solutions. Being
          vetted and praised all over the globe, Hashim Industries has won the
          confidence of the consumer and have become a favourite among
          distributors in the GCC as start to expend up to Europe market.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          We have always worked hard to adhere to the guidelines and standards
          accepted internationally. To that end, we spend a significant portion
          of our revenues in research and development. In our state of the art
          R&D facility, While the research and development team is concerned
          with making good products better, our marketing team is ever concerned
          with informing clients about the latest innovations at our companies.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          strongly believe that all the members of the Hashim Group will soon
          position themselves as the best in their respective niches and expand
          their reach over a wide geographical area. It gives me immense
          pleasure to say that today we are among the best companies in plastic
          converting industry and as the Vice Chairman, it is a matter of great
          pride for me which I intend to uphold by committing to be consistent
          in our products and services.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          As we strive to make Hashim Industries better and more valuable to our
          customers, shareholders and employees, I want to thank all who have
          supported us to reach what we are in today.
        </p>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          <img
            src="https://hashimindustry.com/v2/img/hashim2.jpg"
            alt=""
            className="mt-4 border-4 border-offGray"
          />
          <h1 className="text-primary font-bold capitalize text-xl mt-1">
            Ali Hashim
          </h1>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal">
            Vice Chairman
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
