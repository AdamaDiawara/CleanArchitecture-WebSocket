import { callAuthJson } from "./http";

export type AdminStats = {
  documents: {
    pending:  number;
    approved: number;
    rejected: number;
  };
  users: {
    total:            number;
    clients:          number;
    restaurantOwners: number;
    drivers:          number;
  };
  restaurants: {
    total:  number;
    active: number;
  };
};

export const getAdminStats = (accessToken: string) =>
  callAuthJson<AdminStats>("/admin/stats", accessToken);
