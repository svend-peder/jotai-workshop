const Paths = {
  EXERCISE_ONE: "one",
} as const;

export const appPaths = {
  root: "/",
  EXERCISE_ONE: `/${Paths.EXERCISE_ONE}`,
} as const;
