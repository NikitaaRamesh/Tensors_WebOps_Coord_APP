/* You are given a set of five people with their names and age. */
const people = {
    '1' : {
        'name' : 'Rohan',
        'age' : 24
    },

    '2' : {
        'name' : 'Ujjwal',
        'age' : 27
    },
    '3' : {
        'name' : 'Tara',
        'age' : 18
    },
    '4' : {
        'name' : 'Sagar',
        'age' : 20
    },

    '5' : {
        'name' : 'Kumar',
        'age' : 21
    }
}

/* You need to make an array of names from people. Names should be arranged in ascending order of their age.*/
/* Write a function for the same. Hardcoding is not allowed. */
/* Write your code here.*/
const people_array = [];
const arr = ['1','2','3','4','5'];

for (let j=0; j<4; j++) {
    
    let min_age = people[arr[0]]['age'];
    let index= '1';
    for (let i = 1; i < arr.length; i++) {
        if (people[arr[i]]['age'] < min_age) {
            min_age = people[arr[i]]['age'];
            index = arr[i];
        }
    }
    people_array.push(people[index]['name']);
    delete people[index];
    arr.splice(arr.indexOf(index),1)
}
people_array.push(people[arr[0]]['name'])


/* You need to log the array of names using console.log().*/
console.log(people_array);

