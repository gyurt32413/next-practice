export default function MealDetail({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Meal Detail</h1>
      <p>This is the detail page for meal with ID: {id}</p>
    </div>
  );
}