export default function createDeviceFingerprint() {
  const fingerprint = {};
  const timezoneOffset = new Date().getTimezoneOffset();
  fingerprint.timezoneOffset = timezoneOffset;
  const language =
    navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage ||
    navigator.systemLanguage ||
    "";
  fingerprint.language = language;
  fingerprint.hasCookieEnabled = navigator.cookieEnabled;
  fingerprint.hasLocalStorage = typeof window.localStorage !== "undefined";
  const screenColorDepth = window.screen.colorDepth || window.screen.pixelDepth;
  fingerprint.screenColorDepth = screenColorDepth;
  return fingerprint;
}
