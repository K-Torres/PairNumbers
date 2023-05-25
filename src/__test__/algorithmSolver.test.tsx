import { render, fireEvent, RenderResult  } from "@testing-library/react";
import Algorithm from "../components/algorithmSolver/algorithmSolver";
import '@testing-library/jest-dom/extend-expect';

describe("Algorithm component", () => {
  let wrapper: RenderResult ;

  beforeEach(() => {
    wrapper = render(<Algorithm />);
  });

  it("renders the component without errors", () => {
    expect(wrapper.container).toBeInTheDocument();
  });

  it("updates numbersValue state correctly", () => {
    const input = wrapper.getByRole("textbox", { name: "Enter numbers separated by commas" });
    fireEvent.change(input, { target: { value: "1,2,3" } });
    expect(wrapper.getByDisplayValue("1,2,3")).toBeInTheDocument();
  });

  it("updates targetValue state correctly", () => {
    const input = wrapper.getByRole("textbox", { name: "Target sum" });
    fireEvent.change(input, { target: { value: "10" } });
    expect(wrapper.getByDisplayValue("10")).toBeInTheDocument();
  });

  it("finds pairs correctly when form is submitted", () => {
    const numbersInput = wrapper.getByRole("textbox", { name: "Enter numbers separated by commas" });
    const targetInput = wrapper.getByRole("textbox", { name: "Target sum" });
    const submitButton = wrapper.getByText("result");

    fireEvent.change(numbersInput, { target: { value: "1,2,3" } });
    fireEvent.change(targetInput, { target: { value: "5" } });
    fireEvent.click(submitButton);

    expect(wrapper.getByText("(3 , 2)")).toBeInTheDocument();
  });

  it("clears state correctly when clear button is clicked", () => {
    const numbersInput = wrapper.getByRole("textbox", { name: "Enter numbers separated by commas" });
    const targetInput = wrapper.getByRole("textbox", { name: "Target sum" });
    const clearButton = wrapper.getByText("clear");

    fireEvent.change(numbersInput, { target: { value: "1,2,3" } });
    fireEvent.change(targetInput, { target: { value: "5" } });
    fireEvent.click(clearButton);

    expect(wrapper.getByText("Please, field the inputs")).toBeInTheDocument();
    expect(numbersInput).toHaveValue("");
    expect(targetInput).toHaveValue("");
  });
});