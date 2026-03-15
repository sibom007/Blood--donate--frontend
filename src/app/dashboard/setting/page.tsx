import { ChangePasswordView } from "@/feature/setting/components/change-password-view";

function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
      <p className="text-sm text-muted-foreground">
        Manage your account settings and preferences.
      </p>
      <ChangePasswordView />
    </div>
  );
}

export default Page;
