const express = require('express');
const app = express();
const ExpressError = require('./expressError');

let { convertArr, mean, median, mode } = require("./math");

app.get("/mean", (req, res, next) => {
    
    if (!req.query.nums){
        throw new ExpressError("Please enter a valid array of numbers", 400)
    }
    
    let stringNums = req.query.nums.split(",");

    let nums = convertArr(stringNums);

    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: "mean",
        result: mean(nums)
    };

    return res.send(result);
})

app.get("/median", (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError("Please enter a valid array of numbers", 400)
    }
    
    let stringNums = req.query.split(",");

    let nums = convertArr(stringNums);

    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }


    let result = {
        operation: "median",
        result: median(nums)
    };

    return res.send(result);
})

app.get("/mode", (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError("Please enter a valid array of numbers", 400)
    }
    
    let stringNums = req.query.split(",");

    let nums = convertArr(stringNums);

    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }


    let result = {
        operation: "mode",
        result: mode(nums)
    };

    return res.send(result);
})

app.use((req, res, next) => {
    let err = new ExpressError("404 Not Found Error", 404);
    return next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
});
})

app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
  });
  