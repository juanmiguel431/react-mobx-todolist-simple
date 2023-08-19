export type User = {
  id: number;
  name: string | null;
}

export type Todo = {
  id: number;
  name: string | null;
  isCompleted: boolean;
  userId: number;
}
