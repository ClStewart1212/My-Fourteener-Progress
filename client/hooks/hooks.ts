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

export const getAllMountainData = async (): Promise<mountainData[]> => {
  try {
    const mountainResponse = await fetch('/api/mountain')
    return mountainResponse.json()
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

export type userData = {
  _id: string
  peak: string
  completionTime: string
  completionDate: string
  __v: number
  notes?: string
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

type cardInfo = {
  peak: string
  range: string
  imgUrl: string
  road: boolean
  class: number
  distance: number
  elevationGain: number
  link: string
  completed?: boolean
  completedOn?: string
  completionTime?: string
}

export const createCardInfo = (
  userInfo: userData[],
  mountainInfo: mountainData[],
) => {
  const cardInfo = mountainInfo.map(mountain => {
    let road = false
    if (mountain.road >= 4) road = true
    const card: cardInfo = {
      peak: mountain.peak,
      range: mountain.range,
      imgUrl: mountain.url,
      road,
      class: mountain.class,
      distance: mountain.distance,
      elevationGain: mountain.elevation_gain,
      link: mountain.link,
    }
    return card
  })

  cardInfo.forEach(card => {
    userInfo.forEach(peak => {
      if (peak.peak == card.peak) {
        card.completed = true
        card.completedOn = peak.completionDate
        card.completionTime = peak.completionTime
      }
    })
  })
  return cardInfo
}
