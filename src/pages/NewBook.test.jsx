import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import NewBook from "./NewBook";

function renderNewBook(addBook = vi.fn()) {
    render(
        <MemoryRouter initialEntries={["/addbook"]}>
            <Routes>
                <Route path="/addbook" element={<NewBook addBook={addBook} />} />
                <Route path="/" element={<div>Home Page</div>} />
            </Routes>
        </MemoryRouter>
    );
    return addBook;
}

describe("NewBook", () => {
    beforeEach(() => {
        global.fetch = vi.fn().mockResolvedValue({ json: async () => ({ id: 1, title: "New Title" }) });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("posts the form data to the API and navigates home", async () => {
        const user = userEvent.setup();
        const addBook = renderNewBook();

        await user.type(screen.getByLabelText("Title"), "New Title");
        await user.type(screen.getByLabelText("Author"), "New Author");
        await user.type(screen.getByLabelText("Price"), "500");
        await user.click(screen.getByRole("button", { name: "Submit" }));

        expect(fetch).toHaveBeenCalledWith(
            "https://book-data.onrender.com/books",
            expect.objectContaining({ method: "POST" })
        );
        const body = JSON.parse(fetch.mock.calls[0][1].body);
        expect(body.title).toBe("New Title");
        expect(body.author).toBe("New Author");
        expect(body.price).toBe("500");

        await screen.findByText("Home Page");
        expect(addBook).toHaveBeenCalledWith({ id: 1, title: "New Title" });
    });
});
