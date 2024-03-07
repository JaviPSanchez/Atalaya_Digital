import ButtonSvgWithGradient from '../assets/svg/ButtonSvgWithGradient';

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center
  justify-center h-11 transition-colors
  hover:text-white ${px || 'px-7'}
  ${white ? 'text-dark' : 'text-white'}
  ${className || ''}`;

  const spanClasses = 'relative z-10';

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvgWithGradient(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvgWithGradient(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
