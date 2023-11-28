// create your App component here
import React,{useState,useEffect} from "react";

function App() {
    const [imageDog, setimageDog] = useState("https://images.dog.ceo/breeds/bulldog-english/mami.jpg");
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setimageDog(data.message);  
        setIsLoaded(false);
    });
  }, []);
    return (
        <div className="App">
            {isLoaded && <p>Loading</p>}
           <img src={imageDog} alt="A Random Dog"/>
        </div>
      );
}
export default App;
