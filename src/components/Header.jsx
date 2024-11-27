import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 fixed shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {["Home", "Smartphones", "Laptops", "Desktops", "About"].map(
                (item) => (
                  <li key={item}>
                    <NavLink
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary font-bold"
                          : "text-base-content"
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            Novatec
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {["Home", "Smartphones", "Laptops", "Desktops", "About"].map(
              (item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive ? "text-primary font-bold" : "text-base-content"
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <IoCartOutline className="text-2xl" />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
