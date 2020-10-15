// Function for formatting date in local date:
export const formatDate = (time) => {
    const date = new Date(time);
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const valid_timeZone = (currentTimeZone !== undefined) ? currentTimeZone : 'Europe/Belgrade';
    const date_format = 'sr-RS';

    return date.toLocaleString(`${date_format}`, { timeZone: valid_timeZone });
};

// Function for handling axios errors - api errors

export const handleErrors = (error) => {
    if ((error.response)) {
        const status = error.response.status;
        const msg = error.response.data.message;
        return `${status} - ${msg}`;
    } else { console.log(error); }
};