// icons
import { IoMdStopwatch } from "react-icons/io";
import { Link } from "react-router-dom";

// hooks
import { useGlobalContext } from "../hooks/useGlobalContext";

function RecipeCard({ recipe }) {
    let { allRecipes, setAllRecipes } = useGlobalContext()

    return (
        <li className=" card w-96 bg-base-100 shadow-xl p-5">
            <button onClick={() => {
                if (confirm(`Do you really want to delete it?`)) {
                    let newRecipes = allRecipes.filter((recipes) => {
                        return recipes.id != recipe.id
                    })

                    setAllRecipes(newRecipes)
                }
            }} className="btn btn-circle btn-outline ml-auto mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <Link to={`/recipeEl/${recipe.id}`}>
                <div className="card-body p-5">
                    <h2 className="card-title text-2xl"> {recipe.title} </h2>
                    <p className="h-28 overflow-hidden"> {recipe.description} </p>
                    <div className="flex w-44 gap-2 ml-28 mt-3">
                        <p className="badge badge-accent font-semibold">
                            ! NEW
                        </p>
                        <p className="badge badge-secondary text-white flex">
                            <IoMdStopwatch className="mr-1" /> <span>{recipe.cookingTime} minutes</span>
                        </p>
                    </div>
                </div>
                <div className='h-[195px] w-[345px] rounded-xl' style={{ backgroundImage: `url(${recipe.images[0]})`, backgroundSize: `cover` }} >
                </div>
            </Link>
        </li>
    )
}

export default RecipeCard