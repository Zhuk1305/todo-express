export type TTaskCreatePayload = {
  title: string;
};

export type TTaskUpdatedPayload = {
  id: number;
  title?: string;
  completed?: boolean;
};

export type TTaskDeletePayload = {
  id: number;
};
