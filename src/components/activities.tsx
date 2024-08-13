import ReadMoreBtn from './button/readMoreBtn'
interface Activity {
  imgUrl: string;
  title: string;
  desc: string;
  price: string;
}
export default function Activity({ props }: { props: Activity }) {
  return (
    <>
      <div className="card w-[calc((100%/4)-10px)] text-center bg-white p-5 rounded-2xl relative">
        <div className="activities-img">
          <span className="w-10 h-10 absolute top-8 right-10 bg-white rounded-xl p-2">
            <img src="/assets/img/heart.png" alt="heart-icon" />
          </span>
          <img
            src={props.imgUrl}
            alt="activities1"
            className="rounded-2xl"
          />
        </div>

        <span className="w-36 bg-white text-orange-500 text-center rounded-xl absolute p-4 transform translate-x-[-50%] translate-y-[-50%]">
          {props.price}
        </span>
        <div className="mt-12">
          <h3 className="text-lg font-bold">{props.title}</h3>
          <p className="my-3">
           {props.desc}
          </p>
          <ReadMoreBtn/>
        </div>
      </div>
    </>
  );
}
