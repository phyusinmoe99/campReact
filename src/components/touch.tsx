export default function Touch() {
  return (
    <>
      <div className="container mx-auto">
        <div className="relative">
          <div className="tank-img">
            <img src="/assets/img/Subscribe.jpg" alt="tank" />
          </div>
          <div className="w-[610px] absolute top-1/2 transform translate-y-[-50%] p-14">
            <h2 className="text-4xl font-bold">Let's Stay in Touch</h2>
            <p className="my-6">
              Get travel planning ideas, helpful tips, and stories from our
              visitors delivered right to your inbox.
            </p>
            <div className="flex bg-white rounded-xl p-5 items-center">
              <img src="/assets/img/mail.png" alt="mail" className="w-8 h-8" />
              <input
                type="mail"
                name="mail"
                placeholder="Email"
                className="ml-2 flex-1"
              />
              <img
                src="/assets/img/icon.png"
                alt="send-btn"
                className="w-12 h-12 float-end"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
