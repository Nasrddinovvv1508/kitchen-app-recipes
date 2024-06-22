// hooks
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

// components
import Scrollimages from "../components/Scrollimages";

function RecipeEl() {
    let { allRecipes } = useGlobalContext();
    console.log(allRecipes);

    let { id } = useParams();
    console.log(id);

    return (
        <div>
            <div className="site-container mt-10 mb-[200px]">
                <h1 className="text-3xl font-bold mb-7">Recipe Element</h1>
                <div className="flex overflow-x-auto max-w-full">
                    {
                        allRecipes.map((recipe) => recipe.id == id ? <Scrollimages key={id} images={recipe.images} /> : false)
                    }
                </div>
                {
                    allRecipes.map((recipe, index) => recipe.id == id ? <div key={index} className="mt-10 pl-5 mb-5">
                        <h1 className="text-3xl mb-5 font-bold">{recipe.title}</h1>
                        <p className="text-lg font-medium mb-4">
                            Ingredients: {recipe.ingredients.map((v) => <span className="badge badge-neutral mr-2">{v}</span>)}
                        </p>
                        <p className="mb-8 font-medium">
                            Cooking time: <span className="font-normal"> {recipe.cookingTime} minutes</span>
                        </p>
                        <h2 className="text-3xl font-bold mb-4">Description</h2>
                        <p className="text-xl font-medium">
                            {recipe.description}
                        </p>
                    </div> : false)
                }
                <Link to={`/`} className="btn btn-accent w-20 float-end mr-5">Back</Link>
            </div>
        </div >
    );
}

export default RecipeEl;
