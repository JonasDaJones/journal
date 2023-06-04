import Input from "./Input.js";
import Textarea from "./Textarea.js";
import SubmitButton from "./SubmitButton.js";
import "./entry-form.css";

export default function EntryForm() {
  return (
    <form className="entry--form">
      <h2>New Entry</h2>
      <Input />
      <Textarea />
      <SubmitButton />
    </form>
  );
}
