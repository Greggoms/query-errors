import * as z from "zod";

// .or(z.string()) allows flexibility of the incoming
// possible types. It would be cool to make .date()
// work alone, but it turns out that dealing with
// strings is much easier.
const dateFormSchema = z.object({
  beginDate: z.date().or(z.string()),
  endDate: z.date().or(z.string()),
});

export default dateFormSchema;
