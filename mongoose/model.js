const mongoose = require('mongoose')
const schema = require('./schema/0.index')
require('dotenv').config()

const db = mongoose.connection

// 커넥션 객체
const model = (() => {
  db.on('error', console.error)
  db.on('open', () => {
    console.log('몽구스 연결')
  })

  // 아틀라스 클러스터 > 디비 연결
  //DB_URL 디비이름 사용(todoapp > weeksom으로 변경)
  mongoose
    .connect(process.env.DB_URL, {
      // 디비연결 사용 옵션들
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    })
    .then(() => {
      console.log('weeksom 연결')
    })
    .catch((err) => console.log(err))

  // 스키마 연결
  const model = {} //model 변수 선언
  for (let key in schema) {
    //스키마에서 하나씩 꺼내서 key에 넣음
    model[key] = mongoose.model(key, schema[key])
  }
  return model
})()

module.exports = model
