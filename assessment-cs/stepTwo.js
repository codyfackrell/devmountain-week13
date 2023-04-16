const sumZero = (nums) => {
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0)
            return true
        }
    }
    return false
}

console.log(sumZero([1, 2, 3, -2]))

// sumZero time complexity: O(n)
// sumZero space complexity: O(1)




const uniqueChars = (str) => {
    const charsSet = new Set();
    
    for(let i = 0; i < str.length; i++) {
        charsSet.add(str[i])
    }

    console.log(charsSet.size === str.length) 
}

// uniqueChars("moonday")
// uniqueChars("monday")

// uniqueChars time complexity: O(n)
// sumZero space complexity: O(n)


function isPangram(str){
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

// isPangram time complexity: O(n)
// sumZero space complexity: O(1)



const findLongestWord = (arr) => {
    let longest = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest) {
        longest = arr[i].length
        }
    }
    return longest
}

console.log(findLongestWord(["hi", "hello"]))

// findLongestWord time complexity: O(n)
// sumZero space complexity: O(1)