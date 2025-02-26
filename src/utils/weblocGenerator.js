export const createXmlContent = (url) => {
  const escapedUrl = url.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>URL</key>
  <string>${escapedUrl}</string>
</dict>
</plist>`;
};

export const generateFileName = (url) => {
  const domainMatch = url.match(/^https?:\/\/([^/?#]+)/);
  const domain = domainMatch ? domainMatch[1] : "website";
  const timestamp = new Date().getTime().toString().slice(-4);
  return `${domain.replace(/\./g, "_")}_${timestamp}`;
};
