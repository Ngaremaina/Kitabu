import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

function renderHeader(searchBook = vi.fn()) {
    render(
        <MemoryRouter>
            <Header searchBook={searchBook} />
        </MemoryRouter>
    );
    return searchBook;
}

describe("Header", () => {
    it("renders the navigation links", () => {
        renderHeader();
        expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
        expect(screen.getByRole("link", { name: "Add Book" })).toHaveAttribute("href", "/addbook");
        expect(screen.getByRole("link", { name: "Contact Us" })).toHaveAttribute("href", "/contact us");
    });

    it("calls searchBook with the typed value on submit", async () => {
        const user = userEvent.setup();
        const searchBook = renderHeader();

        await user.type(screen.getByPlaceholderText("Search"), "Harry Potter");
        await user.click(screen.getByRole("button", { name: /submit search/i }));

        expect(searchBook).toHaveBeenCalledWith("Harry Potter");
    });
});
