import express from 'express'
import usersRouter from '~/routes/user.routes'
import databaseService from '~/services/database.services'

const app = express()

const port = 3000
databaseService.connect()
app.use(express.json())
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
