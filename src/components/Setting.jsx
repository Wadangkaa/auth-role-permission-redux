import { Button, Checkbox, Radio } from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { addAuthUser } from "../features/authSlice"
import { useState } from "react"
import { ROLE } from "../enums/role"

const Setting = () => {
  const dispatch = useDispatch()

  const [isAdmin, setIsAdmin] = useState(false)
  const [isManager, setIsManager] = useState(false)
  const [isUser, setIsUser] = useState(false)

  const handleRoleAssign = () => {
    const roles = []
    if (isAdmin) roles.push(ROLE.ADMIN)
    if (isManager) roles.push(ROLE.MANAGER)
    if (isUser) roles.push(ROLE.USER)

    dispatch(addAuthUser({ username: "david", roles }))
  }

  return (
    <>
      <div className="flex flex-col">
        <div>Roles:</div>
        <Checkbox
          color="blue"
          label="admin"
          checked={isAdmin}
          onChange={() => setIsAdmin(!isAdmin)}
        />
        <Checkbox
          color="blue"
          label="manager"
          checked={isManager}
          onChange={() => setIsManager(!isManager)}
        />
        <Checkbox
          color="blue"
          label="user"
          checked={isUser}
          onChange={() => setIsUser(!isUser)}
        />
        <Button type="submit" color="blue" onClick={handleRoleAssign}>
          Assign
        </Button>
      </div>
    </>
  )
}

export default Setting
