const InputArea = (props) => {
  return (
    <>
      <div class="input-container">
        <textarea id="inputText" placeholder="ここにURLを含むテキストを入力してね" value={props.value} onInput={(e) => props.onChange(e.target.value)} />
        <button id="clearBtn" onClick={props.onClear}>
          🧹
        </button>
      </div>
    </>
  );
};

export default InputArea;
