import { axiosInstance } from '@/api/index.js'

export async function createTour(travelId, tourData) {
  return await axiosInstance.post(`/admin/travels/${travelId}/tours`, tourData)
}

export async function getToursFromApi(travelSlug, filters = {}) {
  const { data } = await axiosInstance.get(
    `/travels/${travelSlug}/tours`,
    { params: filters }
  )
  return {
    data,
  }
}
