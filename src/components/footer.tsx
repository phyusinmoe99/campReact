export default function Footer() {
    return <>
        <div className="bg-pink-200 rounded-tl-[200px] rounded-tr-[200px] mt-20">
        <div className="flex px-60 py-12 gap-12">
            <div className="download">
              <h3 className="font-bold text-xl">Hipcamp is everywhere you want to camp.</h3>
              <p className="my-4">
                Discover unique experiences on ranches, nature preserves, farms,
                vineyards, and public campgrounds across the U.S. Book tent camping,
                treehouses, cabins, yurts, primitive backcountry sites, car camping,
                airstreams, tiny houses, RV camping, glamping tents and more.
              </p>
              <h3 className="font-bold text-lg mb-3">Download Our App</h3>
              <img src="/assets/img/appstore.png" alt="appstore" className="inline"/>
              <img src="/assets/img/google.png" alt="google" className="inline"/>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Get to Know Us</h3>
              <p>
                About Us Rules & Reservation Policies Accessibility Media Center
                Site Map
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Plan with Us</h3>
              <p>Find Trip Inspiration Build a Trip Buy a Pass Enter a Lottery</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Let Us Help You</h3>
              <p>
                Your Account Your Reservations Contact Us Help Center Submit
                Feedback
              </p>
            </div>
          </div> 
          <p className="text-center">&copy;2024. All rights reserved.</p>
    </div>
    </>
}