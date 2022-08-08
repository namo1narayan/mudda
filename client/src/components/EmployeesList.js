import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const EmployeesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='age'/>
        <TextField source='username' />
        <DateField source='publishedAt'/>
        <EditButton basePath='/createUser' />
        <DeleteButton basePath='/createUser' />
      </Datagrid>
    </List>
  )
}

export default EmployeesList;