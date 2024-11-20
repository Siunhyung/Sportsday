// Comprehensive list of all events, times, and placeholders for student data
const events = [
  {
    type: "Shot Putt",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00", students: [] },
      { category: "U7 Boys", time: "2024-11-20T08:30:00", students: [] },
      { category: "U9 Girls", time: "2024-11-20T09:00:00", students: [] },
      { category: "U9 Boys", time: "2024-11-20T09:00:00", students: [] },
      { category: "U11 Girls", time: "2024-11-20T09:30:00", students: [] },
      { category: "U11 Boys", time: "2024-11-20T09:30:00", students: [] },
      { category: "U13 Girls", time: "2024-11-20T10:00:00", students: [] },
      { category: "U13 Boys", time: "2024-11-20T10:00:00", students: [] },
      { category: "U15 Girls", time: "2024-11-20T10:15:00", students: [] },
      { category: "U15 Boys", time: "2024-11-20T10:15:00", students: [] },
    ],
  },
  {
    type: "Long Jump",
    events: [
      { category: "U7 Girls", time: "2024-11-20T08:30:00", students: [] },
      { category: "U7 Boys", time: "2024-11-20T08:30:00", students: [] },
      { category: "U9 Girls", time: "2024-11-20T09:00:00", students: [] },
      { category: "U9 Boys", time: "2024-11-20T09:00:00", students: [] },
      { category: "U11 Girls", time: "2024-11-20T09:30:00", students: [] },
      { category: "U11 Boys", time: "2024-11-20T09:30:00", students: [] },
      { category: "U13 Girls", time: "2024-11-20T10:00:00", students: [] },
      { category: "U13 Boys", time: "2024-11-20T10:00:00", students: [] },
      { category: "U15 Girls", time: "2024-11-20T10:15:00", students: [] },
      { category: "U15 Boys", time: "2024-11-20T10:15:00", students: [] },
    ],
  },
  {
    type: "Javelin",
    events: [
      { category: "U7 Girls", time: "2024-11-20T10:30:00", students: [] },
      { category: "U7 Boys", time: "2024-11-20T10:30:00", students: [] },
      { category: "U9 Girls", time: "2024-11-20T11:00:00", students: [] },
      { category: "U9 Boys", time: "2024-11-20T11:00:00", students: [] },
      { category: "U11 Girls", time: "2024-11-20T11:30:00", students: [] },
      { category: "U11 Boys", time: "2024-11-20T11:30:00", students: [] },
      { category: "U13 Girls", time: "2024-11-20T12:00:00", students: [] },
      { category: "U13 Boys", time: "2024-11-20T12:00:00", students: [] },
      { category: "U15 Girls", time: "2024-11-20T12:15:00", students: [] },
      { category: "U15 Boys", time: "2024-11-20T12:15:00", students: [] },
    ],
  },
  {
    type: "Triple Jump",
    events: [
      { category: "U7 Girls", time: "2024-11-20T10:30:00", students: [] },
      { category: "U7 Boys", time: "2024-11-20T10:30:00", students: [] },
      { category: "U9 Girls", time: "2024-11-20T11:00:00", students: [] },
      { category: "U9 Boys", time: "2024-11-20T11:00:00", students: [] },
      { category: "U11 Girls", time: "2024-11-20T11:30:00", students: [] },
      { category: "U11 Boys", time: "2024-11-20T11:30:00", students: [] },
      { category: "U13 Girls", time: "2024-11-20T12:00:00", students: [] },
      { category: "U13 Boys", time: "2024-11-20T12:00:00", students: [] },
      { category: "U15 Girls", time: "2024-11-20T12:15:00", students: [] },
      { category: "U15 Boys", time: "2024-11-20T12:15:00", students: [] },
    ],
  },
  // Add track events (800m, 600m, etc.) in similar structure
];

// JavaScript logic for handling interactivity
let openEventType = null;
let openSubEvent = null;

function displayEvents() {
  const eventsList = document.getElementById("eventsList");
  eventsList.innerHTML = ""; // Clear previous content

  events.forEach((eventType, typeIndex) => {
    const header = document.createElement("h2");
    header.textContent = eventType.type;
    header.classList.add("event-header");
    header.addEventListener("click", () => toggleEventType(typeIndex));
    eventsList.appendChild(header);
  });
}

function toggleEventType(typeIndex) {
  const eventType = events[typeIndex];
  const eventsList = document.getElementById("eventsList");

  const existingSubEventList = document.querySelector(".sub-event-list");
  if (existingSubEventList) existingSubEventList.remove();

  if (openEventType === typeIndex) {
    openEventType = null;
    return;
  }

  openEventType = typeIndex;

  const subEventList = document.createElement("ul");
  subEventList.classList.add("sub-event-list");

  eventType.events.forEach((event, eventIndex) => {
    const subEventItem = document.createElement("li");
    subEventItem.textContent = `${event.category} - ${new Date(event.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    subEventItem.classList.add("sub-event-item");
    subEventItem.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSubEvent(typeIndex, eventIndex);
    });
    subEventList.appendChild(subEventItem);
  });

  const headers = document.querySelectorAll(".event-header");
  headers[typeIndex].after(subEventList);
}

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

window.onload = displayEvents;
