import Image from "next/image";
import LinkList from "../../Navigation/LinkList/LinkList";
import Slug from "../../Elements/Slug";
import Styles from "./Header.module.scss";
import { useAtom } from "jotai";
import { isUserLoggedIn } from "../../../data/atom/authorization-atom";
import Link from "next/link";
import { deleteCookie, getCookie } from 'cookies-next';

const Header = ({ content, provider, className }: any) => {
  const [loggedIn, setLoggedIn] = useAtom(isUserLoggedIn);
  let isLoggedIn = getCookie('logged');

  className ? className : ""
  const data = {
    logo: content?.logo ? content.logo : "",
    navTitle: (provider == "drupal") ? content?.primaryNavigation?.text : content?.primaryNavigation?.title
      ? content.primaryNavigation.title
      : "",
    linkList: content?.primaryNavigation
      ? content.primaryNavigation
      : [],
  };
  const logout = () => {
    deleteCookie('logged');
    setLoggedIn(false);
    setTimeout(window.location.reload.bind(window.location), 0);
  }
  return (
    <header id="page-top" className={className}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container position-static pe-lg-5">
          <Slug
            replaceclass
            className={Styles.logo + " navbar-brand"}
            href="#"
            type={undefined}
          >
            {data.logo ? (
              <Image
                src={data.logo.url}
                width={data.logo.width}
                height={data.logo.height}
                alt={data.logo.alternativeText}
              />
            ) : (
              ""
            )}
          </Slug>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
            <form className="d-flexs d-none">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <LinkList content={data.linkList} provider={provider} />
            <div className="login-button d-lg-none">
              {!loggedIn && !isLoggedIn ? (
                <Link href="/login" className={Styles.login_button_mob}>
                  Login
                </Link>
              ) : (
                <Link href={""} className={Styles.login_button_mob} onClick={logout}>
                  Logout
                </Link>
              )}
            </div>
          </div>
          <div className="login-button position-absolute end-0 me-4 d-none d-lg-block">
            {!loggedIn && !isLoggedIn ? (
              <Link href="/login" className={Styles.login_button + " btn btn-primary"}>
                Login
              </Link>
            ) : (
              <button className={Styles.login_button + " btn btn-primary"} onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

Header.defaultProps = {
  provider: "drupal"
}


