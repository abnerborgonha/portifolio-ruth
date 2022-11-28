import { Button } from "../Button";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="text-4xl font-bold cursor-pointer">
        Ruth.
      </h1>
      <div className="flex items-center">
        <ul className="flex gap-8 mr-14">
          <li className="header-li">Home</li>
          <li className="header-li">About</li>
          <li className="header-li">Blog</li>
        </ul>
        <Button label="Contact" type="secondary" />
      </div>
    </header>
  );
};
