import "./FooterOverlay.css";
import spoonImg from "../../assets/spoon_img_2.png";
export default function FooterOverlay() {
  return (
    <div className="restaurant__footer-overlay">
      <div className="restaurant__footer-overlay__content">
        <div className="restaurant__footer-overlay__content-contact">
          <h2>Contact Us</h2>
          <p className="p__OpenSans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__OpenSans">
            +1 212-344-1230 <br /> +1 212-555-1230
          </p>
        </div>
        <div className="restaurant__footer-overlay__content-slogan">
          <h1 className="h1__style">Gerícht</h1>
          <p className="p__OpenSans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={spoonImg} alt="spoonImg" />
          <div className="restaurant__footer-overlay__content-slogan-icon">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="restaurant__footer-overlay__content-workinghours">
          <h2>Working Hours</h2>
          <p className="p__OpenSans">
            Monday-Friday: <br /> 08:00 am -12:00 am
          </p>
          <p className="p__OpenSans">
            Saturday-Sunday: <br /> 07:00am -11:00 pm
          </p>
        </div>
      </div>
      <div className="restaurant__footer-overlay__copyright">
        <p className="p__OpenSans">2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  );
}
