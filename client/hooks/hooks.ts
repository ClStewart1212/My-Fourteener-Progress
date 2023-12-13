export type mountainData = {
  _id: string
  range: string
  peak: string
  class: number
  distance: number
  elevation_gain: number
  road: number
  link: string
  url: string
  __v: number
  mountainId: number
}

export type userData = {
  _id: string
  peak: string
  completionTime: string
  completionDate: string
  __v: number
  notes?: string
}

export const getAllMountainData = async (): Promise<mountainData[]> => {
  try {
    const mountainResponse = await fetch('/api/mountain')
    return mountainResponse.json()
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

export const getAllUserData = async (): Promise<userData[]> => {
  try {
    const userResponse = await fetch('/api/user')
    return userResponse.json()
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}
