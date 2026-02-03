import {
  AlignLeft,
  Mail,
  MessageCircle,
  Phone,
  PhoneCall,
  SendHorizonal,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesRightSideContentEng = () => {
  return (
    <div className="flex flex-col gap-6">
      <BISQCOUpdates />
      <ContactUsForm />
    </div>
  );
};

export default ServicesRightSideContentEng;

const BISQCOUpdates = () => {
  return (
    <div className="w-full max-w-sm rounded-lg bg-neutral-100 p-6 shadow-input">
      <div className="flex items-center gap-3">
        <AlignLeft className="text-neutral-800" />
        <div className="font-geist text-xl font-semibold text-neutral-800">
          BIS QCO Updates
        </div>

        <div className="max-w-sm ">
            
        </div>

      </div>
    </div>    
  );
};

const ContactUsForm = () => {
  return (
    <div className="sticky top-36 w-full max-w-sm rounded-lg bg-neutral-100 p-6 shadow-input">
      <div className="flex items-center gap-3">
        <PhoneCall className="text-neutral-800" />
        <div className="font-geist text-xl font-semibold text-neutral-800">
          Request a Free Callback
        </div>
      </div>

      <p className="mt-3 font-geist text-sm text-neutral-600">
        Leave your details below and our experts will call you back within 24
        hours to discuss your regulatory compliance needs.
      </p>

      <form className="mt-5 flex flex-col gap-4">
        {/* Name field */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <User className="h-5 w-5 text-neutral-500" />
          </div>
          <input
            type="text"
            placeholder="Your Name*"
            className="w-full rounded-lg border-2 border-neutral-300 py-2.5 pl-10 pr-3 font-geist text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
          />
        </div>
        {/* Phone Number field */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Phone className="h-5 w-5 text-neutral-500" />
          </div>
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full rounded-lg border-2 border-neutral-300 py-2.5 pl-10 pr-3 font-geist text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
          />
        </div>
        {/* Email field */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail className="h-5 w-5 text-neutral-500" />
          </div>
          <input
            type="text"
            placeholder="Email Address*"
            className="w-full rounded-lg border-2 border-neutral-300 py-2.5 pl-10 pr-3 font-geist text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
          />
        </div>
        {/* Message field */}
        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-3">
            <MessageCircle className="h-5 w-5 text-neutral-500" />
          </div>
          <textarea
            type="message"
            placeholder="Required Certification*"
            rows="3"
            className="w-full rounded-lg border-2 border-neutral-300 py-2.5 pl-10 pr-3 font-geist text-neutral-800 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-0"
          />
        </div>

        {/* Submit Button */}
        <button className="flex w-full items-center justify-center gap-3 rounded-md bg-neutral-800 px-4 py-3 font-geist text-white hover:bg-neutral-900">
          <span className="font-geist font-medium">Request Callback</span>
          <SendHorizonal className="h-4 w-4" />
        </button>
      </form>

      {/* Privacy Policy */}
      <p className="mt-3 text-center font-geist text-sm text-neutral-600">
        By submitting this form, you agree to our{" "}
        <Link
          to="/privacy-policy"
          className="font-medium text-neutral-900 hover:underline"
        >
          Privacy Policy
        </Link>{" "}
        and consent to being contacted.
      </p>
    </div>
  );
};
