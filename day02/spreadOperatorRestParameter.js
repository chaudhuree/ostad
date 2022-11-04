const countryOne = ["Bangladesh", "China"];
const countryTwo = ["Japan", "Canada"];

//with spread operator
const countryThree = [...countryOne, ...countryTwo, "Russia", "Egypt"];
//without spread operator
countryOne.push(countryTwo)
const countryFour=countryOne.flat()


console.log({ countryTwo, countryThree,countryOne,countryFour });
