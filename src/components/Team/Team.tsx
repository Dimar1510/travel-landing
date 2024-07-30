import team1 from "../../assets/images/team/team1.jpg";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.jpg";

const teams = [team1, team2, team3];

const Team = () => {
  return (
    <section
      className="lg:h-[850px] py-6 lg:py-0 2xl:h-[1000px] bg-teamBg bg-cover bg-no-repeat lg:pt-44"
      id="team"
    >
      <div className="w-[90%] lg:w-[85%] mx-auto grid grid-cols-team gap-5">
        {teams.map((team, index) => (
          <div key={index} className="lg:mt-[-7rem] !z-30 w-full">
            <img
              src={team}
              alt="team image"
              className="w-full h-[23rem] 2xl:h-[30rem] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="w-[90%] lg:w-[60%] mx-auto bg-blue-950/60 text-white mt-[3rem] p-4 text-center flex flex-col gap-5 rounded-lg">
        <h1 className="text-2xl lg:text-5xl capitalize">Our leaders</h1>
        <p className="2xl:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil
          quae praesentium natus eaque numquam nam eligendi libero, sed quo
          laborum earum, fugit, eius inventore! Praesentium in inventore fugiat
          vitae.
        </p>
        <p className="text-sm 2xl:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil
          quae praesentium natus eaque numquam nam eligendi libero, sed quo
          laborum earum, fugit, eius inventore! Praesentium in inventore fugiat
          vitae.
        </p>
      </div>
    </section>
  );
};

export default Team;
