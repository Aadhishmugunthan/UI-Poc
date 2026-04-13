import {
  FaHome,
  FaTasks,
  FaCog
} from "react-icons/fa"

import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">

      <p>
        <FaHome /> Dashboard
      </p>

      <p>
        <FaTasks /> Tasks
      </p>

      <p>
        <FaCog /> Settings
      </p>

    </div>
  )
}

export default Sidebar