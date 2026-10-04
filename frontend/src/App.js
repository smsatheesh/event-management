import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import NotFound from "./pages/NotFound";
import EventRootLayout from "./pages/EventRootLayout.js";
import { loader as EventLoader } from "./pages/EventsPage.js";
import Error from "./pages/Error";
import { loader as EventDetailsLoader } from "./pages/EventDetailPage.js";
import { action as EventDetailsActionLoader } from "./pages/EventDetailPage.js";
import { action as ManipulateEventAction } from "./components/EventForm.js";
import NewsletterPage, {
  action as newsletterAction,
} from "./pages/Newsletter.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventRootLayout />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: EventLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: ManipulateEventAction,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: EventDetailsActionLoader,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: ManipulateEventAction,
              },
            ],
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
