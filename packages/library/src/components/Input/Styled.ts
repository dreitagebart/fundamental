import styled from "styled-components"

export const _Input = styled.input`
  font-size: 0.875rem;
  font-size: var(--sapFontSize, 0.875rem);
  line-height: 1.4;
  line-height: var(--sapContent_LineHeight, 1.4);
  color: #32363a;
  color: var(--sapTextColor, #32363a);
  font-family: "72", "72full", Arial, Helvetica, sans-serif;
  font-family: var(
    --sapFontFamily,
    "72",
    "72full",
    Arial,
    Helvetica,
    sans-serif
  );
  font-weight: 400;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #32363a;
  color: var(--sapField_TextColor, #32363a);
  background-color: #fff;
  background-color: var(--sapField_Background, #fff);
  border-style: solid;
  border-width: 0.0625rem;
  border-width: var(--sapField_BorderWidth, 0.0625rem);
  border-color: #89919a;
  border-color: var(--sapField_BorderColor, #89919a);
  border-radius: 0.125rem;
  border-radius: var(--sapField_BorderCornerRadius, 0.125rem);
  outline: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  min-width: 2.75rem;
  width: 100%;
  height: 2.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  padding: 0 0.625rem;
  z-index: 1;
  cursor: text;
  overflow: hidden;
  text-shadow: none;
  text-shadow: var(--fdInput_Text_Shadow, none);
`
