// 오늘 날짜 삽입
let today = {
  month: null,
  day: null,
};

loadToday();

function loadToday() {
  today.month = moment(new Date()).format('M');
  today.day = moment(new Date()).format('D');
  $('#today-month').text(today.month);
  $('#today-day').text(today.day);
}

// go top button
function goTop() {
  window.scrollTo({ top: 0, left: 0 });
}

// IE인 경우 html에 .ie 추가
var browser = navigator.userAgent.toLowerCase();
// console.log("1: " + browser);
// 브라우저 이름에 trident 혹은 msie가 있을 경우, console에 익스플로러 출력
if (
  (navigator.appName == 'Netscape' && browser.indexOf('trident') != -1) ||
  browser.indexOf('msie') != -1
) {
  document.getElementsByTagName('html')[0].classList.add('ie');
}

/* ///////////////////////////////////////////////////////
  지원사업 결과보기
*/ ////////////////////////////////////////////////////////1
window.addEventListener('load', function () {
  const $resultBtn = document.querySelector('.result-btn');
  const $chkCardFirst = document.querySelector('.chk-card.first');
  const $chkCardSec = document.querySelector('.chk-card.second');
  const $chkCardThi = document.querySelector('.chk-card.third');
  if ($resultBtn) {
    $resultBtn.addEventListener('click', function () {
      const imgPen = document.querySelector('.img-pen-grp');

      // 결과버튼, 이미지 삭제
      $resultBtn.remove();
      imgPen.remove();

      // 몇개 체크했는지 체크
      const $$checkItems = document.querySelectorAll(
        '.check-switch:checked'
      ).length;

      // 0 ~ 1개 체크
      if ($$checkItems >= 0 && $$checkItems < 2) {
        $chkCardFirst.classList.add('is-active');
      }
      // 2 ~ 3개 체크
      else if ($$checkItems >= 2 && $$checkItems < 4) {
        $chkCardSec.classList.add('is-active');
      }
      // 4 ~ 5개 체크
      else if ($$checkItems >= 4 && $$checkItems < 6) {
        $chkCardThi.classList.add('is-active');
      }
    });
  }
});

/* ///////////////////////////////////////////////////////
빌드업 상담신청하기 
*/ ////////////////////////////////////////////////////////
// function sendMail() {
//         const data = {
//             routeTo: {
//               name: 'pockethtml/index',
//               path: window.location.pathname,
//               hash: window.location.hash,
//               fullPath: window.location.href,
//               matched: {},
//               params: window.location.href,
//               query: window.location.search,
//               companyName: document.querySelector('#CompanyName').value,
//               name: document.querySelector('#Name').value,
//               phone: document.querySelector('#Phone').value,
//               businessType: document.querySelector('#business').value,
//               sales: document.querySelector('#sales').value,
//               buildInquiry: document.querySelector('#buildInquiry').value,
//               privacy: document.querySelector('#privacy').checked,
//               referrals: selectedReferrals,
//             },
//           };
//           try {
//             $.ajax({
//               type: 'POST',
//               url: host + '/web/v1/web_access_log/wal',
//               async: true,
//               dataType: 'json',
//               contentType: 'application/x-www-form-urlencoded',
//               data: $.param(data),
//             }).then(function (res) {
//               console.log(res);
//             });
//           } catch (e) {
//             console.error(e);
//           }
// }

