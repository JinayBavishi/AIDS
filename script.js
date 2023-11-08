google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // Sample data
    var data = [
        { age: 52, thalach: 168, chol: 212, target: 0 },
        { age: 53, thalach: 155, chol: 203, target: 1 },
        { age: 70, thalach: 125, chol: 174, target: 0 },
        { age: 61, thalach: 161, chol: 203, target: 1 },
        { age: 62, thalach: 106, chol: 294, target: 0 }
        // Add more data...
    ];

    // Google Chart - Line Chart
    var googleDataLine = new google.visualization.DataTable();
    googleDataLine.addColumn('string', 'Age');
    googleDataLine.addColumn('number', 'Maximum Heart Rate');

    data.forEach(function (entry) {
        googleDataLine.addRow([entry.age.toString(), entry.thalach]);
    });

    var googleChartLine = new google.visualization.LineChart(document.getElementById('googleChartContainer'));
    googleChartLine.draw(googleDataLine, {
        title: 'Age vs. Maximum Heart Rate',
        hAxis: { title: 'Age' },
        vAxis: { title: 'Maximum Heart Rate' },
        colors: ['#4285F4'],
        legend: 'none',
        lineWidth: 2,
        pointSize: 6,
        backgroundColor: { fill: 'transparent' },
        chartArea: { width: '80%', height: '70%' },
    });

    // Google Chart - Pie Chart
    var targetData = google.visualization.arrayToDataTable([
        ['Target', 'Count'],
        ['Target 0', countTarget(data, 0)],
        ['Target 1', countTarget(data, 1)]
    ]);

    var googleChartPie = new google.visualization.PieChart(document.getElementById('googlePieChartContainer'));
    googleChartPie.draw(targetData, {
        title: 'Distribution of Targets',
        colors: ['#0F9D58', '#DB4437'],
        chartArea: { width: '80%', height: '70%' },
    });

    // Google Chart - Column Chart for 'chol' values
    var googleDataChol = new google.visualization.DataTable();
    googleDataChol.addColumn('string', 'Age');
    googleDataChol.addColumn('number', 'Cholesterol Level');

    data.forEach(function (entry) {
        googleDataChol.addRow([entry.age.toString(), entry.chol]);
    });

    var googleChartChol = new google.visualization.ColumnChart(document.getElementById('googleCholChartContainer'));
    googleChartChol.draw(googleDataChol, {
        title: 'Age vs. Cholesterol Level',
        hAxis: { title: 'Age' },
        vAxis: { title: 'Cholesterol Level' },
        colors: ['#EA4335'],
        legend: 'none',
        backgroundColor: { fill: 'transparent' },
        chartArea: { width: '80%', height: '70%' },
    });
}

function countTarget(data, targetValue) {
    return data.filter(function (entry) {
        return entry.target === targetValue;
    }).length;
}
