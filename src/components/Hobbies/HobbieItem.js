
import "./HobbieItem.css";
import Card from "../UI/Card";

const HobbieItem = (props) => {
  return (
    <Card className="hobbie_item">
      <div className="hobbie_item__container">
        <h2>{props.title}</h2>
        <div className="hobbie_item__description">{props.descript}</div>
      </div>
    </Card>
  );
};

export default HobbieItem;
