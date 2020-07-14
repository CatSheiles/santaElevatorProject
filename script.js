const fs = require('fs');
const { dir } = require('console');

//project from adventofcode text file is list of elevator levels santa has visited write code to answer q1 and q2 below
//q1 what floor does santa end up on
//rules ( --> should go up 1 floor
//rules ) --> should go down 1 floor
//ground floor --> 0 and negative and positive floors apply

function quest1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santaTime');
        const directions = data.toString();
        //split the ((()))chars into smaller pieces
        const directionsArray = directions.split('');
        //read each separated array usind reduce bc floor can go up or down
        const answer = directionsArray.reduce((accumulator, currentValue) => {
            if (currentValue === '(') {
                return accumulator += 1
            } else if (currentValue === ')') {
                return accumulator -= 1
            }
        }, 0)
        console.timeEnd('santaTime');
        console.log('floor:', answer);
    })   
}

quest1()


//q2 when does santa first enter the basement
//in other words when does the accumulator go into the negative.
//its a large array so put a stop on the first occurrance of arriving in the negative

function quest2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santaTime');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0
        let counter = 0
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            }
            counter ++
            return accumulator <0; //ends the function when 0 is reached
        })
        console.timeEnd('santaTime');
        console.log('basement entry at: ', counter);
    })
}

quest2()