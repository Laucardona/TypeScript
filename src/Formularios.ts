type TipoCampo = "texto" | "numero" | "email"

interface Campo {
  nombre: string
  tipo: TipoCampo
  valor: string | number
}

function validar(campos: Campo[]) {
  let errores: string[] = []

  campos.forEach(c => {
    if (c.tipo === "numero" && typeof c.valor !== "number") errores.push(c.nombre)
    if (c.tipo === "texto" && typeof c.valor !== "string") errores.push(c.nombre)
    if (c.tipo === "email" && typeof c.valor !== "string") errores.push(c.nombre)
  })

  return errores
}

const campos: Campo[] = [
  { nombre: "edad", tipo: "numero", valor: 20 },
  { nombre: "nombre", tipo: "texto", valor: "Ana" }
]

console.log(validar(campos))