import React from 'react'
import { Container } from '@mantine/core';
import { AuthenticationForm } from '../components/AuthenticationForm.jsx'

const Login = () => {
  return (
    <Container px={0} size="30rem">
       <AuthenticationForm shadow="xs" p="xl"/>
    </Container>
    
  )
}

export default Login