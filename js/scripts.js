$(document).ready(function() {
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});			

			window.addEventListener('load', function() {
				var header = document.getElementById("site-header");
				var noScrollClassname = header.className;
				scrollHeader();

				window.addEventListener('scroll', function() {
					scrollHeader();
				}, false);

				function scrollHeader() {
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					header.className = (scrollTop > 60) ? noScrollClassname + " onscroll" : noScrollClassname;
				}

				var menu = document.getElementById('menu-button');
				var menu_items = document.getElementById('menu-items');

				if (menu) {
					menu.addEventListener('click', function() {
						menu_items.style.display = (menu_items.style.display == "block") ? 'none' : 'block';
					}, false);
				}

				var burger = document.getElementById('burger');
				var mobile_nav = document.getElementById('mobile-nav');
				var hide_nav = document.getElementById('hide-nav');
				var nav_work_with_us = document.getElementById('nav-work-with-us');

				if (burger) {
					burger.addEventListener('click', function() {
						mobile_nav.style.display = 'block';
					}, false);
				}

				if (hide_nav) {
					hide_nav.addEventListener('click', function() {
						mobile_nav.style.display = 'none';
					}, false);
				}

				if (nav_work_with_us) {
					nav_work_with_us.addEventListener('click', function() {
						mobile_nav.style.display = 'none';
					}, false);
				}

				smoothScroll.init();
			}, false);

			if (document.getElementById('articleContent')) {
				var blogChildren = document.getElementById('articleContent').children;
				for (var i = 0; i < blogChildren.length; i++) {
					var child = blogChildren[i]
					if (child.children.length > 0) {
						for (var j = 0; j < child.children.length; j++) {
							if (child.children[j].nodeName == 'IMG') {
								child.outerHTML = child.innerHTML
							}
						}
					}
				}
			}

			if (document.getElementById('blog-index')) {
				function resetLinks(links) {
					for (var i = 0; i < links.length; i++) {
						links[i].className = links[i].className.replace(' active', '');
					}
				}

				var links = document.getElementsByClassName('filter-link');
				for (var i = 0; i < links.length; i++) {
					links[i].addEventListener('click', function(evt) {
						evt.preventDefault();
						if (evt.target.className.indexOf('active') != -1) {
							filterPosts('all');
							resetLinks(links);
						} else {
							filterPosts(evt.target.id.replace('tagger-', ''));
							resetLinks(links);
							evt.target.className += ' active';
						}
					}, false);
				}
			}

			function filterPosts(category) {
				var posts = document.getElementsByClassName('blog-index-post');
				for (var i = 0; i < posts.length; i++) {
					if (posts[i].className.indexOf('tag-' + category) != -1 || category == 'all') {
						posts[i].style.display = 'block';
					} else {
						posts[i].style.display = 'none';
					}
				}
				return false
			}
