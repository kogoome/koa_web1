const mongoose = require('mongoose')

const Userdata = new mongoose.Schema({
  // 유져정보
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  following: { type: Array },
  follower: { type: Array },
  article: { type: Array }, // 작성 게시물들
  likeArticle: { type: Array }, // 좋아요 누른 게시물들
  // 카운팅 데이터
  followingCount: { type: Number, default: 0 },
  followerCount: { type: Number, default: 0 },
  articleCount: { type: Number, default: 0 },
  likeAcount: { type: Number, default: 0 },
  versionKey: false,
})

module.exports = Userdata
