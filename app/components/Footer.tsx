export default function Footer() {
  return (
    <>
<footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
  <h6 className="footer-title">Services</h6>
    <p>Premier League  {new Date().getFullYear()} </p>
    <a href="https://www.premierleague.com/home" target='_blank'>@Home</a>
    <a href="https://www.premierleague.com/fixtures" target='_blank'>@Fixtures</a>
    <a href="https://www.premierleague.com/clubs" target='_blank'>@Clubs</a>

    <a href="https://www.youtube.com/premierleague" target='_blank'>@PL on YouTube
External Link</a>

    

  </aside>
</footer>


    </>


  )
}