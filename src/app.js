/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".org", ".co", ".us"];

window.onload = function() {
  //write your code here
  const getRandomDomain = (arr, arr2, arr3, arr4) => {
    let randomDomain = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          for (let l = 0; l < arr4.length; l++) {
            randomDomain.push(arr[i] + arr2[j] + arr3[k] + arr4[l]);
          }
        }
      }
    }
    return randomDomain;
  };
  let domain = getRandomDomain(pronoun, adj, noun, extension);

  for (let iteration of domain) {
    console.log(iteration);
  }
  // console.log(getRandomDomain(pronoun, adj, noun, extension));
};
