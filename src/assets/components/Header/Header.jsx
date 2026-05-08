import { useEffect, useState } from "react";
import logo from "../../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import style from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  
    <header className={`${style.header} ${isScrolled ? style.scrolled : ""}`}>
      <div className={style.container}>
        {/* Left side */}
        <div className={style.leftSection}>
          <Link to="/">
            <img className={style.logo} src={logo} alt="Netflix Logo" />
          </Link>

          <nav className={style.nav}>
            <Link className={style.navLink} to="/">Home</Link>
            <Link className={style.navLink} to="/tv-shows">TV Shows</Link>
            <Link className={style.navLink} to="/movies">Movies</Link>
            <Link className={style.navLink} to="/new-popular">New & Popular</Link>
            <Link className={style.navLink} to="/my-list">My List</Link>
            <Link className={style.navLink} to="/languages">Browse by Language</Link>
          </nav>
        </div>

        {/* Right side */}
        <div className={style.rightSection}>
          <div>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={style.searchButton}
              aria-label="Search"
            >
              <Search size={22} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                className={style.searchInput}
                placeholder="Titles"
              />
            )}
          </div>

          <button className={style.iconButton} aria-label="Notifications">
            <Bell size={22} />
            <span className={style.notificationBadge}>4</span>
          </button>

          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={style.profileButton}
            aria-label="Profile menu"
          >
            <div className={style.profileAvatar}>
              <User size={20} />
            </div>
            <ChevronDown size={18} />
          </button>

          {isProfileOpen && (
            <div className={style.profileMenu}>
              <Link className={style.profileMenuItem} to="/account">Account</Link>
              <Link className={style.profileMenuItem} to="/help">Help</Link>
              <hr className={style.profileMenuDivider} />
              <button onClick={() => setIsProfileOpen(false)}>Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;