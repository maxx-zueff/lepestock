import theme from "../styles/theme";
export default function BoxIcon() {
  return (
    <React.Fragment>
      <svg
        viewBox="0 0 86.03 73.22"
        style={{
          transform: "translateY(4px)",
          width: "20px",
          height: "20px",
          stroke: theme.colors.shippedInBox,
        }}
      >
        <path d="M85.77 10.17a2.5 2.5 0 0 0-1.64-1.34L49.33.08a2.5 2.5 0 0 0-2.89 1.4l-8.43 18.68-5.58 3.32-29.32-7.37A2.5 2.5 0 0 0 .35 19.8L11.2 38.23v23.73a2.5 2.5 0 0 0 1.89 2.42l34.8 8.75a2.49 2.49 0 0 0 .61.08 2.62 2.62 0 0 0 .78-.13l.2-.08 26.53-15.9a2.51 2.51 0 0 0 1.21-2.14V31.2l8.55-18.92a2.5 2.5 0 0 0 0-2.11zM15.31 35.38l-7.63-13 28 7 7.63 13zm.88 24.63V40.88l29.8 7.5v19.13zm50.12-13v-8.4l5.94-3.57V53.5L51.01 66.3V47.84l6.91-4.15v8.52zM42.46 25.1l25.85 6.5-2 1.2v-.12l-7.21 4.45-9.68 5.81-7-11.83zm1-4.9l6.67-14.78 29.88 7.53-6.68 14.78z"></path>
      </svg>
    </React.Fragment>
  );
}
