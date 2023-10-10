import {
  useForm,
  // Controller
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import dateFormSchema from "../lib/validations/date-form";
import { DateFormValues } from "../lib/types";
import format from "date-fns/format";

export default function DateForm() {
  const defaultValues = {
    beginDate: "",
    endDate: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DateFormValues>({
    defaultValues,
    resolver: zodResolver(dateFormSchema),
  });

  const onSubmit = (data: DateFormValues) => {
    console.log(data);
    const { beginDate } = data;

    // The .replace() is the magic here.
    // For some reason, new Date("2023-10-09") returns the day before,
    // while new Date("2023/10/09") returns the correct date.
    // fixedBeginDate is the value that needs to be transferred.
    // formattedBeginDate shows that the formatting is correct.
    const fixedBeginDate = new Date(beginDate.replace(/-/g, "/")).toISOString();
    const formattedBeginDate = format(new Date(fixedBeginDate), "PPPP");
    console.log(fixedBeginDate, " ← Fixed");
    console.log(formattedBeginDate, " ← Formatted");

    // ↓ incorrect value "2023-10-09"
    console.log(new Date(beginDate).toISOString(), " ← Incorrect ISO");
    // ↓ correct value. replace hyphens with slashes.
    console.log(
      new Date(fixedBeginDate).toISOString(),
      " ← Correct ISO (T05:00)"
    );
  };

  return (
    <>
      <h2 className="text-2xl mb-4">Date Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
        <div className="flex flex-col gap-5">
          <div className="form_group">
            <label htmlFor="beginDate" className="required_field">
              Starting Date
            </label>
            <input id="beginDate" type="date" {...register("beginDate")} />
            {errors.beginDate && (
              <i className="text-sm text-red-500">{errors.beginDate.message}</i>
            )}
          </div>
          <button className="py-2 px-4 bg-sky-600">Submit</button>
        </div>
      </form>
    </>
  );
}
