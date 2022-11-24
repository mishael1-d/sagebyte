import styles from '../../styles/Buttons.module.css'

function Buttons({variant, text}) {
  return (
    <>
    {variant === "big" ? <button className={styles.buttonBig}>{text}</button> : <button className={styles.button}>{text}</button>}
    </>
  )
}

export default Buttons