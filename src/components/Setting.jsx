import { Radio } from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { addAuthUser } from "../features/authSlice"

const Setting = () => {
  const dispatch = useDispatch()
  const onRoleSelect = (role) => {
    dispatch(addAuthUser({ username: "david", role }))
  }
  return (
    <>
      <h1>Login as:</h1>
      <div>
        <Radio
          name="role"
          label="admin"
          onClick={() => onRoleSelect("admin")}
        />
        <Radio
          name="role"
          label="manager"
          onClick={() => onRoleSelect("manager")}
        />
        <Radio name="role" label="user" onClick={() => onRoleSelect("user")} />
      </div>
    </>
  )
}

export default Setting
