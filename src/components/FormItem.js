import React from 'react'
import { SortableElement, sortableHandle } from 'react-sortable-hoc'
import { Input, Icon } from 'antd'

const FormItem = SortableElement(({ item, setIdFieldEdit, isFocus }) => {
  const DragHandle = sortableHandle(() => <span className="drag">::</span>)
  return (
    <div style={{ width: `${eval(item.width) * 100}%` }} onClick={setIdFieldEdit} className={`item ${isFocus ? 'focus' : ''}`}>
      <div className="item-input">
        <span ><DragHandle />Tên trường thông tin</span>
        <Input readOnly />
      </div >
    </div>
  )
})

export default FormItem;
