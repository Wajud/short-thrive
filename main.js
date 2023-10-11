const submitPost = document.querySelectorAll(".post");

submitPost.forEach((submittedPost) => {
  submittedPost.addEventListener("click", () => {
    const createdPost = document.querySelectorAll(".created-post");

    let createdPostContent;

    for (let i = 0; i < createdPost.length; i++) {
      if (createdPost[i].value != "") {
        createdPostContent = createdPost[i].value;
      } else {
        continue;
      }
    }

    const topPost = document.querySelector("#top-post");
    let postContainer = document.createElement("div");
    postContainer.innerHTML = `<div class="mb-2">
            <div
              class="bg-white md:mt-0 mt-4 flex items-center gap-2 py-2 px-4 relative rounded-md shadow-md"
            >
              <img src="images/chap.png" alt="chap" class="w-6 h-6" />
              <p class="flex-1 text-green-700">@chap</p>
              <img src="images/message.png" alt="message" class="w-4 h-4" />
              <img src="images/like.png" alt="like" class="w-4 h-4" />
            </div>
            <p
              class="bg-white -mt-4 -z-10 flex items-center gap-2 pt-8 pb-4 px-6 rounded-md shadow-md"
            >
            ${createdPostContent}
            </p>
          </div>`;
    topPost.prepend(postContainer);
    createdPost.forEach((created) => (created.value = ""));
  });
});

// Navbar Functionality

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.querySelector("header");
let start = header.getBoundingClientRect().height;

openMenu.addEventListener("click", () => {
  mobileMenu.classList.replace("hidden", "block");
  mobileMenu.classList.add("md:hidden");
  if (mobileMenu.classList.contains("slide-out")) {
    mobileMenu.classList.replace("slide-out", "slide-in");
  } else {
    mobileMenu.classList.add("slide-in");
  }

  openMenu.classList.replace("block", "hidden");
  closeMenu.classList.replace("hidden", "block");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.replace("slide-in", "slide-out");
  openMenu.classList.replace("hidden", "block");
  closeMenu.classList.replace("block", "hidden");
  setTimeout(() => {
    mobileMenu.classList.replace("block", "hidden");
  }, 2000);
});
