interface Package {
    title: string,
    imgUrl: string,
    desc : string
}
export default function Package({props}:{props:Package}) {
    return <>
        <div className="bg-white rounded-[20px] text-center w-[calc((100%/4)-12px)] text-black p-6">
            <img src={props.imgUrl} alt="fire" className="inline" />
            <h3 className="text-[18px] font-bold my-8">{ props.title}</h3>
            <p>
              {props.desc}
            </p>
          </div>
    </>
}