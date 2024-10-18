import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="container mx-auto mt-20 text-center">
      <h1 className="text-4xl font-semibold">Oops!</h1>
      <p className="my-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-400">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;
