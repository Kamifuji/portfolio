import { style } from '@vanilla-extract/css'

export const styles = {
  link: style({
    containerType: 'inline-size'
  }),
  root: style({
    border: '1px solid #eaeaea',
    borderRadius: 8,
    overflow: 'hidden',
    display: 'grid',
    '@container': {
      '(500px > width)': {
        gridTemplateColumns: '120px 1fr'
      }
    }
  }),
  content: style({
    padding: 16,
    '@container': {
      '(500px > width)': {
        padding: 20
      }
    }
  }),
  image: style({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    aspectRatio: '16 / 9'
  }),
  title: style({
    fontSize: 18,
    marginBottom: 8
  }),
  date: style({
    color: '#999'
  })
}
