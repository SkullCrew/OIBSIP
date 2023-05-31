function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitInput = document.getElementById("unitInput").value;
    let result;
  
    if (unitInput === "celsius") {
      result = `${temperatureInput}°C is equivalent to ${(temperatureInput * 9/5) + 32}°F and ${parseFloat(temperatureInput) + 273.15}K.`;
    } else if (unitInput === "fahrenheit") {
      result = `${temperatureInput}°F is equivalent to ${(temperatureInput - 32) * 5/9}°C and ${((temperatureInput - 32) * 5/9) + 273.15}K.`;
    } else if (unitInput === "kelvin") {
      result = `${temperatureInput}K is equivalent to ${temperatureInput - 273.15}°C and ${((temperatureInput - 273.15) * 9/5) + 32}°F.`;
    }
  
    document.getElementById("result").innerHTML = `Result: ${result}`;
  }
  