import styles from './LoadPage.module.css'

function LoadPage() {
  return (
    <div className={styles.Bg}>
      <div className={styles.Title}>
        <text>{'Tabby\nTemps'}</text>
      </div>
      <button className={styles.StartBtn}>View Weather</button>
    </div>
  )
}

export default LoadPage