import React from "react";
import { Link } from "react-router-dom";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com/"
                  target="_blank"
                  className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                >
                  Creative Tim
                </a>
                {" | "}Distributed by
                <a
                  href="https://themewagon.com/"
                  target="_blank"
                  className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                >
                  {" "}ThemeWagon
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com/"
                    target="_blank"
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={(e) => e.preventDefault()}
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={(e) => e.preventDefault()}
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    onClick={(e) => e.preventDefault()}
                    className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
