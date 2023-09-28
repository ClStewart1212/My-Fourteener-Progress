const { Mountains } = require('../models/mountainModels')

const update = async () => {
  try {
    for (let i = 0; i < 57; i++) {
      const mountainInfo = await Mountains.findOne().limit(1).skip(i)
      console.log('mountainInfo: ', mountainInfo)
      const newMountainInfo = await Mountains.findOneAndUpdate(
        { peak: mountainInfo.peak },
        { mountainId: i },
        { returnOriginal: false },
      )
      console.log('mountainInfo: ', newMountainInfo)
    }
    // const newMountainInfo = mountainInfo.map((obj, i) => {
    //   return { ...obj, mountainId: i }
    // })
    // console.log('newMountainInfo: ', newMountainInfo)
    // newMountainInfo.forEach(async obj => {
    //   await Mountains.findOneAndReplace({ _id: obj._id }, obj)
    // })
  } catch {
    return next({
      log: `failed to retrieve collection`,
      message: {
        err: 'failed to retrieve collection',
      },
    })
  }
}
update()
