import { axiosInstance } from '@/api/index.js'

export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get('/user')

  return data.data
}
