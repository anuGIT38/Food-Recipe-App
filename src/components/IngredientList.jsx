import Ingredients from "./Ingredients";
export default function IngredientList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <Ingredients item={item} />)
      )}
    </div>
  );
}
