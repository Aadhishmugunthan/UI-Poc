import { useState } from "react"

import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Card from "./components/Card/Card"
import TaskModal from "./components/TaskModal"

import TasksPage from "./pages/TasksPage"
import SettingsPage from "./pages/SettingsPage"

import { Routes, Route } from "react-router-dom"

import "./styles/layout.css"

function App() {

  // Mock Data (Boss requirement)

  const [tasks, setTasks] = useState([
    { id: 1, title: "Kubernetes", description: "Build responsive devops" },
    { id: 2, title: "Docker", description: "Learn containerization" },
    { id: 3, title: "React", description: "Improve UI skills" },
    { id: 4, title: "Spring Boot", description: "Create REST APIs" },
    { id: 5, title: "Kafka", description: "Message streaming system" },
    { id: 6, title: "PostgreSQL", description: "Database optimization" },
    { id: 7, title: "Redis", description: "Caching layer setup" },
    { id: 8, title: "CI/CD", description: "Setup GitHub Actions" },
    { id: 9, title: "Docker Compose", description: "Multi-container setup" },
    { id: 10, title: "UI Polish", description: "Improve responsiveness" }
  ])

  const [isOpen, setIsOpen] = useState(false)

  const [editingTask, setEditingTask] = useState(null)

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

      {/* Header */}

      <Navbar
        onAddClick={() => {
          setEditingTask(null)
          setIsOpen(true)
        }}
      />

      <div className="layout">

        {/* Sidebar */}

        <Sidebar />

        {/* Page Content */}

        <div className="main-content">

          <Routes>

            {/* Dashboard / Home */}

            <Route
              path="/"
              element={
                <TasksPage
                  tasks={tasks}
                  onDelete={deleteTask}
                  onEdit={editTask}
                />
              }
            />

            {/* Tasks Page */}

            <Route
              path="/tasks"
              element={
                <TasksPage
                  tasks={tasks}
                  onDelete={deleteTask}
                  onEdit={editTask}
                />
              }
            />

            {/* Settings Page */}

            <Route
              path="/settings"
              element={<SettingsPage />}
            />

          </Routes>

        </div>

      </div>

      {/* Modal */}

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