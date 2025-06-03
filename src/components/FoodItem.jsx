import styles from "./fooditem.module.css";
export default function FoodItem({ food, setfoodId, onRecipeClick }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setfoodId(food.id);
            onRecipeClick(food);
          }}
          className={styles.itemButton}
        >
          view Recipe
        </button>
      </div>
    </div>
  );
}
