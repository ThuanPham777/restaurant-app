import FooterOverlay from "../../components/Footer/FooterOverlay";
import NewsLetter from "../../components/Footer/NewsLetter";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="restaurent__footer app__bg section__padding">
      <NewsLetter />
      <FooterOverlay />
    </div>
  );
}
