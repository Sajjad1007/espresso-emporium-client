import { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Banner from "./Banner";
import PopularProducts from "./PopularProducts";
import FollowUs from "./FollowUs";
import SignIn from "./SignIn";

const Home = () => {
  const coffeesData = useLoaderData();
  const { isLoggedIn } = use(AuthContext);

  return !isLoggedIn ? (
    <SignIn />
  ) : (
    <div>
      <Banner />
      <PopularProducts coffeesData={coffeesData} />
      <FollowUs />
    </div>
  );
};

export default Home;
