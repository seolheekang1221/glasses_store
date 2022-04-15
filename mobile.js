let mobileToggle = false;

const handleClick = function () {
  const menuMobile = document.querySelector('.menu__mobile');
  mobileToggle = !mobileToggle;
  console.log(mobileToggle);
  menuMobile.style.display = mobileToggle ? 'flex' : 'none';
};

window.onload = function () {
  const mobile = document.querySelector('.nav__mobile');
  mobile.onclick = handleClick;
};
