import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Profile from "../pages/profile";

describe("Profile", () => {
  it("should allow the user to fill out the profile form and submit it", async () => {
    render(<Profile />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    userEvent.type(firstNameInput, "John");

    const lastNameInput = screen.getByLabelText(/last name/i);
    userEvent.type(lastNameInput, "Doe");

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, "john.doe@example.com");

    const phoneInput = screen.getByLabelText(/Mobile Number/i);
    userEvent.type(phoneInput, "1234567890");

    const yearsOfExperienceInput =
      screen.getByLabelText(/years of experience/i);
    userEvent.type(yearsOfExperienceInput, "5");

    // const countryInput = screen.getByLabelText(/country/i);
    // userEvent.type(countryInput, "Canada");

    const skillsInput = screen.getByLabelText(/skills/i);
    userEvent.type(skillsInput, "React");

    const idealJobDescriptionInput = screen.getByLabelText(
      /Explain to us your ideal job/i
    );
    userEvent.type(
      idealJobDescriptionInput,
      "A job that lets me use my React skills"
    );

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeDisabled();

    // const termsCheckbox = screen.getByLabelText(/terms and conditions/i);
    // fireEvent.click(termsCheckbox);

    // expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });
});
