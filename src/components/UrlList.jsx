import { For } from "solid-js";

const UrlList = (props) => {
  // クエリパラメータを削除する関数
  const removeQueryParams = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.origin + urlObj.pathname;
    } catch (e) {
      return url;
    }
  };

  return (
    <div id="results">
      <For each={props.urls}>
        {(url) => (
          <div class="url-item">
            <div class="url-text">{url}</div>
            <div class="url-actions">
              <button onClick={() => props.onDownload(url)}>💾 保存</button>
              <button onClick={() => window.open(url, "_blank")}>🔗 開く</button>
              <button onClick={() => props.onRemoveParams && props.onRemoveParams(url, removeQueryParams(url))}>🧹 クエリ削除</button>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default UrlList;
