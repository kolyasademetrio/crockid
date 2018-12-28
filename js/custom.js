$(document).ready(function(){

	/* ------------------------>>> Прижать футер к низу <<<------------------------------------------------- */
    (function(){
        $(window).load(function(){
            footer();
        });

        $(window).resize(function() {
            footer();
        });

        function footer() {
            var docHeight = $(window).height(),
                footerHeight = $('footer.footer').outerHeight(),
                footerBottom = $('footer.footer').position().top + footerHeight;

            if (footerBottom < docHeight) {
                $('footer.footer').css('margin-top', (docHeight - footerBottom) + 'px');
            }
        }
    })();
	/* ------------------------>>> Прижать футер к низу End <<<--------------------------------------------- */



	/* ------------------------>>> Открыть / закрыть больше новостей <<<------------------------------------ */
	(function(){
		$(document).on('click', '.news__moreBtn', function(){
			var textShow = $(this).attr('data-text-show'),
				textHide = $(this).attr('data-text-hide'),
				$that = $(this);

			if ( $that.hasClass('active') ) {
                $that.removeClass('active');
                $that.text( textShow );
                $('.news__listWrapHidden').css({
					'height': '',
				});
			} else {
                $that.addClass('active');
                $that.text( textHide );
                $('.news__listWrapHidden').css({
                    'height': $('.news__listWrapHidden .news__list').outerHeight(),
                });
			}
		});
	})();
	/* ------------------------>>> Открыть / закрыть больше новостей End <<<-------------------------------- */


	/* ------------------------>>> sidebar responsive <<<------------------------------------------------- */
	function setSidebarResponsive(){
		if ( $('.sidebar').length ) {
			if ( $(window).width() > 780 ) {
				$('.sidebar').removeClass('hidden responsive');
			} else if ( $(window).width() <= 780 ) {
				$('.sidebar').addClass('hidden responsive');
			}
		}
	}

	$(window).on('load', function(){
		setSidebarResponsive();
	});

	$(window).resize( function(){
		setSidebarResponsive();
	});

	$(document).on('click', '.category__showFilters', function(){
		$('.sidebar').removeClass('hidden');
	});

	$(document).on('click', '.sidebar__close', function(){
		$('.sidebar').addClass('hidden');
	});
	/* ------------------------>>> sidebar responsive End <<<------------------------------------------------- */



	/*--------------------------------- функция для вкладок -----------------------------*/

	function getTabs(tabsClass, sectionsClass, classActive){
		var $tabs = $('.' + tabsClass),
			$sections = $('.' + sectionsClass);

		$sections.not(':first').addClass('hide');

		$tabs.click(function(){
			$tabs.removeClass(classActive).eq($(this).index()).addClass(classActive);
			$sections.addClass('hide').eq($(this).index()).removeClass('hide');
		}).first().addClass(classActive);
	}

	/* вызов функции вкладок */

	if ( $(window).width() > 0 ) {

		getTabs('tabsTop__listItem', 'tabsBottom__listItem', 'active');

	}
	/*--------------------------------- функция для вкладок End -------------------------*/




	/* ------------------------>>> click on .goodSingle__footerExpandableMoreBtn <<<-------------------------- */
    $(document).on('click', '.goodSingle__footerExpandableMoreBtn', function(){
        var textShow = $(this).attr('data-text-show'),
            textHide = $(this).attr('data-text-hide'),
            $that = $(this),
			$wrapper = $('.goodSingle__footerExpandableWrap'),
			$inner = $('.goodSingle__footerExpandableContent');

        if ( $wrapper.hasClass('active') ) {
            $wrapper.removeClass('active');
            $that.text( textShow );
            $inner.css({
                'height': '',
            });
        } else {
            $wrapper.addClass('active');
            $that.text( textHide );
            $inner.css({
                'height': $('.goodSingle__footerExpandableList').outerHeight(),
            });
        }
    });
	/* ------------------------>>> click on .goodSingle__footerExpandableMoreBtn End <<<---------------------- */









	/*--------------------------------- функция для якоря -------------------------*/

		function ancor (ancor, goal) {

			$(ancor).on('click', function(e){
			  $('html,body').stop().animate({ scrollTop: $(goal).offset().top }, 2000);
			  e.preventDefault();
			});

		}

		// ancor($('#choice'), $('.choice'));
		// ancor($('#feedback'), $('.feedback'));
		// ancor($('#toPartners'), $('.toPartners'));
		// ancor($('#ourContacts'), $('.ourContacts'));
	
	/*--------------------------------- функция для якоря Конец -------------------------*/



});