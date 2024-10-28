'use server'

import { SearchParams } from '@/types'
import { axiosInstance } from '@/utils/axiosInstance'

export const SearchProducts = async (payload: SearchParams) => {
  try {
    const { data } = await axiosInstance.post('/search', {
      ...payload,
    })

    return data
  } catch (error: any) {
    console.log('Error', error)
    // Throw the error with a custom message or the default error message
    throw new Error(error?.message || 'An unexpected error occurred')
  }
}
