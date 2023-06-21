import { style } from '@vanilla-extract/css'

export const styles = {
  section: style({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 100
  })
}
