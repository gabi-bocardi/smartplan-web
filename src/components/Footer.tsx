export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-light d-flex flex-column align-items-center">
      <img
        className="w-25 h=25"
        src={require("../smartplan-logo/logo-transparent-bg.png")}
        onClick={scrollToTop}
      />
      <h6>Copyright &#169; {year} Gabrielle Bocardi </h6>
    </div>
  );
}
