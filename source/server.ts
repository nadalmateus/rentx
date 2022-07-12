import express from 'express'

const server = express()

server.get('/', (request, response) => {
  return response.send('ok')
})

const port = 3333
server.listen(port, () => console.log(`Server running on port ${port}`))
