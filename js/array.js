const values = ['a','b','c'];
values.push('d')
console.log(values[2]);

const values =['a','b','c','d'];
values.splice(2,1);
console.log( values);

const values = ['a','b','c'];
console.log( values.indexOf('v'));

const values = ['a','b','c'];
const set =values.filter(function(item){
    console.log('item: ', item);
    return item > 'b';
});
console.log( set );