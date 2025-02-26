import { For } from "solid-js";

const UrlList = (props) => {
  return (
    <div id="results">
      <For each={props.urls}>
        {(url) => (
          <div class="url-item">
            <div class="url-text">{url}</div>
            <div class="url-actions">
              <button onClick={() => props.onDownload(url)}>💾 保存</button>
              <button onClick={() => window.open(url, "_blank")}>🔗 開く</button>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default UrlList;
