import { useRouter } from "next/dist/client/router";
import React from "react";
import { LoadingState } from "../../../state/LoadingState";
import { UserState } from "../../../state/UserState";
import { UserRole } from "../../../types/UserType";

interface AuthTypes {
  adminRequired?: boolean;
}

export const AuthRequired = ({ adminRequired = false }: AuthTypes = {}) => {
  const user = UserState((state) => state.user);
  const loading = LoadingState((state) => state.loading);
  const router = useRouter();
  React.useEffect(() => {
    if (!loading)
      user
        ? adminRequired && user.type !== UserRole.admin && router.replace("/auth/notAuthorized")
        : router.replace("/auth/notAuthorized");
  }, [user]);
};
