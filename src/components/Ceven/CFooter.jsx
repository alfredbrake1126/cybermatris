function CFooter() {
  return (
    <>
      <div
        id="contact"
        className="w-full font-roboto bg-richBlack border-t-2 flex flex-col md:flex-row justify-evenly items-center md:items-start pb-3 px-4 md:px-0"
      >
        <div className="mt-7 flex flex-col space-y-2 text-center md:text-left pt-5 w-full md:w-auto">
          <div className="text-chamBray text-xl md:text-2xl font-semibold underline underline-offset-4">
            Our Address
          </div>
          <div className="text-white text-base md:text-lg font-medium">
          Paris champs Élysée
          </div>
        </div>

        <div className="mt-7 flex flex-col space-y-2 text-center md:text-left pt-5 w-full md:w-auto">
          <div className="text-chamBray text-xl md:text-2xl font-semibold underline underline-offset-4">
            Contact Us
          </div>
          <div className="text-white text-base md:text-lg font-medium">
            <a
              href="tel:+33789003449"
              className="text-white hover:text-gray-200 block md:inline"
            >
              +33 789 003 449
            </a>
          </div>
          <div className="text-white text-base md:text-lg font-medium">
            <a
              href="mailto:cybermatris@proton.me"
              className="text-white hover:text-gray-200 block md:inline"
            >
              cybermatris@proton.me
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-center py-4 px-4 md:px-0">
        <div className="text-white text-base md:text-lg font-medium">
          &copy; {new Date().getFullYear()} Cybermatris. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default CFooter;