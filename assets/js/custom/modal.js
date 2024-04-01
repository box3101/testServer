$(document).ready(function () {
  // TODO: 모달 열기
  $(
    '#modalOpen, #hdModalOpen, #FloatModalOpen, #gnbOpen1, #gnbOpen2, #mGnbOpen1, .applyBtn'
  ).click(function () {
    $('.modal').addClass('is-show');
    $('body').css('overflow', 'hidden');
  });

  // TODO: 모달 닫기
  $('.modal-bg, .modal-btn-close').click(function () {
    $('.modal').removeClass('is-show');
    $('body').css('overflow', 'auto');
  });

  $('#modal_close_btn').click(function () {
    $('.modal').removeClass('is-show');
    $('body').css('overflow', 'auto');
  });

  // TODO: 모달 열기
  $('#privacyModalOpen').click(function () {
    $('.pr-modal').addClass('is-show');
  });

  // TODO: 모달 닫기
  $('.modal-bg, .popup-close-btn').click(function () {
    $('.pr-modal').removeClass('is-show');
    $('body').css('overflow', 'auto');
  });

  $('.chck-input.inflow_rt').click(function () {
    if ($('.chck-input.inflow_rt:checked').length > 2) {
      // 체크박스 2개 이상 선택 불가
      $(this).prop('checked', false);
    }
  });
});

function moveStep01() {
  $('#modal_step_all_grp, #modal_progress_grp').removeClass([
    'type-step02',
    'type-step03',
  ]);
  $('#modal_progress_grp, #modal_progress_grp').removeClass([
    'type-step02',
    'type-step03',
  ]);
  $('.modal-btn-grp2, .modal-btn-grp3').removeClass('active');
  $('.modal-btn-grp1').addClass('active');
  $('#stem_num').text('1');
}

function moveStep02() {
  if (!$('.chck-input:not(.inflow_rt)').is(':checked')) {
    alert('어떤 파트에 도움이 필요한지 체크해주세요');
    return;
  }
  $('#modal_step_all_grp, #modal_progress_grp').removeClass('type-step03');
  $('#modal_step_all_grp, #modal_progress_grp').addClass('type-step02');
  $('.modal-btn-grp1, .modal-btn-grp3').removeClass('active');
  $('.modal-btn-grp2').addClass('active');
  $('#stem_num').text('2');
}

function moveStep03() {
  if (!$('#comName').val()) {
    alert('회사명을 입력해주세요');
    return;
  }
  if (!$('#name').val()) {
    alert('이름을 입력해주세요');
    return;
  }
  if (!$('#tel').val()) {
    alert('연락처를 입력해주세요');
    return;
  }
  $('#modal_step_all_grp, #modal_progress_grp').removeClass('type-step02');
  $('#modal_step_all_grp, #modal_progress_grp').addClass('type-step03');
  $('.modal-btn-grp1, .modal-btn-grp2').removeClass('active');
  $('.modal-btn-grp3').addClass('active');
  $('#stem_num').text('3');
}

function showEctInput(event) {
  $('#etc').is(':checked') ? $('#ectText').show() : $('#ectText').hide();
}

