import { ThemeToggle } from "./ThemeToggle";

const tabs = [{ name: "System" }, { name: "Light" }, { name: "Dark" }];

function Header() {
  return (
    <div>
      <header className="fixed top-0 z-10 p-4 w-full">
        <nav>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <a href="#"></a>
              <h1 className="text-4xl tracking-tight text-black">klm</h1>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
