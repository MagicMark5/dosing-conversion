const trapFocus = function(element, focusableSelectors, escCallback) {
  // focusableSelectors is a string of comma separated query selectors for elements you want to be focusable
  // e.g. 'a#sustenna_pm, a#trinza_pm, button#modal_continue'
  var focusableEls = element.querySelectorAll(focusableSelectors);
  var firstFocusableEl = focusableEls[0];  
  var lastFocusableEl = focusableEls[focusableEls.length - 1];
  var KEYCODE_TAB = 9;
  var KEYCODE_ESC = 27;

  element.addEventListener('keydown', function(e) {
    var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
    var isEscPressed = (e.key === 'Escape' || e.keyCode === KEYCODE_ESC);

    // if ESC key is pressed we invoke the callback argument
    if (isEscPressed) {
      // Close modal and escape focus trap
      escCallback();
    };

    if (!isTabPressed) { 
      return;
    }

    if ( e.shiftKey ) {
      // shift + tab
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
      // tab
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
          e.preventDefault();
        }
      }
  });
};

export { trapFocus };