import spoonImg1 from "../../assets/spoon_img_1.png";
import spoonImg2 from "../../assets/spoon_img_2.png";
import knifeImg from "../../assets/knife_img.png";
import gImg from "../../assets/G.png";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div className="restaurant__aboutus app__bg section__padding">
      <div className="restaurant__aboutus-G">
        <img src={gImg} alt="gImg" />
      </div>
      <div className="restaurant__aboutus-content">
        <div className="restaurant__aboutus-about">
          <h1 className="h1__style">About Us</h1>
          <img src={spoonImg1} alt="spoonImg1" />
          <p className="p__OpenSans" style={{ marginTop: "40px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="button__style">
            Know More
          </button>
        </div>
        <div className="restaurant__aboutus-image">
          <img src={knifeImg} alt="knifeImg" />
        </div>
        <div className="restaurant__aboutus-history">
          <h1 className="h1__style">Our History</h1>
          <img src={spoonImg2} alt="spoonImg2" />
          <p className="p__OpenSans" style={{ marginTop: "40px" }}>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="button__style">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
