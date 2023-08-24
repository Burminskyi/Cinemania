
export const changeTheme = () => {
  if (localStorage.getItem('theme') === 'light') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'light');
  }
  addDarkClassToHTML();
};

function addDarkClassToHTML() {
  if (localStorage.getItem('theme') === 'light') {
    document.querySelector('body').style.background = 'var(--white)';
      document.querySelector('body').style.color = 'var(--black)';
  } else {
    document.querySelector('body').classList.remove('light');
    document.querySelector('body').style.background = 'var(--black)';
    document.querySelector('body').style.color = 'var(--white)';
  }
}
addDarkClassToHTML();
