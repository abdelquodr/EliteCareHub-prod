import { Button } from ".";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup} from "@testing-library/react";


afterEach(cleanup); // Cleanup the rendered component after each test

// Tests that Button renders with correct label and style
it("test_button_renders_with_correct_label_and_style", () => {
  const { getByText } = render(<Button label="Click me!" backgroundColor="blue" size="large" padding="10px" color="white" mode="outline" />);
  const button = getByText("Click me!");
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`
    background-color: blue;
    color: white;
    padding: 10px;
  `);
});


// Tests that Button renders with default values if no props are passed
it("test_button_renders_with_default_values_if_no_props_are_passed",() => {
  const { queryByRole } = render(<Button />);
  const button = queryByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('button');
  expect(button).toHaveStyle(`
      mode: ;
      size: ;
  `);
})

// Tests that Button renders with custom values for backgroundColor, size, label, padding, color, and mode
it("test_button_renders_with_custom_values_for_backgroundColor_size_label_padding_color_and_mode", () => {
  const { getByText } = render(<Button label="Click me!" backgroundColor="red" size="small" padding="5px" color="black" mode="solid" />);
  const button = getByText("Click me!");
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle(`
    background-color: red;
    color: black;
    padding: 5px;
  `);
});


// Tests that Button renders with empty label
it("test_button_renders_with_empty_label", () => {
  const { getByRole } = render(<Button label="" />);
  const button = getByRole("button");
  expect(button).toBeInTheDocument();
});


// Tests that Button renders with invalid backgroundColor, size, padding, color, and mode values
it("test_button_renders_with_invalid_backgroundColor_size_padding_color_and_mode_values", () => {
  const { queryByRole } = render(<Button backgroundColor="invalid" size="invalid" padding="invalid" color="invalid" mode="invalid" />);
  const button = queryByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).not.toHaveStyle(`
    background-color: ;
    size: ;
    mode: ;
    color: ;
    padding: ;
  `);
});


// Tests that Button renders with extremely long label or padding values
it("test_button_renders_with_extremely_long_label_or_padding_values", () => {
const { getByText } = render(<Button label="This is an extremely long label that should still fit within the button" padding="100px" />);
const button = getByText("This is an extremely long label that should still fit within the button");
expect(button).toBeInTheDocument();
expect(button).toHaveStyle(`
  padding: 100px;
`);
});