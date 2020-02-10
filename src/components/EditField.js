import React from 'react'
import { Input, Select } from 'antd'
const { Option } = Select

const EditField = ({setWidthItem, fieldEdid }) => {


  const handleChange = (value) => {
    setWidthItem(fieldEdid.id, value)
  }

  return (
    <div>
      <Select value={fieldEdid.width || 1} onChange={handleChange}>
        <Option value={"1/2"}>1/2</Option>
        <Option value={"1/3"}>1/3</Option>
        <Option value={"1"}>1</Option>
        <Option value={"2/3"}>2/3</Option>
      </Select>
    </div>
  )
}

export default EditField
