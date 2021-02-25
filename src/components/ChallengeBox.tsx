import styles from '../styles/components/ChallengeBox.module.css'

export function ChallegeBox() {
    return (
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando os desafios
                </p>
            </div>
        </div>
    )
}