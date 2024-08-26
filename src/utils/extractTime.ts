

export function extractTime(dateString: string | number | Date){
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;

}

function padZero(num: number): string {
    return num.toString().padStart(2,'0');

}