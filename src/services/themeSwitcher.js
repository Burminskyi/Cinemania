export const setTheme = () => {
  if (localStorage.getItem('theme') === 'light') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  addThemeStyles();
};

export const addThemeStyles = () => {
  if (localStorage.getItem('theme') === 'light') {
    document.querySelector('body').style.background = 'var(--white)';
    document.querySelector('body').style.color = 'var(--black)';
  }
  if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('body').style.background = 'var(--black)';
    document.querySelector('body').style.color = 'var(--white)';
  }
};
