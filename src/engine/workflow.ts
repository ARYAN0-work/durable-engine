export interface WorkflowDefinition<TInput, TOutput> {
  name: string;

  execute: (input: TInput) => Promise<TOutput>;
}