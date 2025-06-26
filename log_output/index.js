const randomString = crypto.randomUUID()

const logRandomString = () => {
  const d = new Date()
  console.log(`${d.toISOString()}: ${randomString}`)
  setTimeout(logRandomString, 5000)
}

logRandomString()
