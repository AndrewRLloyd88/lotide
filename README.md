# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andrewrlloyd88/lotide`

**Require it:**

`const _ = require('@andrewrlloyd88/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

**The following functions are currently implemented:**

* `head(["Welcome", "To", "Lighthouse]) = [Welcome] `                                       : gets the first element from an array
* `tail(["Welcome", "To", "Lighthouse]) = ["To", "Lighthouse"]`: get everything but the first element from an array
* `eqArrys([1,2,3], [1,2,"3"]) == true ` : checks if two arrays are equal
* `assertArraysEqual(1,2,3], [1,2,"3"]) !== true`
* `assertArraysEqual(1,2,3], [1,2,3]) === true`
: checks the strict equality of two arrays. Uses eqArrays as a helper function.
* `assertEqual("bacon", "bacon") === true` : checks equality between two primitives
* `middle([1,2,3])` === `[2]` 
* `middle([1,2,3,4])` === `[3, 4]`
: gets the middle item from an odd numbered array or the middle two items. N.B if an array is empty or only contains 1 item it will return with an empty array. 


**Yet to implement:**

*  <span style="color:red">assertObjectsEqual()</span>
*  <span style="color:red">countLetters()</span>
*  <span style="color:green">countOnly()</span>
*  <span style="color:red">eqObjects()</span> 
*  <span style="color:red">findKey()</span>
*  <span style="color:red">findKeyByValue()</span>
*  <span style="color:green">flatten()</span>
*  <span style="color:red">letterPositions()</span>
*  <span style="color:red">map()</span>
*  <span style="color:red">takeUntil()</span>
*  <span style="color:red">without()</span>