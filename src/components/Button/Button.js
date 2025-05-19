import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({type='button', ...props }) => {
  return (<button type={type} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;