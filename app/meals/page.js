import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

import classes from "./page.module.css";

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite meals from our collection.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
