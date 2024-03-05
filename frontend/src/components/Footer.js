export const Footer = () => {
  const day = new Date(2024, 3, 5).toDateString();
  return (
    <div className="footerWrapper">&#9400; YK | YKApps | deployed on {day}</div>
  );
};
