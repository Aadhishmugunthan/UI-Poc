import "./Card.css"

function Card({ task, onDelete, onEdit }) {

  return (
    <div className="card">

      <div>

        <h3>
          {task.title}
        </h3>

        <p>
          {task.description}
        </p>

      </div>

      <div className="actions">

        <button
          className="edit"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          className="delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </div>

    </div>
  )

}

export default Card