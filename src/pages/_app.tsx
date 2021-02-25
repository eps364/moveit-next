import '../styles/global.css'
import { ChallengesProvider} from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  <ChallengesProvider>
    return <Component {...pageProps} />
  </ChallengesProvider>
}

export default MyApp
