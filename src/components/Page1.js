import { useUser } from "../context/UserProvider";

const Page1 = () => {

  const user = useUser();

  return (
    <h3>
      Name is: {user && user.name}
    </h3>
  )
}

export default Page1;
