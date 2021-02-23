interface INavigationLinks {
  name: string
  route: string
  authProtected?: boolean
}

export const NavigationLinks: INavigationLinks[] = [
  {
    name: "Register",
    route: "/auth/register",
  },
  {
    name: "Login",
    route: "/auth/login",
  },
]
