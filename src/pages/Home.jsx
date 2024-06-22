// hooks
import RecipeCard from "../components/RecipeCard";
import { useGlobalContext } from "../hooks/useGlobalContext"

function Home() {
  let { allRecipes } = useGlobalContext();
  console.log(allRecipes);

  return (
    <div>
      <div className="site-container mt-10 mb-40">
        <h1 className="text-4xl font-extrabold mb-7">All Recipes {allRecipes.length > 0 && <span className="font-normal text-2xl">: You have <span className="text-red-700 font-semibold">{allRecipes.length}</span> recipe</span>} </h1>
        <ul className="grid grid-cols-3 gap-y-7">
          {allRecipes.length == 0 ? <h1 className="no-recipe">No Recipe Yet...</h1> : allRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={{ ...recipe }} />)}
        </ul>
      </div>
    </div>
  )
}

export default Home