const DownloadAllButton = (props) => {
  return (
    <button id="downloadAllBtn" onClick={props.onClick}>
      📦 すべてまとめて保存 (ZIP)
    </button>
  );
};

export default DownloadAllButton;
