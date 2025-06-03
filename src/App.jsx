import { useState } from "react";
import Nav from "./components/Nav";
import FoodList from "./components/FoodList";
import Search from "./components/Search";
import "./app.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import styles from "./components/fooddetails.module.css";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("642583");
  const [showRecipe, setShowRecipe] = useState(false); //new state

  // handle recipe click
  function handleRecipeClick(food) {
    setfoodId(food.id);
    setShowRecipe(true); // show recipe screen
  }

  // go back to main list
  function handleBack() {
    setShowRecipe(false);
  }

  return (
    <div className="App">
      <Nav />
      <div style={{ paddingTop: "120px" }}>
        {!showRecipe ? (
          <>
            <Search foodData={foodData} setfoodData={setfoodData} />
            <Container>
              <InnerContainer>
                <FoodList
                  foodData={foodData}
                  setfoodId={setfoodId}
                  onRecipeClick={handleRecipeClick}
                />
              </InnerContainer>
            </Container>
          </>
        ) : (
          <Container>
            <InnerContainer>
              <button
                className={styles.toggleButton}
                onClick={handleBack}
                style={{ marginBottom: "20px" }}
              >
                ← Back
              </button>
              <FoodDetails foodId={foodId} />
            </InnerContainer>
          </Container>
        )}
      </div>
    </div>
  );
}

export default App;
