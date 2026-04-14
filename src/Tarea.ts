type TaskStatus = "pendiente" | "en_progreso" | "finalizada"

interface Task {
  id: number
  description: string
  isComplete: boolean
  status: TaskStatus
}

function getPendingAndProgressTasks(tasks: Task[]): Task[] {
  return tasks.filter(task => task.status !== "finalizada")
}

const tareas: Task[] = [
  { id: 1, description: "t1", isComplete: false, status: "pendiente" },
  { id: 2, description: "t2", isComplete: false, status: "en_progreso" },
  { id: 3, description: "t3", isComplete: true, status: "finalizada" }
]

console.log(getPendingAndProgressTasks(tareas))