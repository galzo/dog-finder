import { useCallback, useState } from "react";

export const useTextInput = (props: { isMandatoryInput: boolean }) => {
  const [textInput, setTextInput] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const handleTextChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event: any) => {
      // Clear any previous errors
      setIsInputValid(true);

      // Update text
      const newText = event.target.value as string;
      setTextInput(newText);
    },
    []
  );

  const validateInput = useCallback(() => {
    const isValid = !props.isMandatoryInput || (Boolean(textInput) && textInput.length > 0);
    setIsInputValid(isValid);

    return isValid;
  }, [props.isMandatoryInput, textInput]);

  return {
    text: textInput,
    onTextChange: handleTextChange,
    isTextValid: isInputValid,
    validateText: validateInput,
  };
};
