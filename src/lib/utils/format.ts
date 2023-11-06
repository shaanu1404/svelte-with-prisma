import moment from "moment";

export function dateFormat(date: Date): string {
    return moment(date).format('MMM DD, YYYY').toString()
}