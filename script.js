console.log('test')
const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu)
const navi = document.getElementById("navi");

const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
  });

  hamburgerMenuSections.forEach((hamburgerMenuSection) => {
    hamburgerMenuSection.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    navi.classList.remove("active");
  });
  });

  
console.log(hamburgerMenuSections)

  document.addEventListener("DOMContentLoaded", function() {
    // ページ内のリンクをすべて取得
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        // デフォルトのリンク動作を無効にする
        event.preventDefault();
  
        // リンク先のhref属性を取得
        let href = this.getAttribute("href");
  
        // ジャンプ先の要素を取得
        let target = document.querySelector(href === "#" || href === "" ? "html" : href);
  
        if (target) {
          // ジャンプ先の要素の位置を取得
          let position = target.getBoundingClientRect().top + window.scrollY;
  
          // スムーススクロールを実行
          window.scrollTo({
            top: position,
            behavior: "smooth" // スムーススクロールを指定
          });
				navi.classList.remove("active");
				hamburgerMenu.classList.remove("active");
      }
		});
	});

    // IntersectionObserverのオプション
    const options = {
      root: null, // ビューポートを基準
      rootMargin: '0px',
      threshold: 0.1 // 要素が10%表示された時にコールバックを実行
    };

    // 共通の処理を行う関数
    function handleInView(entries, observer, className) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 要素が表示された場合
          entry.target.classList.add(className);
        }
      });
    }

    // 左スライドの要素（1つ）
    const leftSlideElement = document.querySelector('.inview-slide-left');
    if (leftSlideElement) {
      const leftObserver = new IntersectionObserver((entries) => {
        handleInView(entries, leftObserver, 'slide-left');
      }, options);
      leftObserver.observe(leftSlideElement);
    }

    // 右スライドの要素（1つ）
    const rightSlideElement = document.querySelector('.inview-slide-right');
    if (rightSlideElement) {
      const rightObserver = new IntersectionObserver((entries) => {
        handleInView(entries, rightObserver, 'slide-right');
      }, options);
      rightObserver.observe(rightSlideElement);
    }

    // ふきだしの要素（複数の可能性）
    const balloonElements = document.querySelectorAll('.inview-balloon');
    if (balloonElements.length > 0) {
      const balloonObserver = new IntersectionObserver((entries) => {
        handleInView(entries, balloonObserver, 'balloon');
      }, options);
      balloonElements.forEach(el => balloonObserver.observe(el));
    }
  });
  


  





