type Cambio = "nombre" | "correo" | "password"

interface Historial {
  tipo: Cambio
}

function resumen(lista: Historial[]) {
  let nombre = 0
  let correo = 0
  let password = 0

  lista.forEach(c => {
    if (c.tipo === "nombre") nombre++
    if (c.tipo === "correo") correo++
    if (c.tipo === "password") password++
  })

  return { nombre, correo, password }
}

const cambios: Historial[] = [
  { tipo: "nombre" },
  { tipo: "correo" },
  { tipo: "nombre" }
]

console.log(resumen(cambios))