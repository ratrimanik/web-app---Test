/* eslint-disable react/prop-types */
const Icon = (props) => {
    const {
        image,
        title = null,
    } = props;

    return (
        <div className="flex">
            <img src={image} alt=""  className="w-4 h-4"/>
            <p className="text-[10px] pl-1 pr-2 text-gray-400 whitespace-nowrap">{title}</p>
        </div> 
    )
}

export default Icon;