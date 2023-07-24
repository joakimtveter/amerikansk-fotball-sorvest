export default function norwegianDateTimeString(date: string): string {
    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    return `${day}.${month}.${year} - ${hours}:${minutes}`;
}
