import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/MenuItem/MenuItem";
import maskGroup from "../../assets/Mask Group.png";
import "./SpecialMenu.css";
export default function SpecialMenu() {
  const WINE_OR_BEER = [
    {
      title: "Chapel Hill Shiraz",
      price: 56,
      description: "AU | Bottle",
    },
    {
      title: "Catena Malbec",
      price: 59,
      description: "AR | Bottle",
    },

    {
      title: "La Vieille Rosé",
      price: 44,
      description: "FR | 750 ml",
    },

    {
      title: "Rhino Pale Ale",
      price: 31,
      description: "CA | 750 ml",
    },

    {
      title: "Irish Guinness",
      price: 26,
      description: "IE | 750 ml",
    },
  ];

  const COCKTAILS = [
    {
      title: "Aperol Spritz",
      price: 20,
      description: "Aperol | Villa Marchesi prosecco | soda | 30ml",
    },
    {
      title: "Dark 'N' Stormy",
      price: 16,
      description: "Dark rum | Ginger beer | Slice of lime. ",
    },
    {
      title: "Daiquiri",
      price: 10,
      description: "Rum | Citrus juice | Sugar",
    },
    {
      title: "Old Fashioned",
      price: 31,
      description: "Bourbon | Brown sugar | Angostura Bitters",
    },
    {
      title: "Negroni",
      price: 26,
      description: "Gin | Sweet Vermouth | Campari | Orange garnish",
    },
  ];

  return (
    <div className="restaurant__specialmenu section__padding">
      <div className="restaurant__specialmenu-heading">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="h1__style">Today’s Special</h1>
      </div>
      <div className="restaurant__specialmenu-container">
        <div className="restaurant__specialmenu-container__item">
          <h2>Wine & Beer</h2>
          <div className="restaurant__specialmenu-container__item-content">
            {WINE_OR_BEER.map((item, index) => (
              <MenuItem
                key={index}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="restaurant__specialmenu-container__image">
          <img src={maskGroup} alt="maskGroup" />
        </div>
        <div className="restaurant__specialmenu-container__item">
          <h2>Cocktails</h2>
          <div className="restaurant__specialmenu-container__item-content">
            {COCKTAILS.map((item, index) => (
              <MenuItem
                key={index}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="restaurant__specialmenu-btn">
        <button type="button">View More</button>
      </div>
    </div>
  );
}
