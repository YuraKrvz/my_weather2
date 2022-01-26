export const API_KEY = '52384db87a489d7bf7951e5f1b8ed938';

export const CurrentCountryByCoordinates = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`; 

export const CurrentCountryByName = (name) => `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`;

export const getDate = () => {
      const date = new Date();  
      let month = date.getMonth() + 1;
          month = month  < 10 ? '0' + month : month;

   return `${date.getDate()}.${month}.${date.getFullYear()}`
};

export const getTime = (date) => {
   let hours = date.getHours();
       hours = hours < 10 ? '0' + hours : hours;
   let minutes = date.getMinutes();
       minutes = minutes < 10 ? '0' + minutes : minutes;
   return `${hours}:${minutes}`
};