export const createICSFile = state => {
  const ics = require("ics");

  const event = {
    start: state.date.split("-"),
    duration: { days: 14 },
    title: "COVID-19 Quarantine",
    description: "Required/Self Quarantine for COVID-19",
    // location: "Folsom Field, University of Colorado (finish line)",
    // url: "http://www.bolderboulder.com/",
    // geo: { lat: 40.0095, lon: 105.2669 },
    // categories: ["10k races", "Memorial Day Weekend", "Boulder CO"],
    status: "CONFIRMED",
    busyStatus: "BUSY"
    // organizer: { name: "Admin", email: "Race@BolderBOULDER.com" },
    // attendees: [
    //   {
    //     name: "Adam Gibbons",
    //     email: "adam@example.com",
    //     rsvp: true,
    //     partstat: "ACCEPTED",
    //     role: "REQ-PARTICIPANT"
    //   },
    //   {
    //     name: "Brittany Seaton",
    //     email: "brittany@example2.org",
    //     dir: "https://linkedin.com/in/brittanyseaton",
    //     role: "OPT-PARTICIPANT"
    //   }
    // ]
  };

  ics.createEvent(event, (error, value) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(value);
  });
};
