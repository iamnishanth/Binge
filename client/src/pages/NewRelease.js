import { useStore } from "../contexts/StoreContext";
import { IMAGE_BASE_URL } from "../requests";

const NewRelease = () => {
  const { newContent } = useStore();

  return (
    <div className="px-4">
      <h1 className="text-lg font-bold text-center my-5">New Release</h1>
      <div className="container-fluid">
        <div className="row gy-2 gx-1">
          {newContent.map((poster) => (
            <div className="col-2" key={poster.id}>
              <img
                className="h-48 md:h-56 px-1 rounded-md cursor-pointer"
                src={IMAGE_BASE_URL + poster.poster_path}
                alt={poster.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
