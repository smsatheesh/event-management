import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function Error() {
  const error = useRouteError();

  let title = "An Error Occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    title = "Server Error";
    message = JSON.parse(error.data).message;
  } else if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page";
  }

  return <PageContent title={title}> {message} </PageContent>;
}
