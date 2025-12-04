import { axiosInstance, axiosCsrfInstance } from '@/api/index.js'

export const login = async (form) => {
  await axiosCsrfInstance.get('/sanctum/csrf-cookie')
  const { data } = await axiosInstance.post('/login', form)

  return data.data
}

export const register = async (form) => {
  await axiosCsrfInstance.get('/sanctum/csrf-cookie')
  const { data } = await axiosInstance.post('/register', form)

  return data.data
}

export const logout = async () => {
  return axiosInstance.post('/logout')
}
