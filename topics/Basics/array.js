

var array = ["One","Two","Third"];

//Size is not fixed dynamically size is increased
//Store different datatype in the same array

array.push("Four");
array.pop();
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    document.write("<h1>"+ element +"</h1>");
}