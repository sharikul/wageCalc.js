## wageCalc.js - simple function to calculate pay from shift work.

### Use
```javascript
function wageCalc(rate, hours);
```

#### Parameters
* Rate: pay per hour, including decimals.
* Hours: number of hours worked in total.

The function converts hours to a x/100 number, e.g. 5.30 hours becomes 5.50 because .30 is half of .60 just like .50 is half of .1, and calculates rate * hours, and returns a number.
