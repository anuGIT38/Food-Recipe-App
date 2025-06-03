import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import IngredientList from "./IngredientList";
export default function FoodDetails({ foodId }) {
  const [showIngredients, setshowIngredients] = useState(false);
  const [showInstructions, setshowInstructions] = useState(false);
  const [food, setFood] = useState({});
  // isloading state to keep the track of instructions, if they are loaded completely or not.

  const [isLoading, setIsLoading] = useState(true); // true means the data is being loaded, it is not completely loaded.

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "fe815d7021d44c35b9b31907f0b4c22c";

  useEffect(() => {
    async function fetchfoodDetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false); // the data has been loaded
    }
    fetchfoodDetails();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👪<strong>Serves: {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍗Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>$ {food.pricePerServing} Per serving</span>
        </div>
        {/* buttons to toggle visibility  */}
        <div className={styles.toggleButtons}>
          <button onClick={() => setshowIngredients((prev) => !prev)}>
            {showIngredients ? "Hide Ingredients" : "show Ingredients"}
          </button>
          <button onClick={() => setshowInstructions((prev) => !prev)}>
            {showInstructions ? "Hide Instructions" : "Show Instructions"}
          </button>
        </div>
        {/* ingredients */}

        {showIngredients && (
          <>
            <h2>Ingredients</h2>
            <IngredientList food={food} isLoading={isLoading} />
          </>
        )}

        {showInstructions && (
          <>
            <h2>Instructions</h2>
            <div className={styles.recipeInstructions}>
              <ol>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  food.analyzedInstructions[0].steps.map((step) => (
                    <li>{step.step}</li>
                  ))
                )}
              </ol>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
