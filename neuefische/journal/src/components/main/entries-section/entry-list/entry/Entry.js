import "./entry.css";
import IconButton from "./icon-button/IconButton";
export default function Entry({ date, title, text }) {
  return (
    <article className="entry">
      <div className="date">{date}</div>
      <div className="title">
        <h3>"{title}"</h3>
        <IconButton />
      </div>
      <p className="text">{text}</p>
      <hr></hr>
    </article>
  );
}
