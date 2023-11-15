import { style } from '@vanilla-extract/css'

export const styles = {
  root: style({
    width: '100%'
  }),
  h2: style({
    fontSize: 24,
    marginBottom: 40
  }),
  section: style({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 100
  })
}
