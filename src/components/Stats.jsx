import { createMemo } from "solid-js";

const Stats = (props) => {
  const urlCount = createMemo(() => props.urls.length);

  const domainCount = createMemo(() => {
    if (urlCount() === 0) return 0;
    const uniqueDomains = new Set(props.urls.map((url) => new URL(url).hostname));
    return uniqueDomains.size;
  });

  if (urlCount() === 0) return null;

  return (
    <div id="stats" class="stats">
      <div>
        見つかったURL: <span class="badge">{urlCount()}</span>
      </div>
      <div>
        ドメイン数: <span class="badge">{domainCount()}</span>
      </div>
    </div>
  );
};

export default Stats;
