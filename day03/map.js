const myMap = new Map();

//set value
myMap.set("name", "chaudhuree");
// set value with chain
myMap.set("age", 27).set("sex", "male");
//key as object
myMap.set({ test: "foo" }, 4);
//item to delete
myMap.set("delete", "delete it");
//console log map
console.log(myMap);
//check key is availabe or not
console.log(myMap.has("age"));
console.log(myMap.has("nothing"));
//get any value
console.log(myMap.get("age"));
//see map size
console.log(myMap.size);
//delete any item
console.log(myMap.delete("delete"));
console.log(myMap.has({ test: "foo" }));
console.log(myMap.size);
//clear full map
// console.log(myMap.clear())

//map iterator
console.log('iterate map key')
console.log(myMap.keys())
for(k of myMap.keys()){
    console.log(k)
}

console.log('iterate map value\n')
console.log(myMap.values())
for(v of myMap.values()){
    console.log(v)
}

console.log('map entry')
for(entry of myMap){
    console.log(entry)
}

//form object from map
const mapObject = Object.fromEntries(myMap.entries());
console.log(mapObject);
