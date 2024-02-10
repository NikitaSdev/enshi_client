import { AdminPage } from "@/screens/admin-page";
import { redirect } from "next/navigation";
import { checkAdmin } from "@/shared/hooks/check-admin";

export default async function Admin() {
  const admin = await checkAdmin();
  if (!admin) redirect("/404");

  return <AdminPage />;
}
