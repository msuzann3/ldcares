const RECIPIENT_EMAIL = "bwcarson@ldcares.org";

function doPost(event) {
  const data = event && event.parameter ? event.parameter : {};
  const subject = `Mentor selection request: ${data.mentor || "No mentor selected"}`;
  const body = [
    "A mentee has submitted a mentor selection request.",
    "",
    `Mentee name: ${data.name || "Not provided"}`,
    `Mentee email: ${data.email || "Not provided"}`,
    `Preferred mentor: ${data.mentor || "Not provided"}`,
    `Interests: ${data.interests || "Not specified"}`,
    "",
    "Details:",
    data.details || "Not provided",
    "",
    "Consent to share with selected mentor: Yes"
  ].join("\n");

  GmailApp.sendEmail(RECIPIENT_EMAIL, subject, body, {
    name: "L&D Cares Mentor Selection",
    replyTo: data.email || RECIPIENT_EMAIL
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function testMentorSelectionEmail() {
  doPost({
    parameter: {
      name: "Test Mentee",
      email: "test@example.com",
      mentor: "Test Mentor",
      interests: "Career transition, Learning strategy",
      details: "This is a test submission from Google Apps Script."
    }
  });
}
