import { useUser } from "../context/UserProvider";

const Page2 = () => {

    const user = useUser();

    return (
        <h3>
            Name is: {user && user.name}
        </h3>
    );
}

export default Page2;
