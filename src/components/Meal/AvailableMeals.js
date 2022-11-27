import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Palak Paneer",
    description: "Spinach curry with fresh cheese.",
    price: 290,
  },
  {
    id: "m2",
    name: "Biryani",
    description: " A meat-and-rice mixed dish !",
    price: 100,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American, raw, meaty",
    price: 100,
  },
  {
    id: "m4",
    name: "Butter Chicken",
    description:
      "curry made from chicken with a spiced tomato and butter sauce.",
    price: 199,
  },
  {
    id: "m5",
    name: "Fish Curry",
    description:
      "fresh herbs and spices are all loaded with vitamins and minerals.",
    price: 199,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
