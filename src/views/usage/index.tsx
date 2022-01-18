import { useState } from 'react'
import { requiresSpecific, ViewFc } from '..'
import { Button, ButtonGrid, Card, CardGrid } from '../../components'
import { desktopUser } from '../generalCategory'

export enum UsageType {
  WebBrowsing = 'Web browsing',
  Email = 'Email',
  DocumentEditing = 'Document editing',

  PhotoEditing = 'Photo editing',
  VideoEditing = 'Video editing',
  AudioEditing = 'Audio editing',
  Programing = 'Programing',

  SinglePlayerGaming = 'Single player gaming',
  MultiplayerGaming = 'Multiplayer gaming',
}

export const Usage: ViewFc = ({ prevData, onPrev, onNext, fromPrev }) => {
  requiresSpecific(prevData, fromPrev, onPrev, onNext, desktopUser)

  const [usage, setUsages] = useState<UsageType[]>(
    prevData.preferredAppCatagories || []
  )

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
          interactive
        />
        <Card
          title="Email"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.Email)}
          state={usage.includes(UsageType.Email) ? 'focused' : 'none'}
          interactive
        />
        <Card
          title="Document editing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.DocumentEditing)}
          state={usage.includes(UsageType.DocumentEditing) ? 'focused' : 'none'}
          interactive
        />
      </CardGrid>

      <h2>Creativity</h2>
      <CardGrid>
        <Card
          title="Photo editing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.PhotoEditing)}
          state={usage.includes(UsageType.PhotoEditing) ? 'focused' : 'none'}
          interactive
        />
        <Card
          title="Video editing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.VideoEditing)}
          state={usage.includes(UsageType.VideoEditing) ? 'focused' : 'none'}
          interactive
        />
        <Card
          title="Audio editing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.AudioEditing)}
          state={usage.includes(UsageType.AudioEditing) ? 'focused' : 'none'}
          interactive
        />
        <Card
          title="Programing"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.Programing)}
          state={usage.includes(UsageType.Programing) ? 'focused' : 'none'}
          interactive
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
          interactive
        />
        <Card
          title="Multiplayer gaming"
          type="filled"
          onClick={() => changeCurrentUsage(UsageType.MultiplayerGaming)}
          state={
            usage.includes(UsageType.MultiplayerGaming) ? 'focused' : 'none'
          }
          interactive
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
              preferredAppCatagories: usage,
            })
          }}
        />
      </ButtonGrid>
    </div>
  )
}
