// ✅ 1. length

str = " Hello Dosto";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.includes("script")); // find karta hai
console.log(str.startsWith(" He")); 
console.log(str.endsWith("to")); 
console.log(str.indexOf("g")); // not find then -1
console.log(str.indexOf("o")); // when it's find show index value
console.log(str.lastIndexOf("o")); // when it's find show index value
console.log(str.slice(1,6)); // slice(inital,end) index value
console.log(str.substring(1,6)); // substring(inital,end) index value
console.log(str.substr(1,6)); // old method
console.log(str.replace("Hello","Hey")); 
console.log(str.replaceAll("o","O")); 
console.log(str.split("")); 
console.log(str.charAt(1)); //char(index)
console.log(str.concat("or mere bhaiyo"));
console.log(str.repeat(3));
console.log("4".padStart(3,"0")); // 004
console.log("4".padEnd(3,"0")); // 400
console.log(str.match(/l/)); // [ 'l', index: 3, input: ' Hello Dosto', groups: undefined ]
console.log(str.match(/l/g)); // ['l','l']
console.log(str.search("g")); //-1 no
console.log(str.search("Hel")); //1 yes





