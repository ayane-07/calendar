document.addEventListener('DOMContentLoaded', () => {
    const calendarElement = document.getElementById('calendar');
    const monthYearElement = document.getElementById('monthYear');
    const datesElement = document.getElementById('dates');
    const themeSelect = document.getElementById('themeSelect');
    
    const today = new Date();
    const currentMonth = today.getMonth(); // 0: January, 1: February, ...
    const currentYear = today.getFullYear();
    
    function generateCalendar(month, year) {
        // Clear existing dates
        datesElement.innerHTML = '';
        
        // Get the first and last day of the month
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        
        // Set month and year in header
        monthYearElement.textContent = `${year}年 ${month + 1}月`;
        
        // Add empty cells for days of the week before the first day
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'date empty';
            datesElement.appendChild(emptyCell);
        }
        
        // Add date cells
        for (let day = 1; day <= lastDate; day++) {
            const dateCell = document.createElement('div');
            dateCell.className = 'date';
            dateCell.textContent = day;
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dateCell.classList.add('today');
            }
            datesElement.appendChild(dateCell);
        }
    }
    
    function applyTheme(theme) {
        const themes = ['red', 'blue', 'pink', 'green', 'yellow', 'black'];
        calendarElement.classList.remove(...themes);
        calendarElement.classList.add(`${theme}-theme`);
    }
    
    themeSelect.addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });
    
    // Generate the calendar for the current month
    generateCalendar(currentMonth, currentYear);
    applyTheme(themeSelect.value); // Apply initial theme
});
