type Unidad = "cm" | "m" | "km"

function convertir(valor: number, de: Unidad, a: Unidad) {
  let enMetros = valor

  if (de === "cm") enMetros = valor / 100
  if (de === "km") enMetros = valor * 1000

  if (a === "cm") return enMetros * 100
  if (a === "km") return enMetros / 1000

  return enMetros
}

console.log(convertir(100, "cm", "m"))