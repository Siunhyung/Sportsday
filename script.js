// Comprehensive list of events, times, and placeholders for student data

const localCsvUrl = "https://siunhyung.github.io/Sportsday/combined_data.csv";
const events = [
  {
    type: "Shot Putt",
    unit: "m",
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
    unit: "m",
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
    unit: "m",
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
    unit: "m",
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

const studentSearchInput = document.getElementById("studentSearch");
const searchResultsContainer = document.getElementById("searchResults");

const studentPanel = document.getElementById("studentPanel");
const studentPanelTitle = document.getElementById("studentPanelTitle");
const studentPanelList = document.getElementById("studentPanelList");
const closePanelButton = document.getElementById("closePanel");


function parseCSV(data) {
  const rows = data.split("\n");
  const headers = rows[0].split(",");

  const parsedData = rows.slice(1).map((row) => {
    const values = row.split(",");
    const entry = {};
    headers.forEach((header, index) => {
      entry[header.trim()] = values[index]?.trim() || ""; // Handle missing values
    });
    return entry;
  });

  // Filter out empty rows
  return parsedData.filter((entry) => Object.values(entry).some((value) => value));
}



async function fetchLocalData() {
  try {
    const response = await fetch(localCsvUrl);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
    const csvData = await response.text();
    return parseCSV(csvData);
  } catch (error) {
    console.error("Error fetching local CSV data:", error);
    return [];
  }
}


async function updateEventsWithLocalData() {
  const localData = await fetchLocalData();

  localData.forEach((entry) => {
    const { "Event Type": eventType, Category, "Student Name": studentName, Performance } = entry;

    if (eventType && Category && studentName) {
      const eventTypeObj = events.find((event) => event.type === eventType);
      if (eventTypeObj) {
        const categoryObj = eventTypeObj.events.find((event) => event.category === Category);
        if (categoryObj) {
          const existingStudent = categoryObj.students.find(
            (student) => student.name === studentName
          );
          if (!existingStudent) {
            categoryObj.students.push({ name: studentName, performance: "" });
          }
          if (Performance) {
            const studentToUpdate = categoryObj.students.find(
              (student) => student.name === studentName
            );
            if (studentToUpdate) {
              const performanceWithUnit = eventTypeObj.unit
                ? `${Performance} ${eventTypeObj.unit}`
                : Performance;
              studentToUpdate.performance = performanceWithUnit;
            }
          }
        }
      }
    }
  });
}







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
    const eventTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), eventHour, eventMinute, 0, 0);

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
function toggleSubEvent(typeIndex, eventIndex) {
  openStudentPanel(typeIndex, eventIndex);
}

function openStudentPanel(typeIndex, eventIndex) {
  const event = events[typeIndex].events[eventIndex];

  // Update the panel title
  studentPanelTitle.textContent = `Students for ${event.category}`;

  // Populate the student list
  studentPanelList.innerHTML = ""; // Clear existing content
  if (!event.students.length) {
    const noStudents = document.createElement("li");
    noStudents.textContent = "No students participated.";
    studentPanelList.appendChild(noStudents);
  } else {
    event.students.forEach((student) => {
      const studentItem = document.createElement("li");

      // Create elements for student name and performance
      const studentName = document.createElement("span");
      studentName.textContent = student.name;
      studentName.classList.add("student-name");

      const studentPerformance = document.createElement("span");
      studentPerformance.textContent = student.performance || "Upcoming";
      studentPerformance.classList.add("student-performance");

      // Append name and performance to the list item
      studentItem.appendChild(studentName);
      studentItem.appendChild(studentPerformance);

      studentPanelList.appendChild(studentItem);
    });
  }

  // Slide the panel into view
  studentPanel.style.bottom = "0";
}

function closeStudentPanel() {
  studentPanel.style.bottom = "-100%"; // Slide the panel out of view
}

// Attach event listener to the close button
closePanelButton.addEventListener("click", closeStudentPanel);
function searchStudentEvents(studentName) {
  const results = [];
  events.forEach((eventType) => {
    eventType.events.forEach((event) => {
      event.students.forEach((student) => {
        if (student.name.toLowerCase().includes(studentName.toLowerCase())) {
          results.push({
            eventType: eventType.type,
            category: event.category,
            time: event.time,
            performance: student.performance || "Upcoming",
          });
        }
      });
    });
  });
  return results;
}


function renderSearchResults(results) {
  searchResultsContainer.innerHTML = "";
  if (results.length === 0) {
    searchResultsContainer.innerHTML = `<li class="no-results">No results found</li>`;
    return;
  }
  results.forEach((result) => {
    const resultItem = document.createElement("li");
    resultItem.innerHTML = `
      <strong>${result.eventType}</strong> - ${result.category} <br>
      <span>Time: ${result.time}</span> <br>
      <span>Performance: ${result.performance}</span>
    `;
    searchResultsContainer.appendChild(resultItem);
  });
}

studentSearchInput.addEventListener("input", (e) => {
  const studentName = e.target.value.trim(); // Remove leading/trailing spaces
  if (studentName.length > 0) {
    const results = searchStudentEvents(studentName);
    renderSearchResults(results);
  } else {
    searchResultsContainer.innerHTML = ""; // Clear results if input is empty
  }
});






window.onload = async function () {
  await updateEventsWithLocalData(); // Fetch and update events with local data
  displayEvents(); // Render the events with updated data
};


