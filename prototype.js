const arr = [0,1,2,3,4];
const arr2 = 'Hello'.split('');

Array.prototype.print = function() {
    for(let i = 0; i < this.length ; i++) {
        console.log(this[i]);
    }
}

arr.print();
arr2.print();