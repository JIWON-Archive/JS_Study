var mix = [1, true, 3.14, "string", {name : Object}, [1,2,3]];

// [ 1, true, 3.14, 'string', { name: [Function: Object] }, [ 1, 2, 3 ] ]
console.log(mix); 
// string
console.log(mix[3]);