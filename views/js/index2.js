var map;
function getString(str) {
	var finalstring = '';
	if (str == 'India') {
		var Name = 'Taj Mahal, India';
		var src = '/taj.gif';
		content = `"The Taj Mahal rises above the banks of the river like a solitary tear suspended on the cheek of time".`;
		finalstring = `<div class="a">
            
               <b>${Name}</b>
               <img src="${src}" >
               <div class="content">${content}</div>
             </div>`;
	}
	if (str == 'Egypt') {
		var Name = 'Great Pyramid of Giza, Egypt';
		var src = '/egypt.gif';
		content = `“The significance of King's Chamber of the Great Pyramid of Giza is not only 
          demonstrated through its positioning inside the pyramid structure, but also through its size.”`;
		finalstring = `<div class="a">
            
               <b>${Name}</b>
               <img src="${src}">
               <div class="content">${content}</div>
             </div>`;
	}
	if (str == 'China') {
		var Name = 'Great Wall of China';
		var src = '/china.jpg';
		content = `"Consider the Great Wall of China, if you will: one stone at a time, man. That's all. One stone at a time."`;
		finalstring = `<div class="a">
            
               <b>${Name}</b>
               <img src="${src}">
               <div class="content">${content}</div>
             </div>`;
	}
	if (str == 'Jordan') {
		var Name = 'Petra, Jordan';
		var src = '/petra.jpg';
		content = `“Petra is a brilliant display of man's artistry in turning barren rock into a majestic wonder.”`;
		finalstring = `<div class="a">
            
               <b>${Name}</b>
               <img src="${src}">
               <div class="content">${content}</div>
             </div>`;
	}
	if (str == 'Italy') {
		var Name = 'Colosseum, Italy';
		var src = '/italy.jpg';
		content = `“Rome will exist as long as the Coliseum does; when the Coliseum falls, so will Rome; when Rome falls, so will the world.”`;
		finalstring = `<div class="a">
            
               <b>${Name}</b>
               <img src="${src}">
               <div class="content">${content}</div>
             </div>`;
	}
	if (str == 'Mexico') {
		var Name = 'Chichen Itza, Mexico';
		var src = '/mexico.jpg';
		content = `“The stepped pyramids, temples, columned arcades, and other stone structures of Chichén Itzá were sacred to the Maya and a sophisticated urban center of their empire from A.D. 750 to 1200."`;
		finalstring = `<div class="a">
            
               <b>${Name}</b>
               <img src="${src}">
               <div class="content">${content}</div>
             </div>`;
	}
	if (str == 'Peru') {
		var Name = 'Machu Picchu, Peru';
		var src = '/peru.jpg';
		content = `"Machu Picchu symbolizes the excellent technical skill, and productivity of the Inca Empire in its apogee."`;
		finalstring = `<div class="a">
            
               <b>${Name}</b>
               <img src="${src}">
               <div class="content">${content}</div>
             </div>`;
	}
	if (str == 'Brazil') {
		var Name = 'Christ the Redeemer, Brazil';
		var src = '/brazil.jpg';
		content = `“The redeemer is a restorer.”`;
		finalstring = `<div class="a">
            
               <b>${Name}</b>
               <img src="${src}">
               <div class="content">${content}</div>
             </div>`;
	}
	return finalstring;
}
function init() {
	map = WE.map('map', {
		center: [ 28.6139, 77.209 ],
		zoom: 3,
		dragging: true,
		sky: true,
		atmosphere: true,
		scrollWheelZoom: true
	});

	var baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
		tileSize: 256,
		bounds: [ [ -85, -180 ], [ 85, 180 ] ],
		minZoom: 0,
		maxZoom: 16,
		attribution: 'WebGLEarth example',
		tms: true
	}).addTo(map);

	//Add TileJSON layer
	var json = {
		profile: 'mercator',
		name: 'Grand Canyon USGS',
		format: 'png',
		bounds: [ -112.26379395, 35.98245136, -112.10998535, 36.13343831 ],
		minzoom: 10,
		version: '1.0.0',
		maxzoom: 16,
		center: [ -112.18688965, 36.057944835, 13 ],
		type: 'overlay',
		description: '',
		basename: 'grandcanyon',
		tilejson: '2.0.0',
		sheme: 'xyz',
		tiles: [ 'http://tileserver.maptiler.com/grandcanyon/{z}/{x}/{y}.png' ]
	};
	var grandcanyon = WE.tileLayerJSON(json);
	grandcanyon.addTo(map);

	grandcanyon.setOpacity(0.7);
	document.getElementById('opacity2').addEventListener('change', function(e) {
		grandcanyon.setOpacity(e.target.value);
	});

	const marker = WE.marker([ 27.1767, 78.0081 ], { title: 'TAJ MAHAL', draggable: true }).addTo(map);
	var str = getString('India');
	const popup = marker.bindPopup(str, { closeButton: true, className: 'InPop' });
	var marker2 = WE.marker([ 30.0444, 31.2357 ]).addTo(map);
	var str2 = getString('Egypt');
	marker2.bindPopup(str2, { maxWidth: 120, closeButton: true });

	var marker3 = WE.marker([ 39.9042, 116.4074 ]).addTo(map);
	var str3 = getString('China');
	marker3.bindPopup(str3, { maxWidth: 120, closeButton: true });

	var marker4 = WE.marker([ 30.5852, 36.2384 ]).addTo(map);
	var str4 = getString('Jordan');
	marker4.bindPopup(str4, { maxWidth: 120, closeButton: true });

	var marker5 = WE.marker([ 41.8719, 12.5674 ]).addTo(map);
	var str5 = getString('Italy');
	marker5.bindPopup(str5, { maxWidth: 120, closeButton: true });

	var marker6 = WE.marker([ 23.6345, 102.5528 ]).addTo(map);
	var str6 = getString('Mexico');
	marker6.bindPopup(str6, { maxWidth: 120, closeButton: true });

	var marker7 = WE.marker([ -3.7573846535249307, -75.42044465796648 ]).addTo(map);
	var str7 = getString('Peru');
	marker7.bindPopup(str7, { maxWidth: 120, closeButton: true });

	var marker8 = WE.marker([ -13.61208514966752, -52.641396663912374 ]).addTo(map);
	var str8 = getString('Brazil');
	marker8.bindPopup(str8, { maxWidth: 120, closeButton: true });

	marker.update();
}

function panTo(coords) {
	map.panTo(coords);
}
