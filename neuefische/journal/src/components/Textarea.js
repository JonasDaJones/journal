import "./textarea.css";
export default function Textarea() {
  return (
    <>
      <label for="notes" className="label">
        Notes
      </label>
      <textarea id="notes"></textarea>
    </>
  );
}
