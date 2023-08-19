export type User = {
  id: string;
  name: string | null;
}

export type Todo = {
  id: string;
  name: string | null;
  isCompleted: boolean;
  userId: string;
}
