import React from 'react'
import UserForm from '../components/User/UserForm.jsx';
import { useNavigate, useParams } from 'react-router-dom'
import {useMutation, useQuery, useQueryClient} from 'react-query'
import { getOne, updateUser } from '../api/UserService.js'

const UserPage = () => {
  const {userId} = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

    const {data, error, isLoading} = useQuery({
      queryKey: ['userDetail', userId],
      queryFn: () => getOne(userId)
    });

    const { mutate } = useMutation({
      mutationFn: (values) => updateUser(userId, values),
      onSuccess: (res) => {
        console.log(res)
        queryClient.invalidateQueries({ queryKey: ['userDetail', userId] }),
        navigate('/users', {replace: true});
      }
    })

    if (isLoading) return <div>Fetching users...</div>
    if (error) return <div>An error occurred: {error.message} </div>

  return (
    <UserForm user={data[0]} onSubmit={mutate} />
  )
}

export default UserPage