function sendMail() {
  if (!$('.chck-input:not(.inflow_rt)').is(':checked')) {
    alert('어떤 파트에 도움이 필요한지 체크해주세요');
    return;
  }

  const step1 = [];
  $('.chck-input:not(.inflow_rt):checked').each(function () {
    step1.push(this.value);
  });
  const firm_name = $('#comName').val();
  const cust_name = $('#name').val();
  const cust_contact = $('#tel').val();
  const sectors = $('#cats1').val();
  const annua_sales = $('#cats2').val();
  const content = $('#content').val();
  const checked_input_rt = $('.chck-input.inflow_rt:checked');

  if (step1.length === 0) {
    alert('어떤 파트에 어려움이 있으신지 체크해주세요');
    return;
  }
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
  if ($('#etc').is(':checked') && !$('#ectText').val()) {
    alert('알게된 경로를 기입해주세요');
    return;
  }

  const inflow_rt = [];
  checked_input_rt.each(function () {
    inflow_rt.push(this.value);
  });

  if ($('#etc').is(':checked')) {
    inflow_rt.push($('#ectText').val());
  }

  const iciq_items = {
    step1: step1,
    firm_name: firm_name,
    cust_name: cust_name,
    sectors: sectors,
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
    url: "https://api.xn--9i1b674cwc38r6pa.com/web/v1/mail/inquiry",
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

/* ///////////////////////////////////////////////////////
  상품 구성 보기 팝업 checkbox custom
*/ ////////////////////////////////////////////////////////1

(function () {
  // 데이터 항목 생성 함수
  function createListItem(itemData) {
    const li = document.createElement('li');
    li.className = 'card-item';

    // 예: 각 항목에 대한 HTML 내용 구성
    li.innerHTML = `
      <label for="${itemData.checkId}" class="check-btn-wrp">
      <input id="${itemData.checkId}" type="checkbox" class="check-btn check-switch" data-price="${itemData.price}" />
        <div class="check-mark"></div>
      </label>
      <div class="tag-wrp">
        ${itemData.tags.map((tag) => `<span class="tag ${tag.class}">${tag.name}</span>`).join('')}
      </div>
      <h2>${itemData.title}</h2>
      <p>${itemData.description}</p>
      <div class="flx aic jcb">
        <ul>
          <li>
            ${itemData.details.map((detail) => `${detail}`).join('<span class="plus-txt">+</span>')}
          </li>
        </ul>
        <p class="price"><span>Price</span> ${itemData.price}원</p>
      </div>
    `;

    return li;
  }

  // 아이템 로드 및 표시 함수
  function loadAndDisplayItems() {
    // 예시 데이터
    const data = [
      {
        id: 1,
        title: '사업계획 지원사업 패키지',
        description:
          '지원사업의 효율적인 문서를 패키지로 탑재해 공급하고 있습니다.',
        tags: [
          { name: 'BEST', class: 'tag-best' },
          { name: '풀패키지', class: 'tag-new' },
          { name: '4개월 완성', class: '' },
        ],
        details: [
          'PSST 계획서',
          '피치 Deck PPT',
          '큐레이션 레포트',
          'R&D 사업계획서',
        ],
        checkId: 'a1',
        price: '1,700,000',
      },
      {
        id: 2,
        title: '사업계획 지원사업 패키지',
        description:
          '지원사업의 효율적인 문서를 패키지로 탑재해 공급하고 있습니다.',
        tags: [
          { name: 'BEST', class: 'tag-best' },
          { name: '풀패키지', class: 'tag-new' },
          { name: '4개월 완성', class: '' },
        ],
        details: [
          'PSST 계획서',
          '피치 Deck PPT',
          '큐레이션 레포트',
          'R&D 사업계획서',
        ],
        checkId: 'a2',
        price: '4,500,000',
      },
    ];

    const list = document.querySelector('.tab-content ul');
    data.forEach((itemData) => {
      const listItem = createListItem(itemData);
      list.appendChild(listItem);
    });
  }

  // 페이지 로드 시 함수 호출
  document.addEventListener('DOMContentLoaded', loadAndDisplayItems);

  // TODO 서버데이터 다 뿌려지면 실행시켜줄 함수

  // 체크했을때 .card-item 에 is-active toogle 함수 (ui관련)
  function checkboxClickHandler() {
    document
      .querySelector('.tab-content')
      .addEventListener('click', function (e) {
        // 클릭된 요소가 체크박스인지 확인
        if (e.target.classList.contains('check-btn')) {
          const cardItem = e.target.closest('.card-item');

          if (cardItem) {
            // 체크박스의 선택 상태에 따라 .card-item의 is-active 클래스 토글
            if (e.target.checked) {
              cardItem.classList.add('is-active');
            } else {
              cardItem.classList.remove('is-active');
            }
          }
        }
      });
  }

  // 체크했을때 1개이상 시 카운터 갯수,가격 표시하는 함수
  function updateSelected() {
    const checkBoxes = document.querySelectorAll('.card-item .check-switch'); // 체크박스들

    // 선택된 체크박스의 수를 업데이트하고, is-active 클래스를 추가/제거하는 함수
    const $$cardItem = document.querySelectorAll('.modal-popup .card-item');
    if ($$cardItem) {
      function updateSelectedCount() {
        let totalPrice = 0; // 총금액

        // selected-price-wrap 요소 선택
        const selectedPriceWrap = document.querySelector(
          '.selected-wrap .selected-price-wrap'
        );

        // 체크박스가 몇 개 클릭되었는지 계산
        const selectedCount = document.querySelectorAll(
          '.card-item .check-switch:checked'
        ).length;

        // 선택된 체크박스에 대해서만 가격 합산
        document
          .querySelectorAll('.card-item .check-switch:checked')
          .forEach((checkBoxItem) => {
            // data-price 속성값에서 쉼표를 제거하고 숫자로 변환
            const price = parseInt(
              checkBoxItem.dataset.price.replace(/,/g, ''),
              10
            );
            totalPrice += price;
          });

        // 선택된 항목이 0보다 크면 is-active 설정 아니면 is-active 지우기
        if (selectedCount > 0) {
          selectedPriceWrap.classList.add('is-active');
        } else {
          selectedPriceWrap.classList.remove('is-active');
        }

        // 선택된 체크박스의 수를 .selected-num span에 표시
        const selectedNumSpan = document.querySelector('.selected-num span');
        selectedNumSpan.textContent = `${selectedCount}개`; // 개수 업데이트

        // 총 금액을 .selected-price에 표시
        const totalPriceDiv = document.querySelector('.selected-price');
        totalPriceDiv.textContent = `총 금액: ${totalPrice.toLocaleString()}원`; // 총 금액 업데이트, 숫자에 콤마 추가
      }

      // 각 체크박스에 대해 이벤트 리스너
      checkBoxes.forEach((checkBox) => {
        checkBox.addEventListener('change', updateSelectedCount);
      });

      // 초기 상태 업데이트
      updateSelectedCount();
    }
  }

  setTimeout(function () {
    checkboxClickHandler();
    updateSelected();
  }, 100);
})();
