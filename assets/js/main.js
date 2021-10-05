const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
  let date = new Date()
  
  let hh = date.getHours() * 30,
      mm = date.getMinutes() * 6,
      ss = date.getSeconds() * 6

      hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
      minutes.style.transform = `rotateZ(${mm}deg)`
      seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock,1000) //1000 = 1s

const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()

    // Show a zero before hours
    if(hh < 10){hh = `0${hh}`}

    // Show time
    textHour.innerHTML = `${hh}:`
    
    // Show a zero before the minutes
    if(mm < 10){mm = `0${mm}`}

    // Show minutes
    textMinutes.innerHTML = mm
    

    let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year
}
setInterval(clockText, 1000) // 1000 = 1s
