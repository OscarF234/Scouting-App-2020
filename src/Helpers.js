function prettyPrintTimer({seconds}) {
    if (seconds < 0) {
        seconds = 0;
    }

    if (seconds >= 120) {
        return "2:"+twoDigit((seconds%60));
    } else if (seconds >= 60) {
        return "1:"+twoDigit((seconds%60));
    } else {
        return "0:"+twoDigit((seconds%60));
    }
}

function twoDigit(number) {
    if (number.toString().length > 1) {
        return number;
    } else {
        return "0"+number
    }
}

export default prettyPrintTimer;