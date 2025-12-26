import { axiosInstance } from '@/api/index.js'

export async function getTravelsFromApi(page = 1) {
  return await axiosInstance.get('/travels', {
    params: { page }
  })
}

export async function createTravel(travelData) {
  return await axiosInstance.post('/admin/travels', travelData)
}
