import {
  Outlet,
  // useNavigation
} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Event Management
      </h1>
      <MainNavigation />
      <main className="content">
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}
