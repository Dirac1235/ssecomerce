import { Button } from "@app/client/components/ui/button";

function ContactUs() {
  return (
    <div className="container mx-auto py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Got a technical issue? Want to send feedback about a beta feature? Need
            details about our services? Let us know.
          </p>
        </div>
        <form action="#" className="bg-white rounded-lg shadow-md border border-gray-200 p-6 sm:p-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-pink-950 focus:border-pink-950 outline-none transition-colors"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-pink-950 focus:border-pink-950 outline-none transition-colors"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-pink-950 focus:border-pink-950 outline-none transition-colors resize-none"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            className="w-full bg-pink-950 hover:bg-pink-900 text-white py-3 px-5 text-sm font-semibold rounded-lg transition-colors"
          >
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
}
export default ContactUs;
