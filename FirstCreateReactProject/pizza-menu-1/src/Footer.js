export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <>
            <p>We are open until 10PM. Come visit us or order online</p>
            <button className="btn">Order</button>{" "}
          </>
        ) : (
          <p>We are currently closed</p>
        )}
      </div>
    </footer>
  );
}
