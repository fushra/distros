import { ViewFc } from '..'
import { Button } from '../../components'

export const Welcome: ViewFc = ({ prevData, onNext }) => (
  <div>
    <h1>Welcome to the fushra distro picker!</h1>
    <p>
      The goal of this project is to provide simple recommendations for what
      linux distro a new user should install to get an ideal user experience.
    </p>
    <Button
      text="Get started"
      type="filled-primary"
      onClick={() => onNext(prevData)}
    />
  </div>
)
