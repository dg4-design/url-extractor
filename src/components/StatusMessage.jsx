const StatusMessage = (props) => {
  return <div id="statusMessage" class={`status ${props.type}`} innerHTML={props.message}></div>;
};

export default StatusMessage;
