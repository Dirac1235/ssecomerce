import { ZodError, ZodIssue } from "zod";

function formatZodIssue(issue: ZodIssue): Record<string, string> {
  const { path, message } = issue;
  const pathString = path.join(".");

  return { [pathString]: message };
}

export function formatZodError(
  error: ZodError
): Record<string, string>[] | string {
  const { issues } = error;
  if (issues?.length) {
    const errors = issues.map((currentIssue) => formatZodIssue(currentIssue));
    return errors;
  }
  return "Unknown Error";
}
