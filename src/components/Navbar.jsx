import { Layout, Menu, Drawer, Button } from "antd";

const { Header } = Layout;

const Navbar = () => {
  const menuItems = [
    { key: "about", label: "About" },
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
  ];

  return (
    <Layout>
      <Header
        style={{
          position: "static",
          zIndex: 1,
          width: "100%",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          boxShadow: "0 2px 8px #f0f1f2",
        }}
      >
        <div style={{ color: "#000", fontSize: "1.5rem", fontWeight: "bold" }}>
          Anishkrishna N
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: "flex", alignItems: "center" }}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["about"]}
            items={menuItems}
            style={{ borderBottom: "none", flex: 1, justifyContent: "flex-end" }}
          />
          {/* Contact Us Button */}
          <Button
            type="default"
            ghost
            style={{
              borderColor: "#000",
              color: "#000",
              marginLeft: "20px",
            }}
          >
            Contact Us
          </Button>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
