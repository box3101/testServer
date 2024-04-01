Vue.component("layout-header", {
  template: `<header class="pc-hd">
  <div class="hd-center flex-btw-wrap">
    <h1 class="hd-ttl">
      <a href="https://www.xn--9i1b674cwc38r6pa.com/" class="link">
        <img
          src="./assets/images/logo/logo_bk.svg"
          alt="pocket company"
          class="logo"
        />
      </a>
    </h1>
    <!-- 220609 gnb 추가 -->
    <!-- PC 메뉴 -->
    <nav class="hd-nav type-pc">
      <div class="hd-nav-list">
        <span class="hd-nav-link"
          ><a
            href="https://xn--9i1b674cwc38r6pa.com/company"
            class="pixel-a"
            >포켓 소개</a
          ></span
        >

        <div class="hd-sub-nav-list">
          <a
            href="https://xn--9i1b674cwc38r6pa.com/company"
            class="hd-sub-nav-link"
            >회사소개</a
          >
        </div>
      </div>

      <div class="hd-nav-list">
        <span class="hd-nav-link active svc"
          ><a
            href="https://xn--9i1b674cwc38r6pa.com/pocket-html"
            class="pixel-a"
            >포켓 프로그램</a
          ></span
        >

        <div class="hd-sub-nav-list">
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/pocket-html"
              class="hd-sub-nav-link"
              >지원사업 Build-Up</a
            >
          </div>
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/pocket-html/invest-build.html"
              class="hd-sub-nav-link"
              >투자유치 Build-Up</a
            >
          </div>
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/pocket-html/mnb-build.html"
              class="hd-sub-nav-link"
              >브랜딩/마케팅 Build-Up</a
            >
          </div>
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/pocket-html/dev-build.html"
              class="hd-sub-nav-link"
              >개발 Build-Up</a
            >
          </div>
          <div class="hd-sub2-nav-grp">
            <a
              class="hd-sub-nav-link"
              href="https://xn--9i1b674cwc38r6pa.com/demoday-info"
              >포켓데이</a
            >
          </div>          
        </div>
      </div>
      
      <!-- 220822 KSM 포켓부스터 숨김
      <div class="hd-nav-list">
        <a
          href="https://xn--9i1b674cwc38r6pa.com/pocketpartner/main"
          class="hd-nav-link"
          >포켓부스터</a
        >
      </div>
      -->

      <div class="hd-nav-list">
        <a
          href="https://xn--9i1b674cwc38r6pa.com/portfolio"
          class="hd-nav-link"
          >포트폴리오</a
        >
      </div>

      <div class="hd-nav-list">
      <a
        class="hd-nav-link"
        href="https://xn--9i1b674cwc38r6pa.com/class/main"
        >포켓캠프</a
      >
    </div>

      <div class="hd-nav-list">
        <span id="gnbOpen1" class="hd-nav-link"
          ><a class="pixel-a">고객센터</a></span
        >

        <div class="hd-sub-nav-list">
          <button
            type="button"
            id="gnbOpen2"
            class="btn hd-sub-nav-link"
            style="cursor: pointer"
          >
            문의하기
          </button>
          <a
            href="https://xn--9i1b674cwc38r6pa.com/cs/suggest"
            class="hd-sub-nav-link"
            >제휴문의</a
          >
        </div>
      </div>
    </nav>
    <!-- END PC 메뉴 -->

    <!-- 모바일 메뉴 -->
    <input type="checkbox" id="open-mb-nav" class="none" />
    <nav class="hd-mobile-nav">
      <article class="hd-nav-group">
        <input
          id="hd-mb-about"
          type="checkbox"
          class="hd-mb-group-chck none"
          name="hd-mobile-nav-group"
        />
        <h3 class="hd-nav-group-tit">
          <label for="hd-mb-about">포켓 소개</label>
        </h3>

        <div class="hd-sub-nav-list">
          <a
            href="https://xn--9i1b674cwc38r6pa.com/company"
            class="hd-sub-nav-link"
            >회사소개</a
          >
        </div>
      </article>

      <article class="hd-nav-group">
        <input
          id="hd-mb-buildup"
          type="checkbox"
          class="hd-mb-group-chck none"
          name="hd-mobile-nav-group"
          checked
        />
        <h3 class="hd-nav-group-tit">
          <label for="hd-mb-buildup">포켓 프로그램</label>
        </h3>

        <div class="hd-sub-nav-list">
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/pocket-html"
              class="hd-sub-nav-link"
            >
              <label for="hd-mb2-buildup">지원사업 Build-Up</label>
            </a>
          </div>
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/pocket-html/invest-build.html"
              class="hd-sub-nav-link"
              >투자유치 Build-Up</a
            >
          </div>
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/pocket-html/mnb-build.html"
              class="hd-sub-nav-link"
            >
              <label for="hd-mb2-boost">브랜딩/마케팅 Build-Up</label>
            </a>
          </div>
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/pocket-html/dev-build.html"
              class="hd-sub-nav-link"
            >
              <label for="hd-mb2-boost">개발 Build-Up</label>
            </a>
          </div>
          <div class="hd-sub2-nav-grp">
            <a
              href="https://xn--9i1b674cwc38r6pa.com/demoday-info"
              class="hd-sub-nav-link"
            >
              <label for="hd-mb2-boost">포켓데이</label>
            </a>
          </div>        
        </div>
      </article>

      <!-- 220822 KSM 포켓부스터 숨김
      <article class="hd-nav-group">
        <a
          href="https://xn--9i1b674cwc38r6pa.com/pocketpartner/main"
          class="hd-nav-group-tit"
        >
          <label for="hd-mb-pocketday">포켓부스터</label>
        </a>
      </article>
      -->

      <article class="hd-nav-group">
      <a
        href="https://xn--9i1b674cwc38r6pa.com/class/main"
        class="hd-nav-group-tit"
      >
        <label for="hd-mb2-boost">포켓캠프</label>
      </a>
      </article>

      <article class="hd-nav-group">
        <!-- <input id="hd-mb-portfolio" type="checkbox" class="hd-mb-group-chck none" name="hd-mobile-nav-group" /> -->
        <a
          href="https://xn--9i1b674cwc38r6pa.com/portfolio"
          class="hd-nav-group-tit"
        >
          <label for="hd-mb-portfolio">포트폴리오</label>
        </a>
      </article>

      <article class="hd-nav-group">
        <input
          id="hd-mb-cs"
          type="checkbox"
          class="hd-mb-group-chck none"
          name="hd-mobile-nav-group"
        />
        <h3 class="hd-nav-group-tit">
          <label for="hd-mb-cs">고객센터</label>
        </h3>

        <div class="hd-sub-nav-list">
          <button
            type="button"
            id="mGnbOpen1"
            class="btn hd-sub-nav-link"
            style="cursor: pointer"
          >
            문의하기
          </button>
          <a
            href="https://xn--9i1b674cwc38r6pa.com/cs/suggest"
            class="hd-sub-nav-link"
            >제휴문의</a
          >
        </div>
      </article>

      <div class="nav-etc-group">
        <a
          href="https://xn--9i1b674cwc38r6pa.com/login"
          class="user-auth-link type-renewal"
          >로그인/회원가입</a
        >
        <div class="nav-sns-group">
          <a
            href="https://www.instagram.com/startup_daily_news/"
            target="_blank"
            rel="noopener noreferer"
            class="sns-link"
          >
            <img
              src="./assets/images/btn/btn_insta.png"
              alt
              class="icon"
            />
          </a>
          <a
            href="https://www.facebook.com/pages/category/Business-Service/%ED%8F%AC%EC%BC%93%EC%BB%B4%ED%8D%BC%EB%8B%88%E3%85%A1%EC%82%AC%EC%97%85%EA%B3%84%ED%9A%8D%EC%84%9C%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%EC%A0%95%EB%B6%80%EC%A7%80%EC%9B%90%ED%88%AC%EC%9E%90%EC%A0%9C%EC%95%88%EC%84%9C-377103632904873/"
            target="_blank"
            rel="noopener noreferer"
            class="sns-link"
          >
            <img
              src="./assets/images/btn/btn_facb.svg"
              alt
              class="icon"
            />
          </a>
          <a
            href="https://blog.naver.com/pocketcompany1"
            target="_blank"
            rel="noopener noreferer"
            class="sns-link"
          >
            <img
              src="./assets/images/btn/btn_blog.svg"
              alt
              class="icon"
            />
          </a>
          <a
            href="https://post.naver.com/pocketcompany3"
            target="_blank"
            rel="noopener noreferer"
            class="sns-link"
          >
            <img
              src="./assets/images/btn/btn_posting.svg"
              alt
              class="icon"
            />
          </a>
        </div>
      </div>
    </nav>
    <!-- END 모바일 메뉴 -->
    <label for="open-mb-nav" class="nav-button">
      <span class="hamburger"></span>
    </label>
    <!-- END 220609 gnb 추가 -->
    <div class="hd-right-wrap">
      <div class="btn-wrap">
        <button
          type="button"
          id="hdModalOpen"
          class="btn btn-rounded btn-main btn-sm"
        >
          전문가 상담신청
        </button>
      </div>
      <div class="hd-nav-list type-auth">
        <a
          href="https://xn--9i1b674cwc38r6pa.com/login"
          class="hd-nav-link type-auth"
          >로그인/회원가입</a
        >
      </div>
    </div>
  </div>
</header>`,
});

// new Vue({
//   el: "#app",
// });
