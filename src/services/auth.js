import * as axios from "./api"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ name, password, image, phone, email }) => {
  let form_data = new FormData()
  form_data.append("image", image)
  form_data.append("phone", phone)
  form_data.append("password", password)
  form_data.append("name", name)
  if (email) {
    form_data.append("email", email)
  }
  try {
    let data = axios.post(url, form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
    return true
  } catch (error) {
    return false
  }
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
