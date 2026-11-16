export type WorkflowExecutionStatus ="RUNNING"| "COMPLETED"| "FAILED";

export interface WorkflowExecution<TInput, TOutput> {
  id: string;

  workflowName: string;

  status: WorkflowExecutionStatus;

  input: TInput;

  output?: TOutput;
}