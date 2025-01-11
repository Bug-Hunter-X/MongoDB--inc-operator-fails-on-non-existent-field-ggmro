```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne( { "_id": ObjectId("65041578765432109876543") }, { $inc: { "counter": 1 } } );
```