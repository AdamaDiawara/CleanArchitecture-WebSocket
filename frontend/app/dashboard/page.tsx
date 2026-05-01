"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../auth/context/AuthContext";
import { ClientDashboard } from "./components/ClientDashboard";
import { RestaurantOwnerDashboard } from "./components/RestaurantOwnerDashboard";
import { DriverDashboard } from "./components/DriverDashboard";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace("/auth/login");
  }, [loading, user, router]);

  if (loading || !user) return (
    <div className="flex items-center justify-center h-full">
      <p className="text-slate-400 text-sm">Chargement...</p>
    </div>
  );

  if (user.role === "CLIENT")           return <ClientDashboard userName={user.name} />;
  if (user.role === "RESTAURANT_OWNER") return <RestaurantOwnerDashboard userName={user.name} />;
  if (user.role === "DRIVER")           return <DriverDashboard userName={user.name} />;
  return null;
}
