import logo from "../../assets/images/logo.png";
import cloud from "../../assets/images/cloud.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Blog from "../Blog/Blog";

const Expedition = () => {
  const contentRef = useRef<HTMLElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const animate = gsap.timeline({
      scrollTrigger: {
        trigger: ".about1",
        start: "top top",
        endTrigger: contentRef.current,
        end: "bottom center",
        toggleClass: { targets: ".about1", className: "active" },
      },
    });
    animate.from(contentRef.current, { duration: 1 });
  }, []);
  return (
    <section ref={contentRef}>
      <div className="bg-mountain w-full h-[550px] 2xl:h-[900px] bg-no-repeat bg-cover bg-center lg:mt-28 flex items-end justify-center relative overflow-hidden md:overflow-visible">
        <div className="text-white pb-2 text-center absolute bottom-6 md:bottom-0 !z-50 py-28">
          <img
            src={logo}
            alt="logo"
            className="w-32 md:w-48 2xl:w-64 mx-auto invert-[75%]"
          />
          <h1
            className="text-3xl 2xl:text-6xl font-bold capitalize py-4 testShadow"
            id="blogs"
          >
            Expeditions
          </h1>
          <p className="p-6 lg:w-[960px] 2xl:w-[1360px] mx-auto text-sm md:text-base 2xl:text-lg bg-black/50 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            autem voluptatem repellendus ducimus exercitationem dolore est illum
            consequatur sunt, vel at totam aut aliquam facilis. Nostrum cumque,
            veritatis quasi, delectus rerum maxime perferendis mollitia quae
            consectetur explicabo soluta recusandae cum molestiae. Cum, aliquam
            perferendis minima asperiores nulla iusto, voluptate, consequuntur
            deleniti quidem temporibus error minus doloremque. Fugit sapiente
            sed reiciendis doloremque distinctio tenetur, a amet atque nihil
            quasi doloribus molestias nam dolore unde voluptatem, architecto
            sequi, provident voluptas fugiat non in laudantium perspiciatis.
          </p>
        </div>
        <img src={cloud} alt="cloud" className="opacity-30" />
      </div>
      <Blog />
    </section>
  );
};

export default Expedition;
