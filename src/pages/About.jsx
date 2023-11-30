import backgroundImage from "../assets/images/leaves_background_02.webp";
import PageBreadcrumb from "../components/PageBreadcrumb";
import { HiHome } from "react-icons/hi";
import EachPageHeader from "../components/EachPageHeader";

const About = () => {
  const titles = ["About Us", ""];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "About Page" };
  return (
    <main className="relative text-font-family-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      {/* About Us title, positioned absolutely */}
      <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 py-10 text-center z-10">
        <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      </h2>
      <section className="relative flex flex-col items-center justify-center pt-[100px] md:pt-[160px] lg:pt-[180px] xl:pt-[220px]">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-[25%] bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.2,
          }}
        ></div>

        {/* Content */}
        {/* Article - Sponsor a Tree: Our Mission */}
        <article className="max-w-[75%] flex flex-col bg-white rounded-xl items-center justify-center z-[8] px-6 md:px-10 lg:px-14 xl:px-20 py-8 shadow-lg ">
          <div className="flex items-center mb-4">
            <img
              src="/src/assets/tree.png"
              alt="Tree Icon"
              className="w-[40px] h-[40px] mr-2"
            />{" "}
            <h3 className="text-2xl sm:text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
              Sponsor a Tree: Our Mission
            </h3>
          </div>

          <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
            Embracing Nature, Enriching Lives
          </h3>
          <p className="text-md font-normal text-justify py-2">
            At the heart of our mission is a simple yet profound commitment: to
            reconnect people with nature through the act of sponsoring a tree.
            Trees are not just silent sentinels of our planet; they are active
            participants in shaping a healthier, more sustainable world.
          </p>
          <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
            Why Sponsor a Tree?
          </h3>
          <p className="text-md font-normal text-justify py-2">
            Environmental Impact: Each tree we plant helps combat climate change
            by absorbing carbon dioxide from the atmosphere. Trees also
            contribute to air purification, groundwater replenishment, and
            biodiversity enhancement. Community Benefits: Beyond environmental
            health, trees bring communities together. They provide natural
            spaces for recreation, enhance local aesthetics, and foster a sense
            of belonging and stewardship among residents. Educational
            Opportunities: Our initiative is not just about planting trees; it's
            also about educating people. We organize workshops and events to
            teach the importance of environmental conservation, providing
            hands-on experiences in tree planting and care.
          </p>
          <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
            Our Goals
          </h3>
          <p className="text-md font-normal text-justify py-2">
            Planting and Nurturing: We aim to plant thousands of trees each year
            in various communities, focusing on native species that thrive in
            specific environments. Our commitment extends beyond planting; we
            nurture each tree, ensuring its growth and health. Community
            Engagement: We strive to involve local communities in our planting
            efforts. By doing so, we hope to foster a deeper connection between
            people and their natural environment. Sustainability: Our approach
            is rooted in sustainability. We carefully select planting sites and
            species to ensure that our efforts contribute positively to local
            ecosystems. Transparency and Impact Tracking: For every tree
            sponsored, we provide updates on its growth and the overall impact
            of the project. This transparency ensures that sponsors can see the
            tangible results of their contributions.
          </p>
          <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
            Join Us
          </h3>
          <p className="text-md font-normal text-justify py-2">
            By sponsoring a tree, you are not just planting a seed; you are
            sowing hope for a greener, more sustainable future. Join us in this
            endeavor to make a positive impact on our planet and communities.
          </p>
          {/* Image section */}
          <div className="py-4 md:py-8 lg:py-12 xl:py-16 flex flex-row justify-center gap-[5rem]">
            <img
              src="src/assets/images/biobaum_sapling_01.webp"
              alt="Sapling Tree"
              className="w-[50%] border border-[var(--darker-primary)]"
              style={{ borderWidth: "5px" }}
            />
            <img
              src="src/assets/images/biobaum_sapling_02.webp"
              alt="Sapling Tree"
              className="w-[50%] border border-[var(--darker-primary)]"
              style={{ borderWidth: "5px" }}
            />
          </div>
        </article>
        {/* Article - About Us: Solawi Zabergäu */}
        <article className="max-w-[75%] flex flex-col items-center bg-white rounded-xl justify-center z-[8] px-6 md:px-10 lg:px-14 xl:px-20 py-8 mt-10 shadow-lg">
          <div className="flex items-center mb-4 pt-[0px] md:pt-[10px] lg:pt-[20px] xl:pt-[40px]">
            <img
              src="/src/assets/tree.png"
              alt="Tree Icon"
              className="w-[40px] h-[40px] mr-2"
            />{" "}
            <h3 className="text-2xl sm:text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
              About Us: Solawi Zabergäu
            </h3>
          </div>

          <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
            Cultivating Community and Sustainability
          </h3>
          <p className="text-md font-normal text-justify py-2">
            At Solawi Zabergäu, we are more than just a community-focused
            agricultural initiative; we are a movement dedicated to sustainable
            living and local empowerment. Our roots lie deep in the fertile soil
            of Zabergäu, where we've grown from a small collective of
            eco-conscious individuals into a thriving hub of community-supported
            agriculture.
          </p>
          <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
            Our Philosophy
          </h3>
          <p className="text-md font-normal text-justify py-2">
            Sustainable Farming: We believe in farming methods that respect the
            natural balance of the environment. Our practices are organic,
            avoiding any synthetic pesticides or fertilizers, ensuring that the
            food we produce is not only healthy but also environmentally
            friendly. Community Engagement: At the core of Solawi Zabergäu is
            our commitment to the community. We foster close relationships with
            local residents, encouraging them to be actively involved in the
            food production process. Education and Outreach: We offer
            educational programs and workshops on sustainable agriculture,
            aiming to spread awareness and knowledge about the importance of
            eco-friendly farming practices.
          </p>
          <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
            Our Journey
          </h3>
          <p className="text-md font-normal text-justify py-2">
            From Seed to Harvest: Our journey began with a simple idea - to
            bring people closer to the source of their food. We started with a
            small plot of land and a few enthusiastic members, and over the
            years, we have grown into a community staple. Collaborative Efforts:
            We work closely with other local businesses and organizations to
            promote sustainable practices across the region. Our collaborative
            projects range from local farmers' markets to environmental
            conservation efforts.
          </p>
          <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
            Join Our Community
          </h3>
          <p className="text-md font-normal text-justify py-2">
            Being a part of Solawi Zabergäu means more than just consuming
            healthy, local produce. It's about being part of a community that
            values sustainability, education, and mutual support. We invite you
            to join us in this journey towards a greener, more sustainable
            future.
          </p>
          {/* Image section */}
          <div className="py-4 md:py-8 lg:py-12 xl:py-16 flex flex-row justify-center gap-[5rem]">
            <img
              src="src/assets/images/biobaum_sapling_03.webp"
              alt="Sapling Tree"
              className="w-[50%] border border-[var(--darker-primary)]"
              style={{ borderWidth: "5px" }}
            />
            <img
              src="src/assets/images/biobaum_sapling_04.webp"
              alt="Sapling Tree"
              className="w-[50%] border border-[var(--darker-primary)]"
              style={{ borderWidth: "5px" }}
            />
          </div>
        </article>
      </section>
      {/* Footer Image */}
      <img
        src="src/assets/images/biobaum_about_footer_img.webp"
        alt="Footer Image"
        className="w-full mt-10"
      />
    </main>
  );
};

export default About;
