let menuFood = [
  {
    name: "Bun Ca Cay",
    img: "./public/image/img-1.jpg",
    rating: "20 reviews",
    type: "breakfast",
    price: "$60",
  },
  {
    name: "Banh Mi Sua",
    img: "./public/image/img-2.jpg",
    rating: "60 reviews",
    type: "breakfast",
    price: "$30",
  },
  {
    name: "Xoi Xeo Ruoc",
    img: "./public/image/img-3.jpg",
    rating: "40 reviews",
    type: "breakfast",
    price: "$15",
  },
  {
    name: "Buffalo Steak",
    img: "./public/image/img-4.jpg",
    rating: "200 reviews",
    type: "dinner",
    price: "$30",
  },
  {
    name: "Vit Quay Bac Kinh",
    img: "./public/image/img-5.jpg",
    rating: "100 reviews",
    type: "dinner",
    price: "$60",
  },
  {
    name: "Ga Luoc Mam Ot",
    img: "./public/image/img-6.jpg",
    rating: "20 reviews",
    type: "dinner",
    price: "$80",
  },
  {
    name: "Nuoc Ep Cam",
    img: "./public/image/img-7.jpg",
    rating: "75 reviews",
    type: "drink",
    price: "$15",
  },
  {
    name: "Nuoc Oi Dao",
    img: "./public/image/img-8.jpg",
    rating: "50 reviews",
    type: "drink",
    price: "$18",
  },
];
let food = document.querySelector(".food");
let btns = document.querySelectorAll("button");
let btnSearch = document.querySelector("input[type=button]");
let search = document.querySelector("input[type=text]");
let msg = "Vui lòng nhập vào ô tìm kiếm";
let count = document.querySelector("#count");
const messElement = document.querySelector(".message");
let time = 4000;

function render(menu) {
  let results = menu.map((item) => {
    return `<div class="menu-card">
        <div class="card-top">
          <img src=${item.img} alt="food" />
          <span class="type">${item.type}</span>
        </div>
        <div class="card-content">
          <h3 class="card-head">${item.name}</h3>
          <div class="card-review">
            <div class="card-star">
              <img src="./public/image/Shape.png" alt="" />
              <span class="card-rating">5.8</span>
            </div>
            <p class="card-count">${item.rating}</p>
          </div>
          <a href="#!" class="card-price">Order only ${item.price}</a>
        </div>
      </div>`;
  });
  count.textContent = results.length;
  food.innerHTML = results.join("");
}
//render ra views
render(menuFood);

let foodFilter = menuFood;
//Filter with button
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let output = foodFilter.filter((item) => {
      if (item.type === btn.className) {
        return item;
      }
    });
    render(output);
    if (btn.className === "all") {
      render(foodFilter);
    }
  });
});

//Filter with text;
btnSearch.addEventListener("click", () => {
  let textFilter = foodFilter.filter((item) => {
    if (item.type.includes(search.value)) {
      return item;
    }
  });
  render(textFilter);
  if (search.value === "") {
    createNotify(msg, "./public/image/img-1.jpg");
  }
});

//noti
function createNotify(msg, img) {
  const notyfi = document.createElement("div");
  notyfi.classList.add("noti");
  notyfi.innerHTML = `<img src="${img}" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${msg}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
        dolor sit amet consec
      </p>
    </div>`;
  messElement.appendChild(notyfi);
  setTimeout(() => {
    notyfi.remove();
  }, time);
}
