const Paths = {
  TASK_ONE: "one",
} as const;

export const appPaths = {
  root: "/",
  TASK_ONE: `/${Paths.TASK_ONE}`,
} as const;
