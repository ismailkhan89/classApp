import { useMutation } from "@apollo/client";
import { CREATE_USER, FORGOT_PASSWORD, FORGOT_PASSWORD_VERIFY, NEW_PASSWORD, RESET_PASSWORD, USER_LOGIN, USER_UPDATE } from "./server";


//#region USER

export function useLoginUser({ onCompleted , onError }) {
  const [mutate, { loading , error , client }] = useMutation(USER_LOGIN, {
    onCompleted : onCompleted,
    onError : onError,
  });
  return { mutate , loading , error , client };
}

export function useCreateUser({ onCompleted , onError }) {
    const [mutate, { loading , error , client }] = useMutation(CREATE_USER, {
      onCompleted : onCompleted,
      onError : onError,
    });
    return { mutate , loading , error , client };
}

export function useUserUpdate({ onCompleted , onError }) {
  const [mutate, { loading , error , client }] = useMutation(USER_UPDATE, {
    onCompleted : onCompleted,
    onError : onError,
  });
  return { mutate , loading , error , client };
}

export function useForgotPassword({ onCompleted , onError }) {
  const [mutate , { loading , error , client }] = useMutation(FORGOT_PASSWORD, {
    onCompleted : onCompleted,
    onError : onError,
  });
  return { mutate , loading , error , client };
}

export function useForgotPasswordVerify({ onCompleted , onError }) {
  const [mutate , { loading , error , client }] = useMutation(FORGOT_PASSWORD_VERIFY, {
    onCompleted : onCompleted,
    onError : onError,
  });
  return { mutate , loading , error , client };
}


export function useNewpassword({ onCompleted , onError }) {
  const [mutate , { loading , error , client }] = useMutation(NEW_PASSWORD, {
    onCompleted : onCompleted,
    onError : onError,
  });
  return { mutate , loading , error , client };
}


export function useChangePassword({ onCompleted , onError }) {
  const [mutate , { loading , error , client }] = useMutation(RESET_PASSWORD, {
    onCompleted : onCompleted,
    onError : onError,
  });
  return { mutate , loading , error , client };
}

//#endregion