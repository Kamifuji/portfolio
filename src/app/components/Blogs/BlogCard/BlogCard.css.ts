import { style } from '@vanilla-extract/css'

export const styles = {
  image: style({
    height: 280,
    maxWidth: '100%',
    objectFit: 'cover'
  }),
  title: style({
    fontSize: 18
  })
}
