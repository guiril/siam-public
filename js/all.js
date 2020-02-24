"use strict";

(function () {
  var getEl = function getEl(el) {
    return document.querySelector(el);
  };

  var getAllEl = function getAllEl(el) {
    return document.querySelectorAll(el);
  };

  var animated = function animated(el, className) {
    var item = getAllEl(el);
    var windowHeight = document.documentElement.clientHeight;
    var windowPos = window.pageYOffset;

    for (var i = 0; i < item.length; i++) {
      var thisPos = item[i].offsetTop;

      if (thisPos >= windowPos && thisPos <= windowPos + windowHeight) {
        item[i].style.visibility = 'visible';
        item[i].classList.add(className);
      }
    }

    window.addEventListener('scroll', function () {
      var scrollY = window.pageYOffset;

      for (var _i = 0; _i < item.length; _i++) {
        var _thisPos = item[_i].offsetTop;

        if (_thisPos >= scrollY && _thisPos <= scrollY + windowHeight) {
          item[_i].style.visibility = 'visible';

          item[_i].classList.add(className);
        }
      }
    }, false);
  };

  var animatedDelay = function animatedDelay(wrap, el, className) {
    var itemWrapper = getEl(wrap);
    var item = getAllEl(el);
    var windowHeight = document.documentElement.clientHeight;
    var windowPos = window.pageYOffset;
    var thisPos = itemWrapper.offsetTop;

    if (thisPos >= windowPos && thisPos <= windowPos + windowHeight) {
      var _loop = function _loop(i) {
        setTimeout(function () {
          item[i].style.visibility = 'visible';
          item[i].classList.add(className);
        }, 800 * i);
      };

      for (var i = 0; i < item.length; i++) {
        _loop(i);
      }
    }

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;

      if (thisPos >= scrollY && thisPos <= scrollY + windowHeight) {
        var _loop2 = function _loop2(_i2) {
          setTimeout(function () {
            item[_i2].style.visibility = 'visible';

            item[_i2].classList.add(className);
          }, 800 * _i2);
        };

        for (var _i2 = 0; _i2 < item.length; _i2++) {
          _loop2(_i2);
        }
      }
    }, false);
  };

  document.addEventListener('readystatechange', function () {
    // loading icon
    var state = document.readyState;
    var spinner = getEl('.spinner-wrapper');

    if (state === 'complete') {
      setTimeout(function () {
        spinner.style.visibility = 'hidden';

        if (getEl('.step-list')) {
          animatedDelay('.step-list', '.step-list li', 'fadeinLeft');
        }

        if (getEl('.animated-fadein')) {
          animated('.animated-fadein', 'fadein');
        }

        if (getEl('.animated-left')) {
          animated('.animated-left', 'fadeinLeft');
        }

        if (getEl('.animated-right')) {
          animated('.animated-right', 'fadeinRight');
        }

        if (getEl('.animated-flip')) {
          animated('.animated-flip', 'flipY');
        }

        if (getEl('.card-list')) {
          animated('.card-list li', 'flipY');
        }
      }, 1000);
    }
  });
  $(function () {
    // Bootstrap
    // modal
    $('.modal').on('show.bs.modal', function () {
      $('body').css('overflow', 'hidden');
    });
    $('.modal').on('hide.bs.modal', function () {
      $('body').css('overflow', 'auto');
    });
    $('.member-modal').on('show.bs.modal', function () {
      $('.wrapper').addClass('blur');
    });
    $('.member-modal').on('hide.bs.modal', function () {
      $('.wrapper').removeClass('blur');
    });
    $('#modalSignin').on('shown.bs.modal', function () {
      $('#signinUsername').focus();
    });
    $('#modalSignup').on('shown.bs.modal', function () {
      $('#signupUsername').focus();
    });
    $('[data-toggle="popover"]').popover(); // popover

    $('[data-toggle="tooltip"]').tooltip({
      // tooltip
      trigger: 'hover'
    });
  });

  if (getEl('.go-top')) {
    // go top
    var goTopBtn = getEl('.go-top');

    window.onscroll = function () {
      if (window.scrollY > 0) {
        goTopBtn.style.opacity = '1';
      } else {
        goTopBtn.style.opacity = '0';
      }
    };

    $(goTopBtn).click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
  }

  if (getEl('.header-lang')) {
    // 語系切換
    var lang = '.header-lang li a';
    $(lang).click(function () {
      $(lang).removeClass('active');
      $(this).addClass('active');
    });
  }

  if (getEl('.aside-download')) {
    // 關閉左側 Download
    var wrapper = getEl('.aside-download');
    var btn = getEl('.aside-download-close');
    btn.addEventListener('click', function () {
      wrapper.classList.add('closed');
    });
  }

  if (getEl('.aside-line')) {
    // 關閉右側 QRcode
    var _wrapper = getEl('.aside-line');

    var _btn = getEl('.aside-line-close');

    _btn.addEventListener('click', function () {
      _wrapper.classList.add('closed');
    });
  }

  if (getEl('.banner-wrapper')) {
    // index carousel
    var mySwiper = new Swiper('.banner-wrapper', {
      // eslint-disable-line no-unused-vars
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: '.banner-swiper-pagination',
        clickable: true
      },
      navigation: {
        prevEl: '.banner-button-prev',
        nextEl: '.banner-button-next'
      }
    });
  }

  $('.marquee-list').marquee({
    // 首頁跑馬燈文字
    duration: 20000,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
  });

  if (getEl('.casino-swiper-wrapper')) {
    // index casino carousel
    var item = getEl('.casino-swiper-wrapper');

    var _mySwiper = new Swiper(item, {
      // eslint-disable-line no-unused-vars
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: -20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      centeredSlides: true,
      loop: true,
      mousewheel: false
    });

    item.addEventListener('mouseover', function () {
      _mySwiper.autoplay.stop();
    }, false);
    item.addEventListener('mouseout', function () {
      _mySwiper.autoplay.start();
    }, false);
  }

  if (getEl('.slots-swiper-wrapper')) {
    // index slots carousel
    var _item = getEl('.slots-swiper-wrapper');

    var _mySwiper2 = new Swiper(_item, {
      // eslint-disable-line no-unused-vars
      slidesPerView: 4.5,
      slidesPerColumn: 2,
      spaceBetween: 12,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.slots-swiper-pagination',
        clickable: true
      },
      navigation: {
        prevEl: '.slots-button-prev',
        nextEl: '.slots-button-next'
      }
    });

    _item.addEventListener('mouseover', function () {
      _mySwiper2.autoplay.stop();
    }, false);

    _item.addEventListener('mouseout', function () {
      _mySwiper2.autoplay.start();
    }, false);
  }

  if (getEl('.footer-providers-container')) {
    // footer carousel
    var _mySwiper3 = new Swiper('.footer-providers-container', {
      // eslint-disable-line no-unused-vars
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      slidesPerView: 12,
      loop: true
    });
  }

  $('#modalDownloadMobile').on('shown.bs.modal', function (e) {
    // 手機下載視窗輪播
    var mySwiper = new Swiper('.download-swiper-container', {
      // eslint-disable-line no-unused-vars
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        prevEl: '.modal-button-prev',
        nextEl: '.modal-button-next'
      }
    });
  });

  if (getEl('#name') || getEl('#tel')) {
    var fullName = getEl('#name');
    var mobileNumber = getEl('#tel');

    if (fullName.value) {
      fullName.disabled = true;
    } else {
      fullName.disabled = false;
    }

    if (mobileNumber.value) {
      mobileNumber.disabled = true;
    } else {
      mobileNumber.disabled = false;
    }
  }

  if (getEl('#modalSignup')) {
    // 註冊表單驗證訊息
    var username = getEl('#signupUsername');
    var password = getEl('#signupPassword');
    var fullname = getEl('#signupFullname');
    var mobile = getEl('#signupMobile');
    var signupBtn = getEl('#signupBtn');

    var controlSubmitBtn = function controlSubmitBtn() {
      if (username.className === 'is-valid' && password.className === 'is-valid' && fullname.className === 'is-valid' && mobile.className === 'is-valid') {
        signupBtn.disabled = false;
      } else {
        signupBtn.disabled = true;
      }
    };

    var validateUsername = function validateUsername() {
      var str = username.value;
      var strLength = str.length;
      var specialSymbolsRegex = /^[a-zA-Z0-9]*$/;
      var feedbackWrap = username.nextElementSibling;
      var icon = '';
      var msg = '';

      if (str) {
        if (!specialSymbolsRegex.test(str)) {
          // 只能有英文和數字
          username.className = 'is-invalid';
          msg = 'Username cannot use special symbols.';
          icon = 'icon_error.svg';
        } else if (strLength < 6) {
          // 字數至少六個字
          username.className = 'is-invalid';
          msg = 'Username is less than 6 characters.';
          icon = 'icon_error.svg';
        } else {
          username.className = 'is-valid';
          msg = 'This uesrname can be used.';
          icon = 'icon_correct.svg';
        }
      } else {
        username.className = '';
        msg = '';
        icon = '';
      }

      feedbackWrap.innerHTML = "<img src=\"images/common/".concat(icon, "\"><span class=\"feedback-msg\">").concat(msg, "</span>");
      controlSubmitBtn();
    };

    var validatePassword = function validatePassword() {
      var str = password.value;
      var strLength = str.length;
      var specialSymbolsRegex = /^[a-zA-Z0-9]*$/;
      var feedbackWrap = password.nextElementSibling;
      var msg = '';
      var icon = '';

      if (str) {
        if (!specialSymbolsRegex.test(str)) {
          // 只能有英文和數字
          password.className = 'is-invalid';
          msg = 'Password cannot use special symbols.';
          icon = 'icon_error.svg';
        } else if (strLength < 6) {
          // 字數至少六個字
          password.className = 'is-invalid';
          msg = 'Password is less than 6 characters.';
          icon = 'icon_error.svg';
        } else {
          password.className = 'is-valid';
          msg = 'Password is okay.';
          icon = 'icon_correct.svg';
        }
      } else {
        password.className = '';
        msg = '';
        icon = '';
      }

      feedbackWrap.innerHTML = "<img src=\"images/common/".concat(icon, "\"><span class=\"feedback-msg\">").concat(msg, "</span>");
      controlSubmitBtn();
    };

    var validateFullname = function validateFullname() {
      var str = fullname.value;
      var regex = /^[a-zA-Z\u0e00-\u0e7e][a-zA-Z\u0e00-\u0e7e\s]*$/;
      var feedbackWrap = fullname.nextElementSibling;
      var msg = '';
      var icon = '';

      if (str) {
        if (!regex.test(str)) {
          // 只能填英文、泰文，首字不能空白，字跟字中間可輸入空白
          fullname.className = 'is-invalid';
          msg = 'Please enter the correct name format.';
          icon = 'icon_error.svg';
        } else if (regex.test(str)) {
          fullname.className = 'is-valid';
          msg = 'Full name is okay.';
          icon = 'icon_correct.svg';
        }
      } else {
        fullname.className = '';
        msg = '';
        icon = '';
      }

      feedbackWrap.innerHTML = "<img src=\"images/common/".concat(icon, "\"><span class=\"feedback-msg\">").concat(msg, "</span>");
      controlSubmitBtn();
    };

    var validateMobile = function validateMobile() {
      var str = mobile.value;
      var strLength = str.length;
      var numberRegex = /^[0][0-9]*$/;
      var feedbackWrap = mobile.nextElementSibling;
      var msg = '';
      var icon = '';

      if (str) {
        if (!numberRegex.test(str) || strLength < 9 || strLength > 10) {
          // 只能填數字，至少 9 個字，最多 10 個字
          mobile.className = 'is-invalid';
          msg = 'Please enter the correct Mobile Number format.';
          icon = 'icon_error.svg';
        } else {
          mobile.className = 'is-valid';
          msg = 'Mobile Number is okay.';
          icon = 'icon_correct.svg';
        }
      } else {
        mobile.className = '';
        msg = '';
        icon = '';
      }

      feedbackWrap.innerHTML = "<img src=\"images/common/".concat(icon, "\"><span class=\"feedback-msg\">").concat(msg, "</span>");
      controlSubmitBtn();
    };

    username.addEventListener('keyup', validateUsername, false);
    password.addEventListener('keyup', validatePassword, false);
    fullname.addEventListener('keyup', validateFullname, false);
    mobile.addEventListener('keyup', validateMobile, false);
  }

  if (getEl('#modalSignin')) {
    // 登入表單驗證訊息
    var signinUsername = getEl('#signinUsername');
    var signinPassword = getEl('#signinPassword');
    var signinBtn = getEl('#signinBtn');

    var controlSigninBtn = function controlSigninBtn() {
      var username = signinUsername.value;
      var password = signinPassword.value;

      if (username.length >= 6 && password.length >= 6) {
        signinBtn.disabled = false;
      } else {
        signinBtn.disabled = true;
      }
    };

    signinUsername.addEventListener('keyup', function () {
      controlSigninBtn();
    }, false);
    signinPassword.addEventListener('keyup', function () {
      controlSigninBtn();
    }, false);
  }

  if (getEl('.psw-btn')) {
    (function () {
      // 顯示或隱藏密碼
      var icon = getAllEl('.psw-btn');
      var hideIcon = '<img src="images/common/icon_psw_hide.svg" alt="Hide password">';
      var showIcon = '<img src="images/common/icon_psw_show.svg" alt="Show password">';

      var _loop3 = function _loop3(i) {
        var input = $(icon[i]).siblings('input');

        if (icon[i].dataset.page === 'member') {
          hideIcon = '<img src="images/member/icon_psw_hide.svg" alt="Hide password">';
          showIcon = '<img src="images/member/icon_psw_show.svg" alt="Show password">';
        }

        icon[i].addEventListener('click', function (e) {
          e.preventDefault();

          if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            icon[i].innerHTML = showIcon;
            $(icon[i]).tooltip('hide');
            icon[i].setAttribute('data-original-title', 'Hide password');
            console.log();
          } else if (input.attr('type') === 'text') {
            input.attr('type', 'password');
            icon[i].innerHTML = hideIcon;
            $(icon[i]).tooltip('hide');
            icon[i].setAttribute('data-original-title', 'Show password');
          }
        }, false);
      };

      for (var i = 0; i < icon.length; i++) {
        _loop3(i);
      }
    })();
  }

  if (getEl('.current-date')) {
    // current date
    var currentDate = getAllEl('.current-date');

    for (var i = 0; i < currentDate.length; i++) {
      currentDate[i].value = moment().format('YYYY-MM-DD');
    }
  }

  if (getEl('.current-time')) {
    // current time
    var currentTime = getAllEl('.current-time');

    for (var _i3 = 0; _i3 < currentTime.length; _i3++) {
      currentTime[_i3].value = moment().format('HH:mm');
    }
  }

  if (getEl('.copy-btn')) {
    // 複製文字
    var copyBtn = getEl('.copy-btn');

    var copyToClipBoard = function copyToClipBoard(e) {
      e.preventDefault();
      var inputEl = document.createElement('input');
      var inputWrapper = getEl('.copy-element');
      var copyArea = getEl('.copy-text');
      var copyStatus = document.execCommand('copy');
      var message;

      if (copyArea.nodeName === 'INPUT') {
        inputEl.setAttribute('value', copyArea.value);
      } else {
        inputEl.setAttribute('value', copyArea.textContent);
      }

      inputWrapper.appendChild(inputEl);
      inputEl.select();
      document.execCommand('copy');
      inputWrapper.removeChild(inputEl);
      copyStatus ? message = 'Copied' : message = 'Unable to copy';
      $(copyBtn).tooltip({
        trigger: 'click',
        placement: 'right',
        title: message
      });
      $(copyBtn).tooltip('show');
      setTimeout(function () {
        $(copyBtn).tooltip('hide');
      }, 1500);
    };

    copyBtn.addEventListener('click', copyToClipBoard, false);
  }

  var changeTablist = function changeTablist() {
    // 切換 slots, promotions 類別
    // 假設目前空資料
    var el = '.tab-list li a';
    $(el).click(function () {
      $(el).removeClass('active');
      $(this).addClass('active');
      $('.no-data').show(); // 顯示空資料狀態

      $('.tab-content').hide(); // 隱藏資料區塊

      $('.pagination-list').hide(); // 隱藏頁碼
      // $('.tab-content').html('') // 清空資料
    });
  };

  changeTablist();

  if (getEl('.slots-games')) {
    // slots-game 分頁
    var paginationList = getEl('.pagination-list');
    var slotsCardList = getEl('.slots-games');
    var slotsNoGames = getEl('.no-data');

    var fakeData = function fakeData() {
      // 假資料陣列
      var result = [];

      for (var _i4 = 0; _i4 < 30; _i4++) {
        result.push({
          name: "ShangHai 00".concat(_i4),
          img: 'images/slots/test.png'
        });
      }

      return result;
    };

    var dataLength = fakeData().length; // 總資料數

    var currentPage = 1; // 目前的頁碼

    var pageSize = 24; // 每頁資料數

    var totalPage = Math.ceil(dataLength / pageSize); // 總頁數

    var lastPageSize = dataLength % pageSize; // 最後一頁的資料數

    var pageString; // 頁碼字串

    var dataString; // 資料字串

    var renderPagination = function renderPagination(page) {
      // 印出頁碼
      var startPageNumber;
      var endPageNumber;
      pageString = '';

      if (totalPage > 0 && totalPage <= 5) {
        // 總頁數小於等於五頁，印出全部的頁碼
        startPageNumber = 1;
        endPageNumber = totalPage;

        for (var _i5 = startPageNumber; _i5 <= endPageNumber; _i5++) {
          if (_i5 === page) {
            pageString += "<li><a class=\"page-item active\" href=\"#\" data-page=\"".concat(_i5, "\">").concat(_i5, "</a></li>");
          } else {
            pageString += "<li><a class=\"page-item\" href=\"#\" data-page=\"".concat(_i5, "\">").concat(_i5, "</a></li>");
          }
        }
      } else if (totalPage > 5) {
        // 總頁數大於五頁，只印出五個頁碼
        if (page >= 1 && page <= 3) {
          // 目前點擊的頁碼是 1-3 頁
          startPageNumber = 1;
          endPageNumber = 5;

          for (var _i6 = startPageNumber; _i6 <= endPageNumber; _i6++) {
            if (_i6 === page) {
              pageString += "<li><a class=\"page-item active\" href=\"#\" data-page=\"".concat(_i6, "\">").concat(_i6, "</a></li>");
            } else {
              pageString += "<li><a class=\"page-item\" href=\"#\" data-page=\"".concat(_i6, "\">").concat(_i6, "</a></li>");
            }
          }
        } else if (page >= totalPage - 2 && page <= totalPage) {
          // 目前點擊的頁碼是倒數 3 頁
          startPageNumber = totalPage - 4;
          endPageNumber = totalPage;

          for (var _i7 = startPageNumber; _i7 <= endPageNumber; _i7++) {
            if (_i7 === page) {
              pageString += "<li><a class=\"page-item active\" href=\"#\" data-page=\"".concat(_i7, "\">").concat(_i7, "</a></li>");
            } else {
              pageString += "<li><a class=\"page-item\" href=\"#\" data-page=\"".concat(_i7, "\">").concat(_i7, "</a></li>");
            }
          }
        } else {
          startPageNumber = page - 2;
          endPageNumber = page + 2;

          for (var _i8 = startPageNumber; _i8 <= endPageNumber; _i8++) {
            if (_i8 === page) {
              pageString += "<li><a class=\"page-item active\" href=\"#\" data-page=\"".concat(_i8, "\">").concat(_i8, "</a></li>");
            } else {
              pageString += "<li><a class=\"page-item\" href=\"#\" data-page=\"".concat(_i8, "\">").concat(_i8, "</a></li>");
            }
          }
        }
      }

      if (totalPage > 0) {
        paginationList.innerHTML = "\n        <li><a class=\"page-first\" href=\"#\" data-page=\"1\">First</a></li>\n        <li><a class=\"page-prev\" href=\"#\" data-page=\"prev\">Previous</a></li>\n        ".concat(pageString, "\n        <li><a class=\"page-next\" href=\"#\" data-page=\"next\">Next</a></li>\n        <li><a class=\"page-last\" href=\"#\" data-page=\"").concat(totalPage, "\">Last</a></li>");
        getEl('.pagination-list').style.display = 'flex';

        if (page === 1 && page !== totalPage) {
          getEl('.page-first').classList.add('disabled');
          getEl('.page-prev').classList.add('disabled');
        } else if (page !== 1 && page === totalPage) {
          getEl('.page-next').classList.add('disabled');
          getEl('.page-last').classList.add('disabled');
        } else if (page === 1 && page === totalPage) {
          getEl('.page-first').classList.add('disabled');
          getEl('.page-prev').classList.add('disabled');
          getEl('.page-next').classList.add('disabled');
          getEl('.page-last').classList.add('disabled');
        }
      } else if (totalPage <= 0) {
        getEl('.pagination-list').style.display = 'none';
      }
    };

    var renderData = function renderData() {
      var startIndex;
      var endIndex;
      dataString = '';

      if (dataLength < 1) {
        // 空資料狀態
        slotsNoGames.style.display = 'block';
        slotsCardList.style.display = 'none';
      } else if (dataLength >= 1) {
        slotsNoGames.style.display = 'none';
        slotsCardList.style.display = '';
        startIndex = (currentPage - 1) * pageSize;

        if (currentPage === totalPage && lastPageSize !== 0) {
          endIndex = startIndex + lastPageSize;
        } else {
          endIndex = currentPage * pageSize;
        }

        for (var _i9 = startIndex; _i9 < endIndex; _i9++) {
          dataString += "\n          <li>\n            <a class=\"slots-container\" href=\"#\">\n              <div class=\"slots-img\">\n                <img src=\"".concat(fakeData()[_i9].img, "\" alt=\"").concat(fakeData()[_i9].name, "\"/></div>\n              <div class=\"slots-txt\">\n                <h3>").concat(fakeData()[_i9].name, "</h3>\n              </div>\n            </a>\n            <button class=\"play-btn\">\n              <span>Play</span>\n              <img src=\"images/common/icon_play.svg\" alt=\"Play\"/>\n            </button>\n          </li>");
        }
      }

      slotsCardList.innerHTML = dataString; // 將資料寫入 .slots-card-list
    };

    var getPage = function getPage(e) {
      // 目前點擊到的頁碼
      e.preventDefault();
      var page;

      if (e.target.nodeName === 'A') {
        page = e.target.dataset.page; // 點擊到的頁碼

        if (page === 'prev' || page === 'next') {
          if (page === 'prev' && currentPage !== 1) {
            currentPage = currentPage - 1;
          } else if (page === 'next' && currentPage !== totalPage) {
            currentPage = currentPage + 1;
          }
        } else {
          currentPage = Number(page);
        }

        renderPagination(currentPage);
        renderData();
      }
    };

    renderPagination(currentPage); // 進到頁面渲染頁碼和資料

    renderData();
    paginationList.addEventListener('click', getPage, false);
  }

  if (getEl('#historyType')) {
    // History 表格
    var historyType = getEl('#historyType');
    var tableHead = getEl('.history-table-head');
    var tableBody = getEl('.history-table-body'); // 預設載入 statement

    tableHead.innerHTML = "\n    <tr>\n      <th width=\"180\">Type</th>\n      <th width=\"200\">Turnover</th>\n      <th width=\"150\">Win/Loss</th>\n      <th class=\"text-right\" width=\"150\">Active Bet</th>\n    </tr>";
    tableBody.innerHTML = "\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>\n    <tr>\n      <td>Total</td>\n      <td>0.00</td>\n      <td>0.00</td>\n      <td class=\"text-right\">0.00</td>\n    </tr>";
    historyType.addEventListener('change', function () {
      var currentSelected = historyType.value;

      if (currentSelected === 'Statement') {
        tableHead.innerHTML = "\n        <tr>\n          <th width=\"180\">Type</th>\n          <th width=\"200\">Turnover</th>\n          <th width=\"150\">Win/Loss</th>\n          <th class=\"text-right\" width=\"150\">Active Bet</th>\n        </tr>";
        tableBody.innerHTML = "\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>\n        <tr>\n          <td>Total</td>\n          <td>0.00</td>\n          <td>0.00</td>\n          <td class=\"text-right\">0.00</td>\n        </tr>";
      } else if (currentSelected === 'Transfer') {
        tableHead.innerHTML = "\n        <tr>\n          <th>Date</th>\n          <th>pages.from</th>\n          <th>pages.to</th>\n          <th class=\"text-right\">Amount</th>\n          <th>Status</th>\n        </tr>";
        tableBody.innerHTML = "\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Spadegaming</td>\n          <td>Evolution Gaming</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Mian Wallet</td>\n          <td>Playtech</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Evolution Gaming</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Playtech</td>\n          <td>Evolution Gaming</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Evolution Gaming</td>\n          <td>Mian Wallet</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Evolution Gaming</td>\n          <td>Playtech</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Mian Wallet</td>\n          <td>Evolution Gaming</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Evolution Gaming</td>\n          <td>Playtech</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Evolution Gaming</td>\n          <td>Mian Wallet</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>Mian Wallet</td>\n          <td>Playtech</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n        </tr>";
      } else if (currentSelected === 'Transaction') {
        tableHead.innerHTML = "\n        <tr>\n          <th>Date</th>\n          <th>ID</th>\n          <th>Type</th>\n          <th class=\"text-right\">Amount</th>\n          <th>Status</th>\n          <th>Remark</th>\n        </tr>";
        tableBody.innerHTML = "\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>\n        <tr>\n          <td>2019/02/25 15:35:56</td>\n          <td>024735</td>\n          <td>Withdrawal</td>\n          <td class=\"text-right\">30.00</td>\n          <td>Success</td>\n          <td>Testing</td>\n        </tr>";
      }
    }, false);
  }
})();