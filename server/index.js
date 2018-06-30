require('dotenv').config()
const Twit = require('promised-twit')
const T_config = require('./config')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const T = new Twit(T_config)
app.set('port', port)
app.use(cors())
app.use(bodyParser.json())


// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //res.setHeader('Access-Control-Allow-Methods', '*');
    //res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });
  app.get('/data',(req,res) => {
    let params = req.query
    T.get('statuses/user_timeline', params)
            .then( response => {
              let data = response.data.map((d)=> Object.assign({},{
                        id:d.id,
                        slug: d.id_str,
                        created: d.created_at,
                        text: d.text,
                        hashtags: d.entities.hashtags,
                        engagement: {
                          retweets: d.retweet_count,
                          likes: d.favorite_count,
                          mentions: d.entities.user_mentions
                       },
                       urls: d.entities.urls,
                       
                       user:{
                         id: d.user.id,
                         name: d.user.name,
                         screen_name: d.user.screen_name,
                         followers: d.user.followers_count,
                         friends: d.user.friends_count,
                         image: d.user.profile_image_url_https,
                         location: d.user.location,
                         description: d.user.description,
                         url:d.user.entities.url.urls.map((url => url.expanded_url))
                       }
              }))
              res.send(data)
            }) 
            .catch(err => res.send(err))
  })

  app.get('/error',(req,res)=>{
    console.log(req.query)
  })
  // Give nuxt middleware to express
  app.use(nuxt.render)
  
  
  
  
  
  
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
