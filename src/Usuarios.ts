type Rol = "admin" | "editor" | "visitante"

interface Usuario {
  nombre: string
  edad: number
  activo: boolean
  rol: Rol
}

function filtrar(lista: Usuario[]) {
  return lista.filter(u => u.edad >= 18 && u.activo && u.rol !== "visitante")
}

const usuarios: Usuario[] = [
  { nombre: "Ana", edad: 20, activo: true, rol: "admin" },
  { nombre: "Luis", edad: 16, activo: true, rol: "editor" }
]

console.log(filtrar(usuarios))