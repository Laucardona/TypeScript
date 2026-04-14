type Tipo = "ingreso" | "egreso"

interface Transaccion {
  monto: number
  tipo: Tipo
  categoria: string
}

function totalPorTipo(lista: Transaccion[]) {
  let ingreso = 0
  let egreso = 0

  lista.forEach(t => {
    if (t.tipo === "ingreso") ingreso += t.monto
    else egreso += t.monto
  })

  return { ingreso, egreso }
}

const data: Transaccion[] = [
  { monto: 100, tipo: "ingreso", categoria: "x" },
  { monto: 50, tipo: "egreso", categoria: "y" }
]

console.log(totalPorTipo(data))