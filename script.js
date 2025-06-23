document.addEventListener('DOMContentLoaded', function() {
    const weekCards = document.querySelectorAll('.week-card');
    const currentDate = new Date();
    
    console.log('Current date:', currentDate.toLocaleString());

    weekCards.forEach(card => {
        const dateText = card.querySelector('.week-dates').textContent;
        const endDate = parseWeekEndDate(dateText);
        
        console.log('Week end date:', endDate.toLocaleString(), 'Is past?', currentDate > endDate);
        
        if (currentDate > endDate) {
            card.classList.add('past-week');
        }
    });
});

function parseWeekEndDate(dateText) {
    // Format expected: "Month Day - Month Day"
    const endDateStr = dateText.split('-')[1].trim();
    const [month, day] = endDateStr.split(' ');
    
    const monthMap = {
        'January': 0, 'Jan': 0,
        'February': 1, 'Feb': 1,
        'March': 2, 'Mar': 2,
        'April': 3, 'Apr': 3,
        'May': 4,
        'June': 5,
        'July': 6,
        'August': 7, 'Aug': 7,
        'September': 8, 'Sep': 8,
        'October': 9, 'Oct': 9,
        'November': 10, 'Nov': 10,
        'December': 11, 'Dec': 11
    };

    // Use 2025 as the year since it's the current season
    const date = new Date(2025, monthMap[month], parseInt(day));
    // Set to end of day
    date.setHours(23, 59, 59, 999);
    
    return date;
}
