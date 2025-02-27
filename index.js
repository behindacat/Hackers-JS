const countDownBoxEl = document.querySelector('.container__countDownBox')
const targetDate = new Date('2025-12-31 23:59:59')

let endTime = new Date(targetDate).getTime()
let period = endTime - new Date().getTime()

let days = ''
let hours = ''
let minutes = ''
let seconds = ''

function countDown() {
    period = endTime - new Date().getTime()

    console.log(period)

    const daysValue = Math.floor(period / (1000 * 60 * 60 * 24))
    const hoursValue = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesValue = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60))
    const secondsValue = Math.floor((period % (1000 * 60)) / 1000)

    days = daysValue
    hours = hoursValue
    minutes = minutesValue
    seconds = secondsValue
}

setInterval(() => {
    countDown()

    countDownBoxEl.innerHTML = `<div class="container__countDownBox__countDown">
        <div class="layout">
            <span class="layout__text">마감</span>
            <div class="layout__time">${days}일</div>
            <div class="layout__time">${hours}시간</div>
            <div class="layout__time">${minutes}분</div>
            <div class="layout__time">${seconds}초</div>
            <span class="layout__text">전 이에요.</span>
        </div>
        <button class="button">포트폴리오 보기</button>
    </div>`
}, 1000)