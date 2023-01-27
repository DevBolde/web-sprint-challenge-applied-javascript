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
    const cardWrapper = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorSpan = document.createElement('span')
    

    cardWrapper.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    
    headline.textContent = text.headline;
    img.src = text.authorPhoto;
    authorSpan.textContent = `By ${text.authorName}`;
    
    cardWrapper.appendChild(headline)
    cardWrapper.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorSpan);

    cardWrapper.addEventListener('click', () =>{
    console.log(`${text.headline}`)
  })

  // for(let i = 0; i < text.length; i++){
  //   let card = Card(text[i])
    
  // }

    return cardWrapper;
  }
 
return cardCreator(article);
}






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
 
  const articlesArray = Object.keys(response.data.articles) //arary of keys inside articles
  // console.log('articlesArray', articlesArray)

  articlesArray.forEach(function(element){
    response.data.articles[element].forEach(ele => {
      cssSelector.appendChild(Card(ele))
    })
    
  })
 
  
})
.catch(err => {
  console.log('Something went wrong', err)
})

return cssSelector
}

export { Card, cardAppender }
