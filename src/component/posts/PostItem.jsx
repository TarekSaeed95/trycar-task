import SkeletonComponent from "../Skeleton";
function PostItem({ id, title, userName, phone, loading }) {
  return loading ? (
    <div className="w-3/4 m-auto">
      <SkeletonComponent />
    </div>
  ) : (
    <div className="card card-compact lg:card-side bg-base-100 shadow-xl w-full mx-16">
      <img
        src={`https://picsum.photos/600/300/?image=${id}`}
        className=" object-cover lg:max-w-xl rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl "
        alt="post-image"
      />
      <div className="card-body ">
        <h2 className="card-title font-bold  lg:text-xl mb-3">{title}</h2>
        <div className="card-title lg:text-xl text-slate-400">{userName}</div>
        <div className="card-title lg:text-xl text-slate-400">{phone}</div>
      </div>
    </div>
  );
}

export default PostItem;
