import spoonImage from "../../assets/spoon_img.svg";
import "./SubHeading.css";
export default function SubHeading({ title }) {
  return (
    <div className="restaurant__subheading">
      <p className="p__Comorant">{title}</p>
      <img src={spoonImage} alt="spoonImage" />
    </div>
  );
}
