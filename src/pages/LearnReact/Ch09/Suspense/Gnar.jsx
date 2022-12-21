function createResource(pending) {
  let error, response
  pending.then((r) => (response = r)).catch((e) => (error = e))
  return {
    read() {
      if (error) throw error
      if (response) return response
      throw pending
    },
  }
}
const threeSecondToGnar = new Promise((resolves) =>
  setTimeout(() => resolves({ gnar: 'gnarly!' }), 2000)
)

const resource = createResource(threeSecondToGnar)

function Gnar() {
  const result = resource.read()
  return <h1>gnar:{result.gnar}</h1>
}

export default Gnar
