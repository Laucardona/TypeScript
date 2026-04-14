type Tarjeta = { metodo: "tarjeta", numero: string, cvv: string }
type Transferencia = { metodo: "transferencia", banco: string, cuenta: string }
type Efectivo = { metodo: "efectivo" }

type Pago = Tarjeta | Transferencia | Efectivo

function validarPago(p: Pago) {
  if (p.metodo === "tarjeta") return p.numero !== "" && p.cvv !== ""
  if (p.metodo === "transferencia") return p.banco !== "" && p.cuenta !== ""
  if (p.metodo === "efectivo") return true
}

const pago1: Pago = { metodo: "efectivo" }

console.log(validarPago(pago1))