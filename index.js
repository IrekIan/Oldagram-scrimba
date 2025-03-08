const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let page = document.querySelector("#main-feed");

function render() {
  for (let i = 0; i < posts.length; i++) {
    function pageStart() {
      page.innerHTML += `

      <section id="user-name">
        <img src="${posts[i].avatar}" alt="${posts[i].name} Avatar" />
        <div>
          <p class="source-sans-3-bold" id="user-name-p">${posts[i].name}</p>
          <p class="source-sans-3" id="user-location-p">${posts[i].location}</p>
        </div>
      </section>
      <section id="content-photo">
        <img
          class="content-photo-img"
          class="${posts[i].username}"
          data-index="${i}"
          src="${posts[i].post}"
          alt="${posts[i].name} portrait"
        />
      </section> 
      <section id="user-elements">
        <div class="user-elements-icons">
          <button class="like-btn" data-index="${i}">
            <img src="images/icon-heart.png" alt="heart icon" />
          </button>

          <button>
            <img  src="images/icon-comment.png" alt="comment icon" />
          </button>
          <button>
            <img src="images/icon-dm.png" alt="private messege icon" />
          </button>
        </div>
        <div id="likes-section">
          <p class="source-sans-3-bold ${posts[i].username} likes-counter" data-index="${i}">${posts[i].likes}</p>
          <p class="source-sans-3-bold">likes</p>
        </div>
        <div id="commment-section">
          <p class="commment-section-user-name source-sans-3-bold">
            ${posts[i].username}
          </p>
          <p class="commment-section-comment source-sans-3">
    ${posts[i].comment}
          </p>
        </div>
      </section>
  `;
    }
    pageStart();
    eventListeners();
  }
}

function eventListeners() {
  let likesCounter = document.querySelectorAll(`.likes-counter`);
  console.log(likesCounter);
  let likeBtn = document.querySelectorAll(`.like-btn`);
  let mainPic = document.querySelectorAll(".content-photo-img");

  likeBtn.forEach((button) => {
    button.addEventListener("click", function () {
      let index = button.dataset.index;
      let likeCounter = likesCounter[index];

      posts[index].likes += 1;
      likeCounter.innerHTML = posts[index].likes;
    });
  });

  mainPic.forEach((pic) => {
    pic.addEventListener("dblclick", function () {
      let index = pic.dataset.index;
      let likeCounter = likesCounter[index];

      posts[index].likes += 1;
      likeCounter.innerHTML = posts[index].likes;
    });
  });
}

render();
