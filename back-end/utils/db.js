const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shihuo', {useNewUrlParser: true,  useUnifiedTopology: true});
const Users = mongoose.model('users', { username: String, password:String});

module.exports = {Users};