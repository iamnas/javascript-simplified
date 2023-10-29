import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, fromUnixTime, getUnixTime, isSameDay, isSameMonth, startOfMonth, startOfWeek, subMonths } from 'date-fns'


const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const nextMonthButton = document.querySelector('.next-month-button')
const previousMonthButton = document.querySelector('.prev-month-button')
const dateGrid = document.querySelector('.date-picker-grid-dates')
let currentDate = new Date()

datePickerButton.addEventListener('click', () => {
    datePicker.classList.toggle("show")
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)
    currentDate = selectedDate
    setUpDatePicker(selectedDate)
})

function setDate(date) {
    datePickerButton.innerHTML = format(date, `MMMMMMM do, y`)

    datePickerButton.dataset.selectedDate = getUnixTime(date)

    // datePickerHeaderText.innerHTML = format(date, `MMMM - y`)
}

function setUpDatePicker(selectedDate) {
    datePickerHeaderText.innerHTML = format(currentDate, `MMMM - y`)

    setUpDates(selectedDate)

    //  setUpMonthButtons(selectedDate)
}

function setUpDates(selectedDate) {
    const firstWeekStart = startOfWeek(startOfMonth(currentDate))
    const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
    const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd })

    dateGrid.innerHTML = "" 

    dates.forEach(date => {
        const dateElement = document.createElement('button')
        dateElement.classList.add('date')
        dateElement.innerText = date.getDate()
        // console.log(date)

        if(!isSameMonth(date,currentDate)){
            dateElement.classList.add('date-picker-other-month-date')
        }
        
        // if(date.getDate() === selectedDate.getDate()){
        //     dateElement.classList.add('selected')
        // }

        if(isSameDay(date,selectedDate)){
            dateElement.classList.add('selected')
        }

        dateElement.addEventListener('click',()=>{
            setDate(date)
            datePicker.classList.remove('show')
        })
        dateGrid.appendChild(dateElement)
    })

}
// function setUpMonthButtons(selectedDate) {

nextMonthButton.addEventListener('click', () => {
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)

    currentDate = addMonths(currentDate, 1)
    setUpDatePicker(selectedDate);
});

previousMonthButton.addEventListener('click', () => {
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate)

    currentDate = subMonths(currentDate, 1)
    setUpDatePicker(selectedDate);
});


// }


setDate(new Date())