import ActionCard from "./ActionCard";
import { company } from "@/lib/company";

export default function ActionGrid() {
  return (
    <div className="space-y-5">
      {company.employeePortal.liveCall && (
        <ActionCard
          icon="📞"
          title="Call HR Now"
          description="Speak with HR immediately if you need assistance."
        />
      )}

      {company.employeePortal.askSunce && (
        <ActionCard
          icon="🤖"
          title="Ask Sunce"
          description="Ask questions about company policies and get instant answers."
        />
      )}

      {company.employeePortal.sendRequest && (
        <ActionCard
          icon="📝"
          title="Contact HR"
          description="Send a request, ask a question, or report an issue."
        />
      )}

      {company.employeePortal.policies && (
        <ActionCard
          icon="📄"
          title="Company Policies"
          description="Browse your employee handbook and company resources."
        />
      )}
    </div>
  );
}