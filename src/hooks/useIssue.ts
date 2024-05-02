import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";


export default function useIssue(id:number) {
  const { data, error, isLoading } = useSWR(
    `https://oceanesia-be.onrender.com/issues/${id}`,
    fetcher
  );

  return {
    issue: data,
    isLoading,
    isError: error,
  };
}
