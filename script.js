// Comprehensive list of events, times, and placeholders for student data
const events = [
  {
    type: "Shot Putt",
    events: [
      { category: "U7 Girls", time: "08:30", students: [] },
      { category: "U7 Boys", time: "08:30", students: [] },
      { category: "U9 Girls", time: "09:00", students: [] },
      { category: "U9 Boys", time: "09:00", students: [] },
      { category: "U11 Girls", time: "09:30", students: [] },
      { category: "U11 Boys", time: "09:30", students: [] },
      { category: "U13 Girls", time: "10:00", students: [] },
      { category: "U13 Boys", time: "10:00", students: [] },
      { category: "U15 Girls", time: "10:15", students: [] },
      { category: "U15 Boys", time: "10:15", students: [] },
    ],
  },
  // Add more event types (Long Jump, Javelin, etc.) similarly
];

let openEventType = null;
let openSubEvent = null;

// Display all event types
function displayEvents() {
  const eventsList = document.getElementById("eventsList");
  eventsList.innerHTML = ""; // Clear existing content

  events.forEach((eventType, typeIndex) => {
    const header = document.createElement("h2");
    header.textContent = eventType.type;
    header.classList.add("event-header");
    header.addEventListener("click", () => toggleEventType(typeIndex));
    eventsList.appendChild(header);
  });
}

// Toggle sub-events for a specific event type
function toggleEventType(typeIndex) {
  const eventType = events[typeIndex];
  const eventsList = document.getElementById("eventsList");

  // Remove any existing sub-event lists
  const existingSubEventList = document.querySelector(".sub-event-list");
  if (existingSubEventList) existingSubEventList.remove();

  // Close the list if the same event type is clicked
  if (openEventType === typeIndex) {
    openEventType = null;
    return;
  }

  openEventType = typeIndex;

  const subEventList = document.createElement("ul");
  subEventList.classList.add("sub-event-list");

  eventType.events.forEach((event, eventIndex) => {
    const subEventItem = document.createElement("li");
    subEventItem.textContent = `${event.category} - ${event.time}`;
    subEventItem.classList.add("sub-event-item");

    // Compare event time against current time (ignoring date)
    const now = new Date();
    const [eventHour, eventMinute] = event.time.split(":").map(Number);
    const eventTime = new Date();
    eventTime.setHours(eventHour, eventMinute, 0, 0);

    if (now > eventTime) {
      subEventItem.classList.add("crossed-out");
    }

    subEventItem.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSubEvent(typeIndex, eventIndex);
    });
    subEventList.appendChild(subEventItem);
  });

  const headers = document.querySelectorAll(".event-header");
  headers[typeIndex].after(subEventList);
}

// Toggle student list for a sub-event
function toggleSubEvent(typeIndex, eventIndex) {
  const event = events[typeIndex].events[eventIndex];
  const subEventItems = document.querySelectorAll(".sub-event-item");

  const existingStudentList = document.querySelector(".student-list");
  if (existingStudentList) existingStudentList.remove();

  if (openSubEvent === `${typeIndex}-${eventIndex}`) {
    openSubEvent = null;
    return;
  }

  openSubEvent = `${typeIndex}-${eventIndex}`;

  const studentList = document.createElement("ul");
  studentList.classList.add("student-list");

  if (!event.students.length) {
    const noStudents = document.createElement("li");
    noStudents.textContent = "No students participated.";
    studentList.appendChild(noStudents);
  } else {
    event.students.forEach((student) => {
      const studentItem = document.createElement("li");
      studentItem.textContent = `${student.name} - ${student.performance}`;
      studentList.appendChild(studentItem);
    });
  }

  subEventItems[eventIndex].after(studentList);
}

// Initialize the event display
window.onload = displayEvents;
