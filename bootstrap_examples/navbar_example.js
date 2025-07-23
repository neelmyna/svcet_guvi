// Factory method for creating nav items
function createNavItem(name, href) {
  return {
    name,
    href,
    render() {
      return `<li class="nav-item"><a class="nav-link" href="${this.href}">${this.name}</a></li>`;
    }
  };
}

const navItems = [
  createNavItem("Home", "#"),
  createNavItem("About", "#about"),
  createNavItem("Contact", "#contact")
];

// Injecting nav items using map()
document.getElementById("navList").innerHTML = navItems.map(item => item.render()).join("");