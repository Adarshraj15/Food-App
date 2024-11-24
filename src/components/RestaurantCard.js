import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-60 hover:bg-gray-100">
      <img className="rounded-3xl" src={CDN_URL + cloudinaryImageId} />

      <h3 className="font-bold text-xl py-2">{name}</h3>
      <h4 className="remove-line">{cuisines.join(", ")}</h4>
      <h4 className="remove-line">{avgRating} stars</h4>
      <h4 className="remove-line">{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
