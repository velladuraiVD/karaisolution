import React, { useState } from "react";
import logo from "./Assets/newlogo.png";
import { IoIosMenu } from "react-icons/io"
import { RiArrowDropDownLine, } from "react-icons/ri";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen(isDropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <div id="Navbar" className="bg-white lg:flex-row xl:flex justify-around items-center flex-wrap sticky top-[-1%]  p-3 z-10 ">
      <div className="flex justify-center items-center gap-3 mt-3 flex-wrap">
        <a href="/">  <img
          src={logo}
          alt="img" href
          className="h-[50px] mt-3 hover:text-gray-950"
        /></a>

        <div className="flex-row justify-center xl:flex-col ">
          <h1 className="text-2xl font-bold">Kar Ai Solutions</h1>
          <h1 className="md:block text-2xl font-bold">
            Private Limited (PVT LTD)
          </h1>
        </div>
        <button onClick={toggleMenu} className="md:hidden  bg-yellow-500">
          <IoIosMenu className="text-3xl text-white" />
        </button>
      </div>

      {isMenuOpen && (
        <ul className="lg:hidden bg-[#424141]   shadow-lg font-bold absolute top-full left-0 w-full z-50 overflow-y-auto transition-all duration-700 ease-in-out  cursor-pointer">
          <li className="p-2 border-b-2 border-white hover:text-white">
            <a href="/">Home</a>
          </li>

          <li
            className={`p-2 border-b-2 bg-[#424141] border-white hover:text-white relative `}
            onClick={() => toggleDropdown("about")}
          >
            About Us
            <span
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform cursor-pointer ${isDropdownOpen === "about" ? "rotate-180  " : ""}`}
              style={{ color: "white", border: "2px solid white", padding: "2px" }}
            >
              {isDropdownOpen === "about" ? <RiArrowDropDownLine /> : <RiArrowDropDownLine />}
            </span>
            <ul
              className={`absolute top-full left-0 w-full z-50 bg-[#424141] text-gray-800 shadow-lg duration-1000   ${isDropdownOpen === "about" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <li className="p-2 border-b-2 border-white bg-[#424141] hover:text-white">
                <a href="/company">Company Overview</a>
              </li>
              <li className="p-2 border-b border-white bg-[#424141] hover:text-white">
                <a href="#">Company Vision and Mission</a>
              </li>
              <li className="p-2 border-b border-white bg-[#424141] hover:text-white">
                <a href="#">Company Careers</a>
              </li>
            </ul>
          </li>

          <li
            className={`p-2 border-b-2 bg-[#424141] border-white hover:text-white relative`}
            onClick={() => toggleDropdown("cloud")}
          >
            Cloud Applications
            <span
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform cursor-pointer ${isDropdownOpen === "cloud" ? "rotate-180" : ""}`}
              style={{ color: "white", border: "2px solid white", padding: "2px" }}
            >
              {isDropdownOpen === "cloud" ? <RiArrowDropDownLine /> : <RiArrowDropDownLine />}
            </span>
            <ul
              className={`absolute top-full left-0 w-full z-50 bg-[#424141] text-gray-800 shadow-lg transition-all duration-700 ease-in-out ${isDropdownOpen === "cloud" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Enterprise Resource Planning (ERP)</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Enterprise Performance Management (EPM)</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Supply Chain & Manufacturing (SCM)</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Human Capital Management (HCM)</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Advertising and Customer Experience (CX)</a>
              </li>
            </ul>
          </li>

          <li
            className={`p-2 border-b-2 bg-[#424141] border-white hover:text-white relative`}
            onClick={() => toggleDropdown("service")}
          >
            service
            <span
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform cursor-pointer ${isDropdownOpen === "service" ? "rotate-180" : ""}`}
              style={{ color: "white", border: "2px solid white", padding: "2px" }}
            >
              {isDropdownOpen === "service" ? <RiArrowDropDownLine /> : <RiArrowDropDownLine />}
            </span>
            <ul
              className={`absolute top-full left-0 w-full z-50 bg-[#424141] text-gray-800 shadow-lg transition-all duration-700 ease-in-out ${isDropdownOpen === "service" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Cloud Service</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">DevOps</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Content Management System (CMS)</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">E-Commerce</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Industry Solutions</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Internet of Things</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">IT Infrastructure & Security</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Marketing Automation</a>
              </li>
            </ul>

          </li>

          <li
            className={`p-2 border-b-2 bg-[#424141] border-white hover:text-white relative`}
            onClick={() => toggleDropdown("industry")}
          >
            industry
            <span
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform cursor-pointer ${isDropdownOpen === "industry" ? "rotate-180" : ""}`}
              style={{ color: "white", border: "2px solid white", padding: "2px" }}
            >
              {isDropdownOpen === "industry" ? <RiArrowDropDownLine /> : <RiArrowDropDownLine />}
            </span>
            <ul
              className={`absolute top-full left-0 w-full z-50 bg-[#424141] text-gray-800 shadow-lg transition-all duration-700 ease-in-out ${isDropdownOpen === "industry" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >

              <li className="p-2 border-b bg-[#424141]k border-white hover:text-white">
                <a href="#">Banking and Insurance</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Communications</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Engineering and Construction</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Food and Beverage</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Healthcare</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Hospitality</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Life Sciences</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Public Sector</a>
              </li>
              <li className="p-2 border-b bg-[#424141] border-white hover:text-white">
                <a href="#">Utilities</a>
              </li>
            </ul>

          </li>

          <li className="p-2 border-b-2 bg-[#424141] border-white hover:text-white">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      )}

      <div className="hidden md:flex mt-10 mx-8 justify-center items-center flex-wrap xl:mt-0">
        <form>
          <ul className="flex gap-7 flex-wrap   ">
            <li className="text-xl font-semibold  text-black   hover:text-red-600 md:tex">
              <a href="/"> Home </a>
            </li>

            <li className="dropdown cursor-pointer inline-block relative text-xl  font-semibold text-black hover:text-red-600 group">
              About Us
              <ul className="dropdown-menu pt-9 absolute hidden group-hover:block w-60 text-gray-700 ">
                <li>
                  <a
                    className="border-b bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/company"
                  >
                    Company Overview
                  </a>
                </li>
                <li>
                  <a
                    className="border-b bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/vision"
                  >
                    Company Vision and Mission
                  </a>
                </li>
                <li>
                  <a
                    className="border-b bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/careers"
                  >
                    Company Careers
                  </a>
                </li>
              </ul>
            </li>

            <li className=" dropdown  cursor-pointer inline-block relative text-xl font-semibold text-black hover:text-red-600">
              Cloud Apllications{" "}
              <ul class="dropdown-menu absolute hidden   pt-9  w-60  text-gray-700  ">
                <li class=" ">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/resource"
                  >
                    Enterprise Resource Planning (ERP)
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/performance"
                  >
                    Enterprise Performance Management (EPM)
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/supply"
                  >
                    Supply Chain & Manufacturing (SCM)
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/human"
                  >
                    Human Capital Management (HCM)
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/advertise"
                  >
                    Advertising and Customer Experience (CX)
                  </a>
                </li>


              </ul>
            </li>
            <li className=" dropdown  cursor-pointer inline-block relative text-xl font-semibold text-black hover:text-red-600">
              Service & Support
              <ul class="dropdown-menu absolute hidden    pt-9   w-60  text-gray-700  ">
                <li class=" ">
                  <a
                    class="border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/cloudservice"
                  >
                    Cloud Service
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/devops"
                  >
                    DevOps
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/cms"
                  >
                    Content Management System (cms)
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/ecommerce"
                  >
                    E - Commerce
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b border-b-white text-base  bg-red-500 hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/industry"
                  >
                    Industry Solutions
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b border-b-white  bg-red-500 text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/internet"
                  >
                    Internet of Things
                  </a>
                </li>

                <li class="">
                  <a
                    class="border-b border-b-white  bg-red-500 text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/IT"
                  >
                    IT Infrastructure & Security
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b border-b-white  bg-red-500 text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="/marketing"
                  >
                    Marketing Automation
                  </a>
                </li>
              </ul>
            </li>
            <li className=" dropdown  cursor-pointer inline-block relative text-xl font-semibold text-black hover:text-red-600">
              Industries
              <ul class="dropdown-menu absolute hidden    pt-9  w-60  text-gray-700 ">
                <li class=" ">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Banking and Insurance
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Communications
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Engineering and Construction
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Food and Beverage
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Healthcare
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Hospitality
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Life Sciences
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Public Sector
                  </a>
                </li>
                <li class="">
                  <a
                    class="border-b  bg-red-500 border-b-white text-base hover:border-none hover:text-slate-700 hover:bg-[#e09696] duration-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Utilities
                  </a>
                </li>
              </ul>
            </li>
            <li className="text-xl font-semibold text-black hover:text-red-600">
              Contact Us
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
