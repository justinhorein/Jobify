import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Synth direct trade umami blue bottle deep v quinoa vinyl. Hot chicken etsy post-ironic hell of gluten-free mlkshk taiyaki godard. Etsy hot chicken lo-fi neutra retro, intelligentsia yr selfies tousled gentrify fashion axe.
          </p>
          <Link to="/register" className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing