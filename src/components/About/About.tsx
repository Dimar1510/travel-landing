const About = () => {
  return (
    <section className="py-12 z-[-1] about1" id="about">
      <div className="text-center">
        <span
          className="relative text-center text-3xl 2xl:text-5xl
         about
        "
        >
          About us
        </span>
      </div>
      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row gap-5 mt-10 text-center md:text-left text-sm 2xl:text-xl">
        <div className="flex-1 flex flex-col gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            quidem accusantium quasi error ut quod, iure ea eveniet alias iste
            neque recusandae? Labore vel ab quia sapiente possimus libero culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            quidem accusantium quasi error ut quod, iure ea eveniet alias iste
            neque recusandae? Labore vel ab quia sapiente possimus libero culpa.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            maxime, harum totam cupiditate architecto, ullam sequi beatae iste
            vitae debitis suscipit, magnam dolorem animi nihil quaerat accusamus
            placeat sint iusto?
          </p>

          <button className="bg-blue-950 text-white py-2 px-5 hover:bg-blue-800 text-sm  md:self-start">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
