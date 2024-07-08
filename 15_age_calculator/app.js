const date=document.getElementById("dates")
let year=document.getElementById("year")
let month=document.getElementById("month")
let days=document.getElementById("days")
document.getElementById("btn").addEventListener("click",()=>{
    let now=Date.now();
    let presentDate=new Date(now)
    let presentYear=presentDate.getFullYear()
    let presentMonth=presentDate.getMonth()
    let presentDays=presentDate.getDay()

    let birthDate=date.value
    let splitDate=birthDate.split('-')
    let birthYear=splitDate[0]
    let birthMonth=splitDate[1]
    let birthDays=splitDate[2]

    let finalYear=Math.abs(presentYear-birthYear)
    let finalMonth=Math.abs(presentMonth-birthMonth)
    let finalDays=Math.abs(presentDays-birthDays)
    year.innerText=`${finalYear}`
    month.innerText=`${finalMonth}`
    days.innerText=`${finalDays}`
})