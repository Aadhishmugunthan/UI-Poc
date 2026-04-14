import Card from "../components/Card/Card"

function TasksPage({ tasks, onDelete, onEdit }) {

  return (

    <div>

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
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))

        )}

      </div>

    </div>

  )

}

export default TasksPage