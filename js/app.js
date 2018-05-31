$(document).ready(function(){
 console.log(data);

 function initialize() {
	var  locations=Object.keys(data);
	 console.log(locations);
 }

function locationDetail(locationName){
	var locationObj = data[name];
	var generations = Object.keys(locationObj);
	generations.forEach(function (item, index){
		var generation =locationObj[item];
		var students= generation.students;
		
	});

};
initialize ();

 new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 5 },
    { year: '2012', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});

/*$.ajax({
	method: "get",
  url: "https://free.currencyconverterapi.com/api/v5/countries",
  context: document.body
}).done(function(error,element) {
	console.log(error,element);
});*/

});

// API
//https://data.fixer.io/api/latest
