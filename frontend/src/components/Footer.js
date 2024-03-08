export const Footer = () => {
  const day = new Date(2024, 2, 5).toDateString();
  return (
    <div className="footerWrapper theme">
      &#9400; YK | YKApps | deployed on {day}
    </div>
  );
};
