import { style } from '@vanilla-extract/css'

export const styles = {
  image: style({
    height: 'auto',
    width: '100%',
    objectFit: 'cover',
    aspectRatio: '16 / 9',
  }),
  title: style({
    fontSize: 18
  })
}
