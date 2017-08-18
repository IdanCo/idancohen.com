// Import Template
import MainTemplate from './main.html';

// Set up controller
class MainController {
  constructor($element) {
    this.$element = $element;

  }

  $onInit() {
    this.scrollingPosition = 1156;
    this.rainbowBackground = {};
    this.rainbowColor = {};

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

  scrolling(deltaY) {
    this.scrollingPosition += deltaY;
    this.setColors();
    event.stopPropagation();
    event.preventDefault();
  }

  setColors() {
    const rgb = this.getRGB(this.scrollingPosition);
    const css = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
    this.rainbowBackground['background-color'] = css;
    this.rainbowColor['color'] = css;

  }

  getRGB(scrollingPosition) {
    let frequency = .001;
    const rgb = {
      red:    Math.round(Math.sin(frequency * scrollingPosition + 0) * 127) + 128,
      green:  Math.round(Math.sin(frequency * scrollingPosition + 1) * 127) + 64,
      blue:   Math.round(Math.sin(frequency * scrollingPosition + 4) * 127) + 0
    };
    return rgb;
  }
}

// annotate injections
MainController.$inject = ['$element'];

// Define and export component
export default {
  template: MainTemplate,
  controller: MainController
};
