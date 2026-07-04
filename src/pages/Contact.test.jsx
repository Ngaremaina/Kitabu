import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";

function renderContact(addMessage = vi.fn()) {
    render(
        <MemoryRouter initialEntries={["/contact us"]}>
            <Routes>
                <Route path="/contact us" element={<Contact addMessage={addMessage} />} />
                <Route path="/" element={<div>Home Page</div>} />
            </Routes>
        </MemoryRouter>
    );
    return addMessage;
}

describe("Contact", () => {
    beforeEach(() => {
        global.fetch = vi.fn().mockResolvedValue({ json: async () => ({}) });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    // Regression test: the message textarea used to be bound to the email state.
    it("sends the name, email and message fields independently", async () => {
        const user = userEvent.setup();
        renderContact();

        await user.type(screen.getByLabelText("Name"), "Jane Doe");
        await user.type(screen.getByLabelText("Email"), "jane@example.com");
        await user.type(screen.getByLabelText("Message"), "Hello there");
        await user.click(screen.getByRole("button", { name: "Submit" }));

        const body = JSON.parse(fetch.mock.calls[0][1].body);
        expect(body).toEqual({ name: "Jane Doe", email: "jane@example.com", message: "Hello there" });

        await screen.findByText("Home Page");
    });
});
