const jsonString = `
      {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

function transformationJson(stringJson) {

	let data = JSON.parse(stringJson);
	
    let list = data.list;
	
	let result = {list: []};
	let objList = new Object();
	    
	list.forEach(function(elem) {
		objList = elem;

        result.list.push(objList);

	});
	console.log(result);
}
transformationJson(jsonString);
