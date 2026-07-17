import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <>
      <div className="mb-8 flex justify-end">
        <Button>+ Schedule Meeting</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="mb-3 text-xl font-semibold">
            Today's Meetings
          </h2>

          <p>No meetings scheduled.</p>
        </Card>

        <Card>
          <h2 className="mb-3 text-xl font-semibold">
            Notifications
          </h2>

          <p>You're all caught up 🎉</p>
        </Card>

        <Card>
          <h2 className="mb-3 text-xl font-semibold">
            Employees
          </h2>

          <p>0 Employees</p>
        </Card>

        <Card>
          <h2 className="mb-3 text-xl font-semibold">
            Quick Actions
          </h2>

          <Button variant="secondary">
            Add Policy
          </Button>
        </Card>
      </div>
    </>
  );
}