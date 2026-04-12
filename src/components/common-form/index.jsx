import CommonInput from "../common-input";

function CommonForm({ formControls = [], buttonText, formData, onSubmit }) {

  const formElementTypes = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
  };

  function renderFormElements(control, formData) {
    let element = null;

    switch (control.componentType) {
      case formElementTypes.INPUT:
        element = (
          <CommonInput
            type={control.type}
            placeholder={control.placeholder}
            value={formData[control.name]}
            name={control.name}
            onChange={control.onChange}
          />
        );
        break;

      default:
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      {formControls.map((control) =>
        renderFormElements(control, formData)
      )}

      <button type="submit">
        {buttonText || "submit"}
      </button>
    </form>
  );
}

export default CommonForm;