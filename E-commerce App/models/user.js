const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
  cosntructor(name, email, id) {
    this.name = name;
    this.email = email;
    this._id = id;
  }

  save() {
    const db = getDb();
    return db
      .collection('users')
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  static findUserById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .find({_id: new mongodb.ObjectId(userId)})
      .next()
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => console.log(err));
  }
};

module.exports = User;
