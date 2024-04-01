Vue.component("layout-footer", {
  template: `<footer class="pc-ft">
  <footer class="ft-inner">
    <div class="footer-group">
      <div class="ft-info-group">
        <a href="https://www.xn--9i1b674cwc38r6pa.com/main" class="ft-logo">
          <img src="./assets/images/logo/logo_footer.svg" alt="포켓컴퍼니" class="logo" />
          <img src="./assets/images/logo/logo_footer_wh.svg" alt="포켓컴퍼니" class="logo logo-wh" />
        </a>

        <div class="ft-infomation">
          <h5 class="com-name">(주)포켓컴퍼니</h5>
          <ul class="com-info-list-group type-default">
            <li class="com-info-list">
              <span class="com-info-item">대표 정규진</span>
              <span class="com-info-item">사업자 등록번호 266-87-01013</span>
            </li>
            <li class="com-info-list">
              <span class="com-info-item">서울특별시 강남구 언주로 609 팍스타워 A동 1층 2호
                포켓컴퍼니</span>
            </li>
          </ul>
          <ul class="com-info-list-group">
            <li class="com-info-list">
              <button type="button" class="com-info-item">
                이용약관
              </button>
              <button type="button" class="com-info-item">
                개인정보 취급방침
              </button>
            </li>
          </ul>
          <span class="com-copyright">Copyright&copy;2020 Pocket Company&nbsp;&nbsp;&nbsp;All rights reserved.</span>
        </div>
      </div>

      <div class="ft-sns-group">
        <div class="ft-download-grp">
          <button type="button" class="btn btn-ft-download"
            onclick="window.open('./assets/file/2022_pocketcompany.pdf')">
            회사소개서
          </button>
        </div>
        <div class="sns-link-group">
          <a href="https://instagram.com/startup_daily_news/" target="_blank" class="sns-link">
            <img src="./assets/images/btn/btn_insta.png" alt="instagram logo" class="icon" />
          </a>
          <a href="https://www.facebook.com/pages/category/Business-Service/%ED%8F%AC%EC%BC%93%EC%BB%B4%ED%8D%BC%EB%8B%88%E3%85%A1%EC%82%AC%EC%97%85%EA%B3%84%ED%9A%8D%EC%84%9C%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%EC%A0%95%EB%B6%80%EC%A7%80%EC%9B%90%ED%88%AC%EC%9E%90%EC%A0%9C%EC%95%88%EC%84%9C-377103632904873/"
            target="_blank" class="sns-link">
            <img src="./assets/images/btn/btn_facb.svg" alt="facebook logo" class="icon" />
          </a>
          <a href="https://blog.naver.com/pocketcompany1" target="_blank" class="sns-link">
            <img src="./assets/images/btn/btn_blog.svg" alt="naver blog logo" class="icon" />
          </a>
          <a href="https://post.naver.com/pocketcompany3" target="_blank" class="sns-link">
            <img src="./assets/images/btn/btn_posting.svg" alt="naver post logo" class="icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</footer>`,
});

// new Vue({
//   el: "#app",
// });
