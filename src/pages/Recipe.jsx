// icons
import { FaPlus } from "react-icons/fa";

// uuid
import { v4 as uuidv4 } from 'uuid';

// hooks
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Recipe() {
  let { allRecipes, setAllRecipes } = useGlobalContext();

  // hooks
  let [ingredients, setIngredients] = useState([]);
  let [images, setImages] = useState([]);
  let [value, setValue] = useState('');

  let ingredientsValue = useRef();
  let imageValue = useRef();

  let title = useRef();
  let cookingTime = useRef();
  let description = useRef()

  // functions
  let handleChange = (e) => {
    let { value } = e.target;
    if (/^\d*$/.test(value)) { // Faqat raqamlar kiritilishini tekshirish
      setValue(value);
    }
  }

  function isValidURL(str) {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  }

  return (
    <div>
      <div className='site-container mt-10'>

        <div className='flex flex-col items-center mb-28'>
          <h1 className='text-center text-4xl font-bold mb-5'>Add new Recipe</h1>

          <form onSubmit={(e) => {
            e.preventDefault();

            if (title.current.value.trim() != `` && cookingTime.current.value.trim() != `` && ingredients.length != 0 && images.length != 0 && description.current.value.trim() != ``) {
              setAllRecipes([...allRecipes, {
                id: uuidv4(),
                title: title.current.value,
                cookingTime: cookingTime.current.value,
                ingredients,
                images,
                description: description.current.value
              }]);
              form.reset();
              setIngredients([]);
              setImages([]);

              window.location.assign(`/`);
              console.log(allRecipes);
            } else {
              alert(`Please, Enter all of them`);
            }

          }} id="form" className='border-2 w-[700px] flex flex-col gap-1 items-center py-2 rounded-lg'>

            <center>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold">Title:</span>
                </div>
                <input ref={title} type="text" placeholder="Enter a name of recipe" className="input input-bordered w-[600px]" />
                <div className="label">
                </div>
              </label>
            </center>

            <center>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold">Cooking time:</span>
                </div>
                <input onChange={handleChange} ref={cookingTime} name="numberInput" type="number" placeholder="Enter in minutes" className="input input-bordered w-[600px]" />
                <div className="label">
                </div>
              </label>
            </center>

            <center>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold">Ingredients:</span>
                </div>
                <div className="flex items-center">
                  <input ref={ingredientsValue} type="text" placeholder="Enter the ingredients you will need for cooking" className="input input-bordered w-[540px]" />
                  <button onClick={() => {
                    let info = ingredientsValue.current.value;
                    if (info.trim() != ``) {
                      setIngredients([...ingredients, info])
                      ingredientsValue.current.value = ''
                    } else {
                      console.log(false);
                    }

                  }} type='button' className='btn btn-info w-[55px] ml-2 text-white'> <FaPlus /> </button>
                </div>
                <p className='text-left mt-2 text-md'>Ingredients: {ingredients.length == 0 ? <span className="badge badge-ghost">!No ingredients yet</span> : ingredients.map((ingredient) => <span className="badge badge-neutral mr-1">{ingredient}</span>)} </p>
                <div className="label">
                </div>
              </label>
            </center>

            <center>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-lg font-semibold">Image URL:</span>
                </div>
                <div className="flex items-center">
                  <input ref={imageValue} type="url" placeholder="Enter multiple images" className="input input-bordered w-[540px]" />
                  <button onClick={() => {
                    if (imageValue.current.value.trim() != `` && isValidURL(imageValue.current.value.trim())) {
                      setImages([...images, imageValue.current.value])
                      imageValue.current.value = ''
                    } else {
                      alert(`Please, Enter true URL of image`);
                    }
                  }} type='button' className='btn btn-info w-[55px] ml-2 text-white'> <FaPlus /> </button>
                </div>
                <p className='text-left mt-2 text-md'>Images: {images.length == 0 ? <span className="badge badge-ghost">!No images yet</span> : <span className="badge badge-neutral">{images.length > 1 ? `${images.length} images` : `${images.length} image`}</span>} </p>
                <div className="label">
                </div>
              </label>
            </center>
            
            <center>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-lg font-semibold">Description:</span>
                </div>
                <textarea ref={description} className="textarea textarea-bordered h-28  w-[600px] resize-none" placeholder="Enter description of the meal"></textarea>
                <div className="label">
                </div>
              </label>
            </center>
           

            <div className="w-[600px] grid grid-cols-2 gap-6">
              <button className="btn btn-active btn-secondary">Create</button>
              <button onClick={() => {
                let form = document.getElementById("form");

                form.reset();
                setIngredients([]);
                setImages([]);
              }} className="btn btn-accent" type="button">Reset</button>
            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Recipe

// function infoFromLocalStorage() {
//   return JSON.parse(localStorage.getItem(`ingredients`)) || [];
// }

// function setToLocalStorage(ingredients) {
//   localStorage.setItem(`ingredients`, JSON.stringify(ingredients));
// }

// function imagesFromLocalStorage() {
//   return JSON.parse(localStorage.getItem(`imageURLs`)) || [];
// }

// function setImagesToLocalStorage() {
//   localStorage.setItem(`imageURLs`, JSON.stringify(images));
// }