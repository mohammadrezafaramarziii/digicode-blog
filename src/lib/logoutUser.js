"use server";

import { cookies } from "next/headers";

export async function logoutUser() {
  const cookiesStore = await cookies();

  try {
    cookiesStore.delete("accessToken");
    cookiesStore.delete("refreshToken");
    return {
      res: true,
    };
  } catch (error) {
    return {
      res: false,
    };
  }
}
