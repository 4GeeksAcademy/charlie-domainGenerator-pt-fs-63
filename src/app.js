/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".org", ".co", ".us"];

window.onload = function() {
  
  //re-write paremeter names to understand the order better
  const getRandomDomain = (pronoun, adj, noun, extension) => {
    let randomDomain = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < extension.length; l++) {
            randomDomain.push(pronoun[i] + adj[j] + noun[k] + extension[l]);
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
