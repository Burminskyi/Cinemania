export const addThemeStyles = themeStyle => {
  if (themeStyle === 'light') {
    document.querySelector('body').style.background = 'var(--white)';
    document.querySelector('body').style.color = 'var(--black)';
  }
  if (themeStyle === 'dark') {
    document.querySelector('body').style.background = 'var(--black)';
    document.querySelector('body').style.color = 'var(--white)';
  }
};
