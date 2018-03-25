'use strict'
const line = require('./index')

// init with auth token
line.init({
  accessToken: 'BIgjEJ10YTGLTeSgeI17mwDOHjltpqM9eSwa3Vd8OBy1DMKOieslwiEM7hx/G+HUAKPCzzeGpTpyTLkB7AABQ1U5+NsTwK/dp8EingGgIIl7gLglcl0MVYUUf0H4V5zPuqNGdUXHN0gW4G/FJA1kdAdB04t89/1O/w1cDnyilFU=',
  // (Optional) for webhook signature validation
  channelSecret: '68325863c8d4ba7acf0cc2d4699bfc49'
})

line.client
  .pushMessage({
    to: '{YOUR_MID}',
    messages:[
        {
            "type":"text",
            "text":"Hello, world1"
        },
        {
            "type":"text",
            "text":"Hello, world2"
        }
    ]
  })
  .then(() => console.log({success: true}))
  .catch(err => console.log(err))
