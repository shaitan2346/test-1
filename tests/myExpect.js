const { plusOne, sum, sub, mult, div } = require('../module-1/functions');

function expect(received) {
    return {
        toEqual: function(expected) {
            if(received === expected) {
                console.log('success');
            } else{
                console.log('Error. received:', received, ' expected:', expected);
            }
        }
    }
}

// expect(sum(2, 8)).toEqual(15)