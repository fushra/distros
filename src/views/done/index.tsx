import { ViewFc } from '..'
import { Button } from '../../components'

export const Done: ViewFc = ({ prevData, onPrev }) => (
  <div>
    <h1>Done</h1>
    <p>{JSON.stringify(prevData)}</p>
    <Button onClick={onPrev} text="Back" type="text"></Button>
  </div>
)
