setInterval(updateClock, 1000);

function updateClock() {
  const now = new Date();


  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';


  hours = hours % 12;
  hours = hours ? hours : 12;


  const format = num => num < 10 ? "0" + num : num;

  
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  document.getElementById("dateDisplay").innerHTML = `${day}, ${month} ${date}, ${year}`;

  
  document.getElementById("timeDisplay").innerHTML =
    `${format(hours)}:${format(minutes)}:${format(seconds)} ${ampm}`;
}