export const dateFormatter = (date) => {
    // Format the dates in yyyy-mm-dd format
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const dateWithDifference = (dayDiff) => {
    // Get the current date
    const currentDate = new Date();
    // Calculate the date that was 3 days ago
    const pastDate = new Date(currentDate);
    pastDate.setDate(currentDate.getDate() - dayDiff);
    return pastDate;
};

