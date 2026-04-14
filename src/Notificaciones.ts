type Email = { tipo: "email", correo: string }
type SMS = { tipo: "sms", telefono: string }
type Push = { tipo: "push", token: string }

type Notificacion = Email | SMS | Push

function enviar(n: Notificacion) {
  if (n.tipo === "email") return n.correo
  if (n.tipo === "sms") return n.telefono
  if (n.tipo === "push") return n.token
}

const n1: Notificacion = { tipo: "email", correo: "a@mail.com" }

console.log(enviar(n1))