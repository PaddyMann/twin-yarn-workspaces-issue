import tw from 'twin.macro'
import { Button, Logo } from './../components'
import { SuperButton } from 'shared-components'

const App = () => (
  <div
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      tw`bg-gradient-to-b from-electric to-ribbon`,
    ]}
  >
    <div tw="flex flex-col justify-center h-full space-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <SuperButton isSmall>Close</SuperButton>
    </div>
    <Logo />
  </div>
)

export default App
