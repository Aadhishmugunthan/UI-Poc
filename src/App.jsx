import { useState } from "react"

import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Card from "./components/Card/Card"
import TaskModal from "./components/TaskModal"

import "./styles/layout.css"

function App() {

  // Mock Data (Boss requirement: "Mock the data for UI")

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Kubernetes",
      description: "Build responsive devops"
    },
    {
      id: 2,
      title: "Docker",
      description: "Learn Docker"
    },
    {
      id: 3,
      title: "React",
      description: "Improve UI skills"
    }
  ])

  const [isOpen, setIsOpen] = useState(false)

  const [editingTask, setEditingTask] =
    useState(null)

  // CREATE / UPDATE

  const saveTask = (task) => {

    if (editingTask) {

      setTasks(
        tasks.map(t =>
          t.id === editingTask.id
            ? { ...t, ...task }
            : t
        )
      )

      setEditingTask(null)

    } else {

      setTasks([
        ...tasks,
        {
          id: Date.now(),
          ...task
        }
      ])

    }

    setIsOpen(false)
  }

  // DELETE

  const deleteTask = (id) => {

    setTasks(
      tasks.filter(
        task => task.id !== id
      )
    )

  }

  // EDIT

  const editTask = (task) => {

    setEditingTask(task)

    setIsOpen(true)

  }

  return (
    <div>

      <Navbar
        onAddClick={() => {
          setEditingTask(null)
          setIsOpen(true)
        }}
      />

      <div className="layout">

        <Sidebar />

        <div className="main-content">

          <h2 className="page-title">
            My Tasks
          </h2>

          <div className="grid">

            {tasks.length === 0 ? (

              <p className="empty">
                No tasks yet
              </p>

            ) : (

              tasks.map(task => (
                <Card
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onEdit={editTask}
                />
              ))

            )}

          </div>

        </div>

      </div>

      <TaskModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={saveTask}
        editingTask={editingTask}
      />

    </div>
  )

}

export default App