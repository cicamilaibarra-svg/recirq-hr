export type RequestStatus =
  | "New"
  | "In Progress"
  | "Waiting"
  | "Completed";

export type RequestPriority =
  | "Low"
  | "Medium"
  | "High"
  | "Urgent";

export type RequestType =
  | "Question"
  | "Request"
  | "Issue"
  | "Suggestion";

export interface Request {

  id: string;

  employeeName: string;

  employeeEmail?: string;

  anonymous: boolean;

  type: RequestType;

  subject: string;

  description: string;

  status: RequestStatus;

  priority: RequestPriority;

  assignedTo?: string;

  createdAt: string;

  updatedAt: string;

}