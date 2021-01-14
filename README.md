# View the issue

```
cd next-app
yarn dev
```

You'll see `TypeError: Cannot read property 'button' of undefined`.

This is caused by:

```
import tw, { css, styled, theme } from 'twin.macro'

const SuperButton = styled.button(({ isPrimary, isSecondary, isSmall }) => [
```


# How this repo was created

This repo was created by:

1. Copy Ben's working example (which I've confirmed works fine without further changes):

```
npx degit https://github.com/ben-rogerson/twin.examples/next-styled-components next-app
```

2. Set up some shared components:
  - Make the shared-components directory and add a package.json
  - Create and export a component (copied from the workign exam)

3. Set up yarn workspaces:
  - Create `package.json` in the root dir
  - Tweak `next-app/package.json` to include a name, version, and private = true
  - `yarn install`

4. Update `next-app` to transpile the shared components:
  - `yarn add next-transpile-modules next-compose-plugins`
  - Update `next.config.js` to use the transpile plugin

5. Test it out and see the issue

```
cd next-app
yarn dev
```