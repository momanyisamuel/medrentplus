
import mongoose from 'mongoose'
import options from '../config/config.json'

export const connect = (url = options.development.dbUrl, opts = {}) => {
  console.log("DB Connection Established")
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true,  useUnifiedTopology: true }
  )
}