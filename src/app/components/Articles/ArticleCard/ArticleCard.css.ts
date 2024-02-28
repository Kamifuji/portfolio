import { style } from '@vanilla-extract/css'

export const styles = {
  title: style({
    fontSize: 18
  }),
  link: style({
    ':hover': {
      background: '#f9f9f9'
    }
  }),
  article: style({
    padding: 24,
    border: '1px solid #ddd',
    borderRadius: 8,
    display: 'grid',
    gap: 10
  }),
  date: style({
    color: '#666'
  })
}
