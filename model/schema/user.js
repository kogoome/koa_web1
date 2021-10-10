const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const User = new mongoose.Schema({
  // 로그인정보
  id: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  nickname: { type: String, required: true },
  profileImg: {
    type: String,
    default:
      'https://image-upload-server1.s3.ap-northeast-2.amazonaws.com/user.jpg',
  },
  profileText: { type: String, default: '' },
  versionKey: false,
})

User.plugin(passportLocalMongoose)

module.exports = User
