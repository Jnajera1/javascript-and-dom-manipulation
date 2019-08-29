// create more explicit variable
var tableData = data;

// create tbody variable to use when appending data
var tbody = d3.select('tbody');

// append objects from data.js into new table rows inside table body
tableData.forEach(item => {
    var tr = tbody.append('tr');
    tr.append('td').text(item.datetime);
    tr.append('td').text(item.city);
    tr.append('td').text(item.state);
    tr.append('td').text(item.country);
    tr.append('td').text(item.shape);
    tr.append('td').text(item.durationMinutes);
    tr.append('td').text(item.comments);
});

// create button variable to be used in function
var button = d3.select('#filter-btn');

// function that will get user input from form and use it to filter upon clicking button
button.on('click', function() {
    // make variables for inputs and values for date and city
    var dateInput = d3.select('#date-filter');
    var dateValue = dateInput.property('value');
    // var stateInput = d3.select('#state-filter');
    // var stateValue = stateInput.property('value');
    // var cityInput = d3.select('#city-filter');
    // var cityValue = cityInput.property('value');

    // use input to filter data by date
    var filtered = tableData.filter(item => item.datetime === dateValue)
    //  && item.state === stateValue.toLowerCase() && item.city === cityValue.toLowerCase());
    // console.log(filtered);
    // clear table info before appending filtered data
    tbody.html(``);
    // adding filtered data
    filtered.forEach( item => {
        var tr = tbody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    });
});