console.log('// ************* Time Conversion **************** //')

const time = '12:05:45PM';
const times = '12:40:22AM'



// from 12:00 am to 12:59 am, stubract 12 hours - 00:00:00
//  from 1:00 am to 12:59 pm, hours and minutes stay the same - 3:59:45 am =  03:59:45
// from 1:00 pm to 11:59pm, add 12 hours - 3:17:23 pm = 15:16:23 


const timeConversion = (s) => {
    const cycle = s.slice(8,10)
    let hour = s.slice(0, 2);
    let min = s.slice(3, 5);
    let sec = s.slice(6, 8);
    let milHour = '';

    if (cycle == 'AM') {
        if (hour == '12') {
            milHour = '00'
        } else {
            milHour = s.slice(0,2);
        }

    } else  {
        if (hour == '12') {
            milHour = hour;
        } else {
            milHour = parseInt(hour, 10) + 12;
        }
    }
    return `${milHour}:${min}:${sec}`
    

}

console.log(timeConversion(time))
console.log(timeConversion(times))