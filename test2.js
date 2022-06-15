/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
 const data = [1, 4, 2, 3, 5, 3, 2, 4];

 function result(data) {
   // Your Code Here
   let obj = {}
   let output = []
   for(let i = 0 ; i < data.length ; i++){
    if(!obj[data[i]]){
        output.push(data[i])
    }
    obj[data[i]] = true
   }
   return output.sort(function(a, b){return a - b})
 }
 
 console.log(result(data));