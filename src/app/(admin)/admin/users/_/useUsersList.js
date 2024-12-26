import { getUsers } from "@/services/usersService";
import { useQuery } from "@tanstack/react-query";

export default function useUsersList() {
  const { data, isLoading } = useQuery({
    queryKey: ["users-list"],
    queryFn: getUsers,
  });

  const { users } = data || {};

  return { users, isLoading };
}
