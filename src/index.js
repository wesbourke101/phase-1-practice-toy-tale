let addToy = false;
const toyCollectDiv = document.getElementById('toy-collection')

document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/toys')
  .then((res) => res.json())
  .then((toysData) => toysData.forEach(toy => {
    ////////////////////////////////
      //main card container
    const toyCard = document.createElement('div')
    toyCard.className = 'card'
    toyCollectDiv.append(toyCard)
    ////////////////////////////////
    const toyNameH2 = document.createElement('h2')
    toyNameH2.textContent = toy.name
    toyCard.append(toyNameH2)
    ////////////////////////////////
    const imgTag = document.createElement('img')
    imgTag.className = 'toy-avatar'
      //incerting img from object to imgTag
    imgTag.src = toy.image
    toyCard.append(imgTag)
    console.log(toyCard)
    //////////////////////////////////
    const toyLikes = document.createElement('p')
    toyLikes.textContent = toy.likes
    toyCard.append(toyLikes + "Likes")
    //////////////////////////////////
    const toyLikeButton = document.createElement('button')
    toyLikeButton.textContent = 'Like ❤️'
    toyLikeButton.class = 'like-btn'
    toyLikeButton.id = '[toy_id]'
    toyCard.append(toyLikeButton) 
  }))



  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
