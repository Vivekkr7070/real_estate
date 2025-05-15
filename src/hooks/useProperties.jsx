import React from "react";
import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );
  // console.log("🚀 ~ useProperties ~ data:", data)

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
