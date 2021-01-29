var data = {
    cTemp: '',
    fTemp: ''
};

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  

    fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${crd.latitude}&lon=${crd.longitude}`).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(function (res) {
        
           document.getElementById('location').textContent = res.name + "," + res.sys.country;
           document.getElementById('temp').textContent = Math.floor(res.main.temp);
           document.getElementById('description').textContent = res.weather[0].main;
           document.getElementById('image').src = res.weather[0].icon;
           
           // store c & f temps in data obj
           data.cTemp = Math.floor(res.main.temp);
           // F = C * 1.8 + 32
           data.fTemp = Math.floor(res.main.temp * 1.8 + 32);

        });
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  
    navigator.geolocation.getCurrentPosition(success, error, options);

    function getTemp() {
        var cTemp = document.getElementById("cTemp");
        if (cTemp.style.display === "none") {
            document.getElementById('temp').textContent = data.cTemp;
            console.log(data.cTemp)
            cTemp.style.display = "inline-block";
            
        } else {
            cTemp.style.display = "none";
            document.getElementById('temp').textContent = data.fTemp;
        }

         var fTemp = document.getElementById("fTemp");
         
         fTemp.classList.toggle("fTempShow");
     }
        
  
    
    
