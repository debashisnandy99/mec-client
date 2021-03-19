import axios from "./api"
import { navigate, Link } from "gatsby"


export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("bearerlog")
    ? JSON.parse(window.localStorage.getItem("bearerlog"))
    : {}

const setUser = user =>
  window.localStorage.setItem("bearerlog", JSON.stringify(user))

export const handleLogin = async (phone, password) => {
  console.log(navigator.platform);
  let form_data = new FormData()
  form_data.append("phone", phone)
  form_data.append("password", password)
  form_data.append("os", navigator.platform)
  try {
    let data = await axios.post("/auth/login", form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    console.log(data.data);
    setUser({
      token: data.data.token,
      uid: data.data.userId,
    })
    return true
  } catch (error) {
    console.log(error.response.data)
    return false
  }
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.uid
}

export const logout = () => {
  setUser({})
  navigate("/",{
    replace: true
  })
}
