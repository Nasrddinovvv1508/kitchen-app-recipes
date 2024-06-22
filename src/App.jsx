import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Recipe from "./pages/Recipe"
import RecipeEl from "./pages/RecipeEl"

function App() {
  let routes = createBrowserRouter([
    {
      path: `/`,
      element: (
        <MainLayout />
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: `/recipe`,
          element: <Recipe />
        },
        {
          path: `/recipeEl/:id`,
          element: <RecipeEl />
        },
      ]
    },
  ])


  return <RouterProvider router={routes} />
}

export default App