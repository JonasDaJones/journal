import "./input.css";
export default function Input() {
  return (
    <div>
      <label for="textinput" className="label">
        Motto
      </label>
      <input id="textinput" type="text" name="motto-textfield"></input>
    </div>
  );
}
