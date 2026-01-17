import Cookies from 'js-cookie'

export default async function getAccessToken() {
  const accessToken = Cookies.get("accessToken")
  if (accessToken) return accessToken
  const refreshToken = Cookies.get("refreshToken")

  if (!refreshToken) throw new Error("Session expired, please log in again.")

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })

    if (!response.ok) throw new Error("Failed to refresh token")

    const result = await response.json()
    if (!result?.data) throw new Error("No token returned")


    Cookies.set("accessToken", result.data, {
      expires: 1 / 24,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    })

    return result.data
  } catch (error) {
    throw error
  }
}
