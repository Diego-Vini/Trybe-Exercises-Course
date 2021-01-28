const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature (x) {
    return console.log(getMarsTemperature(x)) 
}


sendMarsTemperature(90); // imprime "Mars temperature is: 20 degree Celsius", por exemplo