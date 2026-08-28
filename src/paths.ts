const Paths = {
  TASK_ONE_A: "one",
  TASK_ONE_B: "one/b",
  TASK_ONE_C: "one/c",
  TASK_ONE_A_SOLUTION: "solution/one",
  TASK_ONE_B_SOLUTION: "solution/one/b",
  TASK_ONE_C_SOLUTION: "solution/one/c",
} as const;

export const appPaths = {
  root: "/",
  TASK_ONE_A: `/${Paths.TASK_ONE_A}`,
  TASK_ONE_B: `/${Paths.TASK_ONE_B}`,
  TASK_ONE_C: `/${Paths.TASK_ONE_C}`,
  TASK_ONE_A_SOLUTION: `/${Paths.TASK_ONE_A_SOLUTION}`,
  TASK_ONE_B_SOLUTION: `/${Paths.TASK_ONE_B_SOLUTION}`,
  TASK_ONE_C_SOLUTION: `/${Paths.TASK_ONE_C_SOLUTION}`,
} as const;
