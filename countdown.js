const countDown = () =>{
    let mySeconds = seconds.value
    let myMinute = minutes.value
    let myHour = hour.value 
    setTimeout(countDown, 1000)
    if(myHour == 0 && myMinute == 0 && mySeconds == 0){
        seconds.value = "00"
        minutes.value = "00"
        hour.value = "00"
    }
    else if(mySeconds !=0){
            seconds.value--
    }
    else if(minutes.value !=0 && seconds.value==0){
        seconds.value = 59
        minutes.value--
    }
    else if(hour.value !=0 && minutes.value==0){
        minutes.value = 60
        hour.value--
    }
}
const reset = ()=>{
    location.reload()
    // seconds.value = "00"
    // minutes.value = "00"
    // hour.value = "00"
}
