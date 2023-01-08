import {NextComponentType} from "next";

const Header: NextComponentType = () => {
  return (
    <>
      <header className="md:container md:mx-auto h-24 flex flex-row justify-between items-center">
        <h1 className="font-bold text-lg">Challenge</h1>
        <p>We are talking</p>
        <p>&nbsp;</p>
      </header>
    </>
  )
}

export default Header