function sendMails() {

  // const step1 = [];
  // $('.chck-input:not(.inflow_rt):checked').each(function () {
  //   step1.push(this.value);
  // });
  const firm_name = $('#CompanyName').val();
  const cust_name = $('#Name').val();
  const cust_contact = $('#Phone').val();
  const annua_sales = $('#sales').val();
  const content = $('#buildInquiry').val();
  const checked_input_rt = $('.chck-input.inflow_rt:checked');
  const privacy = $('#privacy');
    // const privacy = document.querySelector('#privacy');

  if (!firm_name) {
    alert('회사명을 입력해주세요');
    return;
  }
  if (!cust_name) {
    alert('성함을 입력해주세요');
    return;
  }
  if (!cust_contact) {
    alert('연락처(휴대폰)을 입력해주세요');
    return;
  }

  if (!/^\d{10,11}$/.test(cust_contact)) {
    alert('올바른 전화번호를 입력해주세요.');
    return
  }
  
  if (!annua_sales) {
    alert('매출을 선택해주세요');
    return;
  }
  if (!content) {
    alert('내용을 입력해주세요');
    return;
  }
  if (checked_input_rt.length == 0) {
    alert('알게된 경로를 선택해주세요');
    return;
  }
  //기타 선택되었지만 주관식 작성하지 않은 경우
  if ($('#etc_v2').is(':checked') && !$('#ectText_v2').val()) {
    alert('알게된 경로를 기입해주세요');
    return;
  }

  if (!$('#privacy').is(':checked')) {
    return alert('개인정보 수집에 동의해주세요');
  }

  const inflow_rt = [];
  checked_input_rt.each(function () {
    inflow_rt.push(this.value);
  });

  if ($('#etc_v2').is(':checked')) {
    inflow_rt.push($('#ectText_v2').val());
  }

  const iciq_items = {
    // step1: step1,
    firm_name: firm_name,
    cust_name: cust_name,
    annua_sales: annua_sales,
    inflow_rt: inflow_rt,
    page_from: window?.location?.pathname || '',
  };

  const data = {
    iciq_number: (cust_contact || '').replace(/-/g, ''),
    iciq_email: '-',
    iciq_content: content,
    iciq_type: 'default',
    iciq_items: iciq_items,
  };

  console.log('data', data);

  /**
   * TODO 김태리
   * 모든 API 호출 host 부분 변경
   */
  const host =
    !window.env || window.env == 'development'
      ? 'https://api.test.xn--9i1b674cwc38r6pa.com'
      : 'https://api.xn--9i1b674cwc38r6pa.com';

  $.ajax({
    type: 'POST', //요청 메소드 방식
    url: "https://api.test.xn--9i1b674cwc38r6pa.com/web/v1/mail/inquiry",
    asynqc: true,
    dataType: 'json',
    data: data,
  }).then(function (result) {
    if (result.query.length > 0) {
      window.location.replace(
        'https://www.xn--9i1b674cwc38r6pa.com/pocket-html/complete.html'
      );
    } else {
      alert(
        '전송이 실패했습니다. \n오류가 지속되면 "포켓컴퍼니.com"을 통해 문의해주세요.'
      );
    }
  });
  $(function () {
    const data = {
      routeTo: {
        name: 'pockethtml/index',
        path: window.location.pathname,
        hash: window.location.hash,
        fullPath: window.location.href,
        matched: {},
        params: window.location.href,
        query: window.location.search,
      },
    };
    try {
      $.ajax({
        type: 'POST',
        url: host + '/web/v1/web_access_log/wal',
        async: true,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        data: $.param(data),
      }).then(function (res) {
        console.log(res);
      });
    } catch (e) {
      console.error(e);
    }
  });
}



// (function () {
//   document.addEventListener('DOMContentLoaded', function () {
//     const $form = document.querySelector('#inquiryFrom');

//     const host =
//       !window.env || window.env == 'development'
//         ? 'https://api.test.xn--9i1b674cwc38r6pa.com'
//         : 'https://api.xn--9i1b674cwc38r6pa.com';

//     $form.addEventListener('submit', function (e) {
//       e.preventDefault();

//       if (validateForm()) {
//         console.log('성공');
//         $(function () {
//           // 체크박스 그룹에서 선택된 항목들의 값
//           const selectedReferrals = Array.from(
//             document.querySelectorAll(
//               '#inquiryFrom input[type="checkbox"][name="referral"]:checked'
//             )
//           ).map((cb) => cb.value);
//         });
//       }

//       // 유효성 검사 함수 구현
//       function validateForm() {
//         if (!validateCompanyName()) return false;
//         if (!validateName()) return false;
//         if (!validatePhone()) return false;
//         // if (!validateBusinessType()) return false;
//         if (!validateSales()) return false;
//         if (!validateBuildInquiry()) return false;
//         if (!validateReferralSelection()) return false;
//         if (!validatePrivacy()) return false;

//         return true;
//       }

//       function validateReferralSelection() {
//         // 체크박스 그룹

//         const checkLen = document.querySelectorAll(
//           '#inquiryFrom input[type="checkbox"][name="referral_v2"]:checked'
//         ).length;

//         // 체크박스 그룹 내에서 하나라도 체크되어 있는지 확인
//         if (checkLen > 0) {
//           return true;
//         } else {
//           alert('유입경로를 선택해주세요.');
//           return false;
//         }
//       }

//       function validateCompanyName() {
//         const companyName = document.querySelector('#CompanyName');
//         if (companyName.value.length < 1) {
//           alert('회사명을 입력해주세요');
//           return false;
//         }
//         return true;
//       }

//       function validateName() {
//         const name = document.querySelector('#Name');
//         if (name.value.length < 1) {
//           alert('이름을 입력해주세요');
//           return false;
//         }
//         return true;
//       }

//       function validatePhone() {
//         const phone = document.querySelector('#Phone');
//         if (!/^\d{10,11}$/.test(phone.value)) {
//           alert('올바른 전화번호를 입력해주세요.');
//           return false;
//         }
//         return true;
//       }

//       // function validateBusinessType() {
//       //   const business = document.querySelector('#business');
//       //   if (business.value == 'null') {
//       //     alert('업종을 선택해주세요.');
//       //     return false;
//       //   }
//       //   return true;
//       // }

//       function validateSales() {
//         const sales = document.querySelector('#sales');
//         if (sales.value == 'null') {
//           alert('매출을 선택해주세요.');
//           return false;
//         }
//         return true;
//       }

//       function validateBuildInquiry() {
//         const buildInquiry = document.querySelector('#buildInquiry');
//         if (buildInquiry.value.length < 1) {
//           alert('문의 내용을 입력해주세요.');
//           return false;
//         }
//         return true;
//       }

//       function validatePrivacy() {
//         const privacy = document.querySelector('#privacy');
//         if (!privacy.checked) {
//           alert('개인정보 수집에 동의해주세요.');
//           return false;
//         }
//         return true;
//       }
//     });
//   });
// })();
