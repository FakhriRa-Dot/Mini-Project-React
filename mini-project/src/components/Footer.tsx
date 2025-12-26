export default function Footer() {
  return (
    <footer className="bg-brown text-cream py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        <div className="font-open-sans">
          <h4 className="text-lg font-semibold font-tinos mb-3">Visit Us</h4>

          <p>123 Vintage Lane, Nostalgia City, NC 201</p>
          <p className="mt-4">(10) 456 102003</p>
        </div>

        <div className="font-open-sans">
          <h4 className="text-lg font-semibold font-tinos mb-3">
            Opening Hours
          </h4>

          <p>Weekdays 8am - 10pm</p>
          <p className="mt-2">Weekend 10am - 9pm</p>
        </div>

        <div className="font-open-sans">
          <h4 className="text-lg font-semibold font-tinos mb-3">Follow Us</h4>

          <div className="flex gap-4 text-2xl">
            <i className="fa-brands fa-instagram cursor-pointer hover:text-green"></i>
            <i className="fa-brands fa-tiktok cursor-pointer hover:text-green"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
