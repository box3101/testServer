Vue.component('consulting-modal', {
  template: `    <div class="modal">
  <div class="modal-bg"></div>
  <div class="modal-wrapper type-rn">
    <div class="modal-conts type-rn">
      <!-- modal title -->
      <div class="modal-ttl-grp type-rn">
        <h2 class="modal-ttl type-rn">상담신청</h2>
        <p class="modal-sub-ttl type-rn">상담을 통해 대표님의 막막함을 풀어드리겠습니다</p>
        <p class="modal-dec type-rn">문의를 남겨주시면 빠른 시간내로 매니저가 연락을 드립니다</p>
      </div>
      <!-- END modal title -->
      <!-- END progress-bar -->
      <!-- TODO: modal-step-all-grp에 type-step02, type-step03에 따라 x축 이동 -->
      <div class="modal-step-all-grp type-renew type-rn">
        <div class="modal-step-grp type-renew" style="padding: 18px 52px 0;">
          <!-- modal form-grp -->
          <div class="modal-form-grp">
            <p class="modal-form-ttl type-rn">
              어떤 파트에 어려움이 있으신가요?
            </p>
            <div class="chck-all-wrap">
              <p class="inp-label inp-big-label">중복선택 가능</p>
              <div class="chck-flex-row-grp">
                <!-- checkbox -->
                <div class="input-box chck-box type-rn">
                  <input type="checkbox" id="chk01" value="정부지원" class="none chck-input" />
                  <label for="chk01" class="chck-icon"></label>
                  <label for="chk01" class="chck-txt">정부지원</label>
                </div>
                <!-- END checkbox -->
                <!-- checkbox -->
                <div class="input-box chck-box type-rn">
                  <input type="checkbox" id="chk02" value="투자유치" class="none chck-input" />
                  <label for="chk02" class="chck-icon"></label>
                  <label for="chk02" class="chck-txt">투자유치</label>
                </div>
                <!-- END checkbox -->
                <!-- checkbox -->
                <div class="input-box chck-box type-rn">
                  <input type="checkbox" id="chk03" value="브랜딩" class="none chck-input" />
                  <label for="chk03" class="chck-icon"></label>
                  <label for="chk03" class="chck-txt">브랜딩</label>
                </div>
                <!-- END checkbox -->
                <!-- checkbox -->
                <div class="input-box chck-box type-rn">
                  <input type="checkbox" id="chk04" value="IT개발" class="none chck-input" />
                  <label for="chk04" class="chck-icon"></label>
                  <label for="chk04" class="chck-txt">IT개발</label>
                </div>
                <!-- END checkbox -->
              </div>
            </div>
          </div>
          <!-- END modal form-grp -->
          <!-- modal form-grp -->
          <div class="modal-form-grp">
            <div class="chck-all-wrap">
              <p class="inp-label inp-big-label">포켓컴퍼니를 알게된 경로 (최대 2개)</p>
              <div class="chck-flex-row-grp type-flex-wrap type-mb">
                <!-- checkbox -->
                <div class="input-box chck-box typw-w-138 type-rn">
                  <input
                    type="checkbox"
                    name="path"
                    id="google"
                    class="none chck-input inflow_rt"
                    value="google"
                  />
                  <label for="google" class="chck-icon"></label>
                  <label for="google" class="chck-txt">구글 검색</label>
                </div>
                <!-- END checkbox -->
                <!-- checkbox -->
                <div class="input-box chck-box typw-w-138 type-rn">
                  <input
                    type="checkbox"
                    name="path"
                    id="naver"
                    class="none chck-input inflow_rt"
                    value="naver"
                  />
                  <label for="naver" class="chck-icon"></label>
                  <label for="naver" class="chck-txt">네이버 검색</label>
                </div>
                <!-- END checkbox -->
                <!-- checkbox -->
                <div class="input-box chck-box typw-w-138 type-rn">
                  <input
                    type="checkbox"
                    name="path"
                    id="facebook"
                    class="none chck-input inflow_rt"
                    value="facebook"
                  />
                  <label for="facebook" class="chck-icon"></label>
                  <label for="facebook" class="chck-txt">페이스북 광고</label>
                </div>
                <!-- END checkbox -->
                <!-- checkbox -->
                <div class="input-box chck-box typw-w-138 type-rn">
                  <input
                    type="checkbox"
                    name="path"
                    id="instagram"
                    class="none chck-input inflow_rt"
                    value="insta"
                  />
                  <label for="instagram" class="chck-icon"></label>
                  <label for="instagram" class="chck-txt">인스타그램</label>
                </div>
                <!-- END checkbox -->
                  <!-- checkbox -->
                  <div class="input-box chck-box typw-w-138 type-rn">
                  <input
                    type="checkbox"
                    name="path"
                    id="recommend"
                    class="none chck-input inflow_rt"
                    value="recommend"
                  />
                  <label for="recommend" class="chck-icon"></label>
                  <label for="recommend" class="chck-txt">지인 추천</label>
                </div>
                <!-- END checkbox -->
                  <!-- checkbox -->
                  <div class="input-box chck-box typw-w-138 type-rn">
                  <input
                    type="checkbox"
                    name="path"
                    id="etc"
                    class="none chck-input inflow_rt"
                    @change="showEctInput"
                    value="etc"
                  />
                  <label for="etc" class="chck-icon"></label>
                  <label for="etc" class="chck-txt">기타</label>
                </div>
                <!-- END checkbox -->
              </div>
              <!-- TODO: 기타 선택 시 뜨는 인풋 -->
              <input
                name="ectText"
                id="ectText"
                class="input inp-gray"
                type="text"
                placeholder="알게된 경로를 입력해주세요"
                style="display: none;"
              />
            </div>
          </div>
          <!-- modal form-grp -->
          <div class="modal-form-grp">
            <!-- label + input gray -->
            <div class="input-grp">
              <label for="comName" class="inp-label">회사명</label>
              <input name="comName" id="comName" class="input inp-gray" type="text" placeholder="회사명을 입력해주세요" />
            </div>
            <!-- END label + input gray -->
            <!-- label + input gray -->
            <div class="input-grp">
              <label for="name" class="inp-label">이름</label>
              <input name="name" id="name" class="input inp-gray" type="text" placeholder="이름을 입력해주세요" />
            </div>
            <!-- END label + input gray -->
            <!-- label + input gray -->
            <div class="input-grp">
              <label for="tel" class="inp-label">연락처(휴대폰)</label>
              <input name="tel" id="tel" class="input inp-gray" type="text" placeholder="010-1234-5678" />
            </div>
            <!-- END label + input gray -->
          </div>
          <!-- END modal form-grp -->

          <!-- modal form-grp -->
          <div class="modal-form-grp">
            <div class="input-grp">
              <label for="cats2" class="inp-label">매출</label>
              <select name="cats2" id="cats2" class="select-type">
                <option value="예비" selected>예비</option>
                <option value="1,000만원 이하">1,000만원 이하</option>
                <option value="1,000만원~5,000만원">
                  1,000만원~5,000만원
                </option>
                <option value="5,000만원~ 1억">5,000만원~ 1억</option>
                <option value="1억~5억">1억~5억</option>
                <option value="5억~10억">5억~10억</option>
                <option value="30억 이상">30억 이상</option>
              </select>
            </div>
 
            <!--
            <div class="input-grp">
            <label for="business" class="inp-label">업종</label>
            <!-- v-model="annua_sales" --
            <select
              name="business"
              id="business"
              class="select-type"
            >
              <option value="업종">업종</option>
            </select>
          </div> -->
          
            <!-- textarea -->
            <div class="input-box textarea-box">
              <label for="content" class="inp-label">내용</label>
              <textarea name="content" id="content" class="textarea-type"
                placeholder="문의 내용을 간략히 입력해주세요"></textarea>
            </div>
            <!-- END textarea -->
          </div>
          <!-- END modal form-grp -->
                      <!-- modal-btn-grp -->
                      <div
              class="modal-btn-grp modal-btn-grp1 type-nonefixed type-flex active"
            >
              <div class="modal-info-grp">
                <p class="info-ttl mb-hide">
                  *문의오류가 발생하셨을 경우 챗봇으로 남겨주시면
                  담당자가 연락드리겠습니다
                </p>

                <p class="info-ttl mb-show">
                  *문의오류가 발생하셨을 경우<br
                    class="mb-show"
                  /> 챗봇으로 문의해주세요
                </p>
              </div>
              <div class="btn-flex">
                <button
                  type="button"
                  class="btn btn-rounded btn-main btn-md"
                  @click="sendMail()"
                >
                  완료
                </button>
              </div>
            </div>
            <!-- END modal-btn-grp -->
      </div>
    </div>
    </div>
    <div class="modal-close-btn-wrap tab-show">
      <button type="button" class="btn modal-close-btn" id="modal_close_btn">
        닫기
      </button>
    </div>
  </div>
</div>`,
});

// new Vue({
//   el: "#app",
// });
