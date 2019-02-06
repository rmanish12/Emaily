const express = require('express')
require('./models/User')
require('./models/Survey')
require('./services/passport')
const keys = require('./config/keys')

const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Emaily')

const app = express()

app.use(bodyParser.json())
app.use(cookieSession({
    maxAge: 60*60*1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server started on port', PORT)
})