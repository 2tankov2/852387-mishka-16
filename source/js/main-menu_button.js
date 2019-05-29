
          var links = document.querySelectorAll(".catalog-item__cart");
            var popup = document.querySelector(".modal-order");

            for (var i = 0; i < links.length; i++) {
              links[i].addEventListener("click", function (evt) {
                evt.preventDefault();
                popup.classList.add("modal-show");
              });
            }

            var link = document.querySelector(".product-week__order");

            var popup = document.querySelector(".modal-order");


            link.addEventListener("click", function (evt) {
              evt.preventDefault();
              popup.classList.add("modal-show");

          });


            var navMain = document.querySelector('.main-nav');
            var navToggle = document.querySelector('.main-nav__toggle');

            navMain.classList.remove('main-nav--nojs');

            navToggle.addEventListener('click', function() {
              if (navMain.classList.contains('main-nav--closed')) {
                navMain.classList.remove('main-nav--closed');
                navMain.classList.add('main-nav--opened');

                navToggle.classList.remove('main-nav__toggle--closed');
                navToggle.classList.add('main-nav__toggle--opened');
              } else {
                navMain.classList.add('main-nav--closed');
                navMain.classList.remove('main-nav--opened');


                navToggle.classList.add('main-nav__toggle--closed');
                navToggle.classList.remove('main-nav__toggle--opened');
              }
            });
