## DESCRIPTION

A simple web app that fetchs tweets of an user, and display the result in a bar chart, highlighting his engagement state(likes and retweet). Simply insert the twitter user ID and the number of tweet you want to fetch.

### Note
since it hosted on [Heroku](https://devcenter.heroku.com/), with the free dyno plan, it will take a while to load the app, since heroku puts in sleep mode basics apps that do not receive traffic in a 30 minute period.

### Build with
[Nuxt.js](https://nuxtjs.org/)


[Bootstrap Vue](https://bootstrap-vue.js.org/)


[Chart JS](https://www.chartjs.org/)

[Express js](http://expressjs.com/)

[Twit](https://github.com/ttezel/twit)

[Vuex](https://vuex.vuejs.org/guide/)


## DEMO

https://twitter-data-mining.herokuapp.com/

## SCREENSHOTS

![main_interface](https://user-images.githubusercontent.com/19554149/42648220-90e65292-8606-11e8-98df-38d8a6b5a2f5.png)

------------------------------------------------


------------------------------------------------




## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
