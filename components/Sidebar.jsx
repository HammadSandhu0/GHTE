import { CardHeading, Description, Header, Heading } from "./Headings";
import { MailIcon, PhoneIcon } from "./Icons";

const Sidebar = () => {
  return (
    <div className="bg-primary text-white rounded-3xl p-4 lg:p-6  sticky top-4">
      <div className="p-6 space-y-10">
        <Header>
          <CardHeading className="text-white">Request Information</CardHeading>
          <Description className="text-white">
            Interested in UPS Sytems Contact our team for detailed
            specifications, pricing, and availability.
          </Description>
        </Header>
        <div className="space-y-4 flex flex-col items-center justify-center">
          <div className="flex items-center bg-white text-primary rounded-full px-4 py-2">
            <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-2">
              <MailIcon />
            </span>
            <button className="hover:text-accent transition">
              Info@gulfhorizontele.com
            </button>
          </div>
          <div className="flex items-center bg-white text-primary rounded-full px-4 py-2">
            <span className="bg-secondary p-2 rounded-full flex items-center justify-center mr-2">
              <PhoneIcon />
            </span>
            <button className="hover:text-accent transition">
              +966 122 873 071
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
