import React from 'react'

const KanbanCard = ({ task, initialTasks, setInitialTasks }) => {
  const [isEditing, setIsEditing] = React.useState(false)
  return (
    <div
      onClick={(e) => {
        setIsModalOpen(true)
      }}
      className="group p-2 my-1 w-full rounded-md flex justify-between shadow-sm border border-solid border-zinc-300 hover:bg-gray-100 cursor-pointer transition-all duration-500"
    >
      {isEditing ? (
        <input
          type="text"
          defaultValue={task.title}
          autoFocus
          onChange={(event) => {
            setInitialTasks(
              initialTasks.map((t) => {
                if (t.id === task.id) {
                  return {
                    ...t,
                    title: event.target.value,
                  }
                }
                return t
              }),
            )
          }}
          onBlur={() => {
            setIsEditing(false)
          }}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              setIsEditing(false)
            }
          }}
          className="w-full bg-transparent outline-none text-sm font-normal"
        />
      ) : (
        <span
          className={`text-sm font-normal text-slate-700 ${
            task.title === 'Untitled' && 'opacity-35'
          }`}
        >
          {task.title}
        </span>
      )}
      <div className="hidden group-hover:flex text-xs text-gray-400 items-center gap-1">
        <button
          className="hover:text-slate-700 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation()
            setIsEditing(true)
          }}
        >
          Edit
        </button>
        <button
          className="hover:text-slate-700 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation()
            setInitialTasks(initialTasks.filter((t) => t.id !== task.id))
          }}
        >
          Hapus
        </button>
      </div>
    </div>
  )
}

export default KanbanCard
