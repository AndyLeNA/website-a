if (matchMedia) {
    const mq = window.matchMedia("(min-width: 600px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

function WidthChange(mq) {
    if (mq.matches) {
      navBar.style.display = 'flex';// window width is at least 600px
      navBar.classList.remove('fade-in-left');
    } else {
      navBar.style.display = 'none';// window width is less than 600px
    }
  }

 