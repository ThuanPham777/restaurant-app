import "./MenuItem.css";

export default function MenuItem({ title, price, description }) {
  return (
    <div className="restaurant__menuitem">
      <div className="restaurant__menuitem-groupA">
        <h4 className="h4__style">{title}</h4>
        <div>
          <div className="line"></div>
          <p className="p__Comorant">${price}</p>
        </div>
      </div>
      <div className="restaurant__menuitem-groupB">
        <p className="p__OpenSans">{description}</p>
      </div>
    </div>
  );
}
