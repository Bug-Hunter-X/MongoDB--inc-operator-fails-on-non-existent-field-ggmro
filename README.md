# MongoDB $inc Operator Edge Case
This repository demonstrates an uncommon error when using the `$inc` operator in MongoDB update queries.  The `$inc` operator is designed to increment a numeric field. However, if the field doesn't exist, the operation silently fails.

The `bug.js` file contains code that reproduces this error. The `bugSolution.js` file shows the corrected code.

## Problem
The original code attempts to increment a counter field using `$inc`. If the `counter` field does not exist in the document, the update operation does not create the field and the counter remains unchanged. 
## Solution
The solution uses the `$setOnInsert` operator in conjunction with `$inc`. This ensures that if the field does not exist, it is created with an initial value of 0 before being incremented.  This way, the operation will always increment the counter correctly, regardless of whether the field initially exists.