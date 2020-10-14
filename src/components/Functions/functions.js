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
    ((error.response) && (error.response !== null && error.response !== undefined)) ?
        console.log(Object.values(error.response.data.errors)[0][0]) : console.log(error);
};