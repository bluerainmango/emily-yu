export const currentMenu = function(ref) {
  return function(e) {
    if (e.target.closest("a")) {
      console.log("clicked movile");
      // Find previous menu
      const prevMenu = ref.current.querySelector("a.currentMenu");
      console.log(prevMenu);

      if (prevMenu) {
        prevMenu.classList.remove("currentMenu");
      }

      //
      e.target.closest("a").classList.add("currentMenu");
    }
  };
};
