import { createSignal, createEffect, onMount } from "solid-js";
import InputArea from "./InputArea";
import StatusMessage from "./StatusMessage";
import UrlList from "./UrlList";
import DownloadAllButton from "./DownloadAllButton";
import Toast from "./Toast";
import Stats from "./Stats";
import { extractUrls } from "../utils/urlExtractor";
import { generateFileName, createXmlContent } from "../utils/weblocGenerator";

const App = () => {
  const [inputValue, setInputValue] = createSignal("");
  const [extractedUrls, setExtractedUrls] = createSignal([]);
  const [status, setStatus] = createSignal({ message: "", type: "" });
  const [toastMessage, setToastMessage] = createSignal("");
  const [showToast, setShowToast] = createSignal(false);

  // 入力テキストから URL を抽出する処理
  const processInput = () => {
    setStatus({ message: '<div class="loading"></div> URLを探しているよ...', type: "" });
    const urls = extractUrls(inputValue());
    setExtractedUrls(urls);

    if (urls.length === 0) {
      setStatus({ message: "URLが見つからなかったよ...", type: "error" });
      return;
    }

    setStatus({ message: `${urls.length}個のURLが見つかったよ！`, type: "success" });
  };

  // テキスト入力のディバウンス処理
  createEffect(() => {
    const value = inputValue();
    if (!value.trim()) {
      setExtractedUrls([]);
      setStatus({ message: "", type: "" });
      return;
    }

    const timer = setTimeout(processInput, 500);
    return () => clearTimeout(timer);
  });

  // 単一URLのダウンロード
  const downloadUrl = (url) => {
    const fileName = generateFileName(url);
    const content = createXmlContent(url);
    downloadFile(`${fileName}.webloc`, content);
    showToastMessage(`「${fileName}.webloc」を保存したよ！`);
  };

  // クエリパラメータを削除する処理
  const removeQueryParams = (originalUrl, cleanUrl) => {
    if (originalUrl === cleanUrl) {
      showToastMessage("このURLにはクエリパラメータがないよ！");
      return;
    }

    // 元のURLリストからオリジナルURLを探して置き換える
    const updatedUrls = extractedUrls().map((url) => (url === originalUrl ? cleanUrl : url));

    setExtractedUrls(updatedUrls);
    showToastMessage("クエリパラメータを削除したよ！");
  };

  // すべてのURLをまとめてダウンロード
  const downloadAllUrls = async () => {
    const urls = extractedUrls();
    if (urls.length === 0) return;

    // JSZipをダイナミックインポート
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();

    urls.forEach((url) => {
      const fileName = generateFileName(url);
      const content = createXmlContent(url);
      zip.file(`${fileName}.webloc`, content);
    });

    const blob = await zip.generateAsync({ type: "blob" });
    downloadFile("all_urls.zip", blob);
    showToastMessage("ZIPファイルを保存したよ！");
  };

  // 入力とリストをクリア
  const clearAll = () => {
    setInputValue("");
    setExtractedUrls([]);
    setStatus({ message: "", type: "" });
    showToastMessage("すべてクリアしたよ！");
  };

  // ファイルダウンロード共通処理
  const downloadFile = (fileName, content) => {
    const blob = content instanceof Blob ? content : new Blob([content], { type: "application/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  // トースト表示処理
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div class="container">
      <div class="header">
        <h1>URLクリッパー</h1>
      </div>

      <div class="instructions">
        <h3>📋 使い方</h3>
        <p>テキストを入力するだけでURLを抽出して、webloc形式で保存できるよ！</p>
      </div>

      <InputArea value={inputValue()} onChange={setInputValue} onClear={clearAll} />

      <StatusMessage message={status().message} type={status().type} />

      <Stats urls={extractedUrls()} />

      <UrlList urls={extractedUrls()} onDownload={downloadUrl} onRemoveParams={removeQueryParams} />

      {extractedUrls().length > 0 && <DownloadAllButton onClick={downloadAllUrls} />}

      <Toast message={toastMessage()} show={showToast()} />
    </div>
  );
};

export default App;
