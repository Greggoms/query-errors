import { useQuery } from "@tanstack/react-query";

import { fetchData } from "../api/endpoints";
import getErrorMessage from "../lib/utils/errorHandler";

export default function Fetcher() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
    retry: false,
  });

  if (isLoading) {
    return <p>Fetching Data...</p>;
  }

  if (isError) {
    const error_message = getErrorMessage(error);
    return (
      <>
        <h2 className="text-xl mb-3">Oops!</h2>
        <p>Something went wrong...</p>
        <i className="text-red-500">{error_message}</i>
      </>
    );
  }

  return (
    <>
      <h2 className="text-2xl mb-4">Fetcher</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
