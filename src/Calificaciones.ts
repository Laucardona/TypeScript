type Categoria = "tareas" | "quices" | "examen"

interface Nota {
  estudianteId: number
  categoria: Categoria
  nota: number
}

function promedio(lista: Nota[], id: number) {
  let suma = 0
  let count = 0

  lista.forEach(n => {
    if (n.estudianteId === id) {
      suma += n.nota
      count++
    }
  })

  return count === 0 ? 0 : suma / count
}

const notas: Nota[] = [
  { estudianteId: 1, categoria: "tareas", nota: 5 },
  { estudianteId: 1, categoria: "examen", nota: 3 }
]

console.log(promedio(notas, 1))