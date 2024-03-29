import React, { useEffect } from "react";

const Management = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <h1 className="text-primary font-bold text-2xl uppercase border-b-offGray border-b pb-1">
        Management
      </h1>
      <div className="bg-white dark:text-white dark:bg-dark mt-3 animate__animated animate__zoomIn">
        <p className="text-lg dark:text-primary normal-case">
          Corporate Strategy and Brand Commitment
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          The Hashim Group stands as a symbol of more than just a corporation;
          it embodies a commitment to delivering a distinctive experience to its
          global clientele and partners. Today, the group stands as a premier
          leader in plastic technology throughout the Middle East, a reflection
          of its unwavering focus on integrity, teamwork, and innovation. This
          shared vision serves as the cornerstone that unites our workforce,
          driving them to produce high-quality products while fostering a safe,
          conducive, and productive working environment.
        </p>

        <p className="text-lg dark:text-primary normal-case pt-4">
          Brand Commitment – Spearheading Excellence Through Innovation
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          At the Hashim Group, we are dedicated to pushing the boundaries of
          excellence through innovation. Our team of experts adopts a
          forward-thinking approach, persistently exploring innovative solutions
          to drive superior performance. With a progressive mindset, our
          management remains unwavering in its dedication to leading industry
          trends, continuously striving for innovation and excellence.
        </p>

        <p className="text-lg dark:text-primary normal-case pt-4">
          Navigating the Path to Sustainability, Addressing Future Challenges
        </p>
        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
          Looking ahead, the Hashim Group anticipates a multitude of challenges,
          yet remains confident in its ability to address them through
          meticulous planning. Among these challenges, is the pervasive issue of
          plastic waste, casting a shadow over the entire industry. To combat
          this pressing concern, our group adopts a proactive and strategic
          approach.
        </p>

        <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
          In tackling this multifaceted challenge, we recognize the imperative
          need for a comprehensive solution. Firstly, we prioritize the removal
          of harmful chemicals from our plastic production processes. Secondly,
          we commit to enlightening consumers on the virtues of recycling
          plastic products, emphasizing their role in sustainability. Lastly, we
          implement robust waste recovery measures to reintegrate recyclable
          plastic back into the production cycle, while ensuring the responsible
          disposal of non-recyclable waste.
        </p>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary normal-case pt-4">
            Ensuring the Well-being of Our Workforce
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Maintaining a culturally diverse and highly skilled workforce is
            paramount for our group to effectively navigate challenges and
            sustain its position as a leading entity across all facets of its
            operations. Through our robust employee policies, we have
            consistently attracted top-tier professionals to our ranks. We are
            committed to nurturing and retaining talent through employee-centric
            initiatives and unparalleled training programs, which encompass the
            following key areas:
          </p>
          <ol className="pl-8 list-decimal">
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Comprehensive training in core corporate programs and management
              skills.
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Dedicated support for employees during transitional phases,
              especially during periods of promotion.
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Industry-specific training tailored to roles such as sales,
              manufacturing, and finance.
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Rigorous ethics, compliance, and security awareness training to
              uphold our standards of integrity and professionalism.
            </li>
          </ol>

          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
            Our investment in the growth and development of our workforce
            highlights our dedication to fostering a dynamic and skilled team
            capable of driving our organization forward.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary normal-case pt-4">
            Governance and Corporate Social Responsibility
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            The board of directors diligently oversees all significant business
            matters, including strategic planning, corporate responsibilities,
            legal and ethical compliance, and human resource decisions. By
            upholding best practices, the board ensures that the group operates
            with the highest standards of integrity and accountability.
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
            Despite the extensive scope of its operations, the group remains
            deeply committed to its societal and environmental responsibilities.
            Through comprehensive environmental strategies, we actively mitigate
            our impact on the environment and contribute positively to society.
            These strategies include:
          </p>
          <ol className="pl-8 list-decimal">
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Implementing waste reduction measures through efficient recycling
              practices.
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Ensuring responsible transportation methods to minimize our carbon
              footprint.
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Adopting sustainable packaging solutions to reduce environmental
              impact.
            </li>
            <li className="text-dark dark:text-white text-[16px] leading-6 normal-case leading font-normal">
              Embracing Green IT initiatives to optimize energy efficiency and
              reduce electronic waste.
            </li>
          </ol>

          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-3">
            By integrating these strategies into our operations, we strive to
            fulfill our corporate social responsibility and safeguard the
            well-being of both society and the environment.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary normal-case pt-4">
            Consolidated Annual Sales Overview
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            In the fiscal year concluding on March 31, 2012, the Group achieved
            significant milestones, culminating in an impressive annual sales
            figure of USD (xxx). This accomplishment was facilitated by
            strategic utilization of the average international currency exchange
            rates between the Saudi Riyal and US Dollars The breakdown of sales
            is outlined as follows:
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
          <p className="text-lg dark:text-primary normal-case pt-4">
            Workforce Development Statement
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            At the Hashim Group, we recognize human resource development as a
            fundamental management priority. Presently, our workforce comprises
            2300 dedicated employees stationed across our global network of
            factories. We hold a firm belief in the imperative nature of
            nurturing and advancing our workforce, as we perceive it to be the
            cornerstone propelling our organization towards unparalleled
            success.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary normal-case pt-4">
            Global Sales Network Overview
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            The Hashim Group operates a robust sales network spanning across
            more than 45 countries worldwide. While our primary focus remains on
            the Middle East region, we boast a formidable presence in key
            markets across Europe, America, Africa, and Asia. Our sustained
            success is underpinned by strategic partnerships with industry
            experts on every continent, facilitating the continuous enhancement
            of our product offerings and the exploration of new market
            opportunities.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary normal-case pt-4">
            Annual Group Output
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            300,000 metric tons
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
          <p className="text-lg dark:text-primary normal-case pt-4">
            Research & Development Statement
          </p>
          <p className="text-dark text-justify dark:text-white text-[16px] leading-6 normal-case leading font-normal pt-1">
            Throughout its evolution, the Hashim Group has made significant
            investments in Research & Development (R&D) endeavors. In an era
            where consumers of plastic goods contend with escalating product
            prices and environmental concerns associated with plastics, our
            Group remains steadfast in its commitment to innovation. Leveraging
            cutting-edge scientific processes within our state-of-the-art
            facilities, we address these challenges head-on, pioneering new
            concepts and solutions. Our team of experts engages in a relentless
            pursuit to maintain product affordability, enhance quality, and
            augment product value, ensuring that we continuously meet and exceed
            consumer expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Management;
