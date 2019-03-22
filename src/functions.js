export function getAgeByBDate(date){
    console.log(date);
    let today = new Date();
    let bdate = new Date(date.split('.')[2],date.split('.')[1],date.split('.')[0]);
    return Math.round((today.valueOf()-bdate.valueOf())/1000/60/60/24/365.25);
}


export function getDescriptionAge(number) {
    if ((number > 9) && (number < 21)) {
        return number + ' лет';
    }
    if (number % 10 === 1) {
        return number + ' год';
    }
    if (number % 10 < 5) {
        return number + ' года';
    }
    if (number % 10 >= 5) {
        return number + ' лет';
    }
}
