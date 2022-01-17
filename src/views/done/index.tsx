import { ViewFc } from '..'
import { Button } from '../../components'
import { distros } from '../../data'
import { sortDistros } from './algorithm'

export const Done: ViewFc = ({ prevData, onPrev }) => {
  console.log(sortDistros(prevData))

  return (
    <div>
      <h1>Done</h1>
      <p>{JSON.stringify(prevData)}</p>
      <p>{JSON.stringify(distros)}</p>
      <Button onClick={onPrev} text="Back" type="text"></Button>
    </div>
  )
}
