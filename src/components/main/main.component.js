// Import Template
import MainTemplate from './main.html';

// Set up controller
class MainController {
  constructor($rootScope, $element) {
    this.$element = $element;
    this.$rootScope = $rootScope;
  }

  $onInit() {
    this.scrollingPosition = 1553;
    this.backgroundStyle = {};
    this.colorStyle = {};

    // add listener for mobile scrolling
    document.addEventListener('touchmove', (event) => {
      if (!this.lastTouchPosition || Math.abs(event.changedTouches[0].pageY - this.lastTouchPosition) > 100) {
        this.lastTouchPosition = event.changedTouches[0].pageY;
      }
      this.scrollingPosition += (event.changedTouches[0].pageY - this.lastTouchPosition) * 3;
      this.lastTouchPosition = event.changedTouches[0].pageY;
      this.setColors();
      this.$rootScope.$apply();
      }, true);

    this.socialArray = [
      {
        icon: 'fa-twitter',
        link: 'https://twitter.com/Idan_Co'
      }, {
        icon: 'fa-facebook',
        link: 'https://www.facebook.com/idancohen.ics'
      }, {
        icon: 'fa-linkedin',
        link: 'https://www.linkedin.com/in/idancohenil/'
      }, {
        icon: 'fa-github',
        link: 'https://github.com/IdanCo'
      }, {
        icon: 'fa-medium',
        link: 'https://medium.com/@Idan_Co'
      }, {
        icon: 'fa-youtube',
        link: 'https://www.youtube.com/channel/UCw54hwbqnnwmix0BAVPPQiw'
      }
    ];

    this.setColors();
  }

  scrolling(event, deltaY) {
    this.scrollingPosition += deltaY;
    this.setColors();
    event.preventDefault();
  }

  setColors() {
    const rgb = this.getRGB(this.scrollingPosition);
    const css = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
    this.backgroundStyle['background-color'] = css;
    this.colorStyle['color'] = css;
  }

  getRGB(scrollingPosition) {
    // inspired by https://krazydad.com/tutorials/makecolors.php
    let frequency = .005;
    const rgb = {
      red:    Math.round(Math.sin(frequency * scrollingPosition + 0) * 20) + 235,
      green:  Math.round(Math.sin(frequency * scrollingPosition + 2) * 40) + 215,
      blue:   Math.round(Math.sin(frequency * scrollingPosition + 4) * 40) + 40
    };
    return rgb;
  }
}

// annotate injections
MainController.$inject = ['$rootScope', '$element'];

// Define and export component
export default {
  template: MainTemplate,
  controller: MainController
};
