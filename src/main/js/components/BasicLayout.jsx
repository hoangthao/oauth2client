import React from 'react'
import { AppShell } from '@mantine/core';
import { Outlet } from "react-router-dom"
import Header from './Header/Header.jsx'

export default function GuestLayout() {
    return (
        <AppShell
      header={{ height: 60 }}
      padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
    )
}