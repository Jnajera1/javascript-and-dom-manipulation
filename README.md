# JavaScript and DOM Manipulation

### Data

The data.js file had more entries such as these two:

```javascript
var data = [{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
  {
    datetime: "1/1/2010",
    city: "bonita",
    state: "ca",
    country: "us",
    shape: "light",
    durationMinutes: "13 minutes",
    comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
  }]
```

### Set Up

I used a premade index.html file with fancy bootstrap and images already chosen. I intend to come back through and customize the index.html and style.css with the latest bootstrap and my own design ideas. For now, I want to make sure my code works first, then I can move to design.


### Main File: app.js

In this file, I started with making more explicit variables than just 'data' in order to remember more easily throughout coding. If this file had been larger with many more functions, this would be especially important to think of from the start.

Using d3.js, I was able to search through the HTML and select the 'tbody' tag in order to make it my variable for the entire table body.

```javascript
// create more explicit variable
var tableData = data;

// create tbody variable to use when appending data
var tbody = d3.select('tbody');
```

Next, I wanted to loop through all the 'tableData' and add a new row <tr> for each object with the values of their keys in new cells <td>. I was able to append the cells and the text of data at the same time.

```javascript
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
```

After that, I made a variable for the Search button to reference when giving it functionality.

```javascript
// create button variable to be used in function
var button = d3.select('#filter-btn');
```

Finally, for the functionality of the Search button, I added an event listener through 'on'. I created three variables inputs and values to search for: date, state, and city. However, when filtering through the data to return the correct results, all three must be searched exactly to work. For example, with the code as it is now, if you search for the date '1/1/2010', it will appear as if there is no data for that date. This is because of the AND && operator. I want to keep searching how to use multiple search options to be AND/OR while also filtering with d3.js.

```javascript
// function that will get user input from form and use it to filter upon clicking button
button.on('click', function() {
    // make variables for inputs and values for date and city
    var dateInput = d3.select('#date-filter');
    var dateValue = dateInput.property('value');
    var stateInput = d3.select('#state-filter');
    var stateValue = stateInput.property('value');
    var cityInput = d3.select('#city-filter');
    var cityValue = cityInput.property('value');

    // use input to filter data by date
    var filtered = tableData.filter(item => item.datetime === dateValue && item.state === stateValue.toLowerCase() && item.city === cityValue.toLowerCase());
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
```


```javascript

```


```javascript

```


```javascript

```