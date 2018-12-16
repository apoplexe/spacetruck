export default (widthInCm: number, heightInCm: number, lengthInCm: number, precision?: number): number => {
    const widthInMeter = widthInCm/100
    const heightInMeter = heightInCm/100
    const lengthInMeter = lengthInCm/100
    const volume = widthInMeter * heightInMeter * lengthInMeter

    return parseFloat((volume).toFixed(precision || 1))
}
