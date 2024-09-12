import SubHeading from "../SubHeading/SubHeading";
import "./NewsLetter.css";
export default function NewsLetter() {
  return (
    <div className="restaurant__footer-newsletter">
      <div className="restaurant__footer-newsletter__heading">
        <SubHeading title="Newsletter" />
        <h1 className="h1__style">Subscribe to Our Newsletter</h1>
        <p className="p__OpenSans">And never miss latest Updates!</p>
      </div>
      <div className="restaurant__footer-newsletter__input">
        <input type="email" placeholder="Email Address" />
        <button type="submit" className="button__style">
          Subscribe
        </button>
      </div>
    </div>
  );
}
