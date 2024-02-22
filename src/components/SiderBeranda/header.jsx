/* eslint-disable react/prop-types */
const Header = (props) => {
  const { image, title } = props;

  return (
    <div className="flex pl-4 items-center pt-1">
      <img src={image} alt="" className="w-5" />
      <p className="text-xs font-bold py-2 justify-center pl-2 flex">{title}</p>
    </div>
  );
};

export default Header;
