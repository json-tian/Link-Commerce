import { Button, ButtonGroup, TextField } from "@shopify/polaris";
import { useCallback, useState } from "react";
import React from "react";

export function EditSaveTextField(props) {
  const { label, initialValue, apiHandler } = props;

  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((val) => setValue(val), [value]);
  const handleEdit = useCallback(() => setDisabled(false), [disabled]);
  const handleSave = useCallback(() => setDisabled(true), [disabled]);

  const save = () => {
    apiHandler(value);
    handleSave();
  }

  return (
    <TextField
      label={label}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      autoComplete="off"
      connectedRight={
        <ButtonGroup>
          <Button onClick={handleEdit}>Edit</Button>
          <Button primary onClick={save}>Save</Button>
        </ButtonGroup>
      }
    />
  );
}
