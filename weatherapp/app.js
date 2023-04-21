const request = require('request')

const url = "https://api.openweathermap.org/data/2.5/weather?q=ongole&appid=29dc9e040eb078084993bb2aea613ffb"

request({url :url}, (error,response) => {
    console.log(JSON.parse(response.body))
})