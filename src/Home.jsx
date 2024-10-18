import {
  BsFillPlayFill,
  BsMusicNoteBeamed,
  BsPeople,
  BsSearch,
} from "react-icons/bs";
import { Outlet, Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="w-full min-h-screen body-font font-poppins flex flex-row m-3 ">
      <nav className="bg-zinc-800 w-60 p-5 rounded">
        <h1 className="text-3xl font-semibold text-white">Musicly.io</h1>
        <ul className="list-none flex flex-col mt-20">
          <li className="text-white font-semibold my-2 hover:cursor-pointer rounded hover:bg-purple-800">
            <NavLink
              to={`/discover`}
              className={({ isActive }) =>
                isActive
                  ? " flex flex-row items-center bg-purple-800 px-4 py-3 rounded"
                  : "flex flex-row items-center  px-4 py-3 pending"
              }
            >
              <BsSearch className="mx-3" />
              Discover
            </NavLink>
          </li>

          <li className="text-white font-semibold my-2  hover:cursor-pointer rounded hover:bg-purple-800">
            <NavLink
              to={`/around-you`}
              className={({ isActive }) =>
                isActive
                  ? " flex flex-row items-center bg-purple-800 px-4 py-3 rounded"
                  : "flex flex-row items-center  px-4 py-3 pending"
              }
            >
              <BsPeople className="mx-3" />
              Around You
            </NavLink>
          </li>
          <li className="text-white font-semibold my-2  rounded  hover:cursor-pointer hover:bg-purple-800">
            <NavLink
              to={`/top-artists`}
              className={({ isActive }) =>
                isActive
                  ? " flex flex-row items-center bg-purple-800 px-4 py-3 rounded"
                  : "flex flex-row items-center  px-4 py-3 pending"
              }
            >
              <BsPeople className="mx-3" />
              Top Artists
            </NavLink>
          </li>

          <li className="text-white font-semibold my-2 rounded hover:cursor-pointer hover:bg-purple-800">
            <NavLink
              to={`/top-charts`}
              className={({ isActive }) =>
                isActive
                  ? " flex flex-row items-center bg-purple-800 px-4 py-3 rounded"
                  : "flex flex-row items-center  px-4 py-3 pending"
              }
            >
              <BsMusicNoteBeamed className="mx-3" />
              Top Charts
            </NavLink>
          </li>
        </ul>
      </nav>

      <section className="bg-zinc-800 w-full rounded ml-6 p-5">
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
