document.addEventListener('DOMContentLoaded', () => {
  const events = [
    { name: '100m Race', time: '09:00' },
    { name: 'Long Jump', time: '10:30' },
    { name: 'Relay Race', time: '11:15' },
    { name: 'High Jump', time: '13:00' },
    { name: '400m Race', time: '14:30' }
  ];

  const eventList = document.getElementById('event-list');

  events.forEach(event => {
    const li = document.createElement('li');
    li.dataset.time = event.time;

    const eventName = document.createElement('span');
    eventName.textContent = event.name;

    const eventTime = document.createElement('span');
    eventTime.textContent = event.time;
    eventTime.classList.add('time');

    li.appendChild(eventName);
    li.appendChild(eventTime);
    event
::contentReference[oaicite:1]{index=1}
 
