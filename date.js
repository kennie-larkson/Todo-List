//jshint esversion: 6



const today = new Date()

    let options = { 
        weekday: 'long', 
        // year: 'numeric', 
        month: 'long', 
        day: 'numeric'}

    const day = today.toLocaleDateString("en-US", options)

    module.exports = day