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
function pageStart() {
  page.innerHTML = `
      <header>
        <img id="header-logo" src="/images/logo.png" alt="Oldagram logo" />
        <img id="user-avatar" src="/images/user-avatar.png" alt="User avatar" />
      </header>
      <section id="user-name">
        <img src="/${posts[0].avatar}" alt="${posts[0].name} Avatar" />
        <div>
          <p class="source-sans-3-bold" id="user-name-p">${posts[0].name}</p>
          <p class="source-sans-3" id="user-location-p">${posts[0].location}</p>
        </div>
      </section>
      <section id="content-photo">
        <img
          id="content-photo-img"
          src="/images/post-vangogh.jpg"
          alt="Vann Goh portreit"
        />
      </section>
      <section id="user-elements">
        <div class="user-elements-icons">
          <button id="like-btn">
            <img src="/images/icon-heart.png" alt="heart icon" />
          </button>

          <button>
            <img src="/images/icon-comment.png" alt="comment icon" />
          </button>
          <button>
            <img src="/images/icon-dm.png" alt="private messege icon" />
          </button>
        </div>
        <div id="likes-section">
          <p class="source-sans-3-bold" id="likes-counter">207</p>
          <p class="source-sans-3-bold">likes</p>
        </div>
        <div id="commment-section">
          <p class="commment-section-user-name source-sans-3-bold">
            vincey1853
          </p>
          <p class="commment-section-comment source-sans-3">
            just took a few mushrooms lol
          </p>
        </div>
      </section>
  `;
}
pageStart();
// LIKE ACTIONS
let likesCounter = document.querySelector("#likes-counter");
let likeBtn = document.querySelector("#like-btn");
let mainPic = document.querySelector("#content-photo-img");

likeBtn.addEventListener("click", function () {
  likesCounter.innerHTML = parseInt(likesCounter.innerHTML) + 1;
});
mainPic.addEventListener("dblclick", function () {
  likesCounter.innerHTML = parseInt(likesCounter.innerHTML) + 1;
});
