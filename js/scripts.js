jQuery('.accordion__head').click(function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.accordion__icon').toggleClass( 'is-open' );
  });

  jQuery('.header-humberger').on('click', function (e) {
    e.preventDefault();
  
    jQuery('.sp__menu').toggleClass('is-active');
    jQuery('.header-humberger').toggleClass('is-active');
    jQuery('.humbarger__contents').toggleClass('is-active');
    jQuery('.humberger__background').toggleClass('is-active');
  
    e.preventDefault();
  
    return false;
  });