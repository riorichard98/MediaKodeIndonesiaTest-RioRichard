/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
 const words = ['flower', 'flow', 'flight'];

 function result(words) {
   // Your Code Here
   let prefix = words[0]
   for(let i = 1 ; i < words.length ; i++){
    let temp = ''
    for(let j = 0 ; j < prefix.length ; j++){
        if(words[i][j] !== prefix[j]){
            break
        }
        temp += words[i][j]
    }
    prefix = temp
   }
   return prefix
 }
 
 console.log(result(words));
 