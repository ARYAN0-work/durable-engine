import { randomUUID } from "node:crypto";
import type { WorkflowDefinition } from "./workflow.js";

export function createWorkflowExecution<TInput, TOutput>(
  definition: WorkflowDefinition<TInput, TOutput>,
  input: TInput,
): WorkflowExecution<TInput, TOutput> {
  return {
    id: randomUUID(),
    workflowName: definition.name,
    status: "RUNNING",
    input,
  };
}

export type WorkflowExecutionStatus ="RUNNING"| "COMPLETED"| "FAILED";

export interface WorkflowExecution<TInput, TOutput> {
  id: string;

  workflowName: string;

  status: WorkflowExecutionStatus;

  input: TInput;

  output?: TOutput;
}