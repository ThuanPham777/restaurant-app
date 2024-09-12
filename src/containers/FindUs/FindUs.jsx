import "./FindUs.css";
import contactImg from "../../assets/contact_img.png";
import SubHeading from "../../components/SubHeading/SubHeading";
export default function FindUs() {
  return (
    <div className="restaurant__findus app__bg section__padding">
      <div>
        <SubHeading title="Contact" />
        <h1 className="h1__style">Find Us</h1>
        <p className="p__OpenSans" style={{ marginTop: "50px" }}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <div className="restaurant__findus-openingtime">
          <h4 className="h4__style">Opening Hours</h4>
          <p className="p__OpenSans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__OpenSans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="button__style">
          Visit Us
        </button>
      </div>
      <div className="restaurant__findus-image">
        <img src={contactImg} alt="contactImg" />
      </div>
    </div>
  );
}
