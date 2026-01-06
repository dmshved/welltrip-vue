import { axiosInstance } from '@/api/index.js'

export async function createTour(travelId, tourData) {
  return await axiosInstance.post(`/admin/travels/${travelId}/tours`, tourData)
}
