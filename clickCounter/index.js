class Panel {
    constructor(count) {
      this.count = count;
    }
  
    findElForText(el) {
      return document.querySelector(`.${el.className}-counter`);
    }
  
    init(el) {
      this.count = 0;
      const element = this.findElForText(el);
      element.textContent = this.count;
    }
  
    counters(el) {
      const element = this.findElForText(el);
      el.addEventListener('click', () => {
        this.count += 1;
        element.textContent = this.count;
      });
    }
  };
  
  function main () {
    var panelsElements = document.querySelector('.wrapper');
    [].slice.apply(panelsElements.children).forEach(function (panelElement) {
      var panel = new Panel();
      panel.init(panelElement);
      panel.counters(panelElement);
    });
  }
  
  window.onload = main;