import SubHeading from "../../components/SubHeading/SubHeading";
import headingImg from "../../assets/heading_img.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="restaurant__heading section__padding">
      <div className="restaurant__heading-content">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="h1__title">The key to Fine dining</h1>
        <p className="p__OpenSans">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="button__style">
          Explore Menu
        </button>
      </div>
      <div className="restaurant__heading-image">
        <img src={headingImg} alt="headingImg" />
      </div>
    </div>
  );
}
