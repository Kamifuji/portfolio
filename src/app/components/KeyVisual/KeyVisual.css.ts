import { style } from '@vanilla-extract/css'

export const styles = {
  section: style({
    display: 'flex',
    gap: 100,
    alignItems: 'center',
    justifyContent: 'space-between'
  }),
  headline: style({
    position: 'absolute',
    top: 24,
    left: 40,
  }),
  h1: style({
    fontSize: 80
  }),
  text: style({
    fontSize: 32
  }),
  sectionTest: style({
    height: '100svh',
    position: 'relative'
  }),
  image: style({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }),
  scroll: style({
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    justifyItems: 'center',
    '::before': {
      content: '""',
      display: 'block',
      clipPath: 'polygon(0 7%, 7% 0, 50% 43%, 93% 0, 100% 7%, 50% 57%, 0 7%)',
      height: '30px',
      aspectRatio: '1',
      backgroundColor: 'black'
    }
  })
}
