import MainNavigation from "../components/MainNavigation";

export default function NotFound() {
  return (
    <>
      <MainNavigation />
      <main className="content">
        <h2>An Error Occured!</h2>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}
