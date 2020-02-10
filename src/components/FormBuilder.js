import React, { useState } from 'react'
import { SortableContainer, arrayMove } from 'react-sortable-hoc'
import FormItem from './FormItem'
import { Row, Col } from 'antd'

import EditField from './EditField'

export default () => {

  const [items, setItems] = useState([
    { id: 1, width: "1 / 3" },
    { id: 2, width: "1 / 3" },
    { id: 3, width: "1 / 3" },
    { id: 4, width: "1 / 2" },
    { id: 5, width: "2 / 3" },
    { id: 6, width: "1 / 2" },
    { id: 7, width: "1" },
  ])

  const [idFieldEdid, setIdFieldEdit] = useState(null)

  const setWidthItem = (id, width) => {
    const index = items.findIndex(item => item.id === id)
    setItems([...items.slice(0, index), { id, width }, ...items.slice(index + 1)])
  }

  const SortableList = SortableContainer(({ items }) => {
    return <div className="list_item">
      {items.map((item, index) => {
        return <FormItem
          setIdFieldEdit={() => setIdFieldEdit(item.id)}
          key={`item-${item.id}`}
          isFocus={item.id === idFieldEdid}
          item={item}
          index={index}
        />
      })}
    </div>
  })

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (<Row>
    <Col span={16}>
      <SortableList
        axis="xy"
        items={items}
        onSortEnd={onSortEnd}
        useDragHandle
        helperClass="helper"
      />
    </Col>

    <Col span={8}>
      {idFieldEdid && <EditField setWidthItem={setWidthItem} fieldEdid={items.find(item => item.id === idFieldEdid)} />}
    </Col>
  </Row>)
}

