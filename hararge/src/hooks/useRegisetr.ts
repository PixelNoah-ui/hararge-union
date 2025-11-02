import { createMember as creatingMemberApi } from "@/api/supabseApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface MemberData {
  fullName: string;
  phone: string;
  year: string;
  campus: string;
  department: string;
}

export function useRegister() {
  const router = useRouter();

  const { mutate: createMember, isPending } = useMutation({
    mutationFn: (data: MemberData) => creatingMemberApi(data),
    onError: (error) => {
      toast.error(error.message || "Something went wrong, please try again");
    },
    onSuccess: () => {
      toast.success("You have successfully registered!");
      router.push("/");
    },
  });

  return { isPending, createMember };
}
