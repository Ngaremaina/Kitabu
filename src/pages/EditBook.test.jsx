import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import EditBook from "./EditBook";

function renderEditBook(addBook = vi.fn()) {
    render(
        <MemoryRouter initialEntries={["/editbook/7"]}>
            <Routes>
                <Route path="/editbook/:id" element={<EditBook addBook={addBook} />} />
                <Route path="/" element={<div>Home Page</div>} />
            </Routes>
        </MemoryRouter>
    );
    return addBook;
}

describe("EditBook", () => {
    beforeEach(() => {
        global.fetch = vi.fn().mockResolvedValue({ json: async () => ({ id: 7, title: "Updated Title" }) });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("patches the book at its route id and navigates home", async () => {
        const user = userEvent.setup();
        const addBook = renderEditBook();

        await user.type(screen.getByLabelText("Title"), "Updated Title");
        await user.click(screen.getByRole("button", { name: "Submit" }));

        expect(fetch).toHaveBeenCalledWith(
            "https://book-data.onrender.com/books/7",
            expect.objectContaining({ method: "PATCH" })
        );
        const body = JSON.parse(fetch.mock.calls[0][1].body);
        expect(body.title).toBe("Updated Title");

        await screen.findByText("Home Page");
        expect(addBook).toHaveBeenCalledWith({ id: 7, title: "Updated Title" });
    });
});
