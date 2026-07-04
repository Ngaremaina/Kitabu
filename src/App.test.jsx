import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
    beforeEach(() => {
        global.fetch = vi.fn().mockResolvedValue({
            json: async () => [
                { id: 1, title: "Book One", price: 100, author: "Author A", sold: 1, cover: "cover1.png" },
            ],
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("loads books and renders the home page with header and footer", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        expect(await screen.findByText("Book One")).toBeInTheDocument();
        expect(screen.getAllByRole("link", { name: "Home" }).length).toBeGreaterThan(0);
        expect(screen.getByText(`© ${new Date().getFullYear()} Kitabu`)).toBeInTheDocument();
        expect(fetch).toHaveBeenCalledWith("https://book-data.onrender.com/books");
    });
});
