import HobbieForm from "./HobbieForm";
import "./NewHobbie.css";

const NewHobbie = (props) => {
  const saveHobbieDataHandler = (enteredHobbie) => {
    const hobbieData = {
      ...enteredHobbie,
      id: Math.random().toString(),
    };
    props.onAddHobbie(hobbieData);
  };
  return (
    <div className="new-hobbie">
      <HobbieForm onSaveHobbieData={saveHobbieDataHandler} />
    </div>
  );
};

export default NewHobbie;
