import Activity from "@/components/activities";
import DiscoverBtn from "@/components/button/discoverBtn";
import ViewAllBtn from "@/components/button/viewAllBtn";
import Package from "@/components/package";
import Touch from "@/components/touch";

const packages = [
  {
    title: "Camping & Day Use",
    imgUrl: "/assets/img/service_1.png",
    desc: "Return to your favorite spot or discover a new one that’s right for you",
  },
  {
    title: "Tours & Tickets",
    imgUrl: "/assets/img/service_2.png",
    desc: "Reserve tours and tickets to participate in events.",
  },
  {
    title: "Permits",
    imgUrl: "/assets/img/service_3.png",
    desc: "Obtain permits for access to high-demand locations.",
  },
  {
    title: "Recreation Activities",
    imgUrl: "/assets/img/service_4.png",
    desc: "Find the best spots for hunting, fishing & recreational shooting.",
  },
];
const activities = [
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
  {
    title:"Trickle Creek Ranch",
    imgUrl: "/assets/img/bg2.jpg",
    desc: "Book unique camping experiences on over 300,000 campsites.",
    price:"$36/night"
  },
]

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/assets/img/bg1.png')] w-full h-screen bg-no-repeat bg-cover bg-center rounded-bl-[150px] rounded-br-[150px]">
        <div className="w-[500px] mx-auto text-white text-center">
          <h1 className="text-[80px] font-bold">
            Find Yourself <br />
            Outside.
          </h1>

          <p className="my-5">
            Book unique camping experiences on over 300,000 campsites, cabins,
            RV parks, public parks and more.
          </p>
          <DiscoverBtn/>
        </div>
      </div>
      <div className="container mx-auto " style={{ maxWidth: "1000px" }}>
        <div className="flex justify-between gap-3 mt-[-100px]">
          {packages.map((p, index) => {
            return <Package key={index} props={p} />;
          })}
        </div>
      </div>
      <div className="container mx-auto " style={{ maxWidth: "1000px" }}>
        <div className="activities-heading w-[456px] my-5 mx-auto text-center relative">
          <div className="destination-img after:content-[''] after:absolute bg-orange-500 w-16 h-16 rounded-full mx-auto mt-16">
            <img src="/assets/img/destination.png" alt="destination" />
          </div>
          <h2 className="text-4xl font-bold">
            Explore Destinations & Activities
          </h2>
        </div>
        <div className="card-box flex flex-wrap gap-2.5">
          {
            activities.map((a, i) => {
              return <Activity key={i} props={a}/>
            })
          }

        </div>
        <ViewAllBtn/>
      </div>
      <Touch/>
    </div>
  );
}
