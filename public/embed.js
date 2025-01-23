(function() {
  function createContainer(id) {
    const container = document.createElement('div');
    container.id = id || 'f5-foster-calculator';
    return container;
  }

  function initializeCalculator(options = {}) {
    const targetId = options.containerId || 'f5-foster-calculator';
    let container = document.getElementById(targetId);
    
    if (!container) {
      container = createContainer(targetId);
      document.body.appendChild(container);
    }

    const iframe = document.createElement('iframe');
    iframe.src = `${options.host || window.location.origin}/embed`;
    iframe.style.width = '100%';
    iframe.style.height = '600px';
    iframe.style.border = '1px solid #eee';
    iframe.style.borderRadius = '8px';
    iframe.style.overflow = 'hidden';
    
    container.appendChild(iframe);
  }

  window.F5FosterCalculator = {
    init: initializeCalculator
  };
})();