import { useSelector } from "react-redux"

const Profile = () => {
  const { authUser } = useSelector((state) => state.auth)
  return (
    <>
      <div>Profile</div>
      <div className="my-6 flex flex-col">
        <div>Username: {authUser.username}</div>
        <div>Role: {authUser.role}</div>
      </div>
    </>
  )
}

export default Profile
