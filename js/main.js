window.addEventListener("load", () => {
  //이안에 내용을 넣으면 index.html에서 refer을 쓰거나 아랫부분에서 연결하지 않아도 상관없다
  //Masony 레이아웃(isotope 플러그인 이용)
  const iso = new Isotope("section", {
    // options
    itemSelector: "article",
  });

  const fillterBtn = document.querySelectorAll(".btns>li"); //.btns>li들을 변수에

  for (let el of fillterBtn) {
    //배열 fillterBtn의 아이템(갯수) 만큼 반복
    el.addEventListener("click", (e) => {
      e.preventDefault();

      //클릭을 할때마다 각 아이템(버튼)에 반복, on클래스 없애줌
      for (let el of fillterBtn) {
        el.classList.remove("on");
      }

      //클릭한 버튼에 클라스를 넣어줌
      e.currentTarget.classList.add("on");

      //클릭한 버튼에 있는 a태그 안에 속성 href의 value(값)을 가져온다
      const filtering = e.currentTarget.querySelector("a").getAttribute("href");
      console.log(filtering);

      iso.arrange({ filter: filtering }); //버튼을 누르면 필터링 작동(플러그인 사용)
    });
  }

  //각 article을 클릭하면 팝업창이 뜨게
  const items = document.querySelectorAll("article"); //각 article을 변수에(배열)
  const pop = document.querySelector("#popup");

  for (const aa of items) {
    aa.addEventListener("click", (e) => {
      //화면 너비구하기
      const winWidth = document.body.clientWidth;
      console.log(winWidth);

      if (winWidth > 767) {
        //화면 너비가 767px보다 컸을때만 적용

        //클릭한 article img 의 src값, h2, p 를 변수에 저장
        const img = e.currentTarget.querySelector("img").getAttribute("src");
        const title = e.currentTarget.querySelector("h2").innerText;
        const desc = e.currentTarget.querySelector("p").innerText;

        //pop에 위의 변수를 적용
        pop.querySelector("img").setAttribute("src", img);
        pop.querySelector("h2").innerText = title;
        pop.querySelector("p").innerText = desc;

        pop.classList.add("on");
      }
    });
  }

  //popup창을 클릭하면 pop이 사라짐
  pop.addEventListener("click", () => {
    pop.classList.remove("on");
  });

  // window.addEventListener('resize')
});
