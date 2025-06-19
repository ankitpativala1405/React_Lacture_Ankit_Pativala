function Them(WrappedComponent) {
  const theme = {
    light: {
      background: "#fff",
      color: "black",
      width: "100px",
      padding: "20px",
    },
    dark: {
      background: "#04060c",
      padding: "10px",
      color: "white",
      width: "100px",
    },
  };

  return function ThemComponent({ theme: mode = "light", ...props }) {
    const style = theme[mode] || theme.light;

    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default Them;
