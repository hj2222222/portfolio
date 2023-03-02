// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const slide4 = document.querySelector(".slide4");
let slideWidth = slide.clientWidth;
let slideWidth1 = slide1.clientWidth;
let slideWidth2 = slide2.clientWidth;
let slideWidth3 = slide3.clientWidth;
let slideWidth4 = slide4.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");
const prevBtn1 = document.querySelector(".slide_prev_button1");
const nextBtn1 = document.querySelector(".slide_next_button1");
const prevBtn2 = document.querySelector(".slide_prev_button2");
const nextBtn2 = document.querySelector(".slide_next_button2");
const prevBtn3 = document.querySelector(".slide_prev_button3");
const nextBtn3 = document.querySelector(".slide_next_button3");
const prevBtn4 = document.querySelector(".slide_prev_button4");
const nextBtn4 = document.querySelector(".slide_next_button4");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".slide_item");
const slideItems1 = document.querySelectorAll(".slide_item1");
const slideItems2 = document.querySelectorAll(".slide_item2");
const slideItems3 = document.querySelectorAll(".slide_item3");
const slideItems4 = document.querySelectorAll(".slide_item4");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;
const maxSlide1 = slideItems1.length;
const maxSlide2 = slideItems2.length;
const maxSlide3 = slideItems3.length;
const maxSlide4 = slideItems4.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;
let currSlide1 = 1;
let currSlide2 = 1;
let currSlide3 = 1;
let currSlide4 = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");
const pagination1 = document.querySelector(".slide_pagination1");
const pagination2 = document.querySelector(".slide_pagination2");
const pagination3 = document.querySelector(".slide_pagination3");
const pagination4 = document.querySelector(".slide_pagination4");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}
for (let i = 0; i < maxSlide1; i++) {
  if (i === 0) pagination1.innerHTML += `<li class="active">•</li>`;
  else pagination1.innerHTML += `<li>•</li>`;
}
for (let i = 0; i < maxSlide2; i++) {
  if (i === 0) pagination2.innerHTML += `<li class="active">•</li>`;
  else pagination2.innerHTML += `<li>•</li>`;
}
for (let i = 0; i < maxSlide3; i++) {
  if (i === 0) pagination3.innerHTML += `<li class="active">•</li>`;
  else pagination3.innerHTML += `<li>•</li>`;
}
for (let i = 0; i < maxSlide4; i++) {
  if (i === 0) pagination4.innerHTML += `<li class="active">•</li>`;
  else pagination4.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");
const paginationItems1 = document.querySelectorAll(".slide_pagination1 > li");
const paginationItems2 = document.querySelectorAll(".slide_pagination2 > li");
const paginationItems3 = document.querySelectorAll(".slide_pagination3 > li");
const paginationItems4 = document.querySelectorAll(".slide_pagination4 > li");

function nextMove() {
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide--;
  }
}
function nextMove1() {
  currSlide1++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide1 <= maxSlide1) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset1 = slideWidth1 * (currSlide1 - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems1.forEach((i) => {
      i.setAttribute("style", `left: ${-offset1}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems1.forEach((i) => i.classList.remove("active"));
    paginationItems1[currSlide1 - 1].classList.add("active");
  } else {
    currSlide1--;
  }
}
function nextMove2() {
  currSlide2++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide2 <= maxSlide2) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset2 = slideWidth2 * (currSlide2 - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems2.forEach((i) => {
      i.setAttribute("style", `left: ${-offset2}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems2.forEach((i) => i.classList.remove("active"));
    paginationItems2[currSlide1 - 1].classList.add("active");
  } else {
    currSlide2--;
  }
}
function nextMove3() {
  currSlide3++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide3 <= maxSlide3) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset3 = slideWidth3 * (currSlide3 - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems3.forEach((i) => {
      i.setAttribute("style", `left: ${-offset3}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems3.forEach((i) => i.classList.remove("active"));
    paginationItems3[currSlide3 - 1].classList.add("active");
  } else {
    currSlide3--;
  }
}
function nextMove4() {
  currSlide4++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide4 <= maxSlide4) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset4 = slideWidth * (currSlide4 - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems4.forEach((i) => {
      i.setAttribute("style", `left: ${-offset4}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems4.forEach((i) => i.classList.remove("active"));
    paginationItems4[currSlide4 - 1].classList.add("active");
  } else {
    currSlide4--;
  }
}
function prevMove() {
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide++;
  }
}
function prevMove1() {
  currSlide1--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide1 > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset1 = slideWidth1 * (currSlide1 - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems1.forEach((i) => {
      i.setAttribute("style", `left: ${-offset1}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems1.forEach((i) => i.classList.remove("active"));
    paginationItems1[currSlide1 - 1].classList.add("active");
  } else {
    currSlide1++;
  }
}
function prevMove2() {
  currSlide2--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide2 > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset2 = slideWidth2 * (currSlide2 - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems2.forEach((i) => {
      i.setAttribute("style", `left: ${-offset2}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems2.forEach((i) => i.classList.remove("active"));
    paginationItems2[currSlide2 - 1].classList.add("active");
  } else {
    currSlide2++;
  }
}
function prevMove3() {
  currSlide3--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide3 > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset3 = slideWidth3 * (currSlide3 - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems3.forEach((i) => {
      i.setAttribute("style", `left: ${-offset3}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems3.forEach((i) => i.classList.remove("active"));
    paginationItems3[currSlide3 - 1].classList.add("active");
  } else {
    currSlide3++;
  }
}
function prevMove4() {
  currSlide4--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide4 > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset4 = slideWidth4 * (currSlide4 - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems4.forEach((i) => {
      i.setAttribute("style", `left: ${-offset4}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems4.forEach((i) => i.classList.remove("active"));
    paginationItems4[currSlide4 - 1].classList.add("active");
  } else {
    currSlide4++;
  }
}
// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
  // 이후 버튼 누를 경우 현재 슬라이드를 변경
  nextMove();
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  prevMove();
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});
window.addEventListener("resize", () => {
  slideWidth1 = slide1.clientWidth1;
});
window.addEventListener("resize", () => {
  slideWidth2 = slide2.clientWidth2;
});
window.addEventListener("resize", () => {
  slideWidth3 = slide3.clientWidth3;
});
window.addEventListener("resize", () => {
  slideWidth4 = slide4.clientWidth4;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
  // 각 페이지네이션마다 클릭 이벤트 추가하기
  paginationItems[i].addEventListener("click", () => {
    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;
let startPoint1 = 0;
let endPoint1 = 0;
let startPoint2 = 0;
let endPoint2 = 0;
let startPoint3 = 0;
let endPoint3 = 0;
let startPoint4 = 0;
let endPoint4 = 0;

// PC 클릭 이벤트 (드래그)
slide.addEventListener("mousedown", (e) => {
  console.log("mousedown", e.pageX);
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});
slide1.addEventListener("mousedown", (e) => {
  console.log("mousedown", e.pageX);
  startPoint1 = e.pageX; // 마우스 드래그 시작 위치 저장
});
slide2.addEventListener("mousedown", (e) => {
  console.log("mousedown", e.pageX);
  startPoint2 = e.pageX; // 마우스 드래그 시작 위치 저장
});
slide3.addEventListener("mousedown", (e) => {
  console.log("mousedown", e.pageX);
  startPoint3 = e.pageX; // 마우스 드래그 시작 위치 저장
});
slide4.addEventListener("mousedown", (e) => {
  console.log("mousedown", e.pageX);
  startPoint4 = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
  console.log("mouseup", e.pageX);
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    console.log("prev move");
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    console.log("next move");
    nextMove();
  }
});
slide1.addEventListener("mouseup", (e) => {
  console.log("mouseup", e.pageX);
  endPoint1 = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint1 < endPoint1) {
    // 마우스가 오른쪽으로 드래그 된 경우
    console.log("prev move");
    prevMove1();
  } else if (startPoint1 > endPoint1) {
    // 마우스가 왼쪽으로 드래그 된 경우
    console.log("next move");
    nextMove1();
  }
});
slide2.addEventListener("mouseup", (e) => {
  console.log("mouseup", e.pageX);
  endPoint2 = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint2 < endPoint2) {
    // 마우스가 오른쪽으로 드래그 된 경우
    console.log("prev move");
    prevMove2();
  } else if (startPoint2 > endPoint2) {
    // 마우스가 왼쪽으로 드래그 된 경우
    console.log("next move");
    nextMove2();
  }
});
slide3.addEventListener("mouseup", (e) => {
  console.log("mouseup", e.pageX);
  endPoint3 = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint3 < endPoint3) {
    // 마우스가 오른쪽으로 드래그 된 경우
    console.log("prev move");
    prevMove3();
  } else if (startPoint3 > endPoint3) {
    // 마우스가 왼쪽으로 드래그 된 경우
    console.log("next move");
    nextMove3();
  }
});
slide4.addEventListener("mouseup", (e) => {
  console.log("mouseup", e.pageX);
  endPoint4 = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint4 < endPoint4) {
    // 마우스가 오른쪽으로 드래그 된 경우
    console.log("prev move");
    prevMove4();
  } else if (startPoint4 > endPoint4) {
    // 마우스가 왼쪽으로 드래그 된 경우
    console.log("next move");
    nextMove4();
  }
});
