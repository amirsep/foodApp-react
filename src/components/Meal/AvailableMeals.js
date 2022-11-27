import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Palak Paneer",
    description: "Spinach curry with fresh cheese.",
    price: 199,
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
  {
    id: "m6",
    name: "Butter Naan",
    description: "Naan is a leavened, oven-baked flatbread.",
    price: 30,
  },
  {
    id: "m7",
    name: "Matar Paneer",
    description: " It’s made up of a yummy tomato sauce over paneer and peas.",
    price: 99,
  },
  {
    id: "m8",
    name: "Lassi",
    description: "Lassi’s are yogurt-based drinks made with water.",
    price: 40,
  },
  {
    id: "m9",
    name: "Masala dosa",
    description:
      "dosas are made from a thin batter consisting of rice, flour and lentils.",
    price: 90,
  },
  {
    id: "m10",
    name: "Vada pav",
    description:
      "vada pav consists of a deep fried potato dumpling placed neatly inside a small bun.",
    price: 40,
  },
  {
    id: "m11",
    name: "Idli",
    description:
      "steaming a batter consisting of fermented black lentils and rice.",
    price: 20,
  },
   {
    id: "m12",
    name: "Mysore pak sweet",
    description:
      "Mysore pak is made of besan, plain flour, sugar and loads of fat.",
    price: 40,
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
