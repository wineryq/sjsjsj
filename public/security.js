// Security script to hide source code and prevent dev tools
(function() {
  'use strict';
  
  // Disable right click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });
  
  // Disable F12, Ctrl+Shift+I, Ctrl+U
  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J')) {
      e.preventDefault();
      return false;
    }
  });
  
  // Clear console
  if (typeof console !== 'undefined') {
    console.clear();
    console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers.', 'color: red; font-size: 16px;');
  }
  
  // Hide source code elements
  function hideSourceCode() {
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
      if (script.src && script.src.includes('_next/static/chunks/')) {
        script.style.display = 'none';
      }
      if (!script.src && script.innerHTML.includes('__next_f')) {
        script.style.display = 'none';
      }
    });
  }
  
  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideSourceCode);
  } else {
    hideSourceCode();
  }
  
  // Run periodically to catch dynamically added scripts
  setInterval(hideSourceCode, 1000);
  
})();
