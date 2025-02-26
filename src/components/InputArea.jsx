const InputArea = (props) => {
  return (
    <>
      <textarea id="inputText" placeholder="ここにURLを含むテキストを入力してね" value={props.value} onInput={(e) => props.onChange(e.target.value)} />

      <div class="button-group">
        <button id="clearBtn" onClick={props.onClear}>
          🧹 クリア
        </button>
      </div>
    </>
  );
};

export default InputArea;
