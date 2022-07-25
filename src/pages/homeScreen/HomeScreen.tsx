import { Link } from 'react-router-dom'
import { Button } from '../../components'
import { useAppContext } from '../../context/context'
import styles from './Homescreen.module.css'

function HomeScreen() {
    const { setUserOption, setWordList } = useAppContext()

    return (

        <div className={styles.container}>
            <div>
                <h3 className={styles.welcomeText}>WELCOME TO THE TYPING GAME</h3>
                <div>You need a text paragraph that we'll score you against</div>
                <div>
                    <Link to='/test-screen'>
                        <Button
                            onClick={() => { setUserOption('USER'); setWordList('') }}
                            value='Use your own Paragraph'
                        />
                    </Link>
                    <Link to='/test-screen'>
                        <Button
                            onClick={() => setUserOption('WEBSITE')}
                            value='Use website random paragraph'
                        />
                    </Link>
                </div>
            </div>
        </div>
  
    )
}

export default HomeScreen