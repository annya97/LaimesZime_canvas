$(document).ready(function() {
    //let gridSize = 18;
    let grid = '';
    for (let i = 1; i <= 9; i++) {
        grid += '<tr>';
        for (let j = 1; j <= 9; j++) {
            let cellValue = (i * j) % 10;
            grid += '<td class="value-' + cellValue + '"></td>';
        }
        grid += '</tr>';
    }
    $('#result-sign').html(grid);

    $('#calculate-btn').click(function() {
        // Clear grid
        $('td').css('background-color', 'white');

        // Get user input
        let birthDate = [];
        birthDate.push($('#birth-day').val().split(''));
        birthDate.push($('#birth-month').val().split(''));
        birthDate.push($('#birth-year').val().split(''));

        // Set numbers from user input in one array
        let numbers = [].concat.apply([], birthDate);

        // Filter array to get only unique numbers
        let uniqueNumbers = numbers.filter(function(value, index) {
            return index === numbers.indexOf(value);
        });

        uniqueNumbers.sort();

        // Color grid's cells
        $.each(uniqueNumbers, function(index, value) {
            $('.value-' + value).css('background-color', 'red');
        });
    });
});