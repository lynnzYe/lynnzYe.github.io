import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeNavBar.css";
import cv from "../assets/cv.pdf";

const HomeNav: React.FC = () => {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <nav className="sidebar__nav">
        <ul>
          <li className="sidebar-link">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="sidebar-link">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About
            </NavLink>
          </li>
          <li className="sidebar-link">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Projects
            </NavLink>
          </li>
          <li className="sidebar-link">
            <NavLink
              to="/music"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Music
            </NavLink>
          </li>
          <li className="sidebar-link">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default HomeNav;
