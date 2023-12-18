import React, { useState } from 'react'
import { TextInput, Button, Group, Box } from '@mantine/core';

const UserForm = ({ user, onSubmit }) => {

    const [firstName, setFirstName]  = useState(user.firstName)
    const [lastName, setLastName]  = useState(user.lastName)

    const handleSubmit = () => {
        console.log({firstName, lastName});
        onSubmit({firstName, lastName})
    }

  return (
    <Box maw={340} mx="auto">
      <TextInput label="First Name" placeholder="First Name" value={firstName} 
        onChange={(e) => setFirstName(e.target.value)}/>
      <TextInput label="Last Name" placeholder="Last Name" value={lastName}
        onChange={(e) => setLastName(e.target.value)}/>

      <Group justify="center" mt="xl">
        <Button
          onClick={handleSubmit}>
          Update user
        </Button>
      </Group>
    </Box>
  )
}

export default UserForm