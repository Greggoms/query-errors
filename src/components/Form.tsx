import { useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import CustomSelect from "./CustomSelect";
import { FormValues } from "../lib/types";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/endpoints";
import getErrorMessage from "../lib/utils/errorHandler";

export default function Form() {
  const {
    data: albums,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
    retry: false,
  });
  const params = useLocation();
  console.log(params);

  // defaultValues not working... may have to ditch react-query here
  // in favor of async defaultValues. It worked earlier when the parent
  // handled the querying and loading/error states, then passing the data
  // to this form as a prop.
  const defaultValues = {
    album: albums ? albums[4].title : "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

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

  const options = albums.map((album) => {
    return { label: album.title, value: album.title };
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="text-2xl mb-4">Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
        <div className="flex flex-col gap-5">
          <div className="form_group">
            <label htmlFor="album-select" className="required_field">
              Album
            </label>
            <Controller
              control={control}
              name="album"
              rules={{ required: true }}
              render={({ field: { onChange, value, ref } }) => (
                <CustomSelect
                  id="album-select"
                  inputRef={ref}
                  options={options}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {errors.album && (
              <i className="text-sm text-red-500">
                Album selection is required
              </i>
            )}
          </div>
          <button className="py-2 px-4 bg-sky-600">Submit</button>
        </div>
      </form>
    </>
  );
}
