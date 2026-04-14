import {
  useState,
  useEffect
} from "react"

import "./TaskModal.css"

function TaskModal({
  isOpen,
  onClose,
  onSave,
  editingTask
}) {

  const [title, setTitle] =
    useState("")

  const [description, setDescription] =
    useState("")

  useEffect(() => {

    if (editingTask) {

      setTitle(editingTask.title)

      setDescription(
        editingTask.description
      )

    } else {

      setTitle("")

      setDescription("")
    }

  }, [editingTask])

  if (!isOpen) return null

  const handleSubmit = (e) => {

    e.preventDefault()

    onSave({
      title,
      description
    })
  }

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>

          {editingTask
            ? "Edit Task"
            : "Add Task"}

        </h2>

        <form onSubmit={handleSubmit}>

          <input
            value={title}
            onChange={e =>
              setTitle(e.target.value)
            }
            placeholder="Title"
            required
          />

          <textarea
            value={description}
            onChange={e =>
              setDescription(
                e.target.value
              )
            }
            placeholder="Description"
            required
          />

          <div className="buttons">

            <button type="submit">
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default TaskModal