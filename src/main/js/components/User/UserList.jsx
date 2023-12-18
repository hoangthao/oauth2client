import React from 'react'
import { Table } from '@mantine/core';
import { Link } from 'react-router-dom';

const UserList = ({users}) => {

    const rows = users.map((element) => (
        <Table.Tr key={element.id}>
          <Table.Td>{element.firstName} {element.lastName}</Table.Td>
          <Table.Td>{element.email}</Table.Td>
          <Table.Td><Link to={`/users/${element.id}`}>{element.username}</Link></Table.Td>
          <Table.Td>{element.password}</Table.Td>
        </Table.Tr>
      ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Full name</Table.Th>
          <Table.Th>Emal</Table.Th>
          <Table.Th>Username</Table.Th>
          <Table.Th>Password</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    
  )
}

export default UserList