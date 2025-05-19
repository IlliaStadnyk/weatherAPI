import styles from './TextInput.module.scss';

const TextInput = props => <input {...props} className={styles.input} type="text" />

export default TextInput;