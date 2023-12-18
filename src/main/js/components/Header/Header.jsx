import React from 'react'
import { Link } from 'react-router-dom'
import { Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';
import { useAuth } from '../../hooks/useAuth.jsx';

// const links = [
//     { link: '/', label: 'Dashboard' },
//     { link: '/login', label: 'Login' },
//     { link: '/users', label: 'Users' },
//   ];

const Header = () => {

    const [opened, { toggle }] = useDisclosure(false);

    // const items = links.map((link) => (
    //     <Link key={link.label} to={link.link} className={classes.link}>{link.label}</Link>
    // ));

    const { authed, logout } = useAuth()
  
    const items = (
      <>
        <Link className={classes.link} to={"/"}>Dashboard</Link>
        {authed ? (
          <>
          <Link className={classes.link} to={"/users"}>User</Link>
           <Link className={classes.link} to={"#"} onClick={() => logout()}>Logout</Link>
           </>
        ) : (
          <Link className={classes.link} to={"/login"}>Login</Link>
        )}
      </>
    )

    return (
        // <header>
        // <span>LOGO</span>
        //     <nav>
        //         <Link to="/">Home page</Link>
        //         <Link to="/login">Login</Link>
        //     </nav>
        // </header>
        <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
    );
}

export default Header