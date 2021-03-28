// @ts-ignore
import formatCurrencyToBr from 'format-currency-to-br'

export const ToReal = (value: string | number): string => {
    let newValue: string = formatCurrencyToBr(value.toString()).toString()
    return newValue.replace(/\s{2,}/g, ' ');
}