import React, { useState } from 'react'
import './UserContainer.css'
import UserList from './UserList.jsx'
import { useQuery } from 'react-query'
import { getAll } from '../../api/UserService.js'
import { Pagination } from '@mantine/core';
import UserFilter from './UserFilter.jsx'


// const getAllLocal = async (page) => {
//   console.log('param: ', page)
//   const response = await httpClient.get(`/users?_limit=10&_page=${page}`);
//   console.log(response.data)
//   // console.log(response.headers['x-total-count'])
//   const total = response.headers['x-total-count']
//   const pages = total / 10;
//   console.log('total: ', pages)
//   return {users: response.data, total: pages};
// }

const UserContainer = () => {

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const {data, error, isLoading} = useQuery({
    queryKey: ['usersData', page, search],
    queryFn: () => getAll(page, search)
  });

  const handleSearching = (value) => {
    setPage(1)
    setSearch(value)
  }

  if (isLoading) return <div>Fetching users...</div>
  if (error) return <div>An error occurred: {error.message} </div>

  return (
    <>
      <UserFilter initialValue={search} setSearch={(value) => handleSearching(value)}/>
      <UserList users={data.users}/>
      <Pagination total={data.total} onChange={setPage} value={page}/>
    </>
    
  )
}

export default UserContainer