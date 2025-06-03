import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";
export default function FoodList({ foodData, setfoodId, onRecipeClick }) {
  return (
    <div className={styles.cardContainer}>
      {foodData.map((food) => (
        <FoodItem
          key={food.id}
          food={food}
          setfoodId={setfoodId}
          onRecipeClick={onRecipeClick}
        />
      ))}
    </div>
  );
}
