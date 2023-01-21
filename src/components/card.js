import axios from "axios"
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardCreator = (text) =>{
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorSpan = document.createElement('span')
    
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    
    headline.textContent = text.headline;
    img.src = text.authorPhoto;
    authorSpan.textContent = `By ${text.authorName}`;
    
    
    headline.appendChild(author);
    headline.appendChild(imgContainer);
    headline.appendChild(img);
    imgContainer.appendChild(authorSpan);
    
    return headline;
  }
  const cardWrapper = document.createElement('div')
  cardWrapper.classList.add('card')

  cardWrapper.addEventListener('click', () =>{
    console.log(article.headline)
  })

  for(let i = 0; i < article.length; i++){
    let card = cardCreator(article[i])
    cardWrapper.appendChild(card)
  }
  
return cardWrapper;
}
const article = {
  headline: 'nani',
  authorPhoto: 'https://www.google.com/search?q=image&rlz=1C1VDKB_enUS1004US1004&oq=image&aqs=chrome..69i57j0i433i512j0i131i433i512l2j0i433i512j0i131i433i512l2j69i60.493j0j7&sourceid=chrome&ie=UTF-8#imgrc=L2hxXuK7NBWJmM',
  authorName: "Monkey D. Luffy"
}
console.log(Card(article))

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cssSelector = document.querySelector(selector)

  axios.get(`http://localhost:5001/api/articles`)
.then(response => {
  cssSelector.appendChild(Card(response.data))
  console.log(response)
})
.catch(err => {
  console.log('u failed')
})
return cssSelector
}

export { Card, cardAppender }
