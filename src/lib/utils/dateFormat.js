export const dateFormat = (date) => {
    const formatter = new Intl.DateTimeFormat('id', { dateStyle: 'short', timeStyle: 'short' });
    return formatter.format(date);
}