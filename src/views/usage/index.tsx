import { useState } from 'react'
import { ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid } from '../../components'

export enum UsageType {
  WebBrowsing = 'web browsing',
  Email = 'email',
  DocumentEditing = 'document editing',

  PhotoEditing = 'photo editing',
  VideoEditing = 'video editing',
  AudioEditing = 'audio editing',
  Programing = 'programing',

  SinglePlayerGaming = 'single player gaming',
  MultiplayerGaming = 'multiplayer gaming',
}

export const Usage: ViewFc = ({ prevData, onPrev, onNext }) => {
  const [usage, setUsages] = useState<UsageType[]>(prevData.usage || [])

  function changeCurrentUsage(usageType: UsageType) {
    if (usage.includes(usageType)) {
      setUsages(() => usage.filter((u) => u !== usageType))
    } else {
      setUsages(() => [...usage, usageType])
    }
  }

  return (
    <div>
      <h1>Usage</h1>
      <p>What do you plan to use your computer for? You can select many</p>

      <h2>Common</h2>
      <CardGrid>
        <Card
          title="Web Browsing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.WebBrowsing)}
          state={usage.includes(UsageType.WebBrowsing) ? 'focused' : 'none'}
        />
        <Card
          title="Email"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.Email)}
          state={usage.includes(UsageType.Email) ? 'focused' : 'none'}
        />
        <Card
          title="Document editing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.DocumentEditing)}
          state={usage.includes(UsageType.DocumentEditing) ? 'focused' : 'none'}
        />
      </CardGrid>

      <h2>Creativity</h2>
      <CardGrid>
        <Card
          title="Photo editing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.PhotoEditing)}
          state={usage.includes(UsageType.PhotoEditing) ? 'focused' : 'none'}
        />
        <Card
          title="Video editing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.VideoEditing)}
          state={usage.includes(UsageType.VideoEditing) ? 'focused' : 'none'}
        />
        <Card
          title="Audio editing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.AudioEditing)}
          state={usage.includes(UsageType.AudioEditing) ? 'focused' : 'none'}
        />
        <Card
          title="Programing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.Programing)}
          state={usage.includes(UsageType.Programing) ? 'focused' : 'none'}
        />
      </CardGrid>

      <h2>Gaming</h2>
      <CardGrid>
        <Card
          title="Single player gaming"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.SinglePlayerGaming)}
          state={
            usage.includes(UsageType.SinglePlayerGaming) ? 'focused' : 'none'
          }
        />
        <Card
          title="Multiplayer gaming"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.MultiplayerGaming)}
          state={
            usage.includes(UsageType.MultiplayerGaming) ? 'focused' : 'none'
          }
        />
      </CardGrid>

      <ButtonGrid>
        <Button text={'Back'} type={'text'} onClick={() => onPrev()} />
        <Button
          text={'Next'}
          type={'filled-primary'}
          onClick={() => {
            onNext({
              ...prevData,
              usage,
            })
          }}
        />
      </ButtonGrid>
    </div>
  )
}
