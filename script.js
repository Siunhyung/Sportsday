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
  {
    type: "Long Jump",
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
  {
    type: "Javelin",
    events: [
      { category: "U7 Girls", time: "10:30", students: [] },
      { category: "U7 Boys", time: "10:30", students: [] },
      { category: "U9 Girls", time: "11:00", students: [] },
      { category: "U9 Boys", time: "11:00", students: [] },
      { category: "U11 Girls", time: "11:30", students: [] },
      { category: "U11 Boys", time: "11:30", students: [] },
      { category: "U13 Girls", time: "12:00", students: [] },
      { category: "U13 Boys", time: "12:00", students: [] },
      { category: "U15 Girls", time: "12:15", students: [] },
      { category: "U15 Boys", time: "12:15", students: [] },
    ],
  },
  {
    type: "Triple Jump",
    events: [
      { category: "U7 Girls", time: "10:30", students: [] },
      { category: "U7 Boys", time: "10:30", students: [] },
      { category: "U9 Girls", time: "11:00", students: [] },
      { category: "U9 Boys", time: "11:00", students: [] },
      { category: "U11 Girls", time: "11:30", students: [] },
      { category: "U11 Boys", time: "11:30", students: [] },
      { category: "U13 Girls", time: "12:00", students: [] },
      { category: "U13 Boys", time: "12:00", students: [] },
      { category: "U15 Girls", time: "12:15", students: [] },
      { category: "U15 Boys", time: "12:15", students: [] },
    ],
  },
  {
    type: "800m",
    events: [
      { category: "U13 Girls", time: "09:00", students: [] },
      { category: "U13 Boys", time: "09:10", students: [] },
      { category: "U15 Girls", time: "09:20", students: [] },
      { category: "U15 Boys", time: "09:30", students: [] },
    ],
  },
  {
    type: "600m",
    events: [
      { category: "U9 Girls", time: "09:37", students: [] },
      { category: "U9 Boys", time: "09:44", students: [] },
      { category: "U11 Girls", time: "09:51", students: [] },
      { category: "U11 Boys", time: "09:58", students: [] },
    ],
  },
  {
    type: "400m",
    events: [
      { category: "U9 Girls", time: "10:05", students: [] },
      { category: "U9 Boys", time: "10:12", students: [] },
      { category: "U11 Girls", time: "10:17", students: [] },
      { category: "U11 Boys", time: "10:25", students: [] },
      { category: "U13 Girls", time: "10:32", students: [] },
      { category: "U13 Boys", time: "10:39", students: [] },
      { category: "U15 Girls", time: "10:46", students: [] },
      { category: "U15 Boys", time: "10:51", students: [] },
    ],
  },
  {
    type: "200m",
    events: [
      { category: "U7 Girls", time: "10:56", students: [] },
      { category: "U7 Boys", time: "11:01", students: [] },
      { category: "U9 Girls", time: "11:06", students: [] },
      { category: "U9 Boys", time: "11:11", students: [] },
      { category: "U11 Girls", time: "11:16", students: [] },
      { category: "U11 Boys", time: "11:21", students: [] },
      { category: "U13 Girls", time: "11:26", students: [] },
      { category: "U13 Boys", time: "11:31", students: [] },
      { category: "U15 Girls", time: "10:36", students: [] },
      { category: "U15 Boys", time: "10:41", students: [] },
    ],
  },
  {
    type: "100m",
    events: [
      { category: "U9 Girls", time: "11:51", students: [] },
      { category: "U9 Boys", time: "11:54", students: [] },
      { category: "U11 Girls", time: "11:58", students: [] },
      { category: "U11 Boys", time: "12:03", students: [] },
      { category: "U13 Girls", time: "12:06", students: [] },
      { category: "U13 Boys", time: "12:09", students: [] },
      { category: "U16 Girls", time: "12:12", students: [] },
      { category: "U15 Boys", time: "12:15", students: [] },
    ],
  },
  {
    type: "60m",
    events: [
      { category: "U7 Girls", time: "11:45", students: [] },
      { category: "U7 Boys", time: "11:48", students: [] },
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

// Toggle sub-events for a specific event type with sliding animation
function toggleEventType(typeIndex) {
  const eventType = events[typeIndex];
  const eventsList = document.getElementById("eventsList");

  const existingSubEventList = document.querySelector(".sub-event-list");
  if (existingSubEventList) {
    existingSubEventList.style.height = "0px"; // Collapse animation
    setTimeout(() => existingSubEventList.remove(), 300); // Remove after animation
  }

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

    // Add cross-out logic for past events
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

  // Add sliding animation
  subEventList.style.height = "0px"; // Start collapsed
  setTimeout(() => {
    subEventList.style.height = `${subEventList.scrollHeight}px`; // Expand
  }, 0);
}

// Toggle student list for a sub-event with sliding animation
function toggleSubEvent(typeIndex, eventIndex) {
  const event = events[typeIndex].events[eventIndex];
  const existingStudentList = document.querySelector(".student-list");

  if (existingStudentList) {
    existingStudentList.style.height = "0px"; // Collapse animation
    setTimeout(() => existingStudentList.remove(), 300); // Remove after animation
  }

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

  const subEventItems = document.querySelectorAll(".sub-event-item");
  subEventItems[eventIndex].after(studentList);

  // Add sliding animation
  studentList.style.height = "0px"; // Start collapsed
  setTimeout(() => {
    studentList.style.height = `${studentList.scrollHeight}px`; // Expand
  }, 0);
}

const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3fjlsr4BAzZ-ScMJGiPuD9iAHll0SKQXoD_tPy4Ni5RFKxh4I0arzZ4xGN014gQ/pub?gid=2141987583&single=true&output=csv";

// Fetch data from Google Sheets and convert it to a structured format
async function fetchStudentData() {
  const response = await fetch(sheetUrl);
  const csvData = await response.text();
  return parseCSV(csvData);
}

// Parse the CSV data into a structured format
function parseCSV(data) {
  const rows = data.split("\n");
  const headers = rows[0].split(",");

  const parsedData = rows.slice(1).map((row) => {
    const values = row.split(",");
    const entry = {};
    headers.forEach((header, index) => {
      entry[header.trim()] = values[index]?.trim() || ""; // Handle missing values
    });

    // Return the entry only if it has all required fields
    if (Object.values(entry).every((value) => value !== "")) {
      return entry;
    }
    return null; // Mark invalid rows as null
  });

  // Filter out null entries (empty rows)
  return parsedData.filter((entry) => entry !== null);
}

// Update events with student data from Google Sheets
async function updateEventsWithData() {
  const studentData = await fetchStudentData();

  studentData.forEach((entry) => {
    const { "Event Type": eventType, Category, "Student Name": studentName, Performance } = entry;

    // Ensure all required fields are present before processing
    if (eventType && Category && studentName && Performance) {
      const eventTypeObj = events.find((event) => event.type === eventType);
      if (eventTypeObj) {
        const categoryObj = eventTypeObj.events.find((event) => event.category === Category);
        if (categoryObj) {
          categoryObj.students.push({ name: studentName, performance: Performance });
        }
      }
    }
  });

  displayEvents(); // Re-render the updated events
}


// Call this function on page load
window.onload = updateEventsWithData;
// Initialize the event display
window.onload = displayEvents;
