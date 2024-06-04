const express = require('express');
const arithmetic = require('./arithmeticFunctions.js');
const app = express();

app.listen(3000, ()=>{
    console.log('The Server is On');
});

app.post('/:operation/:value1/:value2', function(req, res) {
    if(req.params['operation'] == 'add') {
        console.log("Operation: Addition");
        console.log("Value 1: " + req.params['value1']);
        console.log("Value 2: " + req.params['value2']);
        console.log("Result: " + arithmetic.add(req.params['value1'], req.params['value2']));
        return res.status(200).send();
    }
    else if(req.params['operation'] == 'sub') {
        console.log("Operation: Subtraction");
        console.log("Value 1: " + req.params['value1']);
        console.log("Value 2: " + req.params['value2']);
        console.log("Result: " + arithmetic.sub(req.params['value1'], req.params['value2']));
        return res.status(200).send();
    }
    else if(req.params['operation'] == 'mul') {
        console.log("Operation: Multiplication");
        console.log("Value 1: " + req.params['value1']);
        console.log("Value 2: " + req.params['value2']);
        console.log("Result: " + arithmetic.multiply(req.params['value1'], req.params['value2']));
        return res.status(200).send();
    }
    else if(req.params['operation'] == 'div') {
        console.log("Operation: Division");
        console.log("Value 1: " + req.params['value1']);
        console.log("Value 2: " + req.params['value2']);
        console.log("Result: " + arithmetic.divide(req.params['value1'], req.params['value2']));
        return res.status(200).send();
    }
    else {
        return res.status(404).send('Invalid operation');
    }
});