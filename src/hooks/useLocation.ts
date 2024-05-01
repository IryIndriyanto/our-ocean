import useSWR, { SWRResponse } from "swr";
import { fetcher } from "@/utils/fetcher";
import { ILocation } from "@/types/location";
import { locations } from '../utils/dummy.data';

export default function useLocation() {
  const { data, error, isLoading } = useSWR(
    `https://oceanesia-be.onrender.com/locations/`,
    fetcher
  );

  return {
    locations: data,
    isLoading,
    isError: error,
  };
}
