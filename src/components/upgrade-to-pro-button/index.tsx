// MUI Imports

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

const UpgradeToProButton = () => {
  return (
    <div className={classnames(styles.wrapper, 'mui-fixed')}>
      <a className={styles.button} role='button'>
        🚀 Upgrade to Pro (Coming Soon)
        <span className={styles.buttonInner} />
      </a>
    </div>
  )
}

export default UpgradeToProButton
