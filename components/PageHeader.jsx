import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header, Heading } from "./Headings";

const PageHeader = ({ pageHeader }) => {
  const router = useRouter();

  return (
    <div className="relative bg-black bg-opacity-40">
      <div className="absolute inset-0">
        <Image
          src={pageHeader.backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <Navbar />
      <div className="container mx-auto px-4 py-40">
        <div className="text-center relative z-10">
          <Header>
            <Heading className="text-white"> {pageHeader.title}</Heading>
          </Header>
          <nav>
            <ol className="flex justify-center space-x-4 text-sm md:text-lg font-semibold">
              {pageHeader.breadcrumbs.map((breadcrumb, index) => (
                <li
                  key={index}
                  className={`capitalize ${
                    breadcrumb.active
                      ? "text-secondary font-bold text-2xl"
                      : "text-white"
                  }`}
                >
                  <button
                    onClick={() => {
                      router.push(breadcrumb.link);
                    }}
                    className="text-white"
                  >
                    {pageHeader.backto}
                  </button>{" "}
                  / <span>{breadcrumb.name}</span>
                </li>
              ))}
            </ol>
          </nav>
          {/* Page Header Box End */}
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  backgroundImage: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  title: "About Us",
  breadcrumbs: [
    { name: "home", link: "", active: false },
    { name: "about us", link: "", active: true },
  ],
  backgroundImage: "https://via.placeholder.com/1920x1080", // Placeholder image
};

export default PageHeader;
