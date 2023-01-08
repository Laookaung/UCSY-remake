// tysm `${viewer.name}` , you're awesome!!!

const header = document.querySelector('.header')

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex -= n)
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.slide');
  let notDots = document.querySelectorAll('.notdot');
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < notDots.length; i++) {
    notDots[i].className = notDots[i].className.replace('notdot-active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  notDots[slideIndex - 1].className += ' notdot-active';
}

const mediaQuery = window.matchMedia("(min-width: 1100px)")

window.addEventListener('scroll', () => {
  if (window.scrollY >= 10 && !mediaQuery.matches) {
    header.classList.add('header-scrolled'), document.querySelector('h1').classList.add('h1-scrolled'), document.querySelector('.cen').classList.add('cen-scrolled'), document.querySelector('.logo').classList.add('logo-scrolled'), document.querySelector('.logo-two').classList.add('logo-two-scrolled'), navBar.classList.add('top-scrolled');
  } else {
    header.classList.remove('header-scrolled'), document.querySelector('h1').classList.remove('h1-scrolled'), document.querySelector('.cen').classList.remove('cen-scrolled'), document.querySelector('.logo').classList.remove('logo-scrolled'), document.querySelector('.logo-two').classList.remove('logo-two-scrolled'), navBar.classList.remove('top-scrolled');
  }
})

const mainDropDowns = document.querySelectorAll('.hover')

const hamburger = document.querySelector('.hamburger');

const navBar = document.querySelector('.top')

const arrows = document.querySelectorAll('button.arrow')

const main = document.querySelectorAll('.main-drop-down')

const dropDowns = document.querySelectorAll('.drop-down')

const hovers = document.querySelectorAll('.hover')

const blur = document.querySelector('div.blur')

hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('b-active');
})

const forBtnOne = () => {
  dropDowns[0].classList.toggle('d-active');
}

const forBtnTwo = () => {
  dropDowns[1].classList.toggle('d-active');
}

const forBtnThree = () => {
  dropDowns[2].classList.toggle('d-active');
}

const forBtnFour = () => {
  dropDowns[3].classList.toggle('d-active');
}

const forBtnFive = () => {
  dropDowns[4].classList.toggle('d-active');
}

const forBtnSix = () => {
  dropDowns[5].classList.toggle('d-active');
}

const forBtnSeven = () => {
  dropDowns[6].classList.toggle('d-active');
}

if (!mediaQuery.matches) {

  arrows[0] && mainDropDowns[0].addEventListener('click', () => {
    arrows[0].classList.toggle('a-active'), forBtnOne()
  });

  arrows[1] && mainDropDowns[1].addEventListener('click', () => {
    arrows[1].classList.toggle('a-active'), forBtnTwo()
  });

  arrows[2] && mainDropDowns[3].addEventListener('click', () => {
    arrows[2].classList.toggle('a-active'), forBtnThree()
  });

  arrows[3] && mainDropDowns[4].addEventListener('click', () => {
    arrows[3].classList.toggle('a-active'), forBtnFour()
  });

  arrows[4] && mainDropDowns[5].addEventListener('click', () => {
    arrows[4].classList.toggle('a-active'), forBtnFive()
  });

  arrows[5] && mainDropDowns[6].addEventListener('click', () => {
    arrows[5].classList.toggle('a-active'), forBtnSix()
  });

  arrows[6] && mainDropDowns[8].addEventListener('click', () => {
    arrows[6].classList.toggle('a-active'), forBtnSeven()
  })
};

const style = document.querySelector('style')

