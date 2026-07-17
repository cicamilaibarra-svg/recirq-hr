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

  const { data: request, error } = await supabase

    .from("requests")

    .insert({

      reference,

      company_id: data.companyId,

      employee_name: data.employeeName,

      employee_email: data.employeeEmail,

      anonymous: data.anonymous,

      type: data.type,

      subject: data.subject,

      description: data.description,

      status: "New",

      priority: "Medium",

      ai_category: null,

      ai_confidence: 0,

      routing_reason: null

    })

    .select()

    .single();

  if (error) throw error;

  return request;

}