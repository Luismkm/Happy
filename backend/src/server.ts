import express from 'express'
import path from 'path'
import 'express-async-errors'

import './database/connections'
import routes from './routes'
import errorGandler from './errors/handle'

const app = express()
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorGandler)

app.listen(3333)
