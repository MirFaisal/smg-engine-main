import SideNav from "@/components/SideNav";
import UserCredential from "@/context/UserCredential";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserCredential>
          <SideNav></SideNav>
          {children}
        </UserCredential>

        <script
          src="https://kit.fontawesome.com/deb5ec3c82.js"
          crossOrigin="anonymous"
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
        <script>
          $(".js-example-tokenizer").select2({tags}: true, tokenSeparators:
          [',', ' '] })
        </script>
      </body>
    </html>
  );
}
