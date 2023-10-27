import { useUser } from "../context/UserProvider";

const Page1 = () => {

  const name = useUser();

  return (
    <h3>
      Name is: {name}
    </h3>
  )
}

export default Page1;
