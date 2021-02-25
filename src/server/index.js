const express = require('express')
const request = require('request')
const router = express.Router()

router.get("/download/:path", async (req, res) => {
    const path = req.params.path
    const tokenId = "1KJMAHVGUYRVQ8QZS3KPKKNEBSKVUXXT"
    console.log("here")
    const query = `https://screenshotapi.net/api/v1/screenshot?url=${path}&output=image&token=1KJMAHVGUYRVQ8QZS3KPKKNEBSKVUXXT`
    console.log(query)
    req.pipe(request.get(query)).pipe(res)
})
module.exports = router


