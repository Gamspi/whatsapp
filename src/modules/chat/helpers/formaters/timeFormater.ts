export const timeFormater = (ms: number) => {
    const time = new Date(ms)
    const hours = time.getHours()
    const minutes = time.getMinutes()
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}
