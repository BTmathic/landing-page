import 'normalize.css/normalize.css';
import './styles/styles.scss';

window.onscroll = function(e) {
  if (window.scrollY > 0) {
    let header = document.getElementById('header')
    header.style.background = 'white';
  } else if (window.scrollY === 0) {
    document.getElementById('header').style.background = 'lightBlue';
  }
}

let landingImageHeight = document.getElementById('landing-image').offsetHeight;
let landingImageHeaderHeight = document.getElementById('slogan').offsetHeight;
let landingImageButtonHeight = document.getElementById('get-started-button').offsetHeight;
let landingImageDogContainer = document.getElementById('dog-container');

landingImageDogContainer.style.height = landingImageHeight - landingImageHeaderHeight - landingImageButtonHeight + 'px';
