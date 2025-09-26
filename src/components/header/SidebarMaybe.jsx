import { useRef, useImperativeHandle, forwardRef } from "react";

const MobileSidebar = forwardRef((props, ref) => {
  const sidebarRef = useRef(null);

  // Navigation items - easy to modify
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#service", label: "Service" },
    { href: "#work", label: "Work" },
    { href: "#course", label: "Course" },
    { href: "#about", label: "About" },
  ];

  useImperativeHandle(ref, () => ({
    toggle: () => {
      if (!sidebarRef.current) return;

      const sidebar = sidebarRef.current;
      const isCurrentlyOpen = sidebar.classList.contains("opacity-100");

      if (isCurrentlyOpen) {
        // Close sidebar
        sidebar.classList.remove(
          "opacity-100",
          "translate-y-0",
          "z-50",
          "scale-100",
        );
        sidebar.classList.add(
          "opacity-0",
          "translate-y-[-20px]",
          "-z-10",
          "scale-95",
          "pointer-events-none",
        );
      } else {
        // Open sidebar
        sidebar.classList.remove(
          "opacity-0",
          "translate-y-[-20px]",
          "-z-10",
          "scale-95",
          "pointer-events-none",
        );
        sidebar.classList.add(
          "opacity-100",
          "translate-y-0",
          "z-50",
          "scale-100",
        );
      }
    },
    close: () => {
      if (!sidebarRef.current) return;
      const sidebar = sidebarRef.current;
      sidebar.classList.remove(
        "opacity-100",
        "translate-y-0",
        "z-50",
        "scale-100",
      );
      sidebar.classList.add(
        "opacity-0",
        "translate-y-[-20px]",
        "-z-10",
        "scale-95",
        "pointer-events-none",
      );
    },
    open: () => {
      if (!sidebarRef.current) return;
      const sidebar = sidebarRef.current;
      sidebar.classList.remove(
        "opacity-0",
        "translate-y-[-20px]",
        "-z-10",
        "scale-95",
        "pointer-events-none",
      );
      sidebar.classList.add(
        "opacity-100",
        "translate-y-0",
        "z-50",
        "scale-100",
      );
    },
  }));

  return (
    <aside
      ref={sidebarRef}
      className="pointer-events-none fixed right-4 top-20 -z-10 h-[20vh] min-h-[250px] w-[40%] max-w-[200px] translate-y-[-20px] scale-95 rounded-xl bg-gray-800/80 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 ease-out sm:w-[60%] md:hidden"
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <nav className="h-full w-full p-4">
        <ul className="flex h-full flex-col items-center justify-center gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-3 py-1 text-lg font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 hover:text-blue-400 focus:rounded focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
});

MobileSidebar.displayName = "MobileSidebar";

export default MobileSidebar;
