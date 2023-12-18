import Header from '../components/Header'
import { useGetUsersQuery } from '../redux/api/userApi'

const Users = () => {
  const { data } = useGetUsersQuery({ query: '' })
  console.log(data)

  return (
    <div>
      <Header />
    </div>
  )
}

export default Users
