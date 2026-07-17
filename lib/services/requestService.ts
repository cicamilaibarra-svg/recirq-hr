import { supabase } from "../supabase";

export interface CreateRequestData {
  companyId: string;
  employeeName: string;
  employeeEmail?: string;
  anonymous: boolean;
  type: string;
  subject: string;
  description: string;
}

function generateReference() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 900000 + 100000);

  return `RQ-${year}-${random}`;
}

export async function createRequest(data: CreateRequestData) {
  const reference = generateReference();

  const { error } = await supabase
    .from("requests")
    .insert({
      reference,

      company_id: data.companyId,

      employee_name: data.employeeName,

      employee_email: data.employeeEmail ?? null,

      anonymous: data.anonymous,

      type: data.type,

      subject: data.subject,

      description: data.description,

      status: "New",

      priority: "Medium",

      assigned_to: null,

      ai_category: null,

      ai_confidence: 0,

      routing_reason: null,
    });

  if (error) {
    console.error(error);
    throw error;
  }

  return {
    reference,
  };
}