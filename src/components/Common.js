export function numberToBath(data) {

    var value = ""
    if (data != "" || data != undefined) {
        value = new Intl.NumberFormat('th', { style: 'currency', currency: 'THB' }).format(data).replace(/\b(\w*THB\w*)\b/, '฿ ');
    }
    return value
}