```javascript
// Correct usage of $inc and $setOnInsert operators
db.collection('myCollection').updateOne( { "_id": ObjectId("65041578765432109876543") }, { $inc: { "counter": 1 }, $setOnInsert: { "counter": 0 } } );
```