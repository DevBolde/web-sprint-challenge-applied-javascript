import axios from "axios"
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
const tabCreator = (text) =>{
  const tab = document.createElement('div')
  tab.classList.add('tab')

  tab.textContent = text;
  
  return tab;
}

  const topicsWrapper = document.createElement('div')
  topicsWrapper.classList.add('topics')
  
for(let i = 0; i < topics.length; i++){
  let tab = tabCreator(topics[i])
  topicsWrapper.appendChild(tab)
}
return topicsWrapper;
}

// const array = ['javascript', 'bootstrap', 'technology', 'Nani'];
// console.log(Tabs(array))
// you can add as many items to that array as you want and the code will make a new tab.

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
const cssSelector = document.querySelector(selector)
axios.get(`http://localhost:5001/api/topics`)
.then(response => {
  cssSelector.appendChild(Tabs(response.data.topics))
})
.catch(err => {
  console.log(err)
})
return cssSelector;
}

export { Tabs, tabsAppender }
