interface INavigationLinks {
  name: string
  route: string
  authProtected?: boolean
  hideForUser?: boolean
}

export const NavigationLinks: INavigationLinks[] = [
  {
    name: "Register",
    route: "/auth/register",
    hideForUser: true,
  },
  {
    name: "Login",
    route: "/auth/login",
    hideForUser: true,
  },
  {
    name: "Logout",
    route: "/auth/logout",
    authProtected: true,
  },
]
