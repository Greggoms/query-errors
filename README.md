# query-errors

This is my attempt to find a nice way of handling errors that are
received from [@tanstack/react-query](https://tanstack.com/query/latest).

Side note: I'm not sure why my other project has react-query working overtime
on the fetching logic at all. It's definitely better to make the API do the
heavy lifting. This new approach vastly improves the consuming component's code quality.

## TypeScript Weirdness

Typescript does not want you to catch any errors in a `try/catch` block.
Typing the error as `unknown` make sense as it is ill-advised (or impossible)
to manually infer the error's type, but how are you supposed to manage it if
you can't safely access any properties?

The `catch` block error is difficult in particular (as opposed to .catch()).
Setting the error to `any` gives a [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any/)
TS error. Attempting to manually type it reveals that it can ONLY have the types
of `any` or `unknown` (default).

Kent C. Dodds to the rescue. His [blog post](https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript)
explains a neat way to handle such a case.
