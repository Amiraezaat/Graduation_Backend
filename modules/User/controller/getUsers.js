const { userModel } = require('../../../DB/UserModel')
const openurl = require('openurl')
const fetch = require('node-fetch')
const { StatusCodes } = require('http-status-codes')

// exports.getUser = async (req, res) => {
//   const User_Number = req.user.User_Number
//   const image = await userModel.findOne({ User_Number})

//   const url = `${image.image}`
//   var x = image.User_Number.slice(-3)
//   const pathimg = `./images/image${x}.jpg`
//   openurl.open(url, async () => {
//     const response_Url = await fetch(url) // fetch() returns a promise, so we need to wait for it
//     const jsonform = await response_Url.json()
//     var fs = require('fs'),
//       http = require('http'),
//       https = require('https')

//     var Stream = require('stream').Transform

//     var downloadImageToUrl = (url, filename) => {
//       var client = http
//       if (url.toString().indexOf('https') === 0) {
//         client = https
//       }

//       client
//         .request(url, function (response) {
//           var data = new Stream()

//           response.on('data', function (chunk) {
//             data.push(chunk)
//           })

//           response.on('end', function () {
//             fs.writeFileSync(filename, data.read())
//           })
//         })
//         .end()
//     }
//     // console.log(`${url}?alt=media&token=${jsonform.downloadTokens}`)
//     downloadImageToUrl(
//       `${url}?alt=media&token=${jsonform.downloadTokens}`,
//       pathimg
//     )
//     res.json({
//       message: '✅ Done!',
//       image: `${url}?alt=media&token=${jsonform.downloadTokens}`,
//       image_Name:`image${x}`
//     })
//   })
// }



// search API BY feature
exports.searchUser = async (req, res) => {
  try {
    const { feature } = req.body
    const user = await userModel.findOne({
      $or: [
        {
          Feature1: feature
        },
        {
          Feature2: feature
        },
        {
          Feature3: feature
        },
        {
          Feature4: feature
        },
        {
          Feature5: feature
        },
        {
          Feature6: feature
        }
      ]
    }).select("-Feature1 -Feature2 -Feature3 -Feature4 -Feature5 -Feature6 -_id")
    res
    .status(StatusCodes.OK)
    .json({ message:  '✅ Done!' , Person_Data: user })
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'fail to get' })
  }
}
