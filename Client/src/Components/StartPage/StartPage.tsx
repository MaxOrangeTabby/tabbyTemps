import styles from './StartPage.module.css'

function StartPage() {
  return (
    <div className={styles.Bg}>
      <div className={styles.Title}>
        <text>{'Tabby\nTemps'}</text>
      </div>
      <button className={styles.StartBtn}>View Weather</button>
    </div>
  )
}

export default StartPage