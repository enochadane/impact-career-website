import { withRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ router, href, children }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();
  const handleClick = (event) => {
    event.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <div>
      <Link
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          color: isCurrentPath ? "green" : "black",
        }}
      >
        {children}
      </Link>
    </div>
  );
};

export default withRouter(ActiveLink);
