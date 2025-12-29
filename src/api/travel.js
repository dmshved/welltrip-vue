import { axiosInstance } from '@/api/index.js'

export async function getTravelsFromApi(page = 1) {
  return await axiosInstance.get('/travels', {
    params: { page }
  })
}

export async function getTravel(travelId) {
  const { data } = await axiosInstance.get(`/travels/${travelId}`)
  return data.data
}

export async function createTravel(travelData) {
  return await axiosInstance.post('/admin/travels', travelData)
}

export async function updateTravel(travelId, travelData) {
  return await axiosInstance.put(`/editor/travels/${travelId}`, travelData)
}
