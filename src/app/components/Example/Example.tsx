'use client'
import { useState } from 'react'

const Item = (props: {name: string}) => {
  return (
    <div className="form-group">
      <label className="col-xs-4 control-label">{props.name}</label>
      <div className="col-xs-8">
        <input type="text" className="form-control" />
      </div>
    </div>
  )
}

export const Example = () => {
  const [list, setList] = useState([
    { name: 'Foo1444610101010', id: 1444610101010 },
    { name: 'Bar1444600000000', id: 1444600000000 }
  ])

  const addItem = () => {
    const id = +new Date()
    setList([{ name: 'Baz' + id, id }, ...list])
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={addItem}>
        <b>Add item</b> to the beginning of the list
      </button>
      <h3>
        Dangerous <code>key=index</code>
      </h3>
      <form className="form-horizontal">
        {list.map((todo, index) => (
          <Item {...todo} key={index} />
        ))}
      </form>
      <h3>
        Better <code>key=id</code>
      </h3>
      <form className="form-horizontal">
        {list.map((todo) => (
          <Item {...todo} key={todo.id} />
        ))}
      </form>
    </div>
  )
}
