Vue.component('build-inquiry', {
  template: `  
  <div id="inquiryFrom">
    <div class="inquiry-right">
      <div class="input-flex-grp type-media-01">
        <div class="input-box">
          <label for="CompanyName" class="label-md">회사명</label>
          <input
            id="CompanyName"
            type="text"
            class="inp"
            placeholder="회사명을 입력해주세요."
          />
        </div>
        <div class="input-box">
          <label for="Name" class="label-md">성함</label>
          <input
            id="Name"
            type="text"
            class="inp"
            placeholder="성함을 입력해주세요."
          />
        </div>
      </div>
    <div class="input-box">
      <label for="Phone" class="label-md">연락처</label>
      <input
        id="Phone"
        type="text"
        class="inp"
        placeholder="연락처를 입력해주세요. '-' 제외"
      />
    </div>
    <!--
    <div class="input-box">
      <label for="business" class="label-md">업종</label>
      <select required id="business" class="inp select-01">
        <option disabled selected :value="null">업종을 선택해주세요</option>
        <option value="개발자">개발자</option>
      </select>
    </div>
    -->
    <div class="input-box">
      <label for="sales" class="label-md">매출</label>
      <select required id="sales" class="inp select-01">
        <option disabled selected :value="null">매출을 선택해주세요</option>
        <option value="예비">예비</option>
        <option value="1,000만원 이하">1,000만원 이하</option>
        <option value="1,000만원~5,000만원">1,000만원~5,000만원</option>
        <option value="5,000만원~1억">5,000만원~1억</option>
        <option value="1억~5억">1억~5억</option>
        <option value="5~10억">5~10억</option>
        <option value="30억 이상">30억 이상</option>
      </select>
    </div>
    <div class="input-box">
      <label for="buildInquiry" class="label-md">내용</label>
      <textarea
        id="buildInquiry"
        type="text"
        class="inp textarea-line-2"
        placeholder="문의 내용을 입력해주세요."
      ></textarea>
    </div>
    <div class="input-box">
    <span class="label-md type-none-position">포켓컴퍼니를 알게 된 경로</span>
    <div class="check-group">
      <div class="check-box">
        <input name="referral_v2" class="is-none check-switch chck-input inflow_rt" id="google_v2" type="checkbox" value="구글 검색"  />
        <label for="google_v2" class="label-chk-03">구글 검색</label>
      </div>
      <div class="check-box">
        <input name="referral_v2" class="is-none check-switch chck-input inflow_rt" id="naver_v2" type="checkbox" value="네이버 검색"  />
        <label for="naver_v2" class="label-chk-03">네이버 검색</label>
      </div>
      <div class="check-box">
        <input name="referral_v2" class="is-none check-switch chck-input inflow_rt" id="facebook_v2" type="checkbox" value="페이스북 광고"  />
        <label for="facebook_v2" class="label-chk-03">페이스북 광고</label>
      </div>
      <div class="check-box">
        <input name="referral_v2" class="is-none check-switch chck-input inflow_rt" id="instagram_v2" type="checkbox" value="인스타그램"  />
        <label for="instagram_v2" class="label-chk-03">인스타그램</label>
      </div>
      <div class="check-box">
      <input name="referral_v2" class="is-none check-switch chck-input inflow_rt" id="recommend_v2" type="checkbox" value="지인 추천"  />
      <label for="recommend_v2" class="label-chk-03">지인 추천</label>
    </div>
    <div class="check-box type-flex">
    <input name="referral_v2" class="is-none check-switch chck-input inflow_rt" id="etc_v2" type="checkbox" value="기타"  />
    <label for="etc_v2" class="label-chk-03">기타</label>
    <input id="ectText_v2" type="text" class="inp inp-sm"/>
  </div>
</div>
</div>
    <div class="input-flex-grp type-gap-14">
      <div class="check-box">
        <input
          id="privacy"
          type="checkbox"
          class="is-none check-switch"
        />
        <label for="privacy" class="label-chk-02 type-sm"
          >개인정보 수집에 동의합니다.</label
        >
      </div>
      <button
        id="privacyModalOpen"
        type="button"
        class="btn btn-font-13 btn-color-gray btn-underline"
      >
        내용보기
      </button>
    </div>
    <div class="btn-grp mt-34">
      <button
        @click="sendMails()"
        class="btn btn-counsel btn-rounded-5 btn-sky btn-font-20 semibold-txt"
      >
       상담 신청하기
      </button>
    </div>
  </div>
</div>,`,
});

// new Vue({
//   el: "#app",
// });
