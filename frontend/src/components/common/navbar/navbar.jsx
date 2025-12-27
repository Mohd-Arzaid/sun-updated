import { Link, useNavigate } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NAVIGATION_DATA } from "@/data/navbar-data/navbar-data";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const STYLES = {
  button:
    "text-base uppercase text-neutral-600 font-geist  hover:text-neutral-800 transition-colors",
  navContentItem:
    "text-base text-neutral-600 font-geist  hover:text-neutral-800 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center",
  mobileButton:
    "text-base text-neutral-800 font-geist  hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-3",
  mobileNavContentItem:
    "text-sm text-neutral-600 font-geist  hover:text-neutral-800 hover:bg-black/10 rounded-md transition-all duration-200",
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [updatesOpen, setUpdatesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const faqIntervalRef = useRef(null);

  // Handle FAQ navigation with smooth scrolling
  const handleFaqNavigation = (link) => {
    if (link.includes("#faqs")) {
      const [pathname, hash] = link.split("#");

      // Navigate to the pathname without hash in URL
      navigate(pathname);

      // Store the hash for later use
      sessionStorage.setItem("scrollToHash", hash);

      // Multiple robust scroll strategies
      const scrollToFaq = () => {
        const element = document.getElementById(hash);
        if (element) {
          // Clear the stored hash since we found the element
          sessionStorage.removeItem("scrollToHash");

          // Scroll to element with multiple fallback methods
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Fallback method 1: Use window.scrollTo
          setTimeout(() => {
            const rect = element.getBoundingClientRect();
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({
              top: scrollTop + rect.top - 80, // 80px offset for navbar
              behavior: "smooth",
            });
          }, 100);

          return true;
        }
        return false;
      };

      // Strategy 1: Immediate attempt
      setTimeout(scrollToFaq, 100);

      // Strategy 2: Wait for page to be fully loaded
      setTimeout(() => {
        if (!scrollToFaq()) {
          // Strategy 3: Wait for all resources to load
          if (document.readyState === "complete") {
            scrollToFaq();
          } else {
            window.addEventListener("load", scrollToFaq, { once: true });
          }
        }
      }, 500);

      // Strategy 4: Persistent checking
      // Clear any existing interval first
      if (faqIntervalRef.current) {
        clearInterval(faqIntervalRef.current);
      }

      let attempts = 0;
      faqIntervalRef.current = setInterval(() => {
        attempts++;
        if (scrollToFaq() || attempts > 20) {
          clearInterval(faqIntervalRef.current);
          faqIntervalRef.current = null;
        }
      }, 200);

      closeMobileMenu();
      return true;
    }
    return false;
  };

  // Close all dropdown menus
  const closeAllDropdowns = useCallback(() => {
    setServicesOpen(false);
    setUpdatesOpen(false);
    setGalleryOpen(false);
  }, []);

  // Close mobile menu function
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    closeAllDropdowns();
  }, [closeAllDropdowns]);

  // Handle dropdown toggle - close others when opening one
  const handleDropdownToggle = (title, isOpen, setOpen) => {
    // if the title is not open, close all dropdowns because we are opening this one after closing others
    if (!isOpen) {
      closeAllDropdowns();
    }
    setOpen(!isOpen);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (faqIntervalRef.current) {
        clearInterval(faqIntervalRef.current);
        faqIntervalRef.current = null;
      }
    };
  }, []);

  // Handle automatic scrolling on page load if hash exists
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = sessionStorage.getItem("scrollToHash");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          sessionStorage.removeItem("scrollToHash");
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 300);
        }
      }
    };

    // Run on component mount
    handleHashScroll();

    // Also listen for navigation changes
    window.addEventListener("popstate", handleHashScroll);

    return () => {
      window.removeEventListener("popstate", handleHashScroll);
    };
  }, []);

  // close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if mobile menu ref exists and the clicked element is not inside the mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    const handleScroll = () => {
      // Close mobile menu when user scrolls the page
      closeMobileMenu();
    };

    // Only add event listeners if mobile menu is open
    if (isOpen) {
      // Add event listener for mouse clicks on the entire document
      document.addEventListener("mousedown", handleClickOutside);
      // Add event listener for scroll events on the window
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup function - removes event listeners when component unmounts
    // or when isOpen state changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, closeMobileMenu]);

  // Render Navigation Menu Content Items
  const createNavContent = (items) =>
    items.map((item) => (
      <NavigationMenuLink key={item.id} asChild>
        <Link to={item.link} className="block">
          <div className={STYLES.navContentItem}>
            <item.icon className="w-4 h-4 mr-2" />
            <span>{item.name}</span>
          </div>
        </Link>
      </NavigationMenuLink>
    ));

  // Render FAQ Navigation Items with custom handler
  const createFaqNavContent = (items) =>
    items.map((item) => (
      <NavigationMenuLink key={item.id} asChild>
        <button
          onClick={() => handleFaqNavigation(item.link)}
          className="block w-full text-left"
        >
          <div className={STYLES.navContentItem}>
            <item.icon className="w-4 h-4 mr-2" />
            <span>{item.name}</span>
          </div>
        </button>
      </NavigationMenuLink>
    ));

  const categoriesDesktop = [...NAVIGATION_DATA.categories].sort(
    (a, b) => a.desktopOrder - b.desktopOrder
  );
  const categoriesMobile = [...NAVIGATION_DATA.categories].sort(
    (a, b) => a.mobileOrder - b.mobileOrder
  );

  const navContent = {
    categories: createNavContent(categoriesDesktop),
    categoriesMobile: categoriesMobile,
    updates: createNavContent(NAVIGATION_DATA.updates),
    updatesMobile: NAVIGATION_DATA.updates,
    gallery: createNavContent(NAVIGATION_DATA.gallery),
    galleryMobile: NAVIGATION_DATA.gallery,
    faqs: createFaqNavContent(NAVIGATION_DATA.faqs),
    faqsMobile: NAVIGATION_DATA.faqs,
  };

  return (
    <nav className="z-50 sticky md:top-[44px] top-0 w-full bg-white/70 backdrop-blur-lg border-b border-neutral-200">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-20">
        {/* Company Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/company-logo/company-logo.webp"
            alt="Sun Certifications India logo"
            title="Sun Certifications India logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
          />
          <div className="text-center mt-0.5">
            <div className="font-geist text-neutral-900 font-semibold text-base md:text-xl uppercase">
              Sun Certifications India
            </div>
            <div className="font-geist text-neutral-600 font-medium -mt-0.5 tracking-tight text-xs md:text-sm uppercase">
              Simplifying Certifications
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-end">
          {/* Home, About & Services */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <Link to="/">
                  <Button variant="link" className={STYLES.button}>
                    Home
                  </Button>
                </Link>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <Link to="/about">
                  <Button variant="link" className={STYLES.button}>
                    About
                  </Button>
                </Link>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={STYLES.button}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-2 w-[700px] p-6">
                    {navContent.categories}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Updates */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={STYLES.button}>
                  Updates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[300px]">{navContent.updates}</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Gallery */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={STYLES.button}>
                  Gallery
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-60">{navContent.gallery}</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* FAQs */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/faqs">
                  <Button variant="link" className={STYLES.button}>
                    FAQ&apos;S
                  </Button>
                </Link>
              </NavigationMenuItem>

              {/* Contact Us */}
              <NavigationMenuItem>
                <Link to="/contact">
                  <Button variant="link" className={STYLES.button}>
                    Contact Us
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800 hover:text-neutral-900 focus:outline-none transition-colors"
          onClick={() => (isOpen ? closeMobileMenu() : setIsOpen(true))}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navbar Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-b border-neutral-200 shadow-lg z-40 max-h-[80vh] overflow-y-auto scrollbar-hide"
        >
          <div className="px-4 py-4 space-y-1">
            {/* Home */}
            <Link to="/" className="block w-full" onClick={closeMobileMenu}>
              <Button variant="ghost" className={STYLES.mobileButton}>
                Home
              </Button>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="block w-full"
              onClick={closeMobileMenu}
            >
              <Button variant="ghost" className={STYLES.mobileButton}>
                About
              </Button>
            </Link>

            {/* Services, Updates, Gallery */}
            {[
              {
                title: "Services",
                items: navContent.categoriesMobile,
                isOpen: servicesOpen,
                setOpen: setServicesOpen,
              },
              {
                title: "Updates",
                items: navContent.updatesMobile,
                isOpen: updatesOpen,
                setOpen: setUpdatesOpen,
              },
              {
                title: "Gallery",
                items: navContent.galleryMobile,
                isOpen: galleryOpen,
                setOpen: setGalleryOpen,
              },
            ].map(({ title, items, isOpen, setOpen }) => (
              <div key={title} className="w-full">
                <Button
                  variant="ghost"
                  className={`${STYLES.mobileButton} justify-between`}
                  onClick={() => handleDropdownToggle(title, isOpen, setOpen)}
                >
                  {title}
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>

                {isOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {items.map((item) => {
                      // Special handling for FAQ items
                      if (title === "FAQs" && item.link.includes("#faqs")) {
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleFaqNavigation(item.link)}
                            className="block w-full text-left"
                          >
                            <Button
                              variant="ghost"
                              className={STYLES.mobileNavContentItem}
                            >
                              <item.icon className="w-4 h-4 mr-2" />
                              {item.name}
                            </Button>
                          </button>
                        );
                      }

                      // Regular navigation for other items
                      return (
                        <Link
                          key={item.id}
                          to={item.link}
                          className="block w-full"
                          onClick={closeMobileMenu}
                        >
                          <Button
                            variant="ghost"
                            className={STYLES.mobileNavContentItem}
                          >
                            <item.icon className="w-4 h-4 mr-2" />
                            {item.name}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* FAQ'S */}
            <Link to="/faqs" className="block w-full" onClick={closeMobileMenu}>
              <Button variant="ghost" className={STYLES.mobileButton}>
                FAQ&apos;S
              </Button>
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className="block w-full"
              onClick={closeMobileMenu}
            >
              <Button variant="ghost" className={STYLES.mobileButton}>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
