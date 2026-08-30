import { NavLink } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

import teamuplogo from "../assets/teamuplogo.png";
import "../components/Componetcss/Navbar.css";

const Navbar = () => {
  const collapseRef = useRef(null);
  const [openNestedMenu, setOpenNestedMenu] = useState(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeMobileMenu = () => {
    const collapseEl = collapseRef.current;
    const toggler = document.querySelector(".navbar-toggler");
    setOpenNestedMenu(null);
    setResourcesOpen(false);

    // A hover menu can remain beneath the pointer after route navigation.
    // Suppress it until the pointer leaves, so each link click feels complete.
    const isMobile = window.matchMedia("(max-width: 991.98px)").matches;
    document.querySelectorAll(".nav-item.dropdown").forEach((dropdown) => {
      if (isMobile) {
        dropdown.classList.remove("dropdown-suppressed");
      } else {
        dropdown.classList.add("dropdown-suppressed");
      }
      dropdown.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
        menu.classList.remove("show");
      });
    });
    
    if (collapseEl && toggler && window.getComputedStyle(toggler).display !== "none") {
      // Remove 'show' class to close the menu
      collapseEl.classList.remove("show");
    }
  };

  useEffect(() => {
    // Touch browsers can emit mouseenter/mouseleave around a tap. On mobile,
    // let the click state control dropdowns so a tap is not immediately undone.
    if (window.matchMedia("(max-width: 991.98px)").matches) return undefined;

    const dropdowns = document.querySelectorAll(".nav-item.dropdown");
    
    const handlers = [];

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
      
      if (toggle && menu) {
        const showDropdown = () => {
          dropdown.classList.remove("dropdown-suppressed");
          menu.classList.add("show");
          toggle.setAttribute("aria-expanded", "true");
          if (toggle.id === "leadMagnetDropdown") setResourcesOpen(true);
        };
        
        const hideDropdown = () => {
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
          dropdown.classList.remove("dropdown-suppressed");
          if (toggle.id === "leadMagnetDropdown") setResourcesOpen(false);
        };

        dropdown.addEventListener("mouseenter", showDropdown);
        dropdown.addEventListener("mouseleave", hideDropdown);
        handlers.push({ dropdown, showDropdown, hideDropdown });
      }
    });

    return () => {
      handlers.forEach(({ dropdown, showDropdown, hideDropdown }) => {
        dropdown.removeEventListener("mouseenter", showDropdown);
        dropdown.removeEventListener("mouseleave", hideDropdown);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-2">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeMobileMenu}>
          <img src={teamuplogo} alt="TeamUp Logo" className="logo me-2" />
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          ref={collapseRef}
          className="collapse navbar-collapse justify-content-end"
          id="mainNavbar"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/recruitment" onClick={closeMobileMenu}>
                Recruitment
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#!"
                id="remoteTeamDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Remote Team
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="remoteTeamDropdown"
              >
                <li>
                  <NavLink className="dropdown-item" to="/insidesales" onClick={closeMobileMenu}>
                    Inside Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/enterprise-ai" onClick={closeMobileMenu}>
                    AI/ML
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/remote-front-desk" onClick={closeMobileMenu}>
                    Remote Front Desk
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={`nav-item dropdown${resourcesOpen ? " show" : ""}`}>
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#!"
                id="leadMagnetDropdown"
                role="button"
                aria-expanded={resourcesOpen}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  event.currentTarget.closest(".nav-item.dropdown")?.classList.remove("dropdown-suppressed");
                  setResourcesOpen((current) => !current);
                  setOpenNestedMenu(null);
                }}
              >
                Resources
              </a>
              <ul className={`dropdown-menu dropdown-menu-end${resourcesOpen ? " show" : ""}`} aria-labelledby="leadMagnetDropdown">
                <li className="dropdown dropend">
                  <a
                    className={`dropdown-item dropdown-toggle${openNestedMenu === "blogs" ? " active" : ""}`}
                    href="#!"
                    id="blogsDropdown"
                    role="button"
                    aria-expanded={openNestedMenu === "blogs" || openNestedMenu === "cybersecurity"}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setOpenNestedMenu((current) => current === "blogs" ? null : "blogs");
                    }}
                  >
                    Blogs
                  </a>
                  <ul className={`dropdown-menu dropdown-menu-end${openNestedMenu === "blogs" || openNestedMenu === "cybersecurity" ? " show" : ""}`} aria-labelledby="blogsDropdown">
                    <li className="dropdown dropend">
                      <a
                        className={`dropdown-item dropdown-toggle${openNestedMenu === "cybersecurity" ? " active" : ""}`}
                        href="#!"
                        id="cybersecurityBlogsDropdown"
                        role="button"
                        aria-expanded={openNestedMenu === "cybersecurity"}
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          setOpenNestedMenu((current) => current === "cybersecurity" ? "blogs" : "cybersecurity");
                        }}
                      >
                        Cybersecurity
                      </a>
                      <ul className={`dropdown-menu dropdown-menu-end${openNestedMenu === "cybersecurity" ? " show" : ""}`} aria-labelledby="cybersecurityBlogsDropdown">
                        <li>
                          <NavLink className="dropdown-item" to="/cybersecurity" onClick={closeMobileMenu}>
                            Cybersecurity - Career Resource Hub
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/cybersecurity-hiring-managers" onClick={closeMobileMenu}>
                            Cybersecurity - Hiring Manager Toolkit
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!" onClick={closeMobileMenu}>
                        AI
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!" onClick={closeMobileMenu}>
                        Go to Market
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="button fw-bold px-4 ms-lg-2" to="/jobseeker" onClick={closeMobileMenu}>
                Jobseeker?
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
