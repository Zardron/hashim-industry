import React, { useEffect } from "react";

const Management = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Management
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-lg dark:text-primary">
          Corporate Strategy and Brand Promise
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          The Hashim Group is more than a company, it is a name that promise a
          unique experience to its consumers and distributors worldwide. Today,
          the group is among the best plastic technology leader in the Middle
          East. Thanks to its emphasis on the values of integrity, teamwork and
          innovation. It is this common goal that unifies the workforce and
          helps them high quality products while maintaining a safe, comfortable
          and productive environment.
        </p>

        <p className="text-lg dark:text-primary pt-4">
          Brand Promise – Delivering Excellence Through Innovation
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          The Hashim Group stays ahead of its competition by the sheer dint of
          its innovation. The experts employed by the group has an open mind and
          it continually strives to find better and more efficient solutions to
          problems through innovation. The group is progressive and the goal of
          the management has always been to stay ahead of the curve through
          innovation and excellence.
        </p>

        <p className="text-lg dark:text-primary pt-4">
          Future Challenges – Growing with consumers for a better tomorrow
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          Going ahead in the future, the key challenges that the company faces
          are multitudinous, nevertheless manageable with careful planning. The
          biggest challenge that the entire plastics industry faces is that of
          plastic waste. Hashim Group is consciously and affirmatively managing
          the issue by approaching the problem professionally.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          The challenge is quite complicated and requires a multi-phased
          solution. The first phase is to prevent the use of harmful chemicals
          in the preparation of plastic products. The second phase is about
          educating customers on the benefits of reusing plastic products
          through recycling and finally, the final phase is recovering all
          recoverable plastic waste and putting it back into the production
          cycle, while conscientiously disposing the waste.
        </p>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4">
            Caring for the workforce
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            It is essential for the group to maintain a culturally diverse and
            talented workforce to help it tackle challenges and keep evolving
            strongly as a leading entity in all aspects of its operations.
            Thanks to its favorable employee policies, the group has never had
            shortfall of high skilled professionals in its ranks. It has always
            sought to hire, nourish and retain talented through its employee
            centric policies and unparalleled training programs, which can be
            succinctly summarized under the following bullet points:
          </p>
          <ol className="pl-8 list-decimal">
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Training in core corporate programs and management skills
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Enhancing and supporting employees during transitional phase,
              particularly during promotions
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Industry specific training (viz: sales, manufacturing, finance
              training)
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Ethics, compliance and security awareness training
            </li>
          </ol>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4">
            Governance and Corporate Social Responsibility
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            All significant business matters are overseen by the board of
            directors. These matters often relate to business plans, corporate
            responsibilities, legal and ethical issues and human resource
            decisions to name a few. Since these matters are closely related
            with the Board of directors, it is ensured that only the best
            practices are followed. Despite its vast range of responsibilities
            and operations, the group is well aware of its responsibilities
            towards the society and the environment at large and does everything
            in its power to ensure that the society as well as the environments
            is not neglected. This is ensured with the help of the four key
            environmental strategy:
          </p>
          <ol className="pl-8 list-decimal">
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Reducing waste through recycling
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Transporting responsibly
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Responsible packaging
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Green IT
            </li>
          </ol>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4">
            Consolidated Annual Sales
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            The Group recorded an annual sales figure of USD (xxx), for the
            fiscal year that ended March 31, 2012 based on the average
            international currency exchange rates of the Saudi Riyal to US
            Dollars. The breakdown of the sales figures are as below:
          </p>
          <ol className="pl-8 list-decimal">
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Local Market Revenues: (xxx) Saudi Riyal
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              European Market Revenues: (xxx) Saudi Riyal
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Other International Market Revenues (Africa/Asia): (xxx) Saudi
              Riyal
            </li>
          </ol>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4">Workforce</p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            The Hashim Group considers human resource development a key
            management responsibility. Currently there are 2300 happy employees
            working for the group in factories based all over the globe. The
            group considers it very important to develop and nourish its
            workforce, which they believe is the factor that will catapult the
            group to the zenith of success.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4">Global Sales Network</p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Sales of the group takes place in more than 43 countries. Most of
            them are in the Middle East, but the group also has a very strong
            presence in Europe, America, Africa and Asia. It maintains a strong
            partnership with experts in all continents, which helps them in
            developing better products and reaching new markets.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4">
            Annual Output of the Group
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            300, 000 metricTons.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary pt-4">
            Research & Development
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Over the years, the group has investment substantially in R&D
            activities. Every year consumers of plastic goods are faced with the
            rising price of products and worried by the threats of plastics to
            environment. Hashim Group employs the latest scientific process in
            its state of the art factories to overcome those obstacles and
            develop new concepts. There is a continuous effort among the experts
            to keep product prices under control while improving the quality and
            adding value to the products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Management;
