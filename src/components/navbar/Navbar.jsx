import "./Navbar.css"

function Navbar({ onAddClick }) {

  return (
    <div className="navbar">

      <div className="navbar-left">

        <h1 className="header-title">
  Task Manager
</h1>
      </div>

      <div className="navbar-right">

        <button
          className="add-btn"
          onClick={onAddClick}
        >
          + Add Task
        </button>

      </div>

    </div>
  )

}

export default Navbar