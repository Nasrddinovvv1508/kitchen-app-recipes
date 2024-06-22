import { Link } from "react-router-dom" // bg-base

// hooks
import { useGlobalContext } from "../hooks/useGlobalContext"

function Navbar() {

  return (
    <div className="border-y-2 py-2 bg-base-200">
      <div className='site-container'>

        <div className="navbar">

          <div className="flex-1">
            <Link to={`/`} className="btn btn-ghost text-2xl font-bold">Kitchen <span className="text-red-500"> App</span></Link>
          </div>

          <div className="flex-none gap-4 items-center">
            <h2 className="text-lg font-semibold">user picture</h2>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="user" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 font-medium rounded-box w-52">
                <li>
                  <Link to={`/`} className="justify-between">
                    Home
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><Link to={`/recipe`}>Create recipe</Link></li>
                <li><button>Change theme</button></li>
                <li><button>Logout</button></li>
              </ul>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar