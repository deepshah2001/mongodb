// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;

// class User {
//   constructor(name, email, cart, id) {
//     this.name = name;
//     this.email = email;
//     this.cart = cart;
//     this._id = id;
//   }

//   save() {
//     const db = getDb();
//     return db
//       .collection("users")
//       .insertOne(this)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => console.log(err));
//   }

//   addToCart(product) {
//     const cartItemIndex = this.cart.items.findIndex(
//       (p) => p.product.toString() === product._id.toString()
//     );
//     let newQuantity = 1;
//     const updateCartItems = [...this.cart.items];

//     if (cartItemIndex >= 0) {
//       newQuantity = this.cart.items[cartItemIndex].quantity + 1;
//       updateCartItems[cartItemIndex].quantity = newQuantity;
//     } else {
//       updateCartItems.push({
//         product: new mongodb.ObjectId(product._id),
//         quantity: newQuantity,
//       });
//     }

//     const updatedCart = { items: updateCartItems };

//     const db = getDb();

//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new mongodb.ObjectId(this._id) },
//         { $set: { cart: updatedCart } }
//       );
//   }

//   getCart() {
//     const db = getDb();
//     const productIds = this.cart.items.map((i) => {
//       return i.product;
//     });
//     return db
//       .collection("products")
//       .find({ _id: { $in: productIds } })
//       .toArray()
//       .then((products) => {
//         return products.map((p) => {
//           return {
//             ...p,
//             quantity: this.cart.items.find((i) => {
//               return i.product.toString() === p._id.toString();
//             }).quantity,
//           };
//         });
//       })
//       .catch((err) => console.log(err));
//   }

//   deleteCartItem(productId) {
//     const updatedCart = this.cart.items.filter((items) => {
//       return items.product.toString() !== productId.toString();
//     });

//     const db = getDb();

//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new mongodb.ObjectId(this._id) },
//         { $set: { cart: { items: updatedCart } } }
//       );
//   }

//   getOrder() {
//     const db = getDb();
//     return this.getCart()
//       .then((products) => {
//         const order = {
//           items: products,
//           user: {
//             _id: new mongodb.ObjectId(this._id),
//             name: this.name,
//           },
//         };
//         return db.collection("orders").insertOne(order);
//       })
//       .then((result) => {
//         this.cart = { items: [] };
//         return db
//           .collection("users")
//           .updateOne(
//             { _id: new mongodb.ObjectId(this._id) },
//             { $set: { cart: { items: [] } } }
//           );
//       });
//   }

//   getOrders() {
//     const db = getDb();

//     return db
//       .collection("orders")
//       .find({ "user._id": new mongodb.ObjectId(this._id) })
//       .toArray();
//   }
  
//   static findUserById(userId) {
//     const db = getDb();
//     return db
//       .collection("users")
//       .find({ _id: new mongodb.ObjectId(userId) })
//       .next()
//       .then((user) => {
//         console.log(user);
//         return user;
//       })
//       .catch((err) => console.log(err));
//   }
// }

// module.exports = User;
