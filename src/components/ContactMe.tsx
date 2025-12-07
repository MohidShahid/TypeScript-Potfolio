import { Github, LinkedIn, Email } from "@/assets/SocialIcon"
const ContactMe = () => {
  return (
    <div className="grid lg:grid-cols-2 items-start gap-16 p-6 w-full max-w-7xl mx-auto py-20 bg-[#F5F5F5]" id="contact">
      <div>
        <h2 className="text-slate-900 text-3xl font-bold SyneClass">Contact Me</h2>
        <p className="text-[15px] text-slate-600 mt-4 leading-relaxed">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
        <div className="mt-12">
          <h2 className="text-slate-900 text-base font-semibold">Email</h2>
          <ul className="mt-4">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#000'
                  viewBox="0 0 479.058 479.058">
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000" />
                </svg>
              </div>
              <a href="javascript:void(0)" className="text-sm ml-4">
                <small className="block text-slate-900">Mail</small>
                <span className="font-semibold text-[#FF9330]">haffiirfan@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-slate-900 text-base font-semibold">Socials</h2>
          <ul className="flex mt-4 space-x-4">
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <Github className="h-6 w-6" />
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <LinkedIn className="h-6 w-6" />
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <Email className="h-6 w-6" />
            </li>
          </ul>
        </div>
      </div>

      <form className="lg:ml-auto space-y-4" action={"https://formspree.io/f/movglgwz"} method="POST">
        <input type='text' placeholder='Name'
          className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <input type='email' placeholder='Email'
          className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <input type='text' placeholder='Subject'
          className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent" />
        <textarea placeholder='Message' rows={6}
          className="w-full rounded-md px-4 bg-slate-100 text-slate-900 text-sm pt-3 border border-gray-200 focus:border-slate-900 outline-none focus:bg-transparent"></textarea>
        <button type='button'
          className="text-white bg-slate-900 hover:bg-slate-800 tracking-wide rounded-md text-sm font-medium px-4 py-3 w-full cursor-pointer mt-2! border-0">Send message</button>
      </form>
    </div>
  )
}

export default ContactMe