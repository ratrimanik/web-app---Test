/* eslint-disable react/prop-types */
const CardNotifikasi = (props) => {
    const {
        image,
        name,
        description,
        date,
        quest,
    } = props;

  return (
    <div className="bg-white h-full text-[12px] mb-4 px-4 rounded-lg shadow-md">
      <div className="flex justify-between py-2">
        <div className="flex">
          <img
            src={image}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col -ml-2">
            <div className="flex justify-between">
              <div className="flex ml-4">
                <p className="font-bold">{name}</p>
                <p className="ml-2">{description}</p>
              </div>
              <div>
                <p>{date}</p>
              </div>
            </div>
            <div className="border mt-2 border-[#9A9A9A] rounded-md mx-4">
              <p className="mx-2 my-2 font-semibold">
                {quest}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNotifikasi;
