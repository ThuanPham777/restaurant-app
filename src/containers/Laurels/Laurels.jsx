import SubHeading from "../../components/SubHeading/SubHeading";
import "./Laurels.css";
import logo from "../../assets/Mask Group 1.png";
import G1 from "../../assets/G1.png";
import award1 from "../../assets/award01.png";
import award2 from "../../assets/award02.png";
import award3 from "../../assets/award03.png";
import award5 from "../../assets/award05.png";

export default function Laurels() {
  return (
    <div className="restaurant__laurels app__bg section__padding">
      <div className="restaurant__laurels-container">
        <div className="restaurant__laurels-container__heading">
          <SubHeading title="Awards & recognition" />
          <h1 className="h1__style">Our Laurels</h1>
        </div>

        <div className="restaurant__laurels-container__awards">
          <div className="restaurant__laurels-container__awards-item">
            <div className="restaurant__laurels-container__awards-item_image">
              <img src={award1} alt="award1" />
            </div>
            <div className="restaurant__laurels-container__awards-item_content">
              <h4>Bib Gourmond</h4>
              <p className="p__OpenSans">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="restaurant__laurels-container__awards-item">
            <div className="restaurant__laurels-container__awards-item_image">
              <img src={award2} alt="award2" />
            </div>
            <div className="restaurant__laurels-container__awards-item_content">
              <h4>Bib Gourmond</h4>
              <p className="p__OpenSans">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="restaurant__laurels-container__awards-item">
            <div className="restaurant__laurels-container__awards-item_image">
              <img src={award3} alt="award3" />
            </div>
            <div className="restaurant__laurels-container__awards-item_content">
              <h4>Bib Gourmond</h4>
              <p className="p__OpenSans">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="restaurant__laurels-container__awards-item">
            <div className="restaurant__laurels-container__awards-item_image">
              <img src={award5} alt="award5" />
            </div>
            <div className="restaurant__laurels-container__awards-item_content">
              <h4>Bib Gourmond</h4>
              <p className="p__OpenSans">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="restaurant__laurels-image">
        <img src={logo} alt="logo" />
        <img src={G1} alt="G1" />
      </div>
    </div>
  );
}
