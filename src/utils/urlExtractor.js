export const extractUrls = (text) => {
  if (!text.trim()) return [];

  let processedText = text;
  let allUrls = [];

  // 連続したURLを分離
  const connectedUrlPattern = /(https?:\/\/[^\/]+\.[a-zA-Z0-9()]{1,24})(https?:\/\/)/gi;
  processedText = processedText.replace(connectedUrlPattern, (match, url1, url2Start) => {
    allUrls.push(url1);
    return url2Start;
  });

  // 通常のURLを検出
  const normalUrlPattern = /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,24}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*))/gi;
  let match;
  while ((match = normalUrlPattern.exec(processedText)) !== null) {
    allUrls.push(match[1]);
  }

  // 重複を削除して有効なURLのみ返す
  return Array.from(new Set(allUrls)).filter((url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  });
};
