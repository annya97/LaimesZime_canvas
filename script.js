$(document).ready(function() {
    function getGridSize() {
        //let gridSize = 18;
    }

    function createSmallGrid() {
        let grid = '<table id="result-sign">';
        for (let i = 1; i <= 9; i++) {
            grid += '<tr>';
            for (let j = 1; j <= 9; j++) {
                let cellValue = (i * j) % 10;
                grid += '<td class="value-' + cellValue + '">'+cellValue+'</td>';
            }
            grid += '</tr>';
        }
        grid += '</table>';
        $('#result-sign-wrap').html(grid);
    }

    function createMediumGrid() {
        createSmallGrid();
    }

    function color() {
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

        // Color grid's cells
        $.each(uniqueNumbers, function(index, value) {
            $('.value-' + value).css('background-color', 'red');
        });
    }

    function makeImage() {
        var table = $('#result-sign')[0];
        var element = $('#result-sign-wrap')[0];
        var getCanvas;

        for (let i = 0; i < 4; i++) {
            html2canvas(table).then(function(canvas) {
                element.append(canvas);
                let nthCanvas = i + 1;
                $('canvas').eq(i).addClass('canvas-' + nthCanvas);
            });
        }

        $('table').remove();
    }

    function makeAllImage() {

    }

    $('#calculate-btn').click(function() {
        createMediumGrid();
        //color();
        makeImage();
        makeAllImage();
    });

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
});