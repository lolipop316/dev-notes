function sanitizeLog(logEntry) {
  let str = typeof logEntry === "string" ? logEntry : JSON.stringify(logEntry);

  // Masking patterns
  const patterns = [
    { regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g, replacement: "[REDACTED_EMAIL]" },
    { regex: /\+?\d[\d\- ]{8,}\d/g, replacement: "[REDACTED_PHONE]" },
    { regex: /[A-Za-z0-9]{16,}/g, replacement: "[REDACTED_TOKEN]" },
    { regex: /\b\d{1,3}(\.\d{1,3}){3}\b/g, replacement: "[REDACTED_IP]" }
  ];

  patterns.forEach(p => {
    str = str.replace(p.regex, p.replacement);
  });

  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

export default sanitizeLog;

// --- Test Block ---
const sampleLog = {
  user: "john@example.com",
  token: "ABC123XYZ456DEF",
  ip: "192.168.0.12",
  msg: "Login from +64-21-456-789"
};

const sanitized = sanitizeLog(sampleLog);
console.log("Sanitized Output:", sanitized);
