export type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
};

/** Add roles here when hiring — page renders listings automatically. */
export const jobOpenings: JobOpening[] = [];
