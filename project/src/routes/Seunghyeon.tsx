import React, { useEffect, useState } from "react"
import { fetchUsers } from "../api/test"

function Seunghyeon() {
  const [users, setUsers] = useState<any>(null)

  useEffect(() => {
    async function getUsers() {
      const serverUsers = await fetchUsers()
      setUsers(serverUsers)
    }

    getUsers()
  }, [])

  if (!users) return null
  return (
    <ul>
      {users.map(user => (
        <div key={user.id}>유저 이름: {user.name}</div>
      ))}
    </ul>
  )
}

export default Seunghyeon
