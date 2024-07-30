import mountain1 from "../../assets/images/gallery/mountain1.jpg";
import mountain2 from "../../assets/images/gallery/mountain2.jpg";
import mountain3 from "../../assets/images/gallery/mountain3.jpg";
import mountain4 from "../../assets/images/gallery/mountain4.jpg";

const images = [mountain1, mountain2, mountain3, mountain4];

const Gallery = () => {
  return (
    <div className="grid grid-cols-team bg-blue-950">
      {images.map((image, index) => (
        <div key={index} className="cursor-pointer hover:opacity-50">
          <img
            src={image}
            alt="gallery image"
            className="w-full h-[16rem] 2xl:h-[22rem] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
