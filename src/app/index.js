import * as $ from 'jquery'
import Person from './person'
import title from './title'
import './babel'
import '@styles/scss.scss'
import '@styles/less.less'
import '@styles/styles.css'

let andrey = new Person('Андрей', '21')
andrey.speak()

//start().then(console.log)

document.body.prepend(title)

setInterval(() => {
    let time = new Date()
    let min = String(time.getMinutes())
    let sec = String(time.getSeconds())
    $('.clock').html(`${time.getHours()}:${min.length < 2 ? `0${min}` : min}:${sec.length < 2 ? `0${sec}` : sec}`)
}, 1000)

console.log('xld')