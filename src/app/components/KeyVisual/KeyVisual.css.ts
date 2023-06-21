import { style } from '@vanilla-extract/css'

export const styles = {
  section: style({
    display: 'flex',
    gap: 100,
    alignItems: 'center',
    justifyContent: 'space-between'
  }),
  h1: style({
    fontSize: 80
  }),
  text: style({
    fontSize: 32
  })
}
