import SubHeading from "../../components/SubHeading/SubHeading";
import gallery1 from "../../assets/gallery01.png";
import gallery2 from "../../assets/gallery02.png";
import gallery3 from "../../assets/gallery03.png";
import gallery4 from "../../assets/gallery04.png";
import "./Gallery.css";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import { useRef } from "react";

export default function Gallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    console.log(current, "current");

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const gallery = [gallery1, gallery2, gallery3, gallery4];
  return (
    <div className="restaurant__gallery section__padding">
      <div className="restaurant__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="h1__style">Photo Gallery</h1>
        <p className="p__OpenSans" style={{ marginTop: "50px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="button__style">View More</button>
      </div>
      <div className="restaurant__gallery-image">
        <div className="restaurant__gallery-image__container" ref={scrollRef}>
          {gallery.map((img, index) => {
            return (
              <div
                className="restaurant__gallery-image__card"
                key={`gallery_image-${index + 1}`}
              >
                <img src={img} alt="img" />
                <BsInstagram
                  className="gallery__image-icon"
                  style={{ color: "white", fontSize: "30px" }}
                />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            style={{ color: "#fff" }}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            style={{ color: "#fff" }}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}
