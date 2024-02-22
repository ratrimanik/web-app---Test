/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const IconSider = (props) => {
  const { 
    icon, 
    text, 
    children,
} = props;

  return (
    <div className="flex px-4 ">
      <div className="text-2xl text-primary mt-4">{icon}</div>
      <div>
        <p className="text-xs font-bold pt-3 justify-center pl-2">{text}</p>
        <p className="text-gray-400 text-xs pl-2">{children}</p>
      </div>
    </div>
  );
};

export default IconSider;
