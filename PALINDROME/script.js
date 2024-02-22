const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const userWord = document.getElementById("word");
console.log(result.innerText);
let letters = "AEIOUaeiou";

function check(){
    if(input.value === ""){
      alert("Please input a value!")
    }
    let finalWord = cleanWord(input.value);
    let reversedWord = finalWord.split('').reverse().join('');
    if(reversedWord === finalWord){
      input.innerText = "";
      result.innerHTML = `<p id="user-word">
      <strong id="word">
        ${input.value}
      </strong>
      is a palindrome.
    </p>`
   
    }
    else if(letters.includes(input.value.toLowerCase())){
      input.innerText = "";
      result.innerHTML = `<p id="user-word">
      <strong id="word">
        ${input.value}
      </strong>
      is a palindrome.
    </p>`
    
    }
   else{
    input.innerText = "";
    result.innerHTML = `<p id="user-word">
    <strong id="word">
      ${input.value}
    </strong>
    is not a palindrome.
  </p>`

   
    
  }
}
function cleanWord(word){
  let cleanedWord = word.toLowerCase().trim();
  cleanedWord = cleanedWord.replace(/[^a-z0-9]/g, '');
  return cleanedWord;
}
input.addEventListener("focus", () => {
  input.value = "";
})
input.addEventListener("keydown", (event) =>{
  if(event.key === "Enter"){
    check();
  }
})
button.addEventListener("click", check)