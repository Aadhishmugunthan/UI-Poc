import {
  FaHome,
  FaTasks,
  FaCog
} from "react-icons/fa"

import { Link } from "react-router-dom"

import "./Sidebar.css"

function Sidebar() {

  return (

    <div className="sidebar">

      <Link
        to="/"
        className="sidebar-item"
      >
        <FaHome />
        Dashboard
      </Link>

      <Link
        to="/tasks"
        className="sidebar-item"
      >
        <FaTasks />
        Tasks
      </Link>

      <Link
        to="/settings"
        className="sidebar-item"
      >
        <FaCog />
        Settings
      </Link>

    </div>

  )

}

export default Sidebar