export const priceFormat = (number) => {
    return number ? `Rp. ${numberFormat(number)}` : `Rp. 0`;
}

export const numberFormat = (number) => {
    return (number || "")
        .toString()
        .replace(/^0|\./g, "")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}