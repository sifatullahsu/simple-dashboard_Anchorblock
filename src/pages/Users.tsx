import { useState } from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Table from '../components/Table'
import { useGetUsersQuery } from '../redux/api/userApi'

const Users = () => {
  const [page, setPage] = useState<number>(1)
  const { data } = useGetUsersQuery({ query: `page=${page}` })

  if (!data) return <div>Loading</div>

  return (
    <div>
      <Header />
      <Heading />
      <Table data={data} setPage={setPage} />
    </div>
  )
}

export default Users