if (mediaQuery.matches) {

  hovers[0].addEventListener('click', () => {
    dropDowns[0].classList.toggle('d-active'), style.textContent = '.three-dots-one::after , .three-dots-one::before {}';
  });

  hovers[1].addEventListener('click', () => {
    dropDowns[1].classList.toggle('d-active'), style.textContent = '.three-dots-two::after , .three-dots-two::before {}';
  });

  hovers[3].addEventListener('click', () => {
    dropDowns[2].classList.toggle('d-active'), style.textContent = '.three-dots-three::after , .three-dots-three::before {}';
  });

  hovers[4].addEventListener('click', () => {
    dropDowns[3].classList.toggle('d-active'), style.textContent = '.three-dots-four::after , .three-dots-four::before {}';
  });

  hovers[5].addEventListener('click', () => {
    dropDowns[4].classList.toggle('d-active'), style.textContent = '.three-dots-five::after , .three-dots-five::before {}';
  });

  hovers[6].addEventListener('click', () => {
    dropDowns[5].classList.toggle('d-active'), style.textContent = '.three-dots-six::after , .three-dots-six::before {}';
  });

  hovers[8].addEventListener('click', () => {
    dropDowns[6].classList.toggle('d-active'), style.textContent = '.three-dots-seven::after , .three-dots-seven::before {}';
  });

  hovers[0].addEventListener('mouseover', () => {
    dropDowns[0].classList.add('d-active'), style.textContent = '.three-dots-one::after , .three-dots-one::before {transform: translateY(0); height: 7px; width: 7px;}', dropDowns[5].classList.remove('d-active'), dropDowns[1].classList.remove('d-active'), dropDowns[2].classList.remove('d-active'), dropDowns[3].classList.remove('d-active'), dropDowns[4].classList.remove('d-active'), dropDowns[6].classList.remove('d-active');
  });

  hovers[1].addEventListener('mouseover', () => {
    dropDowns[1].classList.add('d-active'), style.textContent = '.three-dots-two::after , .three-dots-two::before {transform: translateY(0); height: 7px; width: 7px;}', dropDowns[0].classList.remove('d-active'), dropDowns[5].classList.remove('d-active'), dropDowns[2].classList.remove('d-active'), dropDowns[3].classList.remove('d-active'), dropDowns[4].classList.remove('d-active'), dropDowns[6].classList.remove('d-active');
  });

  hovers[3].addEventListener('mouseover', () => {
    dropDowns[2].classList.add('d-active'), style.textContent = '.three-dots-three::after , .three-dots-three::before {transform: translateY(0); height: 7px; width: 7px;}', dropDowns[0].classList.remove('d-active'), dropDowns[1].classList.remove('d-active'), dropDowns[5].classList.remove('d-active'), dropDowns[3].classList.remove('d-active'), dropDowns[4].classList.remove('d-active'), dropDowns[6].classList.remove('d-active');
  });

  hovers[4].addEventListener('mouseover', () => {
    dropDowns[3].classList.add('d-active'), style.textContent = '.three-dots-four::after , .three-dots-four::before {transform: translateY(0); height: 7px; width: 7px;}', dropDowns[0].classList.remove('d-active'), dropDowns[1].classList.remove('d-active'), dropDowns[2].classList.remove('d-active'), dropDowns[5].classList.remove('d-active'), dropDowns[4].classList.remove('d-active'), dropDowns[6].classList.remove('d-active');
  });

  hovers[5].addEventListener('mouseover', () => {
    dropDowns[4].classList.add('d-active'), style.textContent = '.three-dots-five::after , .three-dots-five::before {transform: translateY(0); height: 7px; width: 7px;}', dropDowns[0].classList.remove('d-active'), dropDowns[1].classList.remove('d-active'), dropDowns[2].classList.remove('d-active'), dropDowns[3].classList.remove('d-active'), dropDowns[5].classList.remove('d-active'), dropDowns[6].classList.remove('d-active');
  });

  hovers[6].addEventListener('mouseover', () => {
    dropDowns[5].classList.add('d-active'), style.textContent = '.three-dots-six::after , .three-dots-six::before {transform: translateY(0); height: 7px; width: 7px;}', dropDowns[0].classList.remove('d-active'), dropDowns[1].classList.remove('d-active'), dropDowns[2].classList.remove('d-active'), dropDowns[3].classList.remove('d-active'), dropDowns[4].classList.remove('d-active'), dropDowns[6].classList.remove('d-active');
  });
  hovers[8].addEventListener('mouseover', () => {
    dropDowns[6].classList.add('d-active'), style.textContent = '.three-dots-seven::after , .three-dots-seven::before {transform: translateY(0); height: 7px; width: 7px;}', dropDowns[0].classList.remove('d-active'), dropDowns[1].classList.remove('d-active'), dropDowns[2].classList.remove('d-active'), dropDowns[3].classList.remove('d-active'), dropDowns[4].classList.remove('d-active'), dropDowns[5].classList.remove('d-active');
  });

  dropDowns[0].addEventListener('mouseleave', () => {
    dropDowns[0].classList.remove('d-active'), style.textContent = '.three-dots-one::after , .three-dots-one::before {}';
  });

  dropDowns[1].addEventListener('mouseleave', () => {
    dropDowns[1].classList.remove('d-active'), style.textContent = '.three-dots-two::after , .three-dots-two::before {}';
  });

  dropDowns[2].addEventListener('mouseleave', () => {
    dropDowns[2].classList.remove('d-active'), style.textContent = '.three-dots-three::after , .three-dots-three::before {}';
  });

  dropDowns[3].addEventListener('mouseleave', () => {
    dropDowns[3].classList.remove('d-active'), style.textContent = '.three-dots-four::after , .three-dots-four::before {}';
  });

  dropDowns[4].addEventListener('mouseleave', () => {
    dropDowns[4].classList.remove('d-active'), style.textContent = '.three-dots-five::after , .three-dots-five::before {}';
  });

  dropDowns[5].addEventListener('mouseleave', () => {
    dropDowns[5].classList.remove('d-active'), style.textContent = '.three-dots-six::after , .three-dots-six::before {}';
  });

  dropDowns[6].addEventListener('mouseleave', () => {
    dropDowns[6].classList.remove('d-active'), style.textContent = '.three-dots-seven::after , .three-dots-seven::before {}';
  })
};

const cards = document.querySelectorAll('.card')

const des = document.querySelectorAll('span.des-head')

const dates = document.querySelectorAll('span.date')

const secOne = [document.querySelector('.found'), document.querySelector('.year'), document.querySelector('.contact'), document.querySelector('h2'), document.querySelector('.latest'), document.querySelector('.con-head'), document.querySelector('.uni-head'), document.querySelector('.uni-head-two'), document.querySelector('.one'), document.querySelector('.two'), document.querySelector('.thone')]

const contests = document.querySelectorAll('.contests')

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  {
    threshold: .4,
  }
)

secOne.forEach(sec => {
  observer.observe(sec)
})

cards.forEach(card => {
  observer.observe(card)
})

des.forEach(des => {
  observer.observe(des)
})

dates.forEach(date => {
  observer.observe(date)
})

contests.forEach(contest => {
  observer.observe(contest)
})

secOne.forEach(sec => {
  observer.observe(sec)
})

document.querySelector("#year").textContent = new Date().getFullYear();