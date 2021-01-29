
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
        
            // Store the post data to a variable
            //post = data;
         // var locationText = document.getElementById('location');
           document.getElementById('location').textContent = res.name + "," + res.sys.country;
           document.getElementById('temp').textContent = Math.floor(res.main.temp);
           console.log(res);
           console.log(res.name);

           data.cTemp = Math.floor(res.main.temp);

           // F = C * 1.8 + 32
           data.fTemp = Math.floor(res.main.temp * 1.8 + 32);
           //console.log(data.cTemp);

        });

    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  
    navigator.geolocation.getCurrentPosition(success, error, options);

    function myFunction() {
        var cTemp = document.getElementById("cTemp");
        if (cTemp.style.display === "none") {
            cTemp.style.display = "inline-block";
        } else {
            cTemp.style.display = "none";
        }

         var fTemp = document.getElementById("fTemp");
         fTemp.classList.toggle("fTempShow");

         console.log(data.fTemp);

     }
        
    
    // setTimeout(()=>{
    //    getData();
    // }, 2000)
   
  
    
    
