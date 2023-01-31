import express, { json } from 'express'

const port = process.env.PORT || 9090
const app = express()
const server = app.listen(port, () => {
  console.info(`listening on port ${port} :)`)
})
