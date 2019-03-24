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

export function transformTextStatus(value,sex){
    switch (true) {
        case (value <= 10):
            return 'Домосед';
        case (value <= 30):
            return 'Фанат';
        case (value <= 50):
            return 'Патимейкер';
        default:
            if (sex === 2) {
                return 'Король вечеринок';
            }else {
                return 'Королева вечеринок';
            }

    }
}

export function getUserLevel(value){
    let res = value + ' ур.';
    return res;
}

export function colorTextStatus(value){
    switch (true) {
        case (value <= 10):
            return '#228B22';
        case (value <= 30):
            return '#5281b7';
        case (value <= 50):
            return '#FF7F50';
        default:
            return '#FF0000';
    }
}
