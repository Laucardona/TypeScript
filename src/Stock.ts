type Cat = "alimentos" | "tecnologia" | "papeleria"

interface Producto {
  id: number
  nombre: string
  cantidad: number
  categoria: Cat
}

function bajoStock(p: Producto) {
  if (p.categoria === "alimentos") return p.cantidad < 20
  if (p.categoria === "tecnologia") return p.cantidad < 5
  if (p.categoria === "papeleria") return p.cantidad < 50
}

const p1: Producto = { id: 1, nombre: "pan", cantidad: 10, categoria: "alimentos" }

console.log(bajoStock(p1))