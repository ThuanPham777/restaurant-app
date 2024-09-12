import chef from "../../assets/chef.png";
import quotation from "../../assets/“.png";
import SubHeading from "../../components/SubHeading/SubHeading";
import sign from "../../assets/Kevin Luo.png";
import "./Chef.css";

export default function Chef() {
  return (
    <div className="restaurant__chef app__bg section__padding">
      <div className="restaurant__chef-image">
        <img src={chef} alt="Chef" />
      </div>
      <div className="restaurant__chef-container">
        <div className="restaurant__chef-container__heading">
          <SubHeading title="Chef’s Word" />
          <h1 className="h1__style">What we believe in</h1>
        </div>
        <div className="restaurant__chef-container__content">
          <div className="restaurant__chef-container__content-quotation">
            <img src={quotation} alt="quotation" />
            <p className="p__OpenSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .
            </p>
          </div>
          <p className="p__OpenSans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className="restaurant__chef-container-name">
          <h3>Kevin Luo</h3>
          <p className="p__OpenSans">Chef & Founder</p>
        </div>
        <div className="restaurant__chef-container-signature">
          <img src={sign} alt="sign" />
        </div>
      </div>
    </div>
  );
}
