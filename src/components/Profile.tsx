import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(challengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ViniciusPaulinoSilva.png" alt="Vinicius Paulino" />
            <div>
                <strong>Vinicius Paulino</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>

        </div>
    );

}