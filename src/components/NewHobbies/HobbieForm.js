import "./HobbieForm.css";
import { useState } from "react";

const HobbieForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescript, setEnteredDescript] = useState("");


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

  };

  const descriptChangeHandler = (event) => {
    setEnteredDescript(event.target.value);

  };


  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      descript: enteredDescript,
    };

    props.onSaveHobbieData(expenseDate);
    setEnteredTitle("");
    setEnteredDescript("");
  };

  return (
    <div className="new-hobbie-wrapper">
    <form onSubmit={submitHandler}>
      <div className="new-hobbie__controls">
        <div className="new-hobbie__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-hobbie__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescript}
            onChange={descriptChangeHandler}
          />
        </div>

      </div>
      <div className="new-hobbie__actions">
        <button type="submit">Add Hobbie</button>
      </div>
    </form>
    </div>
  );
};

export default HobbieForm;
