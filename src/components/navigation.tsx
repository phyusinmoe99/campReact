
export default function Navigate() {
    return <div>       
          <div className="container mx-auto" style={{maxWidth:'1000px'}}>
                  <nav className="flex justify-between py-6 text-white">
                     <div className="list1">
                         <ul className="flex justify-between gap-6">
                            <li><a href="/"><img src="/assets/img/logo1.png" alt="logo" className="w-5 h-5"/></a></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/destination">Destination</a></li>
                            <li><a href="/near_me">Near Me</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact_us">Contact Us</a></li>
                         </ul>
                     </div>
                     <div className="list2">
                         <ul className="flex justify-between gap-6">
                             <li><a href="">Sign Up</a></li>
                             <li className="border border-solid border-white rounded-[15px] px-1 inline-block w-32 text-center"><a href="">Sign In</a></li>
                         </ul>
                     </div>
                 </nav>
        
            </div>
       
    </div>
}