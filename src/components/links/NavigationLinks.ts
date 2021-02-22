interface INavigationLinks {
  name: string
  route: string
  authProtected?: boolean
}

export const NavigationLinks: INavigationLinks[] = [
  {
    name: "Register",
    route: "/register",
  },
  {
    name: "Login",
    route: "/login",
  },
]
