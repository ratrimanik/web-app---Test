import Icon from "./icon";

const IconCard = () => {
  return (
    <div className="ml-4 pt-4 flex justify-between">
      <button className="flex gap-4">
        <Icon image="src/assets/img/rate-plus.png" title="20 rb" />
        <Icon image="src/assets/img/rate-min.png" />
        <Icon image="src/assets/img/comment.png" title="220" />
        <Icon image="src/assets/img/share.png" />
      </button>
      <button className="flex">
        <Icon image="src/assets/img/preview.png" title="21 rb tayangan" />
        <Icon image="src/assets/img/save.png" />
      </button>
    </div>
  );
};

export default IconCard;
