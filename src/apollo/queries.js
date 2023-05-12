import { useQuery } from "@apollo/client";
import { GET_ORG, PROFILE } from "./server";

export function useGetUsers({ onCompleted,onError }) {
    const { loading, error, data ,refetch , subscribeToMore } = useQuery(GET_ORG,
        {
            onCompleted : onCompleted,
            onError : onError,
            fetchPolicy : 'cache-and-network'
        });
  
    return {
      loading,
      error,
      subscribeToMore,
      refetch,
      data: data ? data.getUserOrg : [],
    };
  }

  export function useProfile({ onCompleted,onError }) {
    const { loading, error, data ,refetch, subscribeToMore } = useQuery(PROFILE,
        {
            onCompleted : onCompleted,
            onError : onError,
            fetchPolicy : 'cache-and-network'
        });
  
    return {
      loading,
      error,
      subscribeToMore,refetch,
      data: data ? data.profile : null,
    };
  }