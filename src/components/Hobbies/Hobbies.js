import HobbieItem from "./HobbieItem";
import "./Hobbies.css";
import Card from "../UI/Card";


const Expenses = (props) => {
 return (
    <Card className="hobbies">
      <HobbieItem
      title={props.items[0].title}
      descript={props.items[0].descript}/>
      <HobbieItem
      title={props.items[1].title}
      descript={props.items[1].descript}/>
      <HobbieItem
      title={props.items[2].title}
      descript={props.items[2].descript}/>
      <HobbieItem
      title={props.items[3].title}
      descript={props.items[3].descript}/>
    </Card> 
  );
  
};

export default Expenses;
