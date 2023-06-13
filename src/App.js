import Hobbies from "./components/Hobbies/Hobbies";
import NewHobbie from "./components/NewHobbies/NewHobbie";

const App = () => {
  const hobbies = [
    {
      id: "h1",
      title: "Miniture painting",
      descript: "Buy even more filament, find miniture or 3D print, prime, paint.",
     
    },
    {
      id: "h2",
      title: "Video Games",
      descript: "League of legends, Diablo 4, LOZ: Tears of the kingdom.",
      
    },
    {
      id: "h3",
      title: "Raving",
      descript: "Electronic Daisy Carnival, Bass Canyon, Sky Bar.",
     
    },
    {
      id: "h4",
      title: "Music",
      descript:"Ukulele, Bass, Piano.",
      
    },
  ];

  const addHobbieHandler = (hobbie) => {
    console.log("In App.js");
    console.log(hobbie);
  };

  return (
    <div>
      <NewHobbie onAddHobbie={addHobbieHandler} />
      <Hobbies items={hobbies} />
    </div>
  );
};

export default App